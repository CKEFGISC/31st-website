import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const accents = [
    "crimson",
    "gamboge",
    "mango",
    "iris",
    "orchid",
    "kelly",
    "success",
    "papaya",
    "brand",
] as const;

const courses = defineCollection({
    loader: glob({ base: "./src/content/courses", pattern: "**/*.md" }),
    schema: z.object({
        /** full name, shown on the course card */
        title: z.string(),
        /** short name, shown in headings on the detail page */
        shortTitle: z.string(),
        image: z.string(),
        accent: z.enum(accents).default("brand"),
        /** 大社課 vs 放學聯合小社課 */
        group: z.enum(["major", "minor"]),
        order: z.number().int().default(0),
        instructors: z.array(z.string()).default([]),
        /** markdown blurb for the course list */
        summary: z.string().default(""),
        slides: z
            .array(
                z.object({
                    title: z.string(),
                    url: z.url(),
                    /**
                     * `slides` — a slides.com deck (`/embed` is appended)
                     * `embed`  — an already embeddable URL
                     */
                    provider: z.enum(["slides", "embed"]).default("slides"),
                }),
            )
            .default([]),
    }),
});

const pages = defineCollection({
    loader: glob({ base: "./src/content/pages", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { courses, pages };
