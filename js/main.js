/* ============================================
   《用户研究：从入门到精通》读者服务站
   主脚本
   ============================================ */

(function () {
  'use strict';

  // —— 配置 ——
  const ZIP_FILENAME = 'user-research-templates.zip';
  const QUARK_URL = 'https://pan.quark.cn/s/7dc934c04bc1';
  const STORAGE_KEY = 'ur-book-lang';
  const SUPPORTED_LANGS = ['zh', 'en'];

  // ============================================
  // 一、语言检测 & 持久化
  // ============================================

  function getStoredLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGS.includes(v) ? v : null;
    } catch (e) {
      return null;
    }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  // 浏览器语言回退判断
  function detectFromBrowser() {
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];
    for (const l of langs) {
      if (l && l.toLowerCase().startsWith('zh')) return 'zh';
    }
    return 'en';
  }

  // 通过 IP 判断（异步，可失败）
  async function detectFromIP() {
    // 用 ipapi.co/json 或 ip-api.com 作为 IP 地理位置 API
    // 加 3 秒超时，失败就回退到浏览器语言
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error('ip api fail');
      const data = await res.json();
      if (data && data.country_code === 'CN') return 'zh';
      return 'en';
    } catch (e) {
      clearTimeout(timer);
      return null;
    }
  }

  // 主入口：决定用哪种语言
  async function decideLang() {
    // 1. 用户已经手动选过 → 用存的
    const stored = getStoredLang();
    if (stored) return stored;

    // 2. 尝试 IP 检测（中国 → zh，否则 → en）
    const ipLang = await detectFromIP();
    if (ipLang) return ipLang;

    // 3. 回退到浏览器语言
    return detectFromBrowser();
  }

  // ============================================
  // 二、文案应用
  // ============================================

  function getText(key, lang) {
    const dict = window.I18N[lang] || window.I18N.zh;
    return dict[key];
  }

  function applyLang(lang) {
    const dict = window.I18N[lang];
    if (!dict) return;

    // 设置 html lang
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    // 处理 data-i18n（纯文本）
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val !== undefined && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // 处理 data-i18n-html（含 HTML）
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = dict[key];
      if (val !== undefined && typeof val === 'string') {
        el.innerHTML = val;
      }
    });

    // 处理 meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);

    // 处理 title
    if (dict['meta.title']) document.title = dict['meta.title'];

    // 渲染下载清单
    renderDownloadList(lang);
    // 渲染读者卡片
    renderReaders(lang);
    // 渲染目录卡片
    renderContents(lang);

    // 重新填年份（footer.meta 用了 innerHTML，会把 span 重新渲染掉）
    fillYear();

    // 切换 lang-toggle 高亮
    const tog = document.getElementById('lang-toggle');
    if (tog) {
      tog.classList.toggle('is-zh', lang === 'zh');
      tog.classList.toggle('is-en', lang === 'en');
    }
  }

  function fillYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ============================================
  // 三、动态区块渲染
  // ============================================

  function renderDownloadList(lang) {
    const wrap = document.getElementById('download-list');
    if (!wrap) return;
    const items = window.I18N[lang]['download.items'] || [];
    wrap.innerHTML = items.map(t => `<span>✓ ${t}</span>`).join('');
  }

  function renderReaders(lang) {
    const grid = document.getElementById('reader-grid');
    if (!grid) return;
    const cards = window.I18N[lang]['readers.cards'] || [];
    grid.innerHTML = cards.map((c, i) => `
      <div class="reader-card">
        <div class="reader-num">${String(i + 1).padStart(2, '0')}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    `).join('');
  }

  function renderContents(lang) {
    const grid = document.getElementById('contents-grid');
    if (!grid) return;
    const parts = window.I18N[lang]['contents.parts'] || [];
    grid.innerHTML = parts.map(p => `
      <article class="part-card${p.appendix ? ' part-card-appendix' : ''}">
        <header class="part-head">
          <span class="part-num">${p.partNum}</span>
          <h3>${p.title}</h3>
          <p class="part-tag">${p.tag}</p>
        </header>
        <ul class="chapter-list">
          ${p.chapters.map(c => `
            <li><span class="ch">${c.num}</span><span>${c.title}</span></li>
          `).join('')}
        </ul>
      </article>
    `).join('');
  }

  // ============================================
  // 四、强制下载（绕开浏览器的弹窗拦截）
  // ============================================

  // 通过 fetch + Blob 的方式触发下载，比 <a download> 更稳。
  // 浏览器拦截通常发生在「未由用户点击直接触发的 location 变更」上；
  // 这里整个流程都在 click 事件回调里同步发起，能保留用户手势上下文。
  async function downloadZip() {
    const lang = currentLang || 'zh';
    const url = './' + ZIP_FILENAME; // 相对路径

    showToast(getText('download.preparing', lang), 'info');

    try {
      // 先尝试 fetch 拿 blob，再 createObjectURL 下载
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = ZIP_FILENAME;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // 释放
      setTimeout(() => URL.revokeObjectURL(blobUrl), 4000);

      showToast(
        getText('download.success', lang) + ' · ' + getText('download.successSub', lang),
        'success'
      );
    } catch (err) {
      console.warn('Direct download failed, falling back to <a> tag:', err);
      // 降级方案 1：直接 <a> 打开 URL
      try {
        const a = document.createElement('a');
        a.href = url;
        a.download = ZIP_FILENAME;
        a.target = '_self';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast(getText('download.success', lang), 'success');
      } catch (err2) {
        // 降级方案 2：提示用 Quark
        showToast(getText('download.fallback', lang), 'error');
      }
    }
  }

  // ============================================
  // 五、Toast 提示
  // ============================================

  let toastTimer = null;
  function showToast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show ' + (type ? 'toast-' + type : '');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove('show');
    }, 3500);
  }

  // ============================================
  // 六、汉堡菜单
  // ============================================

  function setupMenu() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('nav-mobile');
    if (!toggle || !drawer) return;

    function close() {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }
    function open() {
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      document.body.classList.add('menu-open');
    }

    toggle.addEventListener('click', () => {
      if (drawer.classList.contains('is-open')) close(); else open();
    });

    // 点抽屉里的链接后自动关
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', close);
    });

    // ESC 关
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // 切到桌面尺寸时自动关
    window.addEventListener('resize', () => {
      if (window.innerWidth > 880) close();
    });
  }

  // ============================================
  // 七、语言切换按钮
  // ============================================

  function setupLangToggle() {
    const tog = document.getElementById('lang-toggle');
    if (!tog) return;
    tog.addEventListener('click', () => {
      const next = currentLang === 'zh' ? 'en' : 'zh';
      currentLang = next;
      setStoredLang(next);
      applyLang(next);
    });
  }

  // ============================================
  // 八、下载按钮绑定
  // ============================================

  function setupDownloadButtons() {
    document.querySelectorAll('.js-download').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadZip();
      });
    });
  }

  // ============================================
  // 九、初始化
  // ============================================

  let currentLang = 'zh';

  async function init() {
    // 先用一个保底语言渲染，不让用户看到空白等待
    const initialLang = getStoredLang() || detectFromBrowser();
    currentLang = initialLang;
    applyLang(initialLang);

    // 设置交互
    setupMenu();
    setupLangToggle();
    setupDownloadButtons();
    fillYear();

    // 异步 IP 检测——只在用户没手动选过的时候，才允许它覆盖
    if (!getStoredLang()) {
      const ipLang = await detectFromIP();
      if (ipLang && ipLang !== currentLang) {
        currentLang = ipLang;
        applyLang(ipLang);
      }
    }
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
