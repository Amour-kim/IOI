"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  ShoppingCart,
  Users,
  BarChart2,
  Globe2,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

const services = [
  {
    color: "from-blue-600 via-blue-500 to-cyan-400",
    shadowColor: "rgba(59, 130, 246, 0.4)",
    icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Développement Web",
    text: "Sites vitrines, e-commerce, plateformes sur-mesure avec les dernières technologies.",
    features: ["React/Next.js", "Node.js", "Base de données", "API REST"],
    href: "/services/developpement-web",
  },
  {
    color: "from-green-600 via-green-500 to-emerald-400",
    shadowColor: "rgba(34, 197, 94, 0.4)",
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Application Mobile",
    text: "Apps iOS & Android natives ou hybrides pour une expérience optimale.",
    features: ["React Native", "Flutter", "iOS/Android", "App Store"],
    href: "/services/mobile",
  },
  {
    color: "from-pink-600 via-pink-500 to-rose-400",
    shadowColor: "rgba(236, 72, 153, 0.4)",
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Design & UI/UX",
    text: "Identité visuelle, maquettes et expérience utilisateur exceptionnelle.",
    features: ["Figma", "Adobe Suite", "Prototypage", "User Research"],
    href: "/services/design",
  },
  {
    color: "from-yellow-600 via-yellow-500 to-amber-400",
    shadowColor: "rgba(245, 158, 11, 0.4)",
    icon: <Megaphone className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Marketing Digital",
    text: "SEO, SEA, réseaux sociaux et campagnes ciblées pour votre croissance.",
    features: ["SEO/SEA", "Social Media", "Analytics", "Content"],
    href: "/services/marketing",
  },
  {
    color: "from-orange-600 via-orange-500 to-red-400",
    shadowColor: "rgba(249, 115, 22, 0.4)",
    icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "E-commerce",
    text: "Boutiques en ligne performantes, sécurisées et optimisées pour la conversion.",
    features: ["Shopify", "WooCommerce", "Paiements", "Logistique"],
    href: "/services/e-commerce",
  },
  {
    color: "from-cyan-600 via-cyan-500 to-teal-400",
    shadowColor: "rgba(8, 145, 178, 0.4)",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Conseil & Formation",
    text: "Accompagnement stratégique, audit et coaching digital personnalisé.",
    features: ["Audit", "Stratégie", "Formation", "Coaching"],
    href: "/services/conseil-formation",
  },
  {
    color: "from-purple-600 via-purple-500 to-indigo-400",
    shadowColor: "rgba(147, 51, 234, 0.4)",
    icon: <BarChart2 className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Data & Analytics",
    text: "Analyse de données avancée, reporting intelligent et dashboards interactifs.",
    features: ["Big Data", "BI", "Machine Learning", "Reporting"],
    href: "/services/data-analytics",
  },
  {
    color: "from-teal-600 via-teal-500 to-green-400",
    shadowColor: "rgba(20, 184, 166, 0.4)",
    icon: <Globe2 className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Cloud & Hébergement",
    text: "Solutions cloud scalables, serveurs haute performance et sécurité renforcée.",
    features: ["AWS/Azure", "DevOps", "Sécurité", "Monitoring"],
    href: "/services/cloud",
  },
]

export default function InfographicSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Responsive dimensions
  const getResponsiveDimensions = () => {
    if (windowSize.width < 640) {
      return { radius: 140, center: 180, cardSize: 80 }
    } else if (windowSize.width < 768) {
      return { radius: 180, center: 220, cardSize: 90 }
    } else if (windowSize.width < 1024) {
      return { radius: 220, center: 260, cardSize: 100 }
    } else {
      return { radius: 260, center: 300, cardSize: 110 }
    }
  }

  const { radius, center, cardSize } = getResponsiveDimensions()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Intersection Observer pour l'animation d'entrée
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

    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [])

  const handleServiceEnter = (i: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setHoveredIndex(i)
  }

  const handleServiceLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredIndex(null), 100)
  }

  const handlePopupEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
  }

  const handlePopupLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          // Utiliser des valeurs fixes basées sur l'index pour éviter l'hydratation
          const positions = [
            { left: "5%", top: "15%", delay: "0.5s", duration: "4s" },
            { left: "85%", top: "25%", delay: "1.2s", duration: "5s" },
            { left: "15%", top: "75%", delay: "0.8s", duration: "3.5s" },
            { left: "75%", top: "85%", delay: "2.1s", duration: "4.5s" },
            { left: "45%", top: "10%", delay: "1.5s", duration: "6s" },
            { left: "25%", top: "45%", delay: "0.3s", duration: "4.2s" },
            { left: "65%", top: "55%", delay: "2.8s", duration: "3.8s" },
            { left: "10%", top: "35%", delay: "1.8s", duration: "5.2s" },
            { left: "90%", top: "65%", delay: "0.7s", duration: "4.8s" },
            { left: "35%", top: "80%", delay: "2.3s", duration: "3.2s" },
            { left: "55%", top: "20%", delay: "1.1s", duration: "5.5s" },
            { left: "20%", top: "60%", delay: "0.9s", duration: "4.1s" },
            { left: "80%", top: "40%", delay: "2.5s", duration: "3.9s" },
            { left: "30%", top: "25%", delay: "1.4s", duration: "5.8s" },
            { left: "70%", top: "75%", delay: "0.6s", duration: "4.3s" },
            { left: "40%", top: "50%", delay: "2.0s", duration: "3.7s" },
            { left: "60%", top: "30%", delay: "1.7s", duration: "5.1s" },
            { left: "50%", top: "70%", delay: "0.4s", duration: "4.6s" },
            { left: "25%", top: "85%", delay: "2.7s", duration: "3.4s" },
            { left: "75%", top: "15%", delay: "1.3s", duration: "5.3s" },
          ]
          
          const pos = positions[i % positions.length]
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
                animationDuration: pos.duration,
              }}
            />
          )
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Nos Expertises</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Services Premium
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services digitaux pour propulser votre entreprise vers le succès
          </p>
        </div>

        {/* Orbital Services */}
        <div className="relative flex justify-center items-center">
          <div
            className="relative mx-auto"
            style={{
              width: center * 2,
              height: center * 2,
              minWidth: 320,
              minHeight: 320,
            }}
          >
            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/40 animate-spin-slow"></div>
            <div
              className="absolute rounded-full border border-dashed border-purple-200/30"
              style={{
                left: "10%",
                top: "10%",
                right: "10%",
                bottom: "10%",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Services Container */}
            <div className="absolute inset-0">
              {/* Rotating container for orbital motion */}
              <div
                className={`
                  w-full h-full transition-all duration-1000 ease-out
                  ${isVisible ? "animate-orbit" : ""}
                  ${hoveredIndex !== null ? "animation-paused" : ""}
                `}
              >
                {services.map((service, i) => {
                  const angle = (360 / services.length) * i - 90
                  const rad = (angle * Math.PI) / 180
                  const x = center + radius * Math.cos(rad) - cardSize / 2
                  const y = center + radius * Math.sin(rad) - cardSize / 2

                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: x,
                        top: y,
                        width: cardSize,
                        height: cardSize,
                      }}
                    >
                      {/* Counter-rotating container to keep cards upright */}
                      <div
                        className={`
                          w-full h-full transition-all duration-1000 ease-out
                          ${isVisible ? "animate-counter-orbit" : ""}
                          ${hoveredIndex !== null ? "animation-paused" : ""}
                        `}
                      >
                        <Link
                          href={service.href}
                          className={`
                            group relative w-full h-full flex flex-col items-center justify-center
                            bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl
                            border border-white/40 shadow-xl hover:shadow-2xl
                            transition-all duration-500 ease-out cursor-pointer overflow-hidden
                            transform hover:scale-110 hover:-translate-y-2
                            ${hoveredIndex === i ? "scale-110 -translate-y-2 z-20" : "hover:z-10"}
                          `}
                          onMouseEnter={() => handleServiceEnter(i)}
                          onMouseLeave={handleServiceLeave}
                          style={{
                            boxShadow: `0 10px 40px ${service.shadowColor}, 0 0 0 1px rgba(255,255,255,0.1)`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        >
                          {/* Gradient overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl md:rounded-3xl`}
                          />

                          {/* Ripple effect */}
                          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                          </div>

                          {/* Icon */}
                          <div
                            className={`
                              relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl 
                              bg-gradient-to-br ${service.color} 
                              flex items-center justify-center shadow-lg mb-2 md:mb-3
                              group-hover:shadow-2xl group-hover:scale-110
                              transition-all duration-300
                            `}
                          >
                            {service.icon}
                            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Title */}
                          <div className="text-xs md:text-sm font-bold text-gray-800 text-center px-2 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                            {service.title}
                          </div>

                          {/* Subtitle */}
                          <div className="text-[10px] md:text-xs text-gray-500 text-center px-2 leading-tight group-hover:text-blue-500 transition-colors duration-300">
                            {service.text.split(",")[0]}
                          </div>

                          {/* Hover indicator */}
                          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                          </div>

                          {/* Active indicator */}
                          {hoveredIndex === i && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
                            </div>
                          )}
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Central Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div
                className="relative bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border-4 border-white/60 overflow-hidden group cursor-pointer"
                style={{
                  width: Math.min(180, center * 0.6),
                  height: Math.min(180, center * 0.6),
                }}
              >
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-1 rounded-full bg-white/90 backdrop-blur-xl" />

                <img
                  src="/logo.png"
                  alt="IOI Logo"
                  className="relative w-full h-full object-cover object-center p-4 group-hover:scale-110 transition-transform duration-500"
                  draggable={false}
                />

                {/* Floating elements around logo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-1000" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce delay-2000" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Popup */}
        {hoveredIndex !== null && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onMouseEnter={handlePopupEnter}
            onMouseLeave={handlePopupLeave}
            onClick={handlePopupLeave}
          >
            <div
              className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8 max-w-md w-full animate-popup-in overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background decorations */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100/80 hover:bg-gray-200/80 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
                onClick={handlePopupLeave}
              >
                ×
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${services[hoveredIndex].color} items-center justify-center shadow-xl mb-4`}
                >
                  {services[hoveredIndex].icon}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{services[hoveredIndex].title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{services[hoveredIndex].text}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Technologies & Expertises
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {services[hoveredIndex].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50/80 rounded-lg border border-gray-100/50"
                    >
                      <Zap className="w-3 h-3 text-blue-500" />
                      <span className="text-xs font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={services[hoveredIndex].href}
                className={`
                  block w-full text-center py-3 px-6 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${services[hoveredIndex].color}
                  hover:shadow-lg hover:scale-105 active:scale-95
                  transition-all duration-300 group
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  Découvrir ce service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* Bottom text */}
        <div className="text-center mt-12 md:mt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm md:text-base font-medium text-gray-700">
              Excellence • Innovation • Performance
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes popup-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-orbit {
          animation: orbit 30s linear infinite;
        }

        .animate-counter-orbit {
          animation: counter-orbit 30s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-popup-in {
          animation: popup-in 0.3s ease-out;
        }

        .animation-paused {
          animation-play-state: paused !important;
        }

        .animation-paused * {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  )
}
