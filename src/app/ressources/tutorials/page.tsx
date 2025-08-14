"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, PlaySquare, CheckCircle } from "lucide-react"
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import Valeurs from '@/components/ui/valeurs';
import Visite from '@/components/ui/visite';
import ContactUs from '@/components/ui/contact_us';
import type { TutorialItem } from '@/data/ressources/resources.types';
import { tutorialsItems } from '@/data/ressources/tutorials.data';
// filters utils removed per request

// Utilitaires d'icône pour format
const formatIcon = (format: string) => format === 'video' ? '▶️' : '📰';

export default function TutorialsPage() {
  const [search, setSearch] = useState('');
  // filters removed per request

  // uniques
  // NOTE: Filters removed per request. Keep only sorting and search.

  const sorted = useMemo(() => {
    return [...tutorialsItems].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, []);

  const filteredVideos: TutorialItem[] = useMemo(() => {
    return sorted.filter(t => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        (t.channel || '').toLowerCase().includes(q);
      return matchesSearch;
    });
  }, [sorted, search]);
  
  const featuredVideos = useMemo(() => sorted.filter(t => t.isVedette), [sorted]);
  
  // Rendu d'une carte tutoriel
  const renderVideoCard = (video: TutorialItem, index: number) => (
    <div 
      key={video.id}
      className="group relative bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-100"
      aria-labelledby={`video-${video.id}-title`}
    >
      <Link href={`/ressources/tutorials/${video.id}`} className="block" aria-label={`Voir le tutoriel : ${video.title}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt=""
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 4} // Chargement prioritaire pour les premières images
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-orange-500">
              <PlaySquare className="w-6 h-6" />
            </div>
          </div>
          {video.isVedette && (
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-orange-500 text-white text-xs px-2 py-1">
              <Star className="w-3 h-3 fill-current" />
              En vedette
            </div>
          )}
          {index % 3 === 0 && video.format === 'video' && (
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5">
              HD
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 border border-gray-200 flex-shrink-0 overflow-hidden">
              {video.channelAvatar ? (
                <Image
                  src={video.channelAvatar}
                  alt={`Avatar de ${video.channel ?? 'Auteur'}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{(video.channel ?? 'T').charAt(0)}</span>
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
                <span>{video.channel ?? '—'}</span>
                <CheckCircle className="w-3 h-3 text-gray-400" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                {video.views && <span>{video.views}</span>}
                <span aria-hidden="true">•</span>
                <span>{format(new Date(video.publishedAt), 'dd MMM yyyy')}</span>
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
      <main className="flex-1 flex flex-col items-center px-4 py-8 mt-36">
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
        {/* Section En vedette */}
        <section className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
          {/* Effet de dégradé subtil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                En vedette
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">En vedette</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Une sélection mise en avant pour vous</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredVideos.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-10 text-gray-500">
                  <span>Aucun contenu en vedette</span>
                </div>
              ) : (
                featuredVideos.map((video, index) => (
                  <div key={`top-${video.id}`} className="bg-white border border-gray-200 overflow-hidden">
                    <Link href={`/ressources/tutorials/${video.id}`} className="block">
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt=""
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                        {video.isVedette && (
                          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> Vedette
                          </div>
                        )}
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
                          {video.views && <span>{video.views}</span>}
                          <span>•</span>
                          <span>{format(new Date(video.publishedAt), 'dd MMM yyyy')}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>

            {/* Filtres supprimés sur demande */}

            {/* Séparation visuelle */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-gray-500">Tous les tutoriels</span>
              </div>
            </div>

            {/* Grille de tutoriels complète */}
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
