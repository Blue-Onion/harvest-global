import FinalCta from "@/components/sections/FinalCta";
import AffiliationsSection from "./_components/AffiliationsSection";
import CredentialsHero from "./_components/CredentialsHero";
import EcosystemSection from "./_components/EcosystemSection";
import ForumsSection from "./_components/ForumsSection";
import MediaSection from "./_components/MediaSection";
import RecognitionSection from "./_components/RecognitionSection";
import Footer from "@/components/footer/Footer";





export default function CredentialsPage() {
  return (
    <main className="text-white">

      <CredentialsHero />
      <RecognitionSection />
      <MediaSection />
      <ForumsSection />
      <EcosystemSection />
      <AffiliationsSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
