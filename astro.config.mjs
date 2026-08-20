// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://31st.ckefgisc.org",
    integrations: [react()],
    image: {
        // every <Image /> gets a srcset + sizes sized to its container
        layout: "constrained",
        responsiveStyles: true,
    },
    markdown: {
        shikiConfig: { theme: "github-light", wrap: true },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
