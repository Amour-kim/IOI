"use client";
import React from "react";
import Link from 'next/link';
import { allCards } from '@/lib/data';
import { format } from 'date-fns';

const LOGO_URL = "/logo.png";

export default function RessourcesTutoriels() {
  // Récupérer les vidéos depuis allCards
  const tutorials = allCards
    .filter(card => card.type === 'video')
    .slice(0, 3) // Limiter à 3 tutoriels pour l'affichage
    .sort((a, b) => new Date((b as any).publishedAt).getTime() - new Date((a as any).publishedAt).getTime());

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden bg-white rounded-3xl mb-16">
      {/* Logo animé en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <img
          src={LOGO_URL}
          alt="Logo IOI"
          className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
          style={{ animationDuration: "22s" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 tracking-tight drop-shadow-lg">Tutoriels</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl">Progressez à votre rythme grâce à nos tutoriels interactifs, adaptés à tous les niveaux et besoins métiers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {tutorials.map((tuto, idx) => (
            <Link
              key={tuto.id}
              href={`/ressources/tutorials/${tuto.id}`}
              className="group relative bg-gray-50/90 rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={tuto.thumbnail}
                  alt={tuto.title}
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex gap-2 mb-1">
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{tuto.duration}</span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{tuto.views}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">{tuto.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{tuto.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">{tuto.channel}</span>
                  <span className="text-xs text-gray-400">{format(new Date(tuto.publishedAt), 'dd/MM/yyyy')}</span>
                </div>
              </div>
              {/* Effet lumineux au survol */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-300/30 blur-2xl animate-pulse" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 