"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import styles from "./SocialSidebar.module.css"

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
  hoverColor: string
}

interface SocialSidebarProps {
  className?: string
  showContactInfo?: boolean
  socialLinks?: SocialLink[]
  contactInfo?: {
    email: string
    phone: string
    address: string
  }
}

const SocialSidebar = ({
  className = "",
  showContactInfo = true,
  socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/entreprise",
      label: "Facebook",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/entreprise",
      label: "Twitter",
      color: "bg-sky-500",
      hoverColor: "hover:bg-sky-600",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/entreprise",
      label: "Instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/entreprise",
      label: "LinkedIn",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@entreprise",
      label: "YouTube",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
    },
  ],
  contactInfo = {
    email: "contact@entreprise.com",
    phone: "+33 1 23 45 67 89",
    address: "123 Rue de l'Exemple, 75000 Paris",
  },
}: SocialSidebarProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-hide après 5 secondes
  const startHideTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      if (!isHovered && !isMobile) { // Ne se cache pas automatiquement sur mobile
        setIsVisible(false)
      }
    }, 5000)
  }, [isHovered, isMobile])

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false)
      // Réinitialise l'expansion quand on scroll
      if (isExpanded) {
        setIsExpanded(false)
      }
      // Réinitialise le timer si on scroll après être revenu en visible
      if (isVisible) {
        startHideTimer()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible, isExpanded, startHideTimer])
  
  // Détection du mode mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Démarrer le timer au montage
  useEffect(() => {
    startHideTimer()
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [startHideTimer])

  // Gestion du hover sur le container (pour desktop)
  const handleMouseEnter = () => {
    if (isMobile) return
    
    setIsHovered(true)
    setIsVisible(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    
    setIsHovered(false)
    startHideTimer()
  }
  
  // Gestion du clic sur mobile
  const handleSidebarClick = (e: React.MouseEvent) => {
    if (!isMobile) return
    
    if (!isExpanded) {
      // Premier clic : on déplie complètement
      e.preventDefault()
      e.stopPropagation()
      setIsExpanded(true)
      setIsVisible(true)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
    // Si déjà déplié, le clic sur les liens fonctionne normalement
  }

  return (
    <>
      {/* Conteneur principal de la barre latérale sociale */}
      <div
        className={`
          fixed right-0 top-1/2 transform -translate-y-1/2 z-50 
          transition-all duration-700 ease-in-out
          ${isVisible ? "translate-x-0" : "translate-x-[calc(100%-20px)]"} 
          ${isMobile ? 'opacity-100' : (isVisible ? (isExpanded ? 'opacity-100' : 'opacity-80') : 'opacity-80')}
          ${className}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSidebarClick}
      >
        {/* Social Links */}
        <div 
          className={`
            flex flex-col space-y-1.5 sm:space-y-2 lg:space-y-3 p-2 sm:p-3 lg:p-4 
            bg-white/95 backdrop-blur-xl rounded-l-xl lg:rounded-l-2xl shadow-2xl 
            border border-gray-200/50 relative overflow-hidden
            ${isMobile && !isExpanded ? 'pointer-events-none' : 'pointer-events-auto'}
            transition-opacity duration-300
          `}
          style={{
            opacity: isMobile 
              ? (isExpanded ? 1 : 0.8)
              : (isVisible ? (isExpanded ? 1 : 0.8) : 0.8)
          }}
        >
          {/* Effet de brillance animé */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />

          {socialLinks.map((social, index) => {
            const SocialIcon = social.icon
            const isItemHovered = hoveredIndex === index

            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex items-center justify-center 
                  w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 
                  rounded-lg lg:rounded-xl
                  ${social.color} ${social.hoverColor}
                  transform transition-all duration-500 ease-out
                  ${isItemHovered ? "scale-125 -translate-y-2 shadow-2xl rotate-3" : "hover:scale-110 hover:-translate-y-1 hover:rotate-1"}
                  hover:shadow-xl relative z-10
                  before:absolute before:inset-0 before:rounded-lg before:lg:rounded-xl
                  before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                  before:translate-x-[-100%] hover:before:translate-x-[100%]
                  before:transition-transform before:duration-700 before:ease-in-out
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={social.label}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <SocialIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-lg relative z-10" />

                {/* Effet de halo */}
                <div
                  className={`
                  absolute inset-0 rounded-lg lg:rounded-xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-white/20 to-white/10 blur-sm
                  transition-all duration-500 scale-150
                `}
                />

                {/* Tooltip amélioré */}
                <div
                  className={`
                  absolute right-full mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 py-1 sm:py-2 
                  bg-gray-900/95 backdrop-blur-sm text-white text-xs sm:text-sm font-medium 
                  rounded-md lg:rounded-lg whitespace-nowrap 
                  transition-all duration-500 ease-out
                  ${isItemHovered ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95"}
                  before:content-[''] before:absolute before:top-1/2 before:right-0 
                  before:transform before:translate-y-[-50%] before:translate-x-full
                  before:border-4 before:border-transparent before:border-l-gray-900/95
                  hidden sm:block shadow-xl
                `}
                >
                  {social.label}
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Info */}
        {showContactInfo && (
          <div className="mt-2 sm:mt-3 lg:mt-4 p-2 sm:p-3 lg:p-4 bg-white/95 backdrop-blur-xl rounded-l-xl lg:rounded-l-2xl shadow-2xl border border-gray-200/50 relative overflow-hidden">
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />

            <div className="flex flex-col space-y-1.5 sm:space-y-2 lg:space-y-3">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-emerald-600 hover:bg-emerald-700 transform transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:rotate-1 relative z-10 before:absolute before:inset-0 before:rounded-lg before:lg:rounded-xl before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                aria-label="Email"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-lg relative z-10" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-blue-600 hover:bg-blue-700 transform transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:rotate-1 relative z-10 before:absolute before:inset-0 before:rounded-lg before:lg:rounded-xl before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                aria-label="Téléphone"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-lg relative z-10" />
              </a>

              {/* Address */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-orange-600 hover:bg-orange-700 transform transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:rotate-1 relative z-10 before:absolute before:inset-0 before:rounded-lg before:lg:rounded-xl before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                aria-label="Adresse"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-lg relative z-10" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Éléments décoratifs animés (visibles sur xl comme avant) */}
      <div
        className={`
        absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 
        w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 
        bg-gradient-to-br from-blue-500 to-purple-600 rounded-full 
        transition-all duration-700 ease-in-out hidden xl:block
        ${isVisible ? "opacity-30 scale-100 animate-pulse" : "opacity-0 scale-0"}
      `}
      />
      <div
        className={`
        absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 
        w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 
        bg-gradient-to-br from-green-500 to-blue-600 rounded-full 
        transition-all duration-700 ease-in-out delay-300 hidden xl:block
        ${isVisible ? "opacity-30 scale-100 animate-pulse" : "opacity-0 scale-0"}
      `}
      />
    </>
  )
}

export default SocialSidebar
