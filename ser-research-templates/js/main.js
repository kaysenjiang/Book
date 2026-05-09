/* ============================================
   《用户研究：从入门到精通》读者服务站
   极简交互脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // 页脚年份
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 下载按钮：增加视觉反馈（点击后短暂闪烁，让用户知道下载开始）
  const downloadBtn = document.querySelector('.btn-download');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const main = downloadBtn.querySelector('.btn-download-main');
      const sub = downloadBtn.querySelector('.btn-download-sub');
      if (!main || !sub) return;

      const originalMain = main.textContent;
      const originalSub = sub.textContent;

      main.textContent = '✓ 下载已开始';
      sub.textContent = '请在浏览器下载栏查看';

      setTimeout(() => {
        main.textContent = originalMain;
        sub.textContent = originalSub;
      }, 2400);
    });
  }

});
