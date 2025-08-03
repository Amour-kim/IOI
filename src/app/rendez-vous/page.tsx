import Image from "next/image";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SocialSidebar from "@/components/ui/social-sidebar";
import Meet from "@/components/ui/meet";

export default function RendezVous() {
  return (
    <div className="flex flex-col">
      <Header />
      <Meet />
      <SocialSidebar />
      <Footer />
    </div>
  );
}
