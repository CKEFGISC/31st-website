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
    const panelRefs = useRef<Array<HTMLElement | null>>([]);

    // keep the viewport exactly as tall as the visible panel
    useEffect(() => {
        const panel = panelRefs.current[index];
        if (!panel) return;

        const sync = () => setHeight(panel.offsetHeight);
        sync();

        const observer = new ResizeObserver(sync);
        observer.observe(panel);

        window.dispatchEvent(new Event("reveal:check"));

        return () => observer.disconnect();
    }, [index]);

    return (
        <>
            <section id="team-switcher" className="team-switch-wrap">
                <div
                    role="tablist"
                    aria-label="社團"
                    className="team-toggle-switch"
                >
                    <span
                        aria-hidden="true"
                        className="switch-rect"
                        style={{ left: index === 0 ? 3 : "calc(50% - 3px)" }}
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
                            className="switch-label"
                            data-active={i === index}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>

            <div
                className="team-section-anchor"
                style={{ height }}
                data-index={index}
            >
                <div
                    className="team-track"
                    style={{ transform: `translateX(-${index * 50}%)` }}
                >
                    {panels.map((panel, i) => (
                        <section
                            key={i}
                            id={`team-panel-${i}`}
                            role="tabpanel"
                            aria-labelledby={`team-tab-${i}`}
                            aria-hidden={i !== index}
                            inert={i !== index}
                            ref={(element) => {
                                panelRefs.current[i] = element;
                            }}
                            className={
                                i === index
                                    ? "team-panel"
                                    : "team-panel inactive"
                            }
                        >
                            {panel}
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
}
