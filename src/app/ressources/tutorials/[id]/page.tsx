"use client";
import { notFound, useParams } from "next/navigation";
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import Visite from '@/components/ui/visite';
import ContactUs from '@/components/ui/contact_us';
import type { TutorialItem } from '@/data/ressources/resources.types';
import { tutorialsItems } from '@/data/ressources/tutorials.data';

export default function VideoDetailPage() {
  const params = useParams() as { id?: string | string[] };
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const idNum = Number(idParam);
  const video: TutorialItem | undefined = tutorialsItems.find(t => t.id === idNum);

  // Hooks must be called unconditionally; compute similar videos with guards
  const similarVideos: TutorialItem[] = useMemo(() => {
    if (!video) return [];
    return tutorialsItems
      .filter(v => v.id !== video.id && v.tags?.some(tag => video.tags.includes(tag)))
      .slice(0, 6);
  }, [video?.id, video?.tags]);

  // Validate after hooks are declared to satisfy rules-of-hooks
  if (!idParam || Number.isNaN(idNum) || !video) return notFound();

  // Section commentaires supprimée (type TutorialItem ne contient pas 'comments')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50 text-[#1a1a1a]">
      <ModernNavbar />
      <SocialSidebar />
      <main className="flex-1 flex flex-col items-center px-4 py-8 mt-36">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
          {/* Video player + infos */}
          <div className="flex-1 min-w-0">
            <div className="relative w-full aspect-video overflow-hidden mb-4 bg-black">
              {video.format === 'video' ? (
                <video
                  src={video.url}
                  controls
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Link href={video.url} className="block w-full h-full text-center text-white flex items-center justify-center">
                  Ouvrir l'article
                </Link>
              )}
            </div>
            {/* Titre & infos */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-700">{video.title}</h1>
            <div className="flex items-center gap-3 mb-4">
              {video.channelAvatar && (
                <Image src={video.channelAvatar} alt={video.channel ?? 'Auteur'} width={40} height={40} className="rounded-full border border-blue-200" />
              )}
              <span className="font-semibold text-blue-700">{video.channel ?? '—'}</span>
              <span className="text-gray-400 text-sm">{video.views ?? '—'} • {video.duration ?? ''}</span>
            </div>
            <p className="text-gray-700 mb-4">{video.description}</p>
            {/* Tags */}
            {video.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {video.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">#{tag}</span>
                ))}
              </div>
            )}
            {/* Commentaires supprimés */}
          </div>
          {/* Liste vidéos similaires */}
          <aside className="w-full lg:w-96 flex-shrink-0">
            <h2 className="text-lg font-bold mb-4 text-blue-700">Vidéos similaires</h2>
            <div className="flex flex-col gap-4">
              {similarVideos.length === 0 && <div className="text-gray-400">Aucune vidéo similaire</div>}
              {similarVideos.map((v: TutorialItem) => (
                <Link key={v.id} href={`/ressources/tutorials/${v.id}`} className="flex gap-3 items-center bg-white/80 rounded-lg shadow hover:shadow-lg transition p-2 group">
                  <div className="w-28 h-16 overflow-hidden flex-shrink-0">
                    <Image src={v.thumbnail} alt={v.title} width={112} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-orange-700 group-hover:underline line-clamp-2">{v.title}</div>
                    <div className="text-xs text-gray-500">{v.channel ?? '—'}</div>
                    <div className="text-xs text-gray-400">{v.views ?? '—'} • {v.duration ?? ''}</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
        {/* Retour */}
        <Link href="/ressources/tutorials" className="mt-8 inline-block text-blue-700 hover:underline font-semibold">← Retour aux tutoriels</Link>
      </main>
      {/* Visite & ContactUs */}
      <div className="mt-8 space-y-8">
        <Visite />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}