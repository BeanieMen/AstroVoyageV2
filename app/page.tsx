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

      {/* related links corner */}
      <div className="bg-white text-3xl font-light text-left text-black px-10 pt-[2rem] pb-[5rem] w-full">

        <div className="flex">
          <div className="flex flex-col w-[100%]">
            <p className="text-left text-4xl mb-[3rem]">Other Galleries and related links</p>
            <hr className="h-[2px] border-none bg-[#5094ff] w-[100%] my-[1rem]" />
          </div>
        </div>
        <div className="flex-col">
          <div className="flex justify-between">
            <Link href='/solar-system'>
              <div className="flex items-center">
                <Image src='/solar.jpg' height={1000} width={1000} alt="solar" className="w-[100px] h-[100px] rounded-[100%] object-cover" />
                <div className="ml-[5rem] text-4xl font-semibold items-center sm:text-2xl">Solar System Model</div>
                <p className="ml-[7.5rem] items-center text-3xl font-light sm:text-xl">A Model of the solar system made using react three fiber</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-[100%]">
            <hr className="h-[2px] border-none bg-[#5094ff] w-[100%] my-[1rem]" />
          </div>
        </div>
      </div>


      {/* <footer className="bg-[#01010e] h-[10rem] w-full"> */}

      {/* </footer> */}

    </main>
  );
}
