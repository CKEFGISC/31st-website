/**
 * Scroll-triggered reveal, reproducing the old jQuery `handleFadeIn`:
 * an element shows once its vertical midpoint reaches the viewport bottom.
 *
 * Offsets come from offsetTop/offsetHeight, matching jQuery's .position()
 * (which is relative to the offsetParent, so members of the team list are
 * measured against `.team-section-anchor` and reveal at the same point they
 * used to). A rect-based measurement would also be thrown off by the
 * page-load section animation, which translates the whole subtree.
 */
const pending = new Set<HTMLElement>(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
);

function check() {
    const limit = window.scrollY + window.innerHeight;
    for (const element of pending) {
        // members of the hidden club panel wait until it is switched in
        if (element.closest(".inactive")) continue;

        if (element.offsetTop + element.offsetHeight * 0.5 < limit) {
            element.classList.add("is-revealed");
            pending.delete(element);
        }
    }
}

let queued = false;
function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
        queued = false;
        check();
    });
}

check();
window.addEventListener("scroll", schedule, { passive: true });
window.addEventListener("resize", schedule, { passive: true });
window.addEventListener("load", check);
// the team switcher fires this after swapping panels
window.addEventListener("reveal:check", schedule);
