import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Applications from "@/components/sections/Applications";
import CredentialsTeaser from "@/components/sections/CredentialsTeaser";
import ModalGallery from "@/components/sections/ModalGallery";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";
import Connect from "@/components/sections/Connect";
import Challenge from "@/components/sections/Challenge";
import ParternerdLogo from "@/components/sections/ParternerdLogo";

export default function Home() {
  return (
    <main className="text-white bg-black">
      <Navbar/>
      <Hero />
      <HeroReveal/>
      <About />
      <ParternerdLogo/>
      <Challenge/>
      <Technology />
      <Applications />

      <FinalCta />
      <Footer />
    </main>
  );
}


