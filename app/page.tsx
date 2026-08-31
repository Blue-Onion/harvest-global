import Hero from "@/components/Hero";

import Technology from "@/components/sections/Technology";
import Applications from "@/components/sections/Applications";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";

import Challenge from "@/components/sections/Challenge";
import ParternerdLogo from "@/components/sections/ParternerdLogo";
import UnfiedGeoStack from "@/components/sections/Unfied-Geo-Stack";

export default function Home() {
  return (
    <main className="text-white bg-black">
      <Navbar/>
      <Hero />
      <HeroReveal/>
      <ParternerdLogo/>

      <Challenge/>
      <Technology />
      <UnfiedGeoStack/>
      <Applications />
      <FinalCta />
      <Footer />
    </main>
  );
}


