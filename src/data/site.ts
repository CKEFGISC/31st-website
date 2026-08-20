export const site = {
    title: "建北電資 31st",
    shortName: "建北電資",
    description:
        "建北電資是一個跨越 31 年的大家庭，自從 1995 年合併後，建電與北資兩社合作密切，不只是春夏秋冬的大活動，連宣幹或放學的小社課也都是一起舉辦的。我們的課程從網頁設計、遊戲製作到演算法競賽都有，在與社員們共同參與活動的同時，也可以增強你的學術實力",
    ogImage: "/images/chicken_with_background.png",
    themeColor: "#f7dea5",
    generation: 31,
    ckeisc: 45,
    fgisc: 39,
} as const;

export type NavItem = {
    label: string;
    href: string;
    external?: boolean;
};

export const navItems: NavItem[] = [
    { label: "關於", href: "/about" },
    { label: "幹部", href: "/team" },
    { label: "課程", href: "/courses" },
    { label: "活動", href: "/events" },
    { label: "歷屆", href: "/museum" },
    { label: "ISCOJ", href: "https://iscoj.ckefgisc.org/", external: true },
    { label: "2026社展", href: "https://exhibit.ckefgisc.org/", external: true },
];

export type SocialLink = {
    title: string;
    href: string;
    icon: "link" | "instagram" | "envelope";
};

export const socialLinks: SocialLink[] = [
    {
        title: "建中電研 45th Linktree",
        href: "https://linktr.ee/ckeisc_45th",
        icon: "link",
    },
    {
        title: "北一資研 39th Linktree",
        href: "https://linktr.ee/fgisc39th",
        icon: "link",
    },
    {
        title: "建中電研 45th Instagram",
        href: "https://www.instagram.com/ckeisc_45th/",
        icon: "instagram",
    },
    {
        title: "北一資研 39th Instagram",
        href: "https://www.instagram.com/fgisc39th/",
        icon: "instagram",
    },
    {
        title: "建北電資 31st Email",
        href: "mailto:ckefgisc31st@gmail.com",
        icon: "envelope",
    },
];
