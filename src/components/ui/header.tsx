"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, Play, Star, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ModernNavbar from "@/components/ui/navbar";
import { BlogCarousel } from "@/components/ui/blog-carousel"

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative mt-24">
      <ModernNavbar/>
      {/* Carrousel automatique sombre en fond */}
      <div className="absolute inset-0 z-0">
        <BlogCarousel />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-[#1c1e22] via-[#130604] to-[#000000] pt-16 sm:pt-20 lg:pt-[100px] relative overflow-visible z-10">
        {/* Logo IOI en arrière-plan */}
        <div className="hidden md:block absolute right-0 top-0 w-[800px] h-full pointer-events-none select-none opacity-20 z-0">
          <img
            src="/logo.png"
            alt="IOI Logo Background"
            className="w-[600px] h-[600px] object-contain rotate-[-15deg] mr-[-100px] mt-20"
            style={{ filter: 'brightness(0.8) saturate(0.8)' }}
          />
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Reviews Section */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
                    <AvatarImage src="/pys.jpg" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
                    <AvatarImage src="/pys.jpg" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
                    <AvatarImage src="/pys.jpg" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
                    <AvatarImage src="/pys.jpg" />
                    <AvatarFallback>U4</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
                    <AvatarImage src="/pys.jpg" />
                    <AvatarFallback>U5</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-white">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#ebc82b] text-[#ebc82b]" />
                    ))}
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm">5 / 5</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Stars based on <strong>115+</strong> reviews
                  </p>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-8 sm:mt-0">
                Réinventons le digital ensemble.<br className="hidden sm:block" /> Bienvenue chez IOI.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Nous créons des solutions numérique et innovantes sur mesure, adaptés à vos besoins et à vos objectifs. De
                la création de sites vitrine à des plateformes, systèmes et automatisations complexes
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg">
                  Contactez-nous →
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg bg-transparent">
                  See Our Case Studies
                </Button>
              </div>
            </div>

            {/* Right Content - Video Player */}
            <div className="relative order-first lg:order-last">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl sm:rounded-3xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <video
                  ref={videoRef}
                  src="/p-api.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl relative z-10"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsMuted((prev) => {
                      const newMuted = !prev;
                      if (videoRef.current) videoRef.current.muted = newMuted;
                      return newMuted;
                    });
                  }}
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-20 transition-colors"
                  aria-label={isMuted ? 'Activer le son' : 'Désactiver le son'}
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>
              {/* Video Controls */}
              {/*
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/50 rounded-full p-2 sm:p-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] border-l-black border-y-[2.5px] sm:border-y-[3px] border-y-transparent ml-0.5"></div>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="text-orange-500 font-bold text-sm sm:text-base lg:text-lg">Professional Partner</div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded"></div>
                <span className="text-white font-bold text-sm sm:text-base">Google Partner</span>
              </div>
              <div className="text-red-500 font-bold text-sm sm:text-base">UX Weltstand BVMW</div>
              <div className="text-[#ebc82b] font-bold text-sm sm:text-base">WINNER 2023</div>
              <div className="text-gray-400 text-sm sm:text-base">clutch</div>
              <div className="text-white text-sm sm:text-base">WEGLOT EXPERT AGENCY</div>
              <div className="text-orange-500 font-bold text-sm sm:text-base">IHK</div>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
            <img 
              src="/logo.png" 
              alt="IOI Logo" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
