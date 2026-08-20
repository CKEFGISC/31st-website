# 操作說明

建北電資 31st 社網開發者操作說明

---

## 這個網站是什麼做的

| 東西 | 做什麼的 |
| - | - |
| [Astro](https://docs.astro.build) | 網站框架，負責把資料跟版型組成靜態 HTML |
| [React](https://react.dev) | 只用在需要互動的地方（幹部頁切換、手機選單） |
| [Tailwind CSS](https://tailwindcss.com) | 樣式，直接寫在 class 裡面，不用另外開 CSS 檔 |
| [TypeScript](https://www.typescriptlang.org) | 加了型別的 JavaScript，改錯資料欄位時會直接跟你講 |
| [Bun](https://bun.sh) | 套件管理 + 執行工具（也可以用 npm / pnpm） |

網站是**全靜態**的：`bun run build` 會把所有頁面預先算好變成 HTML，
所以沒有後端、沒有資料庫，載入很快，放 GitHub Pages 就好。

## 事前準備

1. 裝好這些東西
    - [VS Code](https://code.visualstudio.com)（建議裝 Astro 跟 Tailwind CSS IntelliSense 兩個擴充套件，開專案時會自動推薦）
    - [Git](https://git-scm.com)
    - [Bun](https://bun.sh)（或 Node.js 22.12 以上）
2. 把專案抓下來

```bash
git clone https://github.com/CKEFGISC/31st-website.git
cd 31st-website
bun install
```

## 指令

```bash
bun run dev      # 開發伺服器，改檔案會自動重新整理
bun run build    # 產生靜態網站到 dist/
bun run preview  # 預覽 build 出來的結果
bun run check    # 檢查型別跟語法有沒有錯（送 PR 前跑一下）
bun run deploy   # build 完推到 GitHub Pages
```

## 架構

```bash
./
├─ public/            # 直接對外的檔案：圖片、favicon、CNAME
├─ src/
│  ├─ components/     # 可重複使用的元件
│  ├─ content/        # 用 Markdown 寫的內容（課程、關於我們）
│  ├─ data/           # 用 TypeScript 寫的內容（幹部、活動、歷屆、選單）
│  ├─ layouts/        # 每頁共用的外框（<head>、Header、Footer）
│  ├─ lib/            # 小工具函式
│  ├─ pages/          # 每個檔案 = 一個網址
│  ├─ scripts/        # 前端小腳本（捲動動畫、header 縮小）
│  ├─ styles/         # global.css，顏色、字體、共用樣式都在這
│  └─ content.config.ts  # 定義 Markdown 的欄位格式
├─ astro.config.mjs
└─ package.json
```

### 網址怎麼來的

`src/pages/` 裡面的檔案名稱就是網址：

| 檔案 | 網址 |
| - | - |
| `pages/index.astro` | `/` |
| `pages/about.astro` | `/about` |
| `pages/team.astro` | `/team` |
| `pages/courses/index.astro` | `/courses` |
| `pages/courses/[id].astro` | `/courses/algorithm`、`/courses/web`… |
| `pages/404.astro` | 找不到頁面時 |

`[id].astro` 的中括號代表「這裡會變」，它會幫 `src/content/courses/` 裡的每個
Markdown 檔各產生一頁。

---

## 常見的修改

### 改幹部

編輯 `src/data/team.ts`，照著現有格式加一筆就好：

```ts
{
    role: "學術",
    name: "某某",
    tags: ["標籤一", "標籤二"],
    description: [
        "一段介紹。",
        "第二段介紹，一個字串就是一個段落。",
    ],
    photo: "/images/team/ckeisc/Formal/someone.jpg",
    photoAlt: "/images/team/ckeisc/Informal/someone.jpg", // 可省略，滑鼠移上去會換這張
}
```

照片放在 `public/images/team/{ckeisc,fgisc}/{Formal,Informal}/`，
路徑從 `/images/...` 開始寫（不用寫 `public`）。

### 改活動

編輯 `src/data/events.ts`。四個陣列分別對應頁面上的四個區塊：
`upcomingEvents`（未來活動）、`pastEvents`（已結束）、
`irregularEvents`（不定期）、`otherEvents`（非本屆）。

`image` 可以省略，會自動用 `/images/events/404.png` 代替。

### 改課程

每堂課是 `src/content/courses/` 裡的一個 `.md` 檔，**檔名就是網址**
（`algorithm.md` → `/courses/algorithm`）。

```markdown
---
title: 演算法 (C++)          # 課程卡片上的完整名稱
shortTitle: 演算法            # 標題列用的短名稱
image: /images/courses/C++.png
accent: crimson              # 按鈕顏色，可選值在 src/content.config.ts
group: minor                 # major = 大社課、minor = 放學小社課
order: 1                     # 同一組裡的排序
instructors: [Boron, Roy, 水餃]
summary: |                   # 課程列表上的短介紹，空行代表分段
  第一段。

  第二段。
slides:                      # 沒有簡報就整段刪掉
    - title: 第一堂
      provider: slides       # slides = slides.com，embed = 已經可以嵌入的網址
      url: https://slides.com/someone/deck
---

這裡開始是課程詳細頁的長介紹，直接用 Markdown 寫。
```

欄位打錯或漏掉，`bun run dev` 會直接報錯告訴你哪一行有問題。

### 改「關於我們」

編輯 `src/content/pages/about.md`，就是一般的 Markdown，也可以直接寫 HTML。

### 改選單、社群連結

編輯 `src/data/site.ts`：`navItems` 是導覽列（電腦版跟手機版共用同一份），
`socialLinks` 是頁尾的圓形圖示。

### 改顏色、字體

`src/styles/global.css` 最上面的 `@theme` 區塊。改了之後，
Tailwind 的 class 會跟著變（例如 `--color-brand` 對應 `bg-brand`、`text-brand`）。

### 加圖示

`src/components/Icon.astro` 裡面是手寫的 SVG，加一個 key 進 `glyphs` 就能用
`<Icon name="你的名字" />`。

---

## 部署

推到 `main` 之後跑：

```bash
bun run deploy
```

它會 `build` 出 `dist/`，再用 `gh-pages` 推到 `gh-pages` 分支。
`public/CNAME` 會一起被複製過去，所以自訂網域不會掉。

---

## 一些細節

- **動畫**：想讓某個區塊「捲到才淡入」，加 `data-reveal` 屬性就好，
  `src/scripts/reveal.ts` 會用 IntersectionObserver 處理。
- **舊網址**：以前的社網用 `#/about` 這種 hash 網址，
  `BaseLayout.astro` 裡有一小段 script 會自動轉到 `/about`，舊連結不會壞。
- **React 用在哪**：只有 `MobileNav.tsx`（手機選單）跟 `TeamSwitcher.tsx`
  （建電／北資切換）。其他都是 Astro 元件，不會送任何 JavaScript 到瀏覽器。
  幹部名單本身也是 Astro 在 build 時就渲染好，再塞進 React 元件裡的。
