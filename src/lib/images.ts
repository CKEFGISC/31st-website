import type { ImageMetadata } from "astro";

/**
 * Every image under `src/assets/images`, keyed by module path. Eager so the
 * lookup below stays synchronous — Astro only emits the ones actually rendered.
 */
const assets = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/images/**/*.{jpg,JPG,jpeg,png,PNG,gif,webp,avif,svg}",
    { eager: true },
);

/**
 * Resolve a `/images/...` path — the form the data files and course frontmatter
 * use — into the asset `<Image />` needs.
 */
export function asset(path: string): ImageMetadata {
    const found = assets[`/src/assets${path}`];
    if (!found) throw new Error(`No image at src/assets${path}`);
    return found.default;
}
