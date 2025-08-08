"use client"

import { useState, useRef, useEffect } from "react"
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
} from "lucide-react"

const ServicesCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Luxe",
      client: "Maison Élégance",
      category: "E-commerce & UX",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Transformation digitale complète d&apos;une maison de couture parisienne avec création d&apos;une plateforme e-commerce haut de gamme.",
      challenge:
        "Digitaliser une marque centenaire tout en préservant son identité luxueuse et son savoir-faire artisanal.",
      solution:
        "Plateforme e-commerce sur-mesure avec expérience immersive, configurateur 3D et service client premium.",
      results: {
        revenue: "+340%",
        conversion: "+85%",
        satisfaction: "98%",
        time: "6 mois",
      },
      technologies: ["Next.js", "Shopify Plus", "Three.js", "Stripe"],
      color: "from-purple-600 to-pink-500",
      testimonial: {
        text: "IOI a su comprendre notre univers et créer une expérience digitale qui reflète parfaitement nos valeurs. Les résultats dépassent nos attentes.",
        author: "Marie Dubois",
        role: "Directrice Marketing",
      },
    },
    {
      id: 2,
      title: "App Fitness Revolution",
      client: "FitTech Pro",
      category: "Application Mobile",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Développement d'une application mobile révolutionnaire pour le coaching sportif personnalisé avec IA.",
      challenge:
        "Créer une app qui rivalise avec les leaders du marché tout en proposant une approche innovante du coaching.",
      solution: "Application native avec IA pour coaching personnalisé, réalité augmentée et communauté intégrée.",
      results: {
        downloads: "500K+",
        retention: "75%",
        rating: "4.8/5",
        time: "8 mois",
      },
      technologies: ["React Native", "TensorFlow", "Firebase", "ARKit"],
      color: "from-green-600 to-emerald-500",
      testimonial: {
        text: "L'équipe IOI a transformé notre vision en réalité. L'app dépasse toutes nos attentes en termes de performance et d'engagement utilisateur.",
        author: "Thomas Martin",
        role: "CEO FitTech Pro",
      },
    },
    {
      id: 3,
      title: "Plateforme SaaS B2B",
      client: "DataFlow Solutions",
      category: "SaaS & Dashboard",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Création d'une plateforme SaaS complète pour la gestion et l'analyse de données en temps réel pour les entreprises.",
      challenge:
        "Développer une solution scalable capable de traiter des millions de données en temps réel avec une UX intuitive.",
      solution:
        "Architecture microservices avec dashboard temps réel, API robuste et système de notifications intelligent.",
      results: {
        clients: "200+",
        uptime: "99.9%",
        performance: "+60%",
        time: "12 mois",
      },
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
      color: "from-blue-600 to-cyan-500",
      testimonial: {
        text: "IOI a livré une plateforme exceptionnelle qui a révolutionné notre façon de travailler. La qualité technique est remarquable.",
        author: "Sophie Laurent",
        role: "CTO DataFlow",
      },
    },
    {
      id: 4,
      title: "Transformation Digitale",
      client: "Groupe Industriel Alpha",
      category: "Digital Transformation",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Modernisation complète du système d'information d'un groupe industriel avec migration cloud et automatisation.",
      challenge: "Moderniser un système legacy de 20 ans sans interrompre les opérations critiques de production.",
      solution: "Migration progressive vers le cloud avec automatisation des processus et formation des équipes.",
      results: {
        efficiency: "+45%",
        costs: "-30%",
        downtime: "0%",
        time: "18 mois",
      },
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
      color: "from-orange-600 to-red-500",
      testimonial: {
        text: "IOI a géré cette transformation complexe avec un professionnalisme exemplaire. Aucune interruption de service pendant 18 mois.",
        author: "Jean-Pierre Moreau",
        role: "Directeur IT",
      },
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[activeCase]

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
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-4 md:mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">Études de Cas</span>
          </div>
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 md:mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Projets Réalisés
          </h2>
          <p
            className={`text-base md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs avec des solutions innovantes
          </p>
        </div>

        {/* Main Case Study */}
        <div
          className={`relative transition-all duration-1000 delay-600 mx-2 sm:mx-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/20 overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[400px] min-h-[300px] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <span className="text-gray-400 text-lg font-medium">
                    {currentCase.client}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <div
                    className={`px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${currentCase.color} text-white text-xs md:text-sm font-semibold rounded-full shadow-lg`}
                  >
                    {currentCase.category}
                  </div>
                </div>

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
                  <p className="text-lg text-blue-600 font-semibold">{currentCase.client}</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">{currentCase.description}</p>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(currentCase.results).map(([key, value], index) => (
                    <div key={key} className="text-center p-4 bg-gray-50/80 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key === "revenue"
                          ? "Chiffre d'affaires"
                          : key === "conversion"
                            ? "Conversion"
                            : key === "satisfaction"
                              ? "Satisfaction"
                              : key === "downloads"
                                ? "Téléchargements"
                                : key === "retention"
                                  ? "Rétention"
                                  : key === "rating"
                                    ? "Note App Store"
                                    : key === "clients"
                                      ? "Clients"
                                      : key === "uptime"
                                        ? "Disponibilité"
                                        : key === "performance"
                                          ? "Performance"
                                          : key === "efficiency"
                                            ? "Efficacité"
                                            : key === "costs"
                                              ? "Réduction coûts"
                                              : key === "downtime"
                                                ? "Interruption"
                                                : "Durée projet"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
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
        <div
          className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveCase(index)}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                  activeCase === index ? "ring-4 ring-blue-500/50 scale-105" : "hover:scale-105 hover:shadow-lg"
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
                  {activeCase === index && (
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
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
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
