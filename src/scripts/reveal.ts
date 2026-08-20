/**
 * Scroll-triggered reveal, reproducing the old jQuery `handleFadeIn`:
 * an element shows once its vertical midpoint reaches the viewport bottom,
 * and elements inside an `.inactive` container stay hidden until it is shown.
 */
const pending = new Set<Element>(document.querySelectorAll("[data-reveal]"));

function check() {
    for (const element of pending) {
        if (element.closest(".inactive")) continue;

        const box = element.getBoundingClientRect();
        if (box.top + box.height * 0.5 < window.innerHeight) {
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
