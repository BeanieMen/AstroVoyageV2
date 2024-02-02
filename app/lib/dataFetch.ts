import { client } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { loadEnvConfig } from '@next/env'

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

export async function getImgLink(): Promise<string | null> {
    const projectDir = process.cwd()
    console.log(loadEnvConfig(projectDir))

    console.log(process.env)
    console.log(process.env.apod)
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.apod)
    console.log(res)
    const data = await res.json()
    return data.hdurl ?? 'https://apod.nasa.gov/apod/image/2402/NGC1365_v4.jpg'
}
