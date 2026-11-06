# 家常菜单

可分享的静态家常菜点菜单。两人打开同一链接，浏览带图菜品、按分类筛选，勾选今晚想吃的菜。选择保存在各自浏览器的 **localStorage**（互不同步，适合各自勾完再口头/聊天对一下）。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认：`http://127.0.0.1:5179`

```bash
npm run build    # 产出到 dist/
npm run preview  # 预览构建结果（同端口）
```

## 部署到 GitHub Pages（纯静态）

本项目使用 Vite `base: './'`，资源路径相对，可直接挂在 GitHub Pages 或任意静态托管。

1. 把仓库推到 GitHub。
2. **Settings → Pages → Build and deployment**：
   - Source 选 **GitHub Actions**，或
   - 本地 `npm run build` 后把 `dist/` 内容推到 `gh-pages` 分支，Source 选该分支 / `/`（或 `/docs`）。
3. 若用 Actions，可添加工作流：`npm ci` → `npm run build` → 上传 `dist` 到 Pages。
4. 站点就绪后，把 Pages URL 发给对方即可一起打开点菜。

也可拖到 Netlify / Cloudflare Pages / Vercel（静态），或用 Cursor 的 **Publish** 发布预览。

## 说明

- 无后端、无登录、无数据库；加菜请改 `src/data/dishes.ts`（或让我们帮你加）。
- 菜品图来自 Wikimedia Commons `Special:FilePath` 直链；个别图若加载失败会显示占位。
- 勾选状态键名：`jiachang-menu-selections`（仅本机本浏览器）。
