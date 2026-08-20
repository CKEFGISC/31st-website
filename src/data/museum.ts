export type MuseumEntry = {
    title: string;
    url: string;
    image: string;
    /** paragraphs, may contain inline HTML (e.g. links, superscripts) */
    body: string[];
};

export type MuseumSection = {
    heading: string;
    entries: MuseumEntry[];
};

const up = (n: string) => `${n}<sup><small>th</small></sup>`;
const link = (href: string, text: string) =>
    `<a href="${href}" target="_blank" rel="noreferrer" class="underline underline-offset-2">${text}</a>`;

export const museumSections: MuseumSection[] = [
    {
        heading: "歷屆社網",
        entries: [
            {
                title: `${up("27")} 社網`,
                url: "https://27th.ckefgisc.org/",
                image: "/images/museum/27th_website.png",
                body: [
                    "建北電資以往皆有架設網站作為招生及宣傳用途。但是自從建電社辦的伺服器被學校沒收之後，一直以來都找不到一個良好的網站架設環境，也沒有一個地方讓學術們統一放置教材供學弟妹使用。",
                    "因此，在一三接幹了之後，一二學術長檸檬便一直希望繼任的鹽亞倫可以將他們沒有做出的社網完成。於是鹽亞倫便找了溫室菜以及北資學術長嗯嗯，嘗試從頭寫出一個網站，並且透過 Github Pages 進行架設。",
                ],
            },
            {
                title: `${up("28")} 社網`,
                url: "https://28th.ckefgisc.org/",
                image: "/images/museum/28th_website.png",
                body: [
                    `鹽亞倫大電神架好了 ${up("27")} 社網，好強。接著換 ${up("28")} 上幹了，網管 晴 決定重頭寫自己的社網。`,
                    `雖然有學長姊的範本可以借鑑，不過因為他是笨，花了大半個暑假也沒有什麼進度。不過在某一天意外學會了 ${link("https://react.dev/", "React")} 之後，事情變得不同了。有了進階網頁框架的強大功能，晴只需要把六哥寫好的前端網頁做成模板整理，接上 Router！於是 ${up("28")} 社網就這麼誕生了……`,
                ],
            },
            {
                title: `${up("29")} 社網`,
                url: "https://29th.ckefgisc.org/",
                image: "/images/museum/29th_website.png",
                body: [
                    `${up("29")} 社網是網管 小黑 由已經相當成熟的 ${up("28")} 社網改版而來的，把過時的內容更新成新一屆的資料，也改動了網頁一部分的外觀。`,
                ],
            },
            {
                title: `${up("29")} 新社網`,
                url: "https://29th-plus.ckefgisc.org/",
                image: "/images/museum/29th_plus_website.png",
                body: [
                    `${up("29")} 網管 小黑 心心念念一直想自己從頭寫一個新的社網。`,
                    `在幹部生涯的尾聲，他終於實現了自己的夢想，寫出了 ${up("29")} 新社網。這個網站使用了全新的框架，也把主題色改成了深色，首頁更是煥然一新，更能夠吸引學弟妹們加入這個溫暖的大家庭。`,
                ],
            },
        ],
    },
    {
        heading: "其他網站",
        entries: [
            {
                title: "建電社史追溯網",
                url: "https://history.ckeisc.org/",
                image: "/images/museum/ckeisc_history_website.png",
                body: [
                    "建國中學電子計算機研習社創社至今已過了四十餘年，今日的電研社在建中仍占有一席之地。然而，我們的社史已經在過去二十年間顛沛流離的社辦交換中遺失了，可憐的電研社至 2022 年前都沒有留下什麼整理過的社團歷史。",
                    "直到 2023 年，終於在建電中出現了願意整理這些資料的一群人，開始挖掘往年的資料。透過學長姐的幫助，終於在雜亂的資料中整理出頭緒，建電的歷史正重新被寫下。",
                ],
            },
            {
                title: "ISCOJ",
                url: "https://iscoj.ckefgisc.org/",
                image: "/images/museum/iscoj.png",
                body: [
                    `建北電資的社員非常喜歡寫演算法題目，理所當然地我們有自己的線上評測系統，稱作 ISCOJ。不過 ${link("https://fgiscoj.fg.tp.edu.tw/", "舊的 OJ")} 實在太難用了，於是今年 AaW 和世宗架好了新的 OJ。`,
                    `此 OJ 架設於北一女的伺服器。因為使用 ${link("https://tioj.ck.tp.edu.tw/", "TIOJ")} 模板，外觀不是特別漂亮，可能還有改進的空間……`,
                ],
            },
        ],
    },
];
