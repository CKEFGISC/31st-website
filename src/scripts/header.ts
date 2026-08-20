/**
 * Shrinks the header once the page is scrolled, but only when there is
 * enough page to scroll — same rule the old jQuery `handleHeaderSize` used.
 */
const header = document.getElementById("site-header");

function update() {
    if (!header) return;
    const scrollable =
        document.documentElement.scrollHeight > window.innerHeight * 1.2;
    header.classList.toggle("header-shrink", scrollable && window.scrollY > 50);
}

update();
window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update, { passive: true });
