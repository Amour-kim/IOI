"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"



export default function Visite() {
  // Adresse à afficher et à géocoder
  const address = "Derrière la pédiatrie, 75000 Owendo, Gabon";
  // Encodage pour URL Google Maps
  const addressQuery = encodeURIComponent(address);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="min-h-screen bg-[#f2f2f2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] text-center mb-16 leading-tight max-w-5xl mx-auto">
          Rendez-nous visite dans nos locaux situés au cœur du centre technologique de Libreville
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Location Card */}
          <Card className="bg-[#1a1a1a] text-white p-8 rounded-2xl border-0 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-black font-semibold">IOI Gabon</h2>
              <div className="space-y-2">
                <p className="text-black">Derrière la pédiatrie</p>
                <p className="text-black">75000 Owendo, Gabon</p>
              </div>
              <div className="absolute top-6 right-6">
                <MapPin className="w-6 h-6text-[#808080]"/>
              </div>
            </div>
            {/* Carte interactive */}
            <div className="mt-6 flex-1 flex flex-col justify-center">
              <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden border-2 border-[#3884ff] shadow-lg aspect-[4/3]">
                <iframe
                  title="Carte interactive - IOI Gabon"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%', minWidth: '100%' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3884ff] hover:bg-[#2f6fd6] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors duration-200 shadow"
              >
                Voir sur la carte
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>

          {/* Office Building Card */}
          <Card className="bg-[#808080] rounded-2xl border-0 relative overflow-hidden min-h-[400px]">
            <div className="relative h-full">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Modern office building with glass facade"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-[#fbd807] text-[#000000] px-4 py-2 rounded-lg font-medium">
                  <div className="text-sm font-semibold">marketer UX - web...</div>
                  <div className="text-xs">Größere Karte ansehen</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Office Interior Card */}
          <Card className="bg-[#808080] rounded-2xl border-0 relative overflow-hidden min-h-[400px]">
            <div className="relative h-full">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Modern office interior with people in meeting"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
