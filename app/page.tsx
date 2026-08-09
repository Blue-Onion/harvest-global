import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Applications from "@/components/sections/Applications";
import CredentialsTeaser from "@/components/sections/CredentialsTeaser";
import Footer from "@/components/footer/Footer";
import FinalCta from "@/components/sections/FinalCta";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar/>
      <Hero />
      <About />
      <Technology />
      <Applications />
      <CredentialsTeaser />
      <FinalCta />
      <Footer />
    </main>
  );
}


