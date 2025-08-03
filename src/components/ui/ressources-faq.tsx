"use client";
import React, { useState } from "react";
import type { FAQItem } from '@/lib/data';

const LOGO_URL = "/logo.png";

export default function RessourcesFAQ({ data }: { data: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-amber-50/80 to-orange-100/60 rounded-3xl shadow-xl mb-16">
      {/* Logo animé en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <img
          src={LOGO_URL}
          alt="Logo IOI"
          className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
          style={{ animationDuration: "28s" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-2 tracking-tight drop-shadow-lg">FAQ</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">Questions fréquentes sur l'accès, la contribution et l'utilisation de la plateforme de ressources.</p>
        <div className="w-full max-w-2xl mx-auto space-y-4">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white/80 rounded-xl shadow-md border border-amber-100 overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-base md:text-lg font-semibold text-amber-700 group-hover:text-amber-600 transition-colors">{item.question}</span>
                <svg
                  className={`w-6 h-6 text-amber-400 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-4 text-gray-700 text-sm md:text-base transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                style={{ overflow: "hidden" }}
                aria-hidden={openIndex !== idx}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 