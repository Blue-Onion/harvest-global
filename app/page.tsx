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
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <main className="bg-black  text-white">
      <Navbar />

      <Hero />
      <HeroReveal />
      <ParternerdLogo />

      {/* Stacking stack: Vision covered by Technology */}
      <div className="relative">
        <section className="sticky top-0 z-10 min-h-screen">
          <Vision />
        </section>
        <section className="sticky top-0 z-20 min-h-screen">
          <Challenge />
        </section>
      </div>

      <Technology />
      <UnifiedGeoStack />
      <Applications />
      <FinalCta />
      <Footer />
    </main>
  );
}
