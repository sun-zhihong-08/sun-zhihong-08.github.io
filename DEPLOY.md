# 部署指南

## 一键部署到 Vercel（推荐）

### 方式一：GitHub + Vercel（推荐）

1. 在 GitHub 创建新仓库 `portfolio`
2. 上传本项目的 `portfolio/` 目录内容到仓库
3. 登录 [vercel.com](https://vercel.com)，Import 项目
4. 选择该 GitHub 仓库，自动识别 Next.js 框架
5. 点击 Deploy，等待构建完成
6. 获得 `your-project.vercel.app` 域名

### 方式二：绑定自有域名

1. 在 Vercel Dashboard → Project Settings → Domains
2. 添加域名 `yourname.com`
3. 按提示配置 DNS 记录（CNAME 或 A 记录）
4. Vercel 自动配置 HTTPS (SSL)

### 方式三：Vercel CLI 本地部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd portfolio
vercel --prod
```

---

## 部署到 Cloudflare Pages

```bash
# 1. 构建静态文件
npm run build

# 2. 上传 dist/ 目录到 Cloudflare Pages
# 在 Cloudflare Dashboard → Pages → Create a project
# 上传 dist/ 文件夹或绑定 GitHub 仓库
```

---

## 部署到 Netlify

```bash
# 1. 构建
npm run build

# 2. 上传 dist/ 到 Netlify
# 或绑定 GitHub 仓库自动部署
```

---

## 自动更新部署

如果使用 GitHub + Vercel/Netlify：
- 每次 `git push` 到 main 分支自动触发重新构建部署
- 无需手动操作

---

## 后续内容更新

修改 `content/` 目录下的 JSON/Markdown 文件后：

1. 提交到 GitHub：`git add . && git commit -m "更新内容" && git push`
2. 自动触发重新构建部署
3. 约 1-2 分钟后网站自动更新

或直接修改 Vercel 上绑定的 GitHub 仓库中的文件，同样自动部署。
