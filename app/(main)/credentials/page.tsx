import Footer from "@/components/footer/Footer";

import EcosystemSection from "./_components/EcosystemSection";
import ForumsSection from "./_components/ForumsSection";
import RecognitionSection from "./_components/RecognitionSection";

export default function CredentialsPage() {
  return (
    <main className="text-white">
      <RecognitionSection />
      <ForumsSection />
      <EcosystemSection />

      <Footer />
    </main>
  );
}
