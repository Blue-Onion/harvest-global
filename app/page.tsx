import Hero from "@/components/Hero";


import Applications from "@/components/sections/Applications";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";

import Challenge from "@/components/sections/Challenge";
import ParternerdLogo from "@/components/sections/ParternerdLogo";
import Technology from "@/components/sections/Technology";
import UnifiedGeoStack from "@/components/sections/Unfied-Geo-Stack";


export default function Home() {
  return (
    <main className="text-white bg-black">
      <Navbar/>
      <Hero />
      <HeroReveal/>
      <ParternerdLogo/>

      <Challenge/>
      <Technology />
      <UnifiedGeoStack/>
      <Applications />
      <FinalCta />
      <Footer />
    </main>
  );
}


