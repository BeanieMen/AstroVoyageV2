import { client } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";

export async function getBlogData(): Promise<simpleBlogCard[] | null> {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }`;

    const data = await client.fetch(query);

    return data;
}
