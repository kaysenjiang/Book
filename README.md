# 《用户研究：从入门到精通》读者服务站 v2

> User Research · From Beginner to Proficient
> 作者：蒋昌盛 · jiang.changsheng@foxmail.com

面向《用户研究：从入门到精通》读者的配套资源站，提供书中提到的全部模板包免费下载。

## v2 更新内容

- 中英文双语，自动检测访问者地区 + 手动切换
- 首页主按钮直接触发下载（修复浏览器拦截问题）
- 新增夸克网盘备用下载入口
- 移动端深度适配（汉堡菜单、堆叠布局、触控优化）

## 项目结构

```
Book/
├── index.html
├── css/style.css                    # 样式 + 完整响应式
├── js/i18n.js                       # 双语字典
├── js/main.js                       # 主逻辑（i18n + 下载 + 菜单）
├── images/                          # 书籍照片
├── user-research-templates.zip      # 模板压缩包（自行放入）
├── .nojekyll
├── README.md
└── 部署教程.md
```

## 快速部署

详见 `部署教程.md`。

## 技术要点

- **语言检测**：localStorage 持久化 → IP 检测（ipapi.co, 3s timeout）→ 浏览器语言回退
- **下载**：fetch + Blob URL，避开 `<a download>` 的浏览器拦截
- **响应式断点**：1024 / 880 / 560 / 380 四档
- **无 build 步骤**：纯 HTML/CSS/JS + Google Fonts CDN

## 设计

- 主色：深紫 `#5b2a9a`（对齐书籍封面）
- 字体：Noto Serif SC + Noto Sans SC + Cormorant Garamond + EB Garamond
- 风格：编辑设计 / 工具书学院气质
