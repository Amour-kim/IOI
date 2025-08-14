"use client"

import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Star,
  Crown,
} from "lucide-react"
import { useMemo, useState } from "react"
import { aboutHistory, getAboutTimelinePeriodControls, getAboutTimelinePeriods } from "@/data/about"

export default function History() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Periods and controls built from centralized data
  const periods = useMemo(() => getAboutTimelinePeriods(aboutHistory), [])
  const controls = useMemo(() => getAboutTimelinePeriodControls(aboutHistory), [])
  const slidesCount = controls.length

  // Désactivation du défilement automatique
  // Le défilement se fait uniquement au clic sur les boutons de période

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      <section className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative z-10 p-4 md:p-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
              <Crown className="inline-block w-8 h-8 md:w-12 md:h-12 text-amber-600 mr-2 md:mr-4" />
              Histoire & Vision Fondatrice de IOI
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
              Découvrez la naissance, la croissance et l'ambition d'IOI — une
              entreprise visionnaire créée pour transformer le numérique
              éducatif, administratif et institutionnel en Afrique. Une histoire
              bâtie sur l'innovation, l'engagement communautaire et la
              souveraineté technologique africaine.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-white rounded-full shadow-lg border border-amber-200 p-0.5 md:p-2 max-w-full overflow-x-auto">
              <div className="flex flex-nowrap space-x-0.5 md:space-x-1">
                {controls.map((era, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-xs md:text-sm font-bold whitespace-nowrap ${
                      currentSlide === index
                        ? "bg-amber-600 text-white shadow-md"
                        : "text-amber-700 hover:text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    <div>{era.title}</div>
                    {era.startDate && (
                      <div className="text-[10px] md:text-xs font-normal">
                        {new Date(era.startDate).getFullYear()}{" "}
                        {era.endDate
                          ? ` - ${new Date(era.endDate).getFullYear()}`
                          : ""}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu Historique Détaillé */}
          <div className="max-w-full md:max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-blue-50 w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out select-none touch-pan-x will-change-transform"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {periods.map((p) => (
                    <div
                      key={p.id}
                      className="w-full flex-shrink-0 p-4 sm:p-6 md:p-12 overflow-x-hidden overflow-y-visible"
                    >
                      <div className="text-center mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-amber-800 mb-2 md:mb-4 whitespace-normal break-words hyphens-auto max-w-3xl mx-auto">
                          {p.title}
                        </h3>
                        <div
                          className="h-1 w-20 md:w-24 mx-auto rounded-full mb-3 md:mb-4"
                          style={{ backgroundColor: p.color || '#F59E0B' }}
                        />
                        {p.summary && (
                          <p className="text-base md:text-lg text-amber-700 italic break-words max-w-4xl mx-auto">
                            {p.summary}
                          </p>
                        )}
                      </div>

                      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
                        {(p.milestones || []).map((m) => (
                          <div
                            key={m.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-start"
                          >
                            <div className="order-2 lg:order-1">
                              <h4 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center break-words">
                                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-600 mr-2 md:mr-3" />
                                {m.title}
                              </h4>
                              {m.date && (
                                <p className="text-slate-500 text-xs mb-2">
                                  {new Date(m.date).toLocaleDateString(
                                    "fr-FR",
                                    { year: "numeric", month: "long" }
                                  )}
                                </p>
                              )}
                              {m.description && (
                                <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 break-words">
                                  {m.description}
                                </p>
                              )}
                              {m.highlights && m.highlights.length > 0 && (
                                <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 break-words">
                                  {m.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            <div className="order-1 lg:order-2">
                              <div className="relative">
                                <div className="aspect-video sm:aspect-[4/3] md:aspect-video bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                                  {m.media?.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                      src={m.media.image.src}
                                      alt={m.media.image.alt}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <Target className="w-16 h-16 text-amber-700" />
                                  )}
                                </div>
                                <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow-lg">
                                  <Star className="w-6 h-6 text-amber-600" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              className="bg-white/80 backdrop-blur-sm border-amber-300 hover:bg-amber-50"
              aria-label="Période précédente"
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + slidesCount) % slidesCount
                )
              }
            >
              <ChevronLeft className="w-4 h-4 text-amber-600" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-amber-600 w-8" : "bg-amber-300"
                  }`}
                  aria-label={`Aller à la période ${index + 1}: ${
                    controls[index]?.title ?? ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <Button
              className="bg-white/80 backdrop-blur-sm border-amber-300 hover:bg-amber-50"
              aria-label="Période suivante"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slidesCount)
              }
            >
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </Button>
          </div>

          {/* IOI Demain : L'Avenir en Construction */}
          <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8">
            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              🌍 IOI Demain : L'Avenir en Construction
            </h4>
            <p className="text-slate-700 text-center mb-8 leading-relaxed">
              IOI aspire à devenir{" "}
              <strong>le cœur numérique de l'éducation africaine</strong>. Son
              ambition est de transformer le paysage éducatif du continent.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">10</div>
                <div className="text-slate-600">Pays africains d'ici 2030</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Cloud
                </div>
                <div className="text-slate-600">
                  Africain souverain éducatif
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100K+
                </div>
                <div className="text-slate-600">Jeunes formés en 5 ans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  IOI
                </div>
                <div className="text-slate-600">Label CERTIFIÉ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
