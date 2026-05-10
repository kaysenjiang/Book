/* ============================================
   i18n 字典
   完整中英双语，覆盖所有可见文案
   ============================================ */

const I18N = {
  zh: {
    // —— Meta ——
    "meta.title": "用户研究：从入门到精通 · 读者服务站",
    "meta.desc": "《用户研究：从入门到精通》读者服务站 —— 蒋昌盛著。配套模板包免费下载，含研究计划书、甄别问卷、知情同意书、访谈提纲、问卷模板包、用户画像、用户旅程图、研究报告等。",

    // —— 顶部 ——
    "brand.title": "用户研究：从入门到精通",
    "nav.download": "模板下载",
    "nav.about": "关于本书",
    "nav.readers": "谁该读",
    "nav.contents": "目录速览",
    "nav.author": "关于作者",

    // —— Hero ——
    "hero.eyebrow": "User Research · From Beginner to Proficient",
    "hero.title": '一本<em>能用</em>的<br />用户研究工具书',
    "hero.sub": "这里是蒋昌盛《用户研究：从入门到精通》的读者服务站。<br />你可以从这里下载书中提到的全部配套模板包——<br />研究计划书、访谈提纲、问卷骨架、用户画像、研究报告……即下即用。",
    "hero.cta": "立即下载模板包",
    "hero.secondary": "了解本书",
    "hero.tip": "免费 · 无需注册 · 即下即用",

    // —— 下载区 ——
    "download.eyebrow": "附录 I · 配套资源",
    "download.title": "用户研究模板包",
    "download.desc": "书中附录 D 提到的全部模板，已整理成完整资源包。<br />包含研究计划书、甄别问卷、知情同意书、深度访谈提纲、问卷模板包（NPS / CSAT / SUS / U&A）、用户画像（B 端 / C 端）、用户旅程图、研究报告 PPT 模板。",
    "download.btnMain": "立即下载模板包",
    "download.btnSub": ".zip · 免费 · 无需注册",
    "download.altLabel": "— 备用下载入口 —",
    "download.quarkMain": "夸克网盘",
    "download.quarkSub": "国内网络不稳定时使用",
    "download.tip": "下载后解压使用 · 可商用 · 可二次修改",
    // 下载清单（数组形式）
    "download.items": [
      "研究计划书",
      "甄别问卷",
      "知情同意书",
      "深度访谈提纲",
      "问卷模板包",
      "用户画像（B/C 端）",
      "用户旅程图",
      "研究报告 PPT 模板"
    ],
    // 下载状态文案
    "download.preparing": "正在准备下载…",
    "download.success": "下载已开始",
    "download.successSub": "请在浏览器下载栏查看",
    "download.fallback": "直接下载未启动？请使用夸克网盘备用入口",

    // —— 关于本书 ——
    "about.eyebrow": "关于本书",
    "about.title": "不是教科书，<br />是一线项目里摸出来的工作笔记",
    "about.p1": "这本书不是堆砌术语的教材，也不是罗列方法的工具大全，而是一本面向真实商业现场的实战指南。",
    "about.p2": "它从公司为什么需要用户研究讲起，带你走过一次完整研究项目的全过程：接住模糊需求、拆解研究问题、设计研究方案、选择合适方法、完成招募与执行、从材料中提炼洞察、写出有说服力的报告，并推动结论真正进入产品决策。",
    "about.p3": "它既讲桌面研究、问卷调查、深度访谈、焦点小组、工作坊、可用性测试等基础方法，也覆盖用户画像、JTBD、AARRR、NPS、KANO、Cohort、MaxDiff 等常用模型——但更重要的是，每一个方法、每一个模型，都附了大量真实项目复盘，告诉你<strong>什么时候该用、什么时候不该用、用错了会带来什么后果</strong>。",
    "about.quote": "\u201C我现在把这些弯路都写在这里。希望这些笔记，能帮你少走一些弯路。\u201D",
    "about.quoteCite": "—— 蒋昌盛",

    // —— 谁该读 ——
    "readers.eyebrow": "目标读者",
    "readers.title": "这本书写给四类人",
    "readers.cards": [
      {
        title: "应届毕业生",
        desc: "想入行做用户研究，缺少相关实习经历、缺乏项目实战经验，难以在面试中脱颖而出拿到心仪的 Offer，求职迷茫。"
      },
      {
        title: "转行做用户研究新人",
        desc: "从设计师、数据、产品、运营等职业转行做用户研究，缺少用户研究项目实操的经验和专业技能，转入困难且转入后工作难开展。"
      },
      {
        title: "初、中阶用户研究人员",
        desc: "个人专业基础不扎实、缺少团队的系统培养和输入，全靠自己摸索、效率低、价值产出薄弱，需要专业能力进阶 + 职业发展进阶，突破卡点。"
      },
      {
        title: "非用户研究人员，但工作涉及",
        desc: "非用户研究岗位，但日常工作要求会做用户研究，公司没有配备用研人员支撑——例如体验设计师、产品经理、运营等。"
      }
    ],

    // —— 目录 ——
    "contents.eyebrow": "目录速览",
    "contents.title": "5 篇 · 17 章 · 一次完整的研究旅程",
    "contents.desc": "从基础方法到复杂项目，从入门到求职、从单次研究到长期能力建设。",
    "contents.parts": [
      {
        partNum: "第一篇",
        title: "走近真实的用户研究",
        tag: "基础 · 打地基",
        chapters: [
          { num: "第 1 章", title: "公司为什么需要用户研究" },
          { num: "第 2 章", title: "新人前两年最该吃透的六种方法" }
        ]
      },
      {
        partNum: "第二篇",
        title: "把一次研究项目做出来",
        tag: "流程 · 7 大核心阶段",
        chapters: [
          { num: "第 3 章", title: "接住一个模糊需求" },
          { num: "第 4 章", title: "让研究方案站得住" },
          { num: "第 5 章", title: "把项目稳稳跑完" },
          { num: "第 6 章", title: "从材料里提炼洞察" },
          { num: "第 7 章", title: "让研究结论被采用" },
          { num: "第 8 章", title: "一次留存下降研究，是怎么完整跑完的" }
        ]
      },
      {
        partNum: "第三篇",
        title: "把研究判断练出来",
        tag: "进阶 · 模型与指标",
        chapters: [
          { num: "第 9 章", title: "别在错误阶段问错误的问题" },
          { num: "第 10 章", title: "模型不是答案，是工具" },
          { num: "第 11 章", title: "让体验被持续看见" }
        ]
      },
      {
        partNum: "第四篇",
        title: "回到真实商业现场",
        tag: "实战 · 近 20 个真实项目",
        chapters: [
          { num: "第 12 章", title: "八类真实项目，是怎么做出判断的" },
          { num: "第 13 章", title: "那些改变我判断的项目" }
        ]
      },
      {
        partNum: "第五篇",
        title: "入行之后继续往前走",
        tag: "成长 · 求职 + 卡点突破",
        chapters: [
          { num: "第 14 章", title: "没有经验，怎么进入用户研究这一行" },
          { num: "第 15 章", title: "新人怎样站稳脚跟" },
          { num: "第 16 章", title: "工作里绕不开的那些硬问题" },
          { num: "第 17 章", title: "AI 时代，研究员该保留什么" }
        ]
      },
      {
        partNum: "附录",
        title: "四份长期可查的工具清单",
        tag: "查询 · 参考",
        appendix: true,
        chapters: [
          { num: "附录 A", title: "用户研究常用术语" },
          { num: "附录 B", title: "常用工具和数据源" },
          { num: "附录 C", title: "数据隐私与研究合规" },
          { num: "附录 D", title: "常用模板清单" }
        ]
      }
    ],

    // —— 作者 ——
    "author.eyebrow": "关于作者",
    "author.name": "蒋昌盛",
    "author.bio1": "从国内头部互联网大公司、第一梯队乙方咨询公司，到中型甲方 SaaS 企业——一线用户研究从业者。",
    "author.bio2": "从 2020 年那个深圳的湿热夏天开始，养成了一个习惯：把工作中踩过的每一个坑都记录下来。在乙方被客户吐槽时反思自己哪里没搞懂、在甲方跟产品经理争论时复盘自己的逻辑漏洞、项目延期时检查预期管理是哪一环没做到位。",
    "author.bio3": "几年下来，这些零散笔记积攒了厚厚一摞——这就是这本书的由来。",
    "author.quote": "\u201C我不会堆砌术语。我会把你当作我的实习生，带你翻看我这几年的一线笔记。\u201D",

    // —— 联系 ——
    "contact.eyebrow": "联系作者",
    "contact.title": "纠错 · 勘误 · 投诉建议",
    "contact.desc": "书里的判断和建议只是作者此刻的认知，一定会过时、一定有偏颇、一定会被你在某个项目里推翻。<br />如果你读到某一段忍不住反驳\u201C老蒋这里写得不对\u201D——请告诉作者。下一版会改进。",

    // —— 页脚 ——
    "footer.title": "用户研究：从入门到精通",
    "footer.meta": '© <span id="year"></span> 蒋昌盛 著 · 读者服务站',
    "footer.note": "本站为静态网站，托管于 GitHub Pages · 模板包可自由下载使用"
  },

  en: {
    // —— Meta ——
    "meta.title": "User Research: From Beginner to Proficient · Reader Resources",
    "meta.desc": "Reader resource site for the book User Research: From Beginner to Proficient by Jiang Changsheng. Free download of the complete companion template pack, including research plans, screeners, consent forms, interview guides, questionnaires, personas, user journey maps, and report templates.",

    // —— Header ——
    "brand.title": "User Research: From Beginner to Proficient",
    "nav.download": "Download",
    "nav.about": "About the Book",
    "nav.readers": "Who It's For",
    "nav.contents": "Contents",
    "nav.author": "About the Author",

    // —— Hero ——
    "hero.eyebrow": "用户研究：从入门到精通",
    "hero.title": 'A user research handbook<br />you can <em>actually use</em>',
    "hero.sub": "This is the reader resource site for <em>User Research: From Beginner to Proficient</em> by Jiang Changsheng.<br />Download the complete companion template pack mentioned in the book —<br />research plans, interview guides, questionnaires, personas, report templates, ready to use.",
    "hero.cta": "Download Templates",
    "hero.secondary": "About the Book",
    "hero.tip": "Free · No sign-up · Ready to use",

    // —— Download ——
    "download.eyebrow": "Appendix I · Companion Resources",
    "download.title": "User Research Template Pack",
    "download.desc": "Every template referenced in Appendix D of the book, organized into one complete resource pack.<br />Includes research plan, screener, consent form, in-depth interview guide, questionnaire pack (NPS / CSAT / SUS / U&A), personas (B2B / B2C), user journey map, and research report PPT template.",
    "download.btnMain": "Download Template Pack",
    "download.btnSub": ".zip · Free · No sign-up",
    "download.altLabel": "— Backup download —",
    "download.quarkMain": "Quark Drive",
    "download.quarkSub": "For users in China with unstable network",
    "download.tip": "Unzip after download · Commercial use OK · Modify freely",
    "download.items": [
      "Research Plan",
      "Screener Questionnaire",
      "Informed Consent Form",
      "In-Depth Interview Guide",
      "Questionnaire Pack",
      "Personas (B2B & B2C)",
      "User Journey Map",
      "Research Report PPT"
    ],
    "download.preparing": "Preparing download…",
    "download.success": "Download started",
    "download.successSub": "Check your browser download bar",
    "download.fallback": "Download didn't start? Try the Quark Drive backup link",

    // —— About ——
    "about.eyebrow": "About the Book",
    "about.title": "Not a textbook —<br />field notes from real projects",
    "about.p1": "This book is not a glossary of terms, nor a comprehensive method catalog. It is a practical guide built for real commercial settings.",
    "about.p2": "Starting from why companies need user research, it walks you through a complete research project: catching a fuzzy request, breaking it into research questions, designing the study, choosing methods, recruiting and running it, distilling insights from raw material, writing reports that persuade, and pushing conclusions into actual product decisions.",
    "about.p3": "It covers the foundational methods — desk research, surveys, in-depth interviews, focus groups, workshops, usability tests — and the common models — personas, JTBD, AARRR, NPS, KANO, Cohort, MaxDiff. More importantly, every method and model comes with extensive project retrospectives, telling you <strong>when to use it, when not to, and what happens when you get it wrong</strong>.",
    "about.quote": "\u201CI'm putting all the wrong turns I took down on these pages. I hope these notes help you skip a few of them.\u201D",
    "about.quoteCite": "— Jiang Changsheng",

    // —— Readers ——
    "readers.eyebrow": "Target Readers",
    "readers.title": "Written for four kinds of readers",
    "readers.cards": [
      {
        title: "New Graduates",
        desc: "Want to break into user research but lack relevant internships and project experience. Struggling to stand out in interviews and feeling lost in the job market."
      },
      {
        title: "Career Switchers",
        desc: "Coming from design, data, product, or operations. Lack hands-on user research project experience and professional skills, making the transition difficult and the work hard to start."
      },
      {
        title: "Junior & Mid-Level Researchers",
        desc: "Foundations not solid enough, no systematic team training. Figuring everything out alone is slow and produces weak output. Need both skill upgrades and career progression to break through."
      },
      {
        title: "Adjacent Roles",
        desc: "Not a researcher by title, but the work demands research skills with no UR team support — UX designers, product managers, operations, founders."
      }
    ],

    // —— Contents ——
    "contents.eyebrow": "Table of Contents",
    "contents.title": "5 Parts · 17 Chapters · A Full Research Journey",
    "contents.desc": "From foundational methods to complex projects, from job hunting to long-term capability building.",
    "contents.parts": [
      {
        partNum: "Part 1",
        title: "Approaching Real-World User Research",
        tag: "Foundations · Building the base",
        chapters: [
          { num: "Ch. 1", title: "Why companies need user research" },
          { num: "Ch. 2", title: "Six methods to master in your first two years" }
        ]
      },
      {
        partNum: "Part 2",
        title: "Running a Research Project End-to-End",
        tag: "Process · 7 core stages",
        chapters: [
          { num: "Ch. 3", title: "Catching a fuzzy request" },
          { num: "Ch. 4", title: "Building a research plan that holds up" },
          { num: "Ch. 5", title: "Running the project smoothly" },
          { num: "Ch. 6", title: "Distilling insights from raw material" },
          { num: "Ch. 7", title: "Getting conclusions adopted" },
          { num: "Ch. 8", title: "A retention-drop study, run from start to finish" }
        ]
      },
      {
        partNum: "Part 3",
        title: "Sharpening Research Judgment",
        tag: "Advanced · Models & metrics",
        chapters: [
          { num: "Ch. 9", title: "Don't ask the wrong question at the wrong stage" },
          { num: "Ch. 10", title: "Models are tools, not answers" },
          { num: "Ch. 11", title: "Making experience continuously visible" }
        ]
      },
      {
        partNum: "Part 4",
        title: "Back to Real Commercial Settings",
        tag: "Cases · Nearly 20 real projects",
        chapters: [
          { num: "Ch. 12", title: "Eight real projects: how the calls were made" },
          { num: "Ch. 13", title: "Projects that changed how I judge" }
        ]
      },
      {
        partNum: "Part 5",
        title: "Going Further After You're In",
        tag: "Growth · Career & breakthroughs",
        chapters: [
          { num: "Ch. 14", title: "Breaking into UR without experience" },
          { num: "Ch. 15", title: "Finding your footing as a junior" },
          { num: "Ch. 16", title: "The hard problems no one escapes" },
          { num: "Ch. 17", title: "What researchers should keep in the AI era" }
        ]
      },
      {
        partNum: "Appendices",
        title: "Four reference checklists for the long run",
        tag: "Reference · Lookup",
        appendix: true,
        chapters: [
          { num: "App. A", title: "Common user research terminology" },
          { num: "App. B", title: "Common tools and data sources" },
          { num: "App. C", title: "Data privacy & research compliance" },
          { num: "App. D", title: "Common template checklist" }
        ]
      }
    ],

    // —— Author ——
    "author.eyebrow": "About the Author",
    "author.name": "Jiang Changsheng",
    "author.bio1": "A frontline user researcher with experience across leading Chinese internet companies, top-tier consulting firms, and mid-sized SaaS enterprises.",
    "author.bio2": "Since that humid summer in Shenzhen back in 2020, he has kept one habit: writing down every pothole he stepped into at work. Reflecting on what he didn't understand when consulting clients pushed back, debugging his own logic when product managers disagreed, examining where expectation management broke down when projects slipped.",
    "author.bio3": "Years of these scattered notes piled up — and that's how this book came to be.",
    "author.quote": "\u201CI won't pile on jargon. I'll treat you like my intern, walking you through my field notes from the past few years.\u201D",

    // —— Contact ——
    "contact.eyebrow": "Contact the Author",
    "contact.title": "Corrections · Feedback · Suggestions",
    "contact.desc": "The judgments and recommendations in this book are only the author's current understanding — they will date, they will be biased, they will be overturned by you in some future project.<br />If you read a passage and can't help disagreeing — \u201CLao Jiang got this wrong\u201D — please let the author know. The next edition will be better for it.",

    // —— Footer ——
    "footer.title": "User Research: From Beginner to Proficient",
    "footer.meta": '© <span id="year"></span> Jiang Changsheng · Reader Resources',
    "footer.note": "Static site hosted on GitHub Pages · Templates free to use"
  }
};

// 暴露给 main.js
window.I18N = I18N;
