"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { allCards } from '@/lib/data';
import { format } from 'date-fns';
import type { ArticleCardType } from '@/lib/data';

// Utilisation du logo principal en arrière-plan
const LOGO_URL = "/logo.png";

export default function RessourcesBlog() {
  // Récupérer les articles depuis allCards
  const blogPosts = allCards
    .filter((card): card is ArticleCardType => card.type === 'article')
    .slice(0, 3) // Limiter à 3 articles pour l'affichage
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden bg-blue-900 rounded-3xl mb-16">
      {/* Logo animé en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <Image
          src={LOGO_URL}
          alt="Logo IOI"
          width={800}
          height={800}
          className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
          style={{ animationDuration: "18s" }}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Blog</h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 text-center max-w-2xl">Retrouvez nos analyses, retours d'expérience et conseils d'experts sur la transformation digitale, l'IA, la cybersécurité, et plus encore.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post, idx) => (
            <Link
              key={post.id}
              href={`/ressources/blog/articles/${post.id}`}
              className="group relative bg-white/90 rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 border border-blue-200"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex gap-2 mb-1">
                  {post.tags && post.tags.slice(0, 2).map((tag: string, i: number) => (
                    <span key={i} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">{post.author}</span>
                  <span className="text-xs text-gray-400">{format(new Date(post.publishedAt), 'dd/MM/yyyy')}</span>
                </div>
              </div>
              {/* Effet lumineux au survol */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-blue-300/30 blur-2xl animate-pulse" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 