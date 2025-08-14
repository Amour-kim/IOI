"use client"

import { useState, useRef, useCallback, useMemo, type ReactNode } from "react"
import Image from "next/image"
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  Award, 
  Target, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Download
} from "lucide-react"
import { projectsItems } from "@/data"
import type { CaseStudy } from "@/data/types"

// Mappage des couleurs pour les badges de catégorie
const categoryColors: Record<string, string> = {
  'Développement Web': 'from-blue-500 to-cyan-500',
  'Application Mobile': 'from-purple-500 to-pink-500',
  'E-commerce': 'from-green-500 to-emerald-500',
  'UI/UX Design': 'from-amber-500 to-orange-500',
  'Consulting': 'from-rose-500 to-pink-500',
  'Formation': 'from-indigo-500 to-blue-500'
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  isActive: boolean
  onClick: () => void
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, isActive, onClick }) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive ? 'ring-4 ring-blue-500 scale-105' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div className="relative h-40 md:h-48">
        <Image
          src={caseStudy.image?.src || '/images/placeholder-project.jpg'}
          alt={caseStudy.image?.alt || caseStudy.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg">{caseStudy.title}</h3>
          <p className="text-sm text-gray-200">{caseStudy.client}</p>
        </div>
      </div>
    </div>
  )
}

const ServicesCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Récupération depuis les projets centralisés et adaptation au format attendu par le design
  const caseStudies = useMemo<CaseStudy[]>(() => {
    return projectsItems.map((p) => ({
      id: p.id,
      title: p.title,
      client: p.client || "Client",
      category: p.category || "Projet",
      slug: p.slug,
      image: p.image,
      description: p.description,
      challenge: "",
      solution: "",
      results: p.results || {},
      technologies: p.technologies || [],
      color: categoryColors[p.category as string] ? categoryColors[p.category as string] : "from-blue-600 to-cyan-600",
      testimonial: {
        text: p.content || "Projet réalisé avec succès.",
        author: p.client || "Client",
        role: `${p.category || "Projet"} • ${p.year || ""}`.trim(),
      },
      date: p.year ? new Date(p.year, 0, 1) : new Date(),
      duration: undefined,
      teamSize: undefined,
      budget: undefined,
      tags: p.technologies || [],
      links: p.link ? [{ href: p.link, label: "Voir le projet", isExternal: true }] : [],
    }))
  }, [])

  const currentCase = caseStudies[activeIndex]

  const nextCase = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % caseStudies.length)
  }, [caseStudies.length])

  const prevCase = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + caseStudies.length) % caseStudies.length)
  }, [caseStudies.length])

  const selectCase = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Mappage des icônes pour les résultats
  const resultIcons = useMemo<Record<string, ReactNode>>(() => ({
    revenue: <TrendingUp className="w-5 h-5 text-green-500" />,
    conversion: <TrendingUp className="w-5 h-5 text-blue-500" />,
    satisfaction: <Star className="w-5 h-5 text-yellow-500" />,
    downloads: <Download className="w-5 h-5 text-purple-500" />,
    clients: <Users className="w-5 h-5 text-cyan-500" />,
    performance: <Zap className="w-5 h-5 text-amber-500" />
  }), [])

  // Traduction des clés de résultats
  const getResultLabel = (key: string): string => {
    const labels: Record<string, string> = {
      revenue: "Chiffre d'affaires",
      conversion: "Taux de conversion",
      satisfaction: "Satisfaction client",
      downloads: "Téléchargements",
      retention: "Taux de rétention",
      rating: "Note moyenne",
      clients: "Nouveaux clients",
      uptime: "Disponibilité",
      performance: "Performance",
      efficiency: "Efficacité",
      costs: "Réduction des coûts",
      downtime: "Temps d'arrêt",
      default: key
    }
    return labels[key] || labels.default
  }

  if (!currentCase) {
    return (
      <section ref={sectionRef} className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p>Aucune étude de cas disponible pour le moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-4 md:left-20 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-4 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-4 md:mb-6">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">Études de Cas</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Projets Réalisés
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs avec des solutions innovantes
          </p>
        </div>

        {/* Main Case Study */}
        <div className="relative mx-2 sm:mx-0">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/20 overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[400px] min-h-[300px] bg-gray-100">
                {currentCase.image?.src ? (
                  <Image
                    src={currentCase.image.src}
                    alt={currentCase.image.alt || currentCase.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                    <span className="text-gray-400 text-lg font-medium">
                      {currentCase.client}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Category Badge */}
                {currentCase.category && (
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <div className={`px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${
                      categoryColors[currentCase.category] || 'from-gray-600 to-gray-800'
                    } text-white text-xs md:text-sm font-semibold rounded-full shadow-lg`}>
                      {currentCase.category}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2">
                  <button
                    onClick={prevCase}
                    className="p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                  <button
                    onClick={nextCase}
                    className="p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentCase.title}</h3>
                  {currentCase.client && (
                    <p className="text-lg text-blue-600 font-semibold">{currentCase.client}</p>
                  )}
                </div>

                {currentCase.description && (
                  <p className="text-gray-600 leading-relaxed mb-8">{currentCase.description}</p>
                )}

                {/* Results Grid */}
                {currentCase.results && Object.keys(currentCase.results).length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {(() => {
                      const r = currentCase.results as Record<string, string | undefined>
                      const entries = Object.keys(r)
                        .map((k) => ({ key: k, value: r[k] }))
                        .filter((e): e is { key: string; value: string } => typeof e.value === 'string' && e.value.length > 0)
                      return entries.map(({ key, value }) => (
                        <div key={key} className="text-center p-4 bg-gray-50/80 rounded-xl">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            {resultIcons[key] ?? <TrendingUp className="w-5 h-5 text-gray-400" />}
                            <div className="text-2xl font-bold text-gray-900">{value}</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            {getResultLabel(key)}
                          </div>
                        </div>
                      ))
                    })()}
                  </div>
                )}

                {/* Technologies */}
                {currentCase.technologies && currentCase.technologies.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-3">"{currentCase.testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{currentCase.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{currentCase.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`flex-1 py-4 px-6 bg-gradient-to-r ${currentCase.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    Voir le projet complet
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                  <button className="flex-1 py-4 px-6 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Target className="w-5 h-5" />
                    Projet similaire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Thumbnails */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveIndex(index)}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                  activeIndex === index ? "ring-4 ring-blue-500/50 scale-105" : "hover:scale-105 hover:shadow-lg"
                }`}
              >
                <div className="aspect-video relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                    <span className="text-gray-400 text-sm">
                      {caseStudy.client}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white font-semibold text-sm mb-1">{caseStudy.title}</h4>
                    <p className="text-white/80 text-xs">{caseStudy.client}</p>
                  </div>
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Résultats Globaux</h3>
              <p className="text-gray-600">L'impact de nos solutions sur le business de nos clients</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  value: "+250%",
                  label: "Croissance moyenne",
                  color: "from-green-500 to-emerald-500",
                },
                { icon: Users, value: "2M+", label: "Utilisateurs touchés", color: "from-blue-500 to-cyan-500" },
                { icon: Clock, value: "99.9%", label: "Uptime moyen", color: "from-purple-500 to-pink-500" },
                { icon: Star, value: "4.9/5", label: "Satisfaction client", color: "from-orange-500 to-yellow-500" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} items-center justify-center shadow-lg mb-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCaseStudies
