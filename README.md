# 孙志宏个人品牌网站

基于 Next.js 15 + React 19 + TypeScript + Tailwind CSS 构建的个人品牌网站。

## 技术栈

- **Next.js 15** — App Router, 静态导出
- **React 19** — UI 框架
- **TypeScript** — 类型安全
- **Tailwind CSS 4** — 原子化 CSS
- **Framer Motion** — 滚动动画
- **Lucide React** — 图标库

## 项目结构

```
portfolio/
├── content/          # 内容数据 (JSON/Markdown)
│   ├── hero.json
│   ├── about.md
│   ├── skills.json
│   ├── timeline.json
│   ├── projects.json
│   ├── insights.json
│   ├── media.json
│   ├── gallery.json
│   └── contact.json
├── src/
│   ├── app/          # Next.js 页面
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/   # React 组件
│   └── lib/          # 工具函数
├── public/images/    # 静态图片资源
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 内容管理

所有内容存储在 `content/` 目录下，可直接修改：

- **JSON 文件** — 结构化数据（技能、项目、时间轴等）
- **Markdown 文件** — 长文本内容（About 页面）

修改后重新构建即可更新网站。

## 本地开发

```bash
cd portfolio
npm install
npm run dev
```

访问 `http://localhost:3000`

## 构建

```bash
npm run build
```

静态文件输出到 `dist/` 目录。

## 部署

见 [DEPLOY.md](DEPLOY.md)
