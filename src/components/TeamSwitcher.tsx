import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
    labels: [string, string];
    /**
     * Named slots filled by Astro, so the member lists are rendered at build
     * time and ship no extra JS. Optional because Astro passes them at runtime.
     */
    ckeisc?: ReactNode;
    fgisc?: ReactNode;
}

/**
 * Slides between the two clubs' officer lists.
 * Replaces the jQuery class-toggling + manual height measurement in Team.js.
 */
export default function TeamSwitcher({ labels, ckeisc, fgisc }: Props) {
    const panels = [ckeisc, fgisc];
    const [index, setIndex] = useState(0);
    const [height, setHeight] = useState<number | undefined>(undefined);
    const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

    // keep the viewport exactly as tall as the visible panel
    useEffect(() => {
        const panel = panelRefs.current[index];
        if (!panel) return;

        const sync = () => setHeight(panel.offsetHeight);
        sync();

        const observer = new ResizeObserver(sync);
        observer.observe(panel);
        return () => observer.disconnect();
    }, [index]);

    return (
        <>
            <div className="flex justify-center">
                <div
                    role="tablist"
                    aria-label="社團"
                    className="border-line relative flex h-[34px] w-[200px] rounded-md border select-none"
                >
                    <span
                        aria-hidden="true"
                        className="bg-line absolute inset-y-[3px] w-[calc(50%-3px)] rounded transition-[left] duration-200 ease-out"
                        style={{ left: index === 0 ? 3 : "50%" }}
                    />
                    {labels.map((label, i) => (
                        <button
                            key={label}
                            type="button"
                            role="tab"
                            id={`team-tab-${i}`}
                            aria-selected={i === index}
                            aria-controls={`team-panel-${i}`}
                            onClick={() => setIndex(i)}
                            className="relative z-10 flex-1 cursor-pointer text-sm font-semibold"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className="mt-8 overflow-hidden transition-[height] duration-500 ease-out"
                style={{ height }}
            >
                <div
                    className="flex w-[200%] items-start transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 50}%)` }}
                >
                    {panels.map((panel, i) => (
                        <div
                            key={i}
                            id={`team-panel-${i}`}
                            role="tabpanel"
                            aria-labelledby={`team-tab-${i}`}
                            aria-hidden={i !== index}
                            inert={i !== index}
                            ref={(element) => {
                                panelRefs.current[i] = element;
                            }}
                            className="w-1/2"
                        >
                            {panel}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
