import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Applications from "@/components/sections/Applications";
import CredentialsTeaser from "@/components/sections/CredentialsTeaser";
import ModalGallery from "@/components/sections/ModalGallery";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <HeroReveal />
      <About />
      <Applications />
      <CredentialsTeaser />
      <ModalGallery />
      <FinalCta />
      <Footer />
    </main>
  );
}
