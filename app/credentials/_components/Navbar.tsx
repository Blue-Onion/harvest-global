import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-7 py-5 flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Harvest Global"
          width={460}
          height={300}
          className="h-16 w-auto"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
