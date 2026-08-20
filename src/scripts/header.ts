/**
 * Shrinks the header once the page is scrolled, but only when there is
 * enough page to scroll — same rule the old jQuery `handleHeaderSize` used.
 *
 * Also publishes the header's unshrunk height as `--header-h`, so a
 * full-screen hero can fill the viewport without hiding the header.
 */
const header = document.getElementById("site-header");

function update() {
    if (!header) return;
    const scrollable =
        document.documentElement.scrollHeight > window.innerHeight * 1.2;
    header.classList.toggle("header-shrink", scrollable && window.scrollY > 50);
}

function measure() {
    // the shrunk header is shorter; only the resting height is useful here
    if (!header || header.classList.contains("header-shrink")) return;
    document.documentElement.style.setProperty(
        "--header-h",
        `${header.offsetHeight}px`,
    );
}

update();
measure();
window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update, { passive: true });

// the logo and web fonts land after first paint, changing the height
if (header) new ResizeObserver(measure).observe(header);
