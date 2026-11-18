# Shisheng Zhang (张石生) · Personal Website

Hand-built static site (HTML/CSS/JS, no build step), bilingual EN / 中文.

## 日常更新
- **论文 / 动态**：只改 `assets/js/data.js`，在 `PAPERS` 或 `NEWS` 最上方加一条
- **界面文字（中英）**：`assets/js/data.js` 底部的 `I18N`
- **图片**：放在 `assets/img/`
- **样式**：`assets/css/style.css`（颜色在最上面的 `:root`）

改完提交即可，GitHub Pages 1–2 分钟自动更新。

**防缓存**：改了 `data.js` / `style.css` 后，把 `index.html` 和 `publications.html` 里 `?v=…` 的日期改成当天日期，访问者就会立刻看到新版本。

Fonts: English text uses Times New Roman (system font); Chinese uses the system Song / sans fonts.
