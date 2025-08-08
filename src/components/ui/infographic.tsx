"use client"

import { useEffect, useMemo, useRef, useState, JSX } from "react"
import Link from "next/link"
import Image from "next/image"
import { Code, Smartphone, Cloud, Headset, ShieldCheck, GraduationCap, Globe2, ArrowRight, Sparkles, Star, Zap, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Types
type Service = {
  color: string
  shadowColor: string
  icon: JSX.Element
  title: string
  text: string
  features: string[]
  href: string
}

// Data
const services: Service[] = [
  {
    color: "from-blue-600 via-blue-500 to-cyan-400",
    shadowColor: "rgba(59, 130, 246, 0.4)",
    icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Développement Web",
    text: "Sites vitrines, applications web et plateformes sur-mesure avec les dernières technologies.",
    features: ["React/Next.js", "Node.js", "Bases de données", "API REST"],
    href: "/services/development",
  },
  {
    color: "from-green-600 via-green-500 to-emerald-400",
    shadowColor: "rgba(34, 197, 94, 0.4)",
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Applications Mobiles",
    text: "Développement d'applications iOS et Android natives ou cross-platform.",
    features: ["React Native", "Expo", "iOS/Android", "Publication"],
    href: "/services/applications-mobiles",
  },
  {
    color: "from-purple-600 via-purple-500 to-indigo-400",
    shadowColor: "rgba(168, 85, 247, 0.4)",
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Intelligence Artificielle",
    text: "Solutions IA personnalisées pour automatiser et optimiser vos processus.",
    features: ["Chatbots", "Traitement NLP", "Vision par ordinateur", "ML"],
    href: "/services/ia-intelligence-artificielle",
  },
  {
    color: "from-red-600 via-red-500 to-pink-400",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Cybersécurité",
    text: "Protégez vos données et systèmes contre les cybermenaces avec nos solutions avancées.",
    features: ["Audit de sécurité", "Pentesting", "Sécurisation", "Sensibilisation"],
    href: "/services/cybersecurite",
  },
  {
    color: "from-amber-600 via-amber-500 to-yellow-400",
    shadowColor: "rgba(245, 158, 11, 0.4)",
    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Solutions Cloud",
    text: "Migration, déploiement et gestion de vos infrastructures dans le cloud.",
    features: ["AWS/Azure", "Migration", "Optimisation", "Sauvegarde"],
    href: "/services/solutions-cloud",
  },
  {
    color: "from-indigo-600 via-indigo-500 to-blue-400",
    shadowColor: "rgba(99, 102, 241, 0.4)",
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Formation",
    text: "Formations personnalisées pour maîtriser les technologies numériques.",
    features: ["Sur mesure", "Certifiante", "À distance", "En présentiel"],
    href: "/services/formation",
  },
  {
    color: "from-teal-600 via-teal-500 to-emerald-400",
    shadowColor: "rgba(20, 184, 166, 0.4)",
    icon: <Headset className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "Support Technique",
    text: "Assistance et maintenance pour garantir le bon fonctionnement de vos systèmes.",
    features: ["Télémaintenance", "Dépannage", "Mise à jour", "Assistance 24/7"],
    href: "https://www.instagram.com/ioi_consulting_/"
  }
]

export default function InfographicSection() {
  // UI states
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null) // modal on mobile / click
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Responsive dimensions computed from width
  const dims = useMemo(() => {
    if (typeof window === 'undefined') return { radius: 260, center: 300, cardSize: 110 }
    const w = window.innerWidth
    if (w < 640) return { radius: 140, center: 180, cardSize: 80 }
    if (w < 768) return { radius: 180, center: 220, cardSize: 90 }
    if (w < 1024) return { radius: 220, center: 260, cardSize: 100 }
    return { radius: 260, center: 300, cardSize: 110 }
  }, [windowSize.width])
  const { radius, center, cardSize } = dims

  // Effects
  useEffect(() => {
    // Detect touch/coarse pointer devices to tailor UX
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mm = window.matchMedia("(pointer: coarse)")
      const listener = () => setIsTouch(mm.matches)
      listener()
      mm.addEventListener("change", listener)
      return () => mm.removeEventListener("change", listener)
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      })
    }
    
    // Set initial size
    handleResize()
    
    // Add event listener
    window.addEventListener("resize", handleResize, { passive: true })

    // Intersection Observer for reveal animation
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setIsVisible(true)
        },
        { threshold: 0.3 }
      )
      if (sectionRef.current) observer.observe(sectionRef.current)
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (observer) observer.disconnect()
    }
  }, [])

  // Handlers
  const handleServiceEnter = (i: number) => {
    if (isTouch) return
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setHoveredIndex(i)
  }
  const handleServiceLeave = () => {
    if (isTouch) return
    hoverTimeout.current = setTimeout(() => setHoveredIndex(null), 100)
  }

  const openPopupFor = (i: number) => {
    // Defer opening to avoid any potential event propagation issues on mobile
    // when the overlay mounts in the same tick.
    setTimeout(() => {
      setOpenIndex(i)
      setHoveredIndex(null) // ensure hover state doesn't conflict
    }, 0)
  }

  const closePopup = () => setOpenIndex(null)

  // Helpers
  const isPopupOpen = openIndex !== null
  const activeIndex = (hoveredIndex ?? openIndex) as number | null

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden"
      aria-label="Services Premium - représentation orbitale"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000" />
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => {
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
                animationDelay: pos.delay as string,
                animationDuration: pos.duration as string,
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
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/40 animate-spin-slow" />
            <div
              className="absolute rounded-full border border-dashed border-purple-200/30"
              style={{
                left: "10%",
                top: "10%",
                right: "10%",
                bottom: "10%",
                animationDirection: "reverse",
              }}
            />

            {/* Services */}
            <div className="absolute inset-0">
              <div
                className={[
                  "w-full h-full transition-all duration-1000 ease-out",
                  isVisible ? "animate-orbit" : "",
                  hoveredIndex !== null || isPopupOpen ? "animation-paused" : "",
                ].join(" ")}
              >
                {services.map((service, i) => {
                  const angle = (360 / services.length) * i - 90
                  const rad = (angle * Math.PI) / 180
                  const x = center + radius * Math.cos(rad) - cardSize / 2
                  const y = center + radius * Math.sin(rad) - cardSize / 2

                  const CardInner = (
                    <>
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl md:rounded-3xl`}
                        aria-hidden="true"
                      />
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </div>
                      {/* Icon */}
                      <div
                        className={`relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-2 md:mb-3 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
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
                      {(hoveredIndex === i || openIndex === i) && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
                        </div>
                      )}
                    </>
                  )

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
                      {/* Counter-rotation to keep cards upright */}
                      <div
                        className={[
                          "w-full h-full transition-all duration-1000 ease-out",
                          isVisible ? "animate-counter-orbit" : "",
                          hoveredIndex !== null || isPopupOpen ? "animation-paused" : "",
                        ].join(" ")}
                      >
                        {/* Desktop: the card is a link with hover preview. Mobile: the card is a button that opens a modal. */}
                        <div
                          className={[
                            "group relative w-full h-full flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/40 shadow-xl transition-all duration-500 ease-out overflow-hidden",
                            hoveredIndex === i ? "scale-110 -translate-y-2 z-20" : "hover:scale-110 hover:-translate-y-2 hover:z-10",
                          ].join(" ")}
                          style={{
                            boxShadow: `0 10px 40px ${service.shadowColor}, 0 0 0 1px rgba(255,255,255,0.1)`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                          onPointerEnter={() => handleServiceEnter(i)}
                          onPointerLeave={handleServiceLeave}
                        >
                          {isTouch ? (
                            <button
                              type="button"
                              className="absolute inset-0 w-full h-full cursor-pointer"
                              aria-haspopup="dialog"
                              aria-label={`Ouvrir ${service.title}`}
                              onClick={() => openPopupFor(i)}
                            />
                          ) : (
                            <Link
                              href={service.href}
                              aria-label={`Voir ${service.title}`}
                              className="absolute inset-0"
                            />
                          )}
                          <div className="pointer-events-none px-2">{CardInner}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Central Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div
                className="relative bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border-4 border-white/60 overflow-hidden group"
                style={{
                  width: Math.min(180, center * 0.6),
                  height: Math.min(180, center * 0.6),
                }}
                aria-label="Logo au centre de la galaxie de services"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-1 rounded-full bg-white/90 backdrop-blur-xl" />
                <Image
                  src="/logo.png"
                  alt="Logo IOI"
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  className="relative object-cover object-center p-4 transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-1000" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce delay-2000" />
              </div>
            </div>
          </div>
        </div>

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

      {/* Mobile/Click Popup (Dialog controlled) */}
      <Dialog open={isPopupOpen} onOpenChange={(o) => (!o ? closePopup() : null)}>
        <DialogContent
          className="sm:max-w-md bg-white/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 md:p-8 animate-popup-in"
          // Prevent accidental outside close on the first open tap; user closes with button or overlay deliberately.
          onInteractOutside={(e) => {
            // Keep default behavior; if you want to force explicit close only, uncomment:
            // e.preventDefault()
          }}
        >
          <DialogHeader>
            <DialogTitle className="sr-only">Détails du service</DialogTitle>
            <DialogDescription className="sr-only">Aperçu et lien vers le service sélectionné</DialogDescription>
          </DialogHeader>
          {activeIndex !== null && (
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-6">
                <div
                  className={`relative inline-flex w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${services[activeIndex].color} items-center justify-center shadow-xl mb-4`}
                >
                  {services[activeIndex].icon}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {services[activeIndex].title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {services[activeIndex].text}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Technologies & Expertises
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {services[activeIndex].features.map((feature, idx) => (
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

              {/* CTA */}
              <Link
                href={services[activeIndex].href}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${services[activeIndex].color} hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group`}
              >
                <span className="flex items-center justify-center gap-2">
                  Découvrir ce service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>

              {/* Close */}
              <DialogClose asChild>
                <Button
                  className="absolute top-0 right-0 translate-x-2 -translate-y-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
