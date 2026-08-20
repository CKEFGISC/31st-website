/**
 * Scroll-triggered reveal. Replaces the jQuery `handleFadeIn` scroll handler:
 * anything marked `data-reveal` animates in the first time it enters view.
 */
const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
        }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
);

for (const element of document.querySelectorAll("[data-reveal]")) {
    observer.observe(element);
}
