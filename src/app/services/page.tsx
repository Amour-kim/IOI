import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ContactUs from "@/components/ui/contact_us";
import Service from "@/components/ui/service";
import Reference from "@/components/ui/reference";
import Question from "@/components/ui/question";
import Feedback from "@/components/ui/feedback";
import Valeur from "@/components/ui/valeurs";
import Visite from "@/components/ui/visite";
import SocialSidebar from "@/components/ui/social-sidebar";
import ServicesCaseStudies from "@/components/ui/services-case-studies";
// import ServicesGrid from "@/components/ui/services-grid";

export default function Services() {
  return (
    <div className="flex flex-col">
      <Header />
      <Question />
      {/* <ServicesGrid /> */}
      <Service />
      <Reference />
      <ServicesCaseStudies />
      <Valeur />
      <Feedback />
      <Visite />
      <ContactUs />
      <SocialSidebar />
      <Footer />
    </div>
  );
}
