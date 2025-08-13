"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, PlaySquare, CheckCircle } from "lucide-react"
import { allCards, type VideoCardType, type ArticleCardType } from '@/lib/data';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import Valeurs from '@/components/ui/valeurs';
import Visite from '@/components/ui/visite';
import ContactUs from '@/components/ui/contact_us';

// Type guard pour vérifier si une carte est une vidéo
const isVideoCard = (card: VideoCardType | ArticleCardType): card is VideoCardType => {
  return card.type === 'video' && 'channel' in card && 'views' in card;
};

export default function TutorialsPage() {
  const [search, setSearch] = useState('');
  
  // Filtrer et trier les vidéos avec useMemo pour optimiser les performances
  const { videos, filteredVideos, topVideos } = useMemo(() => {
    const videoCards = allCards.filter(isVideoCard);
    const sortedVideos = [...videoCards].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    const filtered = search 
      ? sortedVideos.filter(video => 
          video.title.toLowerCase().includes(search.toLowerCase()) ||
          video.channel.toLowerCase().includes(search.toLowerCase())
        )
      : sortedVideos;
    
    return {
      videos: sortedVideos,
      filteredVideos: filtered,
      topVideos: filtered.slice(0, 10)
    };
  }, [search]);
  
  // Rendu d'une carte vidéo
  const renderVideoCard = (video: VideoCardType, index: number) => (
    <div 
      key={video.id}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-100"
      aria-labelledby={`video-${video.id}-title`}
    >
      <Link href={`/ressources/tutorials/${video.id}`} className="block" aria-label={`Voir la vidéo : ${video.title}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt=""
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 4} // Chargement prioritaire pour les premières images
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center">
              <div className="bg-white/90 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                Regarder maintenant
              </div>
            </div>
          </div>
          {index % 3 === 0 && (
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
              HD
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 border border-gray-200 flex-shrink-0 rounded-full overflow-hidden">
              {video.channelAvatar ? (
                <Image
                  src={video.channelAvatar}
                  alt={`Avatar de ${video.channel}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{video.channel.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 
                id={`video-${video.id}-title`}
                className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors"
              >
                {video.title}
              </h3>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>{video.channel}</span>
                <CheckCircle className="w-3 h-3 text-gray-400" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <span>{video.views}</span>
                <span aria-hidden="true">•</span>
                <span>{video.time}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
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
        {/* Section Top 10 des vidéos */}
        <section className="relative w-full py-16 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
          {/* Effet de dégradé subtil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center px-4 py-2 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
                <Star className="w-4 h-4 mr-2" />
                Contenu sélectionné
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top 10 des tutoriels</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez nos meilleurs tutoriels sélectionnés par notre équipe d'experts</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {topVideos.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-8">Aucune vidéo trouvée.</div>
              ) : (
                topVideos.map((video, idx) => (
                  <div 
                    key={video.id}
                    className="relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
                  >
                    {/* Badge de classement */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                    <Link href={`/ressources/tutorials/${video.id}`} className="block">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-orange-500">
                            <PlaySquare className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <span>{video.channel}</span>
                          {video.channel === "Coke Studio Bangla" && (
                            <CheckCircle className="w-3 h-3 text-gray-400" />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{video.views}</span>
                          <span>•</span>
                          <span>{video.time}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>

            {/* Séparation visuelle */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-gray-500">Tous les tutoriels</span>
              </div>
            </div>

            {/* Grille de vidéos complète */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.length === 0 ? (
                <div className="col-span-full text-center py-16" role="alert" aria-live="polite">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                    <svg 
                      className="w-8 h-8 text-orange-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="sr-only">Icône d'information</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Aucun tutoriel trouvé</h3>
                  <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                </div>
              ) : (
                filteredVideos.map((video, index) => renderVideoCard(video, index))
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
