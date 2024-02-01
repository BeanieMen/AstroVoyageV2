"use client";
import Navbar from "./components/NavBar";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
const imgLink = 'https://apod.nasa.gov/apod/image/2402/NGC1365_v4.jpg';

async function getData(): Promise<simpleBlogCard[] | null> {
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

export default function Home() {
  const [data, setData] = useState<simpleBlogCard[] | null>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  if (isLoading) return
  if (!data) return
  console.log(data)

  return (
    <main>
      <Navbar />

      <div style={{ backgroundImage: `url('${imgLink}')` }} className="w-full h-full bg-cover bg-center">
        <div className="py-52 mx-5">
          <div className="flex items-center justify-center text-7xl py-9 font-extrabold">
            Astro Voyage
          </div>
          <div className="flex items-center justify-center text-5xl font-thin">
            Embark on a Journey of Discovery
          </div>
        </div>
      </div>

      <div className="bg-white py-[6rem]">
        <div className="flex flex-col text-4xl  font-light justify-center items-center mx-auto text-black">
          Latest News

          <hr className="h-[3px] border-none bg-[#5094ff] w-[20rem] mt-5" />
          {
            <div className="py-20" key={0}>
              <h3 className="text-2xl font-bold">{data[0].title}</h3>
              <Button asChild className="relative flex mx-auto w-[6rem] mt-7 text-white rounded-2xl">
                <Link href={`/news/${data[0].currentSlug}`}>Read More</Link>
              </Button>
            </div>
          }
        </div>
      </div>
    </main>
  );
}
