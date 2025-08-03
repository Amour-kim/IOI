"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Work from "@/components/ui/work";
import Suivis from "@/components/ui/suivis";
import ModernNavbar from "@/components/ui/navbar";
import SocialSidebar from "@/components/ui/social-sidebar";
import ContactUs from "@/components/ui/contact_us";
import ModernEmployeeCarousel from "@/components/ui/equipes";
import CarouselContact from "@/components/ui/carouselContact";
import Meet from "@/components/ui/meet";
import { useRouter } from "next/navigation"

export default function Contacts() {
  return (
    <div className="flex flex-col relative">
      <ModernNavbar/>
      <CarouselContact />
      <ContactUs />
      <SocialSidebar />
      <Footer />
    </div>
  );
}
