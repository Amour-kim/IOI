"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Compass,
  Cable,
  ListVideo,
  History,
  PlaySquare,
  Clock,
  ThumbsUp,
  ChevronDown,
  Youtube,
  Search,
  Mic,
  Video,
  Grid,
  Bell,
  Menu,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { allCards } from '@/lib/data';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { useState } from 'react';
import { format } from 'date-fns';
import Valeurs from '@/components/ui/valeurs';
import Visite from '@/components/ui/visite';
import ContactUs from '@/components/ui/contact_us';

function VideoCard({
  thumbnail,
  avatar,
  title,
  channel,
  views,
  time,
  hasHD,
  hasPlayOverlay,
  publishedAt
}: {
  thumbnail: string
  avatar: string
  title: string
  channel: string
  views: string
  time: string
  hasHD?: boolean
  hasPlayOverlay?: boolean
  publishedAt: string
}) {
  return (
    <div className="relative group cursor-pointer hover:shadow-xl transition-shadow duration-200">
      <div className="relative">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt="Video thumbnail"
          width={360}
          height={200}
          className="w-full rounded-lg object-cover aspect-video"
        />
        {hasHD && <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">HD</div>}
        {hasPlayOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <PlaySquare className="w-12 h-12 text-white" />
          </div>
        )}
      </div>
      <div className="flex items-start gap-3 mt-2">
        <Avatar className="w-9 h-9 border border-avatar-border">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={channel} />
          <AvatarFallback>{channel.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <h3 className="text-[#1a1a1a] text-sm font-medium line-clamp-2">{title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <span>{channel}</span>
            {channel === "Coke Studio Bangla" && <CheckCircle className="w-3 h-3 fill-muted-foreground" />}
          </div>
          <div className="text-muted-foreground text-xs">
            {views} &bull; {time}
          </div>
          <div className="text-xs text-gray-400 mt-1">Publié le {format(new Date(publishedAt), 'dd/MM/yyyy')}</div>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const [search, setSearch] = useState('');
  // Trier les vidéos par date décroissante
  const videos = allCards.filter(card => card.type === 'video').sort((a, b) => new Date((b as any).publishedAt).getTime() - new Date((a as any).publishedAt).getTime());
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase()) ||
    video.channel.toLowerCase().includes(search.toLowerCase())
  );
  // Top 10 réactif à la recherche
  const topVideos = filteredVideos.slice(0, 10);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 text-[#1a1a1a]">
      <ModernNavbar />
      <SocialSidebar />
      <main className="flex-1 flex flex-col items-center px-4 py-8 mt-24">
        {/* Barre de recherche */}
        <div className="w-full max-w-2xl mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher une vidéo, une chaîne..."
            className="w-full px-6 py-4 border-2 border-orange-200 rounded-full focus:border-orange-400 focus:outline-none text-lg transition-all duration-300 shadow-lg bg-white/80"
          />
        </div>
        {/* Section vidéos avec fond animé et logos */}
        <section className="relative w-full mb-16 py-12 px-2 sm:px-6 bg-gradient-to-br from-yellow-200 via-orange-100 to-yellow-50 animate-gradient-move">
          {/* Logos animés en fond */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
            <img src="/logo.png" alt="IOI Logo" className="absolute animate-logo-float-1 w-40 opacity-10" style={{top:'10%',left:'5%'}} />
            <img src="/logo.png" alt="IOI Logo" className="absolute animate-logo-float-2 w-32 opacity-10" style={{top:'60%',left:'80%'}} />
            <img src="/logo.png" alt="IOI Logo" className="absolute animate-logo-float-3 w-52 opacity-10" style={{top:'40%',left:'40%'}} />
            <img src="/logo.png" alt="IOI Logo" className="absolute animate-logo-float-4 w-28 opacity-10" style={{top:'80%',left:'10%'}} />
            <img src="/logo.png" alt="IOI Logo" className="absolute animate-logo-float-5 w-36 opacity-10" style={{top:'20%',left:'70%'}} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Top 10 vidéos utiles */}
            <h2 className="text-2xl font-bold mb-6 text-orange-700 drop-shadow-lg animate-fade-in-up">Top 10 des vidéos utiles</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 mb-12">
              {topVideos.length === 0 ? (
                <div className="text-center text-gray-400 py-8 animate-fade-in-up">Aucune vidéo trouvée.</div>
              ) : (
                topVideos.map((video, idx) => (
                  <Link
                    key={video.id}
                    href={`/ressources/tutorials/${video.id}`}
                    className="min-w-[260px] max-w-xs flex-shrink-0 block group relative animate-card-fade-in"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <VideoCard
                      thumbnail={video.thumbnail}
                      avatar={video.channelAvatar}
                      title={video.title}
                      channel={video.channel}
                      views={video.views}
                      time={video.time}
                      hasHD={idx % 3 === 0}
                      hasPlayOverlay={idx % 2 === 0}
                      publishedAt={video.publishedAt}
                    />
                  </Link>
                ))
              )}
            </div>
            {/* Marge visuelle nette */}
            <div className="w-full h-8 sm:h-12" />
            {/* Grille de vidéos */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filteredVideos.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-12 animate-fade-in-up">Aucune vidéo trouvée.</div>
              ) : (
                filteredVideos.map((video, idx) => (
                  <Link
                    key={video.id}
                    href={`/ressources/tutorials/${video.id}`}
                    className="block group relative animate-card-fade-in"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <VideoCard
                      thumbnail={video.thumbnail}
                      avatar={video.channelAvatar}
                      title={video.title}
                      channel={video.channel}
                      views={video.views}
                      time={video.time}
                      hasHD={idx % 3 === 0}
                      hasPlayOverlay={idx % 2 === 0}
                      publishedAt={video.publishedAt}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          {/* Animations CSS */}
          <style jsx>{`
            @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
            }
            @keyframes card-fade-in {
              from { opacity: 0; transform: scale(0.95) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-card-fade-in {
              animation: card-fade-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
            }
            @keyframes logo-float-1 {
              0%,100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-40px) rotate(10deg); }
            }
            .animate-logo-float-1 { animation: logo-float-1 12s ease-in-out infinite alternate; }
            @keyframes logo-float-2 {
              0%,100% { transform: translateX(0) rotate(0deg); }
              50% { transform: translateX(-60px) rotate(-8deg); }
            }
            .animate-logo-float-2 { animation: logo-float-2 14s ease-in-out infinite alternate; }
            @keyframes logo-float-3 {
              0%,100% { transform: translate(0,0) rotate(0deg); }
              25% { transform: translate(30px, -30px) rotate(8deg); }
              50% { transform: translate(-30px, 30px) rotate(-8deg); }
              75% { transform: translate(20px, 20px) rotate(4deg); }
            }
            .animate-logo-float-3 { animation: logo-float-3 18s ease-in-out infinite alternate; }
            @keyframes logo-float-4 {
              0%,100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(30px) rotate(12deg); }
            }
            .animate-logo-float-4 { animation: logo-float-4 16s ease-in-out infinite alternate; }
            @keyframes logo-float-5 {
              0%,100% { transform: translateX(0) rotate(0deg); }
              50% { transform: translateX(40px) rotate(-12deg); }
            }
            .animate-logo-float-5 { animation: logo-float-5 13s ease-in-out infinite alternate; }
            @keyframes gradient-move {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient-move {
              background-size: 200% 200%;
              animation: gradient-move 18s ease-in-out infinite;
            }
          `}</style>
        </section>
      </main>
      <Valeurs />
      <Visite />
      <ContactUs />
      <Footer />
    </div>
  );
}
