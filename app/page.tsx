import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Applications from "@/components/sections/Applications";
import CredentialsTeaser from "@/components/sections/CredentialsTeaser";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar/>
      <Hero />
      <HeroReveal/>
      <About />
      <Technology />
      <Applications />
      <CredentialsTeaser />
      <FinalCta />
<Connect/>
      <Footer />
    </main>
  );
}


