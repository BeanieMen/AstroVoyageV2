"use client";

import Navbar from "./components/NavBar";
import { simpleBlogCard } from "./lib/interface";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./components/Carousel";
import { getBlogData } from "./lib/dataFetch";


export default function Home() {
  const [blog, setBlogData] = useState<simpleBlogCard[] | null>()
  const [isBlogLoading, setBlogLoading] = useState(true)

  useEffect(() => {
    getBlogData()
      .then((data) => {
        setBlogData(data)
        setBlogLoading(false)
      })
  }, [])

  if (isBlogLoading || !blog) return

  return (
    <main>
      <Navbar />

      {/* apod image background corner */}
      <div className="w-full h-full bg-cover bg-center bg-[url('/apod.jpg')]">
        <div className="py-52 mx-5">
          <div className="flex  px-5 text-center justify-center text-7xl py-9 font-extrabold">
            Astro Voyage
          </div>
          <div className="flex text-center px-5 justify-center text-5xl font-thin">
            Embark on a Journey of Discovery
          </div>
        </div>
      </div>

      {/*  News corner */}
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

      {/* Favourites corner */}
      <div className="bg-white py-[6rem]">
        <div className="flex flex-col text-4xl  font-light justify-center items-center mx-auto text-black">
          Our favourite&apos;s
          <hr className="h-[5px] border-none bg-[#5094ff] w-[15rem] my-[3rem]" />
          <ImageCarousel />
        </div>
      </div>

      {/* Related links corner */}
      {/* Related links corner */}
      <div className="bg-white text-xl sm:text-3xl font-light text-left text-black px-6 sm:px-10 pt-8 pb-20 w-full">
        <div className="flex flex-col">
          <p className="text-2xl sm:text-4xl mb-6">Other Galleries and related links</p>
          <hr className="h-[2px] border-none bg-[#5094ff] w-full my-6" />
        </div>
        <div className="flex flex-col">
          <Link href='/solar-system'>
            <div className="flex items-center">
              <Image src='/solar.jpg' height={1000} width={1000} alt="solar" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4 sm:ml-8 text-xl sm:text-4xl font-semibold">Solar System Model</div>
              <p className="ml-4 sm:ml-12 text-lg sm:text-3xl font-light">A Model of the solar system made using react three fiber</p>
            </div>
          </Link>
          <div className="flex flex-col w-full">
            <hr className="h-[2px] border-none bg-[#5094ff] w-full my-6" />
          </div>
        </div>
      </div>

      {/* <footer className="bg-[#01010e] h-[10rem] w-full"> */}

      {/* </footer> */}

    </main>
  );
}
