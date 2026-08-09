"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";

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
      <div className="button md:flex hidden">
        {actions.map((action) => (
          <button key={action.label}>
            {action.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
