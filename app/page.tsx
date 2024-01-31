"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
    <nav className="w-full relative flex flex-col items-center bg-gray-300 dark:bg-slate-800">
      <div className="w-full flex justify-between items-center py-[7px]">
        <div className="flex items-center gap-4 mx-auto">
          <h1 className="text-xl">AstroVoyage</h1>
          <Image className="invert" src={"/telescope.svg"} alt="telescope" width={50} height={50} />
        </div>
      </div>
    </nav>
    <div className="w-full relative flex justify-center items-center bg-gray-300 rounded-b-xl dark:bg-teal-700 py-3 gap-5">
    <Link href={'/'}>
        <Image className="dark:invert invert" width={24} height={24} alt="home" src={"/home.svg"}/>
      </Link>
      <Link href={'/apod'}>
          Apod
        </Link>
    </div>
    </main>
  );
}
