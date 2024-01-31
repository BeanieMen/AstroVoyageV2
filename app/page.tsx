"use client";
import Image from "next/image";
import { MenuDropDown } from "./components/Menu";

const imgLink = 'https://apod.nasa.gov/apod/image/2401/OrionRising_Slipko_2048.jpg';

export default function Home() {
  return (
    <main>
      <nav className="w-full relative flex-col items-center bg-gray-300 dark:bg-black">
        <div className="w-full flex justify-between gap-5 items-center py-[9px]">
          <div className="flex items-center gap-4 mx-5 ">
            <h1 className="text-xl">AstroVoyage</h1>
            <Image className="invert" src={"/telescope.svg"} alt="telescope" width={50} height={50} />
          </div>
          <div className="mx-5">
            <MenuDropDown />
          </div>
        </div>
      </nav>
      
      <div className="w-full" style={{ backgroundImage: `url('${imgLink}')` }}>
        <div className="py-52 mx-5">
          <div className="flex items-center justify-center text-7xl py-9 font-extrabold">
            Astro Voyage
          </div>
          <div className="flex items-center justify-center text-5xl font-thin">
            Embark on a Journey of Discovery
          </div>
        </div>
      </div>
    </main>
  );
}
