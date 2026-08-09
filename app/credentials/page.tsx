import CredentialsHero from "@/components/credentials/CredentialsHero";
import RecognitionSection from "@/components/credentials/RecognitionSection";
import MediaSection from "@/components/credentials/MediaSection";
import ForumsSection from "@/components/credentials/ForumsSection";
import EcosystemSection from "@/components/credentials/EcosystemSection";
import AffiliationsSection from "@/components/credentials/AffiliationsSection";
import FinalCta from "@/components/sections/FinalCta";
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
