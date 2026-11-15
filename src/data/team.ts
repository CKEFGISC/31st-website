import { getCollection, render } from "astro:content";

export type Person = {
    role: string;
    name: string;
    tags: string[];
    description?: string; // link to .md file
    Description?: Awaited<ReturnType<typeof render>>["Content"] | null;
    photo: string;
    /** revealed on hover */
    photoAlt?: string;
};

export type Club = {
    id: "ckeisc" | "fgisc";
    label: string;
    members: Person[];
};

const ckeisc: Person[] = [
    {
        role: "社長 x 網管 x 學術",
        name: "Dong",
        tags: ["好哇！", "doong.me"],
        description: "content/team/ckeisc/dong.md",
        photo: "/images/team/ckeisc/Formal/dong.jpg",
    },
    {
        role: "副社長 x 美宣 x 公關",
        name: "山豬",
        tags: ["爆肝", "卷", "畫畫"],
        description: "content/team/ckeisc/yec.md",
        photo: "/images/team/ckeisc/Formal/yec.jpg",
    },
    {
        role: "學術長",
        name: "owl",
        tags: ["競程大神", "社寵"],
        description: "content/team/ckeisc/owl.md",
        photo: "/images/team/ckeisc/Formal/owl.jpg",
    },
    {
        role: "學術 x 文書 x 公關",
        name: "wayne",
        tags: ["scratch大師", "詠唱大師"],
        description: "content/team/ckeisc/wayne.md",
        photo: "/images/team/ckeisc/Formal/wayne.jpg",
    },
    {
        role: "學術 x 公關",
        name: "燒雞",
        tags: ["可愛男娘", "吉他"],
        description: "content/team/ckeisc/turtle.md",
        photo: "/images/team/ckeisc/Formal/turtle.jpg",
    },
    {
        role: "學術",
        name: "叉燒",
        tags: ["行情家", "社長"],
        description: "content/team/ckeisc/alex.md",
        photo: "/images/team/ckeisc/Formal/alex.jpg",
    },
    {
        role: "學術 ",
        name: "W(x)",
        tags: ["填表單", "投票"],
        description: "content/team/ckeisc/wx.md",
        photo: "/images/team/ckeisc/Formal/wx.jpg",
    },
    {
        role: "總務 & 美宣",
        name: "Lucas",
        tags: ["電神", "KB 大師"],
        description: "content/team/ckeisc/lucas.md",
        photo: "/images/team/ckeisc/Formal/lucas.jpg",
    },
    {
        role: "網管 x 總務",
        name: "bearbear",
        tags: ["bear", "bear"],
        description: "content/team/ckeisc/bearbear.md",
        photo: "/images/team/ckeisc/Formal/bearbear.jpg",
    },
    {
        role: "網管",
        name: "雷米",
        tags: ["學姊", "貓", "英文大師", "蛋餅"],
        description: "content/team/ckeisc/remi.md",
        photo: "/images/team/ckeisc/Formal/remi.jpg",
    },
    {
        role: "衛生",
        name: "Chou",
        tags: ["物理王", "地科電神"],
        description: "content/team/ckeisc/chou.md",
        photo: "/images/team/ckeisc/Formal/chou.jpg",
    },
];

const fgisc: Person[] = [
    {
        role: "社長 x 學術",
        name: "海獅",
        tags: ["笑開懷", "高冷學姊"],
        description: "content/team/fgisc/sealion.md",
        photo: "/images/team/fgisc/Formal/sealion.jpg",
    },
    {
        role: "副社長 x 學術長 x 網管",
        name: "Summerain",
        tags: ["資安大電神", "黑暗面"],
        photo: "/images/team/fgisc/Formal/smr.jpg",
    },
    {
        role: "學術 x 文書長",
        name: "鯨魚",
        tags: ["超強遊戲", "英文電神"],
        photo: "/images/team/fgisc/Formal/whale.jpg",
    },
    {
        role: "總務",
        name: "先抓",
        tags: ["貓咖常客", "抹茶魔人"],
        photo: "/images/team/fgisc/Formal/sandra.jpg",
    },
    {
        role: "文書 x 公關長",
        name: "主席",
        tags: ["電神", "音遊達人"],
        photo: "/images/team/fgisc/Formal/juicy.jpg",
    },
    {
        role: "公關",
        name: "呱呱",
        tags: ["大忙人", "程式天才"],
        photo: "/images/team/fgisc/Formal/duck.jpg",
    },
];

const descriptionEntries = await getCollection("team");
const descriptions = new Map(
    descriptionEntries.map((entry) => [entry.id, entry]),
);

for (const person of [...ckeisc, ...fgisc]) {
    if (!person.description) continue;

    const entry = descriptions.get(person.description.replace(/^content\/team\//, "").replace(/\.md$/, ""));
    if (!entry) throw new Error(`Missing team description: ${person.description}`);

    person.Description = entry.body? (await render(entry)).Content
    : null;
}

export const clubs: Club[] = [
    { id: "ckeisc", label: "建電", members: ckeisc },
    { id: "fgisc", label: "北資", members: fgisc },
];
