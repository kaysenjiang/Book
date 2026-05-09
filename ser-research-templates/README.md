# 《用户研究：从入门到精通》读者服务站

> User Research · From Beginner to Proficient
> 作者：蒋昌盛 · jiang.changsheng@foxmail.com

面向《用户研究：从入门到精通》读者的配套资源站，提供书中提到的全部模板包免费下载。

纯静态网站，部署于 GitHub Pages，零维护。

## 项目结构

```
Book/
├── index.html                       # 网站主页
├── css/style.css                    # 样式
├── js/main.js                       # 脚本
├── images/                          # 书籍图片素材
│   ├── cover-front.jpg
│   ├── cover-3d.jpg
│   ├── book-spread.jpg
│   └── book-inner.jpg
├── user-research-templates.zip      # 模板压缩包（需自行放入）
├── .nojekyll                        # 禁用 Jekyll
├── README.md                        # 本文件
└── 部署教程.md                       # 给作者本人的保姆级部署指南
```

## 如何部署

详见 `部署教程.md`。

简而言之：
1. 把模板压缩包重命名为 `user-research-templates.zip`，放进项目根目录
2. 把所有文件上传到 `https://github.com/kaysenjiang/Book` 仓库
3. 仓库 Settings → Pages → 启用 main 分支
4. 访问 `https://kaysenjiang.github.io/Book/`

## 设计说明

- 主色调：深紫色（对齐书籍封面）
- 字体：思源宋体 + 思源黑体 + Cormorant Garamond
- 风格：编辑设计 / 工具书学院气质
- 无 build 步骤，无外部依赖（除 Google Fonts CDN）
- 所有资源使用相对路径，适配子路径部署
