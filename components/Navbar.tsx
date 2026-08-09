"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";
import { Button } from "./ui/button";

function Navbar() {
  const { links, actions } = data.navigation;

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
    w-[92%] 
      flex items-center justify-between
      px-5 py-2
      rounded-full
      border border-white/15
      bg-black/20
      backdrop-blur-2xl
      shadow-[0_8px_40px_rgba(0,0,0,0.35)]
    "
    >
      {/* Logo */}
      <Link href="#home" className="shrink-0">
        <Image src={"/logo.png"} width={170} height={170} alt="logo" />
      </Link>

      {/* Navigation */}
      <div className="items-center hidden md:flex gap-1">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 rounded-xl text-lg text-white/80
          hover:text-white hover:bg-white/10
          transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden text-white">
        <button className="">
          <Menu size={26} />
        </button>
      </div>
      <div className="button flex items-center gap-2 text-white md:flex hidden">
        <Link href={"/#contact"}>
       <button className="px-4 py-2 rounded-lg font-bold text-lg text-white/80
          hover:text-white hover:bg-white/10
          transition-all duration-200">
        Contact Us
       </button>
        </Link>
        <Link href={"/credentials"}>
       <button className="px-4 py-2 rounded-lg font-bold text-lg text-white/80
          hover:text-white hover:bg-white/10
          transition-all duration-200">
Learn More
       </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
