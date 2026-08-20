import { getCollection, type CollectionEntry } from "astro:content";

export type Course = CollectionEntry<"courses">;

export const courseGroups = [
    { id: "major", heading: "114 上學期 大社課" },
    { id: "minor", heading: "114 上學期 放學聯合小社課" },
] as const;

/** All courses, grouped and sorted the way the course list renders them. */
export async function getGroupedCourses() {
    const courses = await getCollection("courses");
    return courseGroups.map(({ id, heading }) => ({
        id,
        heading,
        courses: courses
            .filter((course) => course.data.group === id)
            .sort((a, b) => a.data.order - b.data.order),
    }));
}

/** slides.com decks need `/embed`; everything else is already embeddable. */
export function embedUrl(slide: Course["data"]["slides"][number]) {
    return slide.provider === "slides" ? `${slide.url}/embed` : slide.url;
}
