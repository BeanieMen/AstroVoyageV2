import Image from "next/image"
import Link from "next/link";
import { MenuDropDown } from "./Menu";

export default function Navbar() {
    return (
        <nav className="w-full relative flex-col items-center bg-gray-300 dark:bg-black">
            <div className="w-full flex justify-between gap-5 items-center py-[9px]">
                <Link href='/' className="flex items-center gap-4 mx-5 ">
                    <h1 className="text-xl">AstroVoyage</h1>
                    <Image className="invert" src={"/telescope.svg"} alt="telescope" width={50} height={50} />
                </Link>
                <div className="mx-5 flex gap-2 ">
                    <MenuDropDown />
                </div>
            </div>
        </nav>
    )
}