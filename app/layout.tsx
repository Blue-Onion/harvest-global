import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";

import { Audiowide, Inter } from "next/font/google";


const audiowide = Audiowide({

  variable: "--font-display",

  weight: "400",

  subsets: ["latin"],

});

const inter = Inter({

  variable: "--font-body",

  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Harvest Global",
  description: "Harvest Global",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${inter.variable} max-w-screen h-full antialiased`}
    >
      <body className="min-h-full bg-black w-full overflow-x-hidden">
        <HeroReveal />
        <Navbar />
        {children}

      </body>
    </html>
  );
}
