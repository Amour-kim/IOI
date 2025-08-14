"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { TutorialItem } from '@/data/ressources/resources.types';
import { tutorialsItems } from '@/data/ressources/tutorials.data';

const LOGO_URL = "/logo.png";

export default function RessourcesTutoriels() {
  // Récupérer les tutoriels centralisés (tri décroissant par date)
  const tutorials: TutorialItem[] = [...tutorialsItems]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="relative py-12 overflow-hidden bg-white">
      {/* Logo animé en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <Image
          src={LOGO_URL}
          alt="Logo IOI"
          width={800}
          height={800}
          className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
          style={{ animationDuration: "22s" }}
          priority
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Tutoriels</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>
          <p className="text-base text-gray-600 text-center max-w-2xl">Progressez à votre rythme grâce à nos tutoriels interactifs, adaptés à tous les niveaux et besoins métiers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutorials.map((tuto, idx) => (
            <Link
              key={tuto.id}
              href={`/ressources/tutorials/${tuto.id}`}
              className="group relative bg-white border border-gray-200 hover:shadow-md transition-all duration-200 h-full flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={tuto.thumbnail}
                  alt={tuto.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1">
                  {tuto.duration}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-blue-600">{tuto.channel}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{format(new Date(tuto.publishedAt), 'dd MMM yyyy')}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{tuto.title}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{tuto.description}</p>
                <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    {tuto.views}
                  </span>
                  <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Voir plus →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 