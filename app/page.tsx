import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <About />
      <Technology />
      <Footer />
    </main>
  );
}


