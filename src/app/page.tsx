import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import APropos from "@/components/ui/a_propos";
import Work from "@/components/ui/work";
import ContactUs from "@/components/ui/contact_us";
import Valeur from "@/components/ui/valeurs";
import InfographicSection from "@/components/ui/infographic";
import NosRealisations from "@/components/ui/realisations";
import Visite from "@/components/ui/visite";
import Statistique from "@/components/ui/statistique";
import Defis from "@/components/ui/defis";
import Feedback from "@/components/ui/feedback";
import Suivis from "@/components/ui/suivis";
import ModernEmployeeCarousel from "@/components/ui/equipes";
import SocialSidebar from "@/components/ui/social-sidebar";
import History from "@/components/ui/history";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <APropos />
      <History />
      <Valeur />
      <InfographicSection />
      <NosRealisations />
      <Work />
      <Visite />
      <Statistique />
      <Defis />
      <Suivis />
      <ModernEmployeeCarousel />
      <Feedback />
      <ContactUs />
      <SocialSidebar />
      <Footer />
    </div>
  );
}
