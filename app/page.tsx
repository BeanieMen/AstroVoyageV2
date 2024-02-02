"use client";

import Navbar from "./components/NavBar";
import { simpleBlogCard } from "./lib/interface";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogData, getImgLink } from "./lib/dataFetch";


export default function Home() {
  const [blog, setBlogData] = useState<simpleBlogCard[] | null>()
  const [isBlogLoading, setBlogLoading] = useState(true)

  const [imgLink, setImgLink] = useState<string | null>()
  const [isLinkLoading, setLinkLoading] = useState(true)

  useEffect(() => {
    getBlogData()
      .then((data) => {
        setBlogData(data)
        setBlogLoading(false)
      })
  }, [])

  useEffect(() => {
    getImgLink()
      .then((data) => {
        setImgLink(data)
        setLinkLoading(false)
      })
  }, [])

  if (isBlogLoading || isLinkLoading || !blog || !imgLink)  return
  

  return (
    <main>
      <Navbar />

      <div style={{ backgroundImage: `url('${imgLink}')` }} className="w-full h-full bg-cover bg-center">
        <div className="py-52 mx-5">
          <div className="flex  px-5 text-center justify-center text-7xl py-9 font-extrabold">
            Astro Voyage
          </div>
          <div className="flex text-center px-5 justify-center text-5xl font-thin">
            Embark on a Journey of Discovery
          </div>
        </div>
      </div>

      <div className="bg-white py-[6rem]">
        <div className="flex flex-col text-4xl  font-light justify-center items-center mx-auto text-black">
          Latest News

          <hr className="h-[3px] border-none bg-[#5094ff] w-[20rem] mt-5" />
          {
            <div className="pt-15 pb-[1rem]" key={0}>
              <h3 className="text-2xl font-bold text-center justify-center px-5 pt-5">{blog[0].title}</h3>
              <Button asChild className="relative flex mx-auto w-[6rem] mt-7 text-white rounded-2xl">
                <Link href={`/news/${blog[0].currentSlug}`}>Read More</Link>
              </Button>
            </div>
          }
        </div>
      </div>
    </main>
  );
}
