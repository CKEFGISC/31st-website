import { useEffect, useState } from "react";
import type { NavItem } from "~/data/site";

interface Props {
    items: NavItem[];
    title: string;
    currentPath: string;
}

/**
 * Slide-in navigation for narrow viewports.
 * Replaces the Bootstrap offcanvas + jQuery the old site relied on.
 */
export default function MobileNav({ items, title, currentPath }: Props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="開啟選單"
                aria-expanded={open}
                className="cursor-pointer p-2"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="1.75em"
                    height="1.75em"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                </svg>
            </button>

            <div
                onClick={() => setOpen(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            <aside
                aria-label="網站選單"
                aria-hidden={!open}
                className={`bg-paper fixed inset-y-0 right-0 z-50 flex w-[min(20rem,80vw)] flex-col shadow-xl transition-transform duration-300 ease-out ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="border-line flex items-center justify-between border-b px-5 py-4">
                    <h2 className="font-mono text-lg font-semibold">{title}</h2>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="關閉選單"
                        className="cursor-pointer p-1"
                        tabIndex={open ? 0 : -1}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="1.5em"
                            height="1.5em"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                        >
                            <path d="M6 6 18 18" />
                            <path d="M18 6 6 18" />
                        </svg>
                    </button>
                </div>

                <nav className="thin-scrollbar flex-1 overflow-y-auto px-5 py-4">
                    <ul className="flex flex-col gap-5">
                        {items.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    tabIndex={open ? 0 : -1}
                                    aria-current={
                                        currentPath === item.href
                                            ? "page"
                                            : undefined
                                    }
                                    {...(item.external
                                        ? {
                                              target: "_blank",
                                              rel: "noreferrer",
                                          }
                                        : {})}
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-semibold aria-[current=page]:text-brand"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
}
