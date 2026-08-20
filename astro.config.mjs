// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://31st.ckefgisc.org",
    integrations: [react()],
    markdown: {
        shikiConfig: { theme: "github-light", wrap: true },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
