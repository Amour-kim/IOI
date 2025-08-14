"use client";

import Image from "next/image";
import { motPresident } from "@/data/about";

export default function MotPresidentSection() {
  const bg = motPresident.backgroundColor || "#0a1a36"; // bleu foncé par défaut
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="mot-president-heading">
      {/* Fond vivant */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundColor: bg }} />
        {/* Orbes animées */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse" style={{ background: "radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%)" }} />
        <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse" style={{ background: "radial-gradient(circle at 70% 70%, #22d3ee, transparent 60%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-48 blur-2xl opacity-10" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.8), rgba(99,102,241,0.6))" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo du Président */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-400/30 to-cyan-300/20 blur-xl" aria-hidden="true" />
              <Image
                src={motPresident.photo.src}
                alt={motPresident.photo.alt}
                width={motPresident.photo.width ?? 700}
                height={motPresident.photo.height ?? 700}
                className="relative z-10 object-contain drop-shadow-2xl select-none pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="order-1 lg:order-2 text-white">
            <h2 id="mot-president-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Mot du President
            </h2>
            <p className="text-slate-200 mb-2">{motPresident.name}{motPresident.title ? ` — ${motPresident.title}` : ''}</p>
            <p className="text-slate-100/90 leading-relaxed mb-6">
              {motPresident.ambitions}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sky-300 font-semibold mb-2">Objectifs</h3>
                <ul className="list-disc list-inside text-slate-100/90 space-y-1">
                  {motPresident.objectifs.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sky-300 font-semibold mb-2">Missions</h3>
                <ul className="list-disc list-inside text-slate-100/90 space-y-1">
                  {motPresident.missions.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sky-300 font-semibold mb-2">Conseils</h3>
              <ul className="list-disc list-inside text-slate-100/90 space-y-1">
                {motPresident.conseils.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-8 border-l-4 border-sky-400 pl-4 italic text-slate-100">
              “{motPresident.phraseInspirante}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
