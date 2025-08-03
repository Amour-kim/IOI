"use client";
import { notFound } from "next/navigation";
import { allCards } from '@/lib/data';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Visite from '@/components/ui/visite';
import ContactUs from '@/components/ui/contact_us';
import { useParams } from 'next/navigation';
import { CommentType, VideoCardType } from '@/lib/data';

export default function VideoDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
  const video = allCards.find(card => card.type === 'video' && String(card.id) === id) as VideoCardType | undefined;
  if (!video) return notFound();
  // Trouver les vidéos similaires (tags seulement)
  const similarVideos = allCards.filter(
    v => v.type === 'video' && v.id !== video.id &&
      v.tags && video.tags && v.tags.some(tag => video.tags!.includes(tag))
  ).slice(0, 6) as VideoCardType[];

  // Nouveau formulaire de commentaire, simple et élégant
  const CommentForm = () => (
    <form className="mb-6 w-full max-w-lg flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="user" className="text-xs text-gray-500 font-medium">Nom</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Votre nom"
          className="px-4 py-2 rounded-full border border-gray-300 focus:border-orange-500 focus:outline-none text-sm bg-white transition shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="comment" className="text-xs text-gray-500 font-medium">Commentaire</label>
        <textarea
          id="comment"
          name="comment"
          rows={2}
          placeholder="Votre commentaire..."
          className="px-4 py-2 rounded-2xl border border-gray-300 focus:border-orange-500 focus:outline-none text-sm bg-white transition shadow-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="self-end bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full text-sm shadow transition-all mt-2"
      >
        Envoyer
      </button>
    </form>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50 text-[#1a1a1a]">
      <ModernNavbar />
      <SocialSidebar />
      <main className="flex-1 flex flex-col items-center px-4 py-8 mt-24">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
          {/* Video player + infos */}
          <div className="flex-1 min-w-0">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black">
              <video
                src={video.videoUrl}
                controls
                poster={video.thumbnail}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Titre & infos */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-700">{video.title}</h1>
            <div className="flex items-center gap-3 mb-4">
              <Image src={video.channelAvatar} alt={video.channel} width={40} height={40} className="rounded-full border border-blue-200" />
              <span className="font-semibold text-blue-700">{video.channel}</span>
              <span className="text-gray-400 text-sm">{video.views} • {video.time}</span>
            </div>
            <p className="text-gray-700 mb-4">{video.description}</p>
            {/* Tags */}
            {video.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {video.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">#{tag}</span>
                ))}
              </div>
            )}
            {/* Commentaires */}
            <div className="w-full bg-white/80 rounded-xl shadow p-6 mb-8">
              <h2 className="text-lg font-bold mb-4 text-blue-700">Commentaires</h2>
              <CommentForm />
              <div className="space-y-4 mt-4">
                {video.comments && video.comments.length > 0 ? (
                  video.comments.map((comment: CommentType) => (
                    <div key={comment.id} className="flex items-start gap-3">
                      <Image src={comment.avatar} alt={comment.user} width={32} height={32} className="rounded-full border border-blue-100" />
                      <div>
                        <div className="font-semibold text-orange-700">{comment.user}</div>
                        <div className="text-xs text-gray-400 mb-1">{comment.time}</div>
                        <div className="text-gray-700 text-sm">{comment.text}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 text-sm">Aucun commentaire pour cette vidéo.</div>
                )}
              </div>
            </div>
          </div>
          {/* Liste vidéos similaires */}
          <aside className="w-full lg:w-96 flex-shrink-0">
            <h2 className="text-lg font-bold mb-4 text-blue-700">Vidéos similaires</h2>
            <div className="flex flex-col gap-4">
              {similarVideos.length === 0 && <div className="text-gray-400">Aucune vidéo similaire</div>}
              {similarVideos.map((v: VideoCardType) => (
                <Link key={v.id} href={`/ressources/tutorials/${v.id}`} className="flex gap-3 items-center bg-white/80 rounded-lg shadow hover:shadow-lg transition p-2 group">
                  <div className="w-28 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image src={v.thumbnail} alt={v.title} width={112} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-orange-700 group-hover:underline line-clamp-2">{v.title}</div>
                    <div className="text-xs text-gray-500">{v.channel}</div>
                    <div className="text-xs text-gray-400">{v.views} • {v.time}</div>
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