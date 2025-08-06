"use client"

import React, { useState, useRef, useEffect, ReactNode } from "react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import {
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  HelpCircle,
  PlayCircle,
  Edit,
  Code,
  Monitor,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  Home,
  User,
  Settings,
  FileText,
  Mail,
  Phone,
  Grid,
  Star,
  Heart,
  Calendar,
  Palette,
  TrendingUp,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Network,
  Wrench,
  Rocket,
  Cloud,
  Lock,
} from "lucide-react"
import { usePathname } from "next/navigation"

// Types pour les éléments de menu
type SubMenuItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

type MenuItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  subItems: SubMenuItem[];
};

type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

type CompanyInfo = {
  email: string;
  phone: string;
  address: string;
  hours: string;
};

type ActiveBg = {
  left: number;
  top: number;
  width: number;
  height: number;
  visible: boolean;
};

interface ModernNavbarProps {
  logo?: string;
  activeItem?: string | null;
  activeSubItem?: string | null;
  onItemClick?: (item: MenuItem) => void;
  onSubItemClick?: (subItem: SubMenuItem) => void;
  className?: string;
  variant?: 'default' | 'glass' | 'dark';
  showTopBar?: boolean;
  companyInfo?: Partial<CompanyInfo>;
  socialLinks?: SocialLink[];
  menuItems?: MenuItem[];
}

const ModernNavbar: React.FC<ModernNavbarProps> = ({
  logo = "IOI",
  activeItem: _activeItem = null,
  activeSubItem: _subItem = null,
  onItemClick = () => {},
  onSubItemClick = () => {},
  className = "",
  variant = "default",
  showTopBar = true,
  companyInfo = {
    email: "ioi.gabon101@gmail.com",
    phone: "+241 74 34 37 76 / +241 65 45 76 64",
    address: "Derriere la pediatrie, 75000 Owendo",
    hours: "Lun-Ven: 9h-18h",
  },
  socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ],
  menuItems = [
    {
      id: "accueil",
      label: "Accueil",
      icon: Home,
      href: "/",
      subItems: [],
    },
    {
      id: "produits",
      label: "Produits",
      icon: Grid,
      href: "/produits",
      subItems: [], // plus de sous-options
    },
    {
      id: "services",
      label: "Services",
      icon: Star,
      href: "/services",
      subItems: [
        {
          id: "consulting",
          label: "Consulting",
          href: "/services/consulting",
          icon: User,
          description: "Conseil stratégique",
        },
        {
          id: "development",
          label: "Développement",
          href: "/services/development",
          icon: Code,
          description: "Développement sur mesure",
        },
        {
          id: "design",
          label: "Design",
          href: "/services/design",
          icon: Palette,
          description: "Design créatif"
        },
        {
          id: "marketing",
          label: "Marketing",
          href: "/services/marketing",
          icon: TrendingUp,
          description: "Marketing digital",
        },
        {
          id: "formation",
          label: "Formation",
          href: "/services/formation",
          icon: BookOpen,
          description: "Formations sur-mesure"
        },
        {
          id: "maintenance",
          label: "Maintenance",
          href: "/services/maintenance",
          icon: Settings,
          description: "Maintenance préventive",
        },
        {
          id: "support",
          label: "Support",
          href: "/services/support",
          icon: Heart,
          description: "Support client premium",
        },
        {
          id: "media",
          label: "Media",
          href: "/services/media",
          icon: PlayCircle,
          description: "Production média"
        },
        {
          id: "securite-reseau",
          label: "Sécurité Réseau",
          href: "/services/securite-reseau",
          icon: Shield,
          description: "Protection réseau avancée",
        },
        {
          id: "architecture-reseau",
          label: "Architecture Réseau",
          href: "/services/architecture-reseau",
          icon: Network,
          description: "Conception réseau optimale",
        },
        {
          id: "maintenance-equipements-reseau",
          label: "Maintenance Équipements",
          href: "/services/maintenance-equipements-reseau",
          icon: Wrench,
          description: "Maintenance équipements réseau",
        },
        {
          id: "deploiement-reseau",
          label: "Déploiement Réseau",
          href: "/services/deploiement-reseau",
          icon: Rocket,
          description: "Installation et migration réseau",
        },
        {
          id: "cybersecurite",
          label: "Cybersécurité",
          href: "/services/cybersecurite",
          icon: Shield,
          description: "Protection cybersécurité avancée",
        },
        {
          id: "solutions-cloud",
          label: "Solutions Cloud",
          href: "/services/solutions-cloud",
          icon: Cloud,
          description: "Infrastructure et DevOps cloud",
        },
        {
          id: "solutions-vpn",
          label: "Solutions VPN",
          href: "/services/solutions-vpn",
          icon: Lock,
          description: "Connectivité sécurisée VPN",
        },
      ],
    },
    {
      id: "ressources",
      label: "Ressources",
      icon: FileText,
      href: "/ressources",
      subItems: [
        {
          id: "docs",
          label: "Documentation",
          href: "/ressources/docs",
          icon: FileText,
          description: "Guides complets",
        },
        { id: "blog", label: "Blog", href: "/ressources/blog", icon: Edit, description: "Articles et actualités" },
        {
          id: "tutorials",
          label: "Tutoriels",
          href: "/ressources/tutorials",
          icon: PlayCircle,
          description: "Tutoriels vidéo",
        },
        { id: "faq", label: "FAQ", href: "/ressources/faq", icon: HelpCircle, description: "Questions fréquentes" },
      ],
    },
    {
      id: "rendez-vous",
      label: "Rendez-vous",
      icon: Calendar,
      href: "/rendez-vous",
      subItems: [],
    },
    {
      id: "contacts",
      label: "Contacts",
      icon: Mail,
      href: "/contacts",
      subItems: [],
    },
  ],
}) => {
  const pathname = usePathname()

  const findActiveItem = (): string | null => {
    if (!menuItems) return null
    
    for (const item of menuItems) {
      if (item.href && pathname.startsWith(item.href) && item.href !== "/") {
        return item.id
      }
      if (item.href === "/" && pathname === "/") {
        return item.id
      }
    }
    return null
  }

  const findActiveSubItem = (): string | null => {
    if (!menuItems) return null
    
    for (const item of menuItems) {
      if (item.subItems && item.subItems.length > 0) {
        for (const sub of item.subItems) {
          if (sub.href && pathname.startsWith(sub.href)) {
            return sub.id
          }
        }
      }
    }
    return null
  }
  // Références aux éléments du DOM
  const navRef = useRef<HTMLElement>(null)
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  // États du composant
  const [activeItem, setActiveItem] = useState<string | null>(_activeItem || findActiveItem())
  const [activeSubItem, setActiveSubItem] = useState<string | null>(_subItem || findActiveSubItem())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)
  const [navbarBlur, setNavbarBlur] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null)
  const [animating, setAnimating] = useState(false)
  const [activeBg, setActiveBg] = useState<ActiveBg>({ 
    left: 0, 
    top: 0, 
    width: 0, 
    height: 0, 
    visible: false 
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Effet de blur progressif
      const blurAmount = Math.min(currentScrollY / 100, 1)
      setNavbarBlur(blurAmount)

      setIsScrolling(true)

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      if (currentScrollY <= 50) {
        setShowNavbar(true)
      } else {
        const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up"

        if (scrollDirection === "down" && currentScrollY > 100) {
          setShowNavbar(false)
        } else if (scrollDirection === "up") {
          setShowNavbar(true)
        }
      }

      lastScrollY.current = currentScrollY
    }

    let ticking = false
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", requestTick, { passive: true })
    return () => {
      window.removeEventListener("scroll", requestTick)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  const updateActiveBg = (itemId: string) => {
    const el = itemRefs.current[itemId]
    const container = menuContainerRef.current
    if (el && container) {
      const elRect = el.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setActiveBg({
        left: elRect.left - containerRect.left,
        top: elRect.top - containerRect.top,
        width: elRect.width,
        height: elRect.height,
        visible: true,
      })
    }
  }

  useEffect(() => {
    if (activeItem) {
      updateActiveBg(activeItem)
    }
  }, [activeItem])

  const handleAnimatedClick = (item: MenuItem) => {
    if (item.id === activeItem) {
      onItemClick(item)
      return
    }
    
    if (!activeItem) {
      onItemClick(item)
      return
    }

    const fromEl = itemRefs.current[activeItem]
    const toEl = itemRefs.current[item.id]
    const container = menuContainerRef.current

    if (fromEl && toEl && container) {
      const fromRect = fromEl.getBoundingClientRect()
      const toRect = toEl.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      setActiveBg({
        left: fromRect.left - containerRect.left,
        top: fromRect.top - containerRect.top,
        width: fromRect.width,
        height: fromRect.height,
        visible: true,
      })

      setAnimating(true)

      setTimeout(() => {
        setActiveBg({
          left: toRect.left - containerRect.left,
          top: toRect.top - containerRect.top,
          width: toRect.width,
          height: toRect.height,
          visible: true,
        })
        setAnimating(false)
        onItemClick(item)
      }, 20)
    } else {
      onItemClick(item)
    }
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && event.target instanceof Node && !navRef.current.contains(event.target)) {
        setHoveredItem(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getVariantClasses = () => {
    const baseClasses = "backdrop-blur-xl border-white/10"
    switch (variant) {
      case "glass":
        return `${baseClasses} bg-white/5 border-white/20`
      case "dark":
        return `${baseClasses} bg-gray-900/90 border-gray-700/50`
      default:
        return `${baseClasses} bg-white/90 border-gray-200/50`
    }
  }

  const getTextClasses = () => {
    switch (variant) {
      case "glass":
        return "text-white"
      case "dark":
        return "text-white"
      default:
        return "text-gray-900"
    }
  }

  const getHoverClasses = () => {
    switch (variant) {
      case "glass":
        return "hover:bg-white/10"
      case "dark":
        return "hover:bg-gray-800/50"
      default:
        return "hover:bg-gray-50/80"
    }
  }

  return (
    <div
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      ${className}
    `}
    >
      {/* Top Bar avec gradient animé */}
      {showTopBar && (
        <div className="relative overflow-hidden">
          {/* Gradient de fond animé */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-x"></div>

          {/* Effet de brillance qui traverse */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>

          <div className="relative text-white py-2 px-4 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
              {/* Contact Info avec animations */}
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 group">
                  <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="transition-all group-hover:text-orange-100">{companyInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Phone className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  <span className="transition-all group-hover:text-orange-100">{companyInfo.phone}</span>
                </div>
                <div className="hidden lg:flex items-center space-x-2 group">
                  <MapPin className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:bounce" />
                  <span className="transition-all group-hover:text-orange-100">{companyInfo.address}</span>
                </div>
                <div className="hidden xl:flex items-center space-x-2 group">
                  <Clock className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="transition-all group-hover:text-orange-100">{companyInfo.hours}</span>
                </div>
              </div>

              {/* Social Links avec effets hover sophistiqués */}
              <div className="flex items-center space-x-1">
                <span className="text-orange-100 mr-3 hidden md:inline font-medium">Suivez-nous:</span>
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon
                  return (
                    <Link
                      href={social.href}
                      key={index}
                      className="relative p-2 text-orange-100 hover:text-white transition-all duration-300 group"
                      aria-label={social.label}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {/* Effet de fond au hover */}
                      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <SocialIcon className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />

                      {/* Tooltip */}
                      {hoveredSocial === index && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-200">
                          {social.label}
                        </div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar avec effets de glassmorphism */}
      <nav
        ref={navRef}
        className={`
          w-full border-b shadow-2xl transition-all duration-500
          ${getVariantClasses()}
        `}
        style={{
          backdropFilter: `blur(${16 + navbarBlur * 8}px)`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, ${0.1 + navbarBlur * 0.1})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo avec effet de hover */}
            <div className="flex-shrink-0 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="IOI Logo"
                  className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                />
                {/* Effet de brillance sur le logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
              </div>
            </div>

            {/* Desktop Menu avec fond animé sophistiqué */}
            <div ref={menuContainerRef} className="hidden md:flex items-center space-x-1 relative">
              {/* Fond animé avec dégradé */}
              {activeBg.visible && (
                <div
                  className="absolute z-0 transition-all duration-500 ease-out"
                  style={{
                    left: activeBg.left,
                    top: activeBg.top,
                    width: activeBg.width,
                    height: activeBg.height,
                    borderRadius: animating ? "9999px" : "12px",
                    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    transform: animating ? "scale(0.8)" : "scale(1)",
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {/* Effet de brillance interne */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl animate-pulse"></div>
                </div>
              )}

              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeItem === item.id
                const hasSubItems = item.subItems && item.subItems.length > 0

                return (
                  <div
                    key={item.id}
                    className="relative z-10"
                    ref={(el) => {
                      itemRefs.current[item.id] = el
                    }}
                    onMouseEnter={() => {
                      if (submenuTimeout) clearTimeout(submenuTimeout)
                      if (hasSubItems) setHoveredItem(item.id)
                    }}
                    onMouseLeave={() => {
                      if (submenuTimeout) clearTimeout(submenuTimeout)
                      if (hasSubItems) {
                        const timeout = setTimeout(() => setHoveredItem(null), 300)
                        setSubmenuTimeout(timeout)
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleAnimatedClick(item)}
                      className={`
                        flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group
                        ${isActive ? "text-white shadow-lg" : `${getTextClasses()} ${getHoverClasses()}`}
                        transform hover:scale-105 active:scale-95 hover:shadow-lg
                      `}
                    >
                      <Icon
                        className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-white" : ""} group-hover:scale-110`}
                      />
                      <span className="relative">
                        {item.label}
                        {/* Effet de soulignement animé */}
                        {!isActive && (
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        )}
                      </span>
                      {hasSubItems && (
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-all duration-300 ${hoveredItem === item.id ? "rotate-180" : ""}`}
                        />
                      )}

                      {/* Sparkles effect pour l'item actif */}
                      {isActive && <Sparkles className="w-3 h-3 text-white/70 animate-pulse" />}
                    </Link>

                    {/* Dropdown amélioré avec animations fluides */}
                    {hasSubItems && hoveredItem === item.id && (
                      <div
                        className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
                        onMouseEnter={() => {
                          if (submenuTimeout) clearTimeout(submenuTimeout)
                          setHoveredItem(item.id)
                        }}
                        onMouseLeave={() => {
                          if (submenuTimeout) clearTimeout(submenuTimeout)
                          const timeout = setTimeout(() => setHoveredItem(null), 300)
                          setSubmenuTimeout(timeout)
                        }}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {item.subItems.map((subItem, index) => {
                              const SubIcon = subItem.icon
                              const isSubActive = activeSubItem === subItem.id
                              return (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  onClick={() => onSubItemClick(subItem)}
                                  className={`
                                    flex items-center p-1.5 rounded-lg transition-all duration-200 group relative
                                    ${
                                      isSubActive
                                        ? "bg-blue-50 text-blue-700 border-2 border-blue-500"
                                        : "text-gray-700 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200"
                                    }
                                  `}
                                  style={{
                                    animationDelay: `${index * 50}ms`,
                                  }}
                                >
                                  {/* Icône avec effet de hover */}
                                  <div
                                    className={`
                                    p-1 rounded-lg transition-all duration-200 group-hover:scale-110 mr-2
                                    ${isSubActive ? "bg-blue-100" : "bg-gray-100 group-hover:bg-blue-100"}
                                  `}
                                  >
                                    <SubIcon
                                      className={`w-3 h-3 ${isSubActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`}
                                    />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`font-medium text-sm transition-colors truncate ${isSubActive ? "text-blue-700" : "text-gray-900"}`}
                                    >
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <div className="text-xs text-gray-500 truncate">{subItem.description}</div>
                                    )}
                                  </div>

                                  {/* Effet de brillance au hover */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Mobile menu button avec animation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  p-2 rounded-xl ${getTextClasses()} ${getHoverClasses()} 
                  transition-all duration-300 transform hover:scale-110 active:scale-95
                  relative overflow-hidden group
                `}
              >
                {/* Effet de fond au clic */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-200"></div>

                <div className="relative z-10">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu amélioré */}
        {isMobileMenuOpen && (
          <div
            className={`
            md:hidden border-t ${getVariantClasses()} 
            animate-in slide-in-from-top-4 duration-500
            backdrop-blur-2xl
          `}
          >
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeItem === item.id
                const hasSubItems = item.subItems && item.subItems.length > 0

                return (
                  <div
                    key={item.id}
                    className="space-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => onItemClick(item)}
                      className={`
                        flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                            : `${getTextClasses()} ${getHoverClasses()}`
                        }
                        transform hover:scale-[1.02] active:scale-[0.98]
                      `}
                    >
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <Icon
                        className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${isActive ? "text-white" : ""}`}
                      />
                      <span className="font-medium flex-1">{item.label}</span>
                      {hasSubItems && <ChevronDown className="w-4 h-4 transition-transform duration-300" />}
                      {isActive && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                    </Link>

                    {hasSubItems && (
                      <div className="ml-8 space-y-1">
                        {item.subItems.map((subItem, subIndex) => {
                          const SubIcon = subItem.icon
                          const isSubActive = activeSubItem === subItem.id
                          return (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={() => onSubItemClick(subItem)}
                              className={`
                                flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all duration-300 group
                                ${
                                  isSubActive
                                    ? "bg-blue-100 text-blue-700 border-l-2 border-blue-500"
                                    : `${getTextClasses()} ${getHoverClasses()}`
                                }
                                transform hover:translate-x-1
                              `}
                              style={{
                                animationDelay: `${index * 100 + subIndex * 50}ms`,
                              }}
                            >
                              <SubIcon
                                className={`w-4 h-4 transition-all duration-300 group-hover:scale-110 ${isSubActive ? "text-blue-600" : ""}`}
                              />
                              <span className="text-sm">{subItem.label}</span>
                              {isSubActive && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-auto"></div>}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default ModernNavbar
