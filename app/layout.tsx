import type { Metadata } from "next";
import "./globals.css";

import { Michroma, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";


const michroma = Michroma({

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
      className={`${michroma.variable} ${inter.variable} max-w-screen h-full antialiased`}
    >
      <body className="min-h-full bg-black w-full overflow-x-hidden">

        <SmoothScroll>

        {children}
        </SmoothScroll>

      </body>
    </html>
  );
}
