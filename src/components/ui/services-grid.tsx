"use client"

import { 
  Lightbulb,
  Code2,
  Paintbrush,
  Megaphone,
  GraduationCap,
  Settings2,
  Headset,
  Video,
  ShieldCheck,
  Network,
  Wrench,
  Server,
  ShieldAlert,
  Cloud,
  LockKeyhole,
  Brain,
  ArrowRight,
  X,
  CheckCircle,
  ExternalLink
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Service {
  id: number
  icon: any
  title: string
  subtitle: string
  description: string
  image: string
  color: string
  shadowColor: string
  features: string[]
  technologies: string[]
  popularity: number // Nouveau : pour déterminer les services les plus populaires
}

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Gestion de la détection mobile et des événements
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    // Gestion du clic en dehors du modal (uniquement pour desktop)
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedService(null)
      }
    }
    
    // Gestion de la touche Escape
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMobile])
  
  // Effet pour gérer la visibilité de la section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services: Service[] = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Consulting",
      subtitle: "Conseil stratégique",
      description: "Expertise en conseil stratégique pour optimiser votre transformation numérique et atteindre vos objectifs business.",
      image: "/services/consulting.jpg",
      color: "from-indigo-600 to-purple-500",
      shadowColor: "rgba(99, 102, 241, 0.3)",
      features: ["Audit stratégique", "Roadmap digitale", "Transformation numérique", "Stratégie d'innovation", "Étude de marché"],
      technologies: ["Design Thinking", "Lean Startup", "Business Model Canvas", "OKR", "KPI"],
      popularity: 92
    },
    {
      id: 2,
      icon: Code2,
      title: "Développement",
      subtitle: "Développement sur mesure",
      description: "Solutions logicielles personnalisées pour répondre à vos besoins spécifiques et évolutifs.",
      image: "/services/development.jpg",
      color: "from-blue-600 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.3)",
      features: ["Applications web", "Applications mobiles", "API REST", "Bases de données", "Intégration système"],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      popularity: 95
    },
    {
      id: 3,
      icon: Paintbrush,
      title: "Design",
      subtitle: "Design créatif",
      description: "Designs intuitifs et esthétiques pour une expérience utilisateur exceptionnelle.",
      image: "/services/design.jpg",
      color: "from-pink-500 to-rose-500",
      shadowColor: "rgba(236, 72, 153, 0.3)",
      features: ["UI/UX Design", "Identité visuelle", "Maquettes interactives", "Design System", "Prototypage"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "InVision"],
      popularity: 88
    },
    {
      id: 4,
      icon: Megaphone,
      title: "Marketing",
      subtitle: "Marketing digital",
      description: "Stratégies digitales sur mesure pour accroître votre visibilité et vos conversions.",
      image: "/services/marketing.jpg",
      color: "from-green-600 to-emerald-500",
      shadowColor: "rgba(16, 185, 129, 0.3)",
      features: ["SEO/SEA", "Réseaux sociaux", "Emailing", "Content Marketing", "Analyse de données"],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Mailchimp", "HubSpot"],
      popularity: 85
    },
    {
      id: 5,
      icon: GraduationCap,
      title: "Formation",
      subtitle: "Formations sur-mesure",
      description: "Formations personnalisées pour monter en compétences sur les dernières technologies.",
      image: "/services/formation.jpg",
      color: "from-amber-500 to-yellow-500",
      shadowColor: "rgba(245, 158, 11, 0.3)",
      features: ["Cours en présentiel", "Formation en ligne", "Ateliers pratiques", "Certifications", "Support continu"],
      technologies: ["React", "Node.js", "DevOps", "Cloud", "IA/ML"],
      popularity: 78
    },
    {
      id: 6,
      icon: Settings2,
      title: "Maintenance",
      subtitle: "Maintenance préventive",
      description: "Services de maintenance pour assurer la performance et la sécurité de vos systèmes.",
      image: "/services/maintenance.jpg",
      color: "from-blue-500 to-indigo-600",
      shadowColor: "rgba(59, 130, 246, 0.3)",
      features: ["Mises à jour logicielles", "Surveillance 24/7", "Support technique", "Optimisation", "Sauvegardes"],
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
      popularity: 82
    },
    {
      id: 7,
      icon: Headset,
      title: "Support",
      subtitle: "Support client premium",
      description: "Assistance technique réactive et personnalisée pour répondre à vos besoins.",
      image: "/services/support.jpg",
      color: "from-purple-600 to-pink-500",
      shadowColor: "rgba(168, 85, 247, 0.3)",
      features: ["Support 24/7", "Assistance à distance", "Résolution rapide", "Suivi personnalisé", "Formation utilisateur"],
      technologies: ["Zendesk", "Jira", "Slack", "TeamViewer", "Zoom"],
      popularity: 90
    },
    {
      id: 8,
      icon: Video,
      title: "Media",
      subtitle: "Production média",
      description: "Création de contenu multimédia de haute qualité pour votre communication digitale.",
      image: "/services/media.jpg",
      color: "from-red-500 to-orange-500",
      shadowColor: "rgba(239, 68, 68, 0.3)",
      features: ["Vidéos promotionnelles", "Motion design", "Photographie", "Podcasts", "Streaming"],
      technologies: ["Premiere Pro", "After Effects", "Photoshop", "DaVinci Resolve", "Audacity"],
      popularity: 75
    },
    {
      id: 9,
      icon: ShieldCheck,
      title: "Sécurité Réseau",
      subtitle: "Protection réseau avancée",
      description: "Solutions de sécurité réseau complètes pour protéger votre infrastructure.",
      image: "/services/securite-reseau.jpg",
      color: "from-emerald-600 to-teal-500",
      shadowColor: "rgba(5, 150, 105, 0.3)",
      features: ["Firewall", "Détection d'intrusion", "VPN sécurisé", "Analyse des vulnérabilités", "Audit de sécurité"],
      technologies: ["Cisco", "Palo Alto", "Fortinet", "Check Point", "SonicWall"],
      popularity: 87
    },
    {
      id: 10,
      icon: Network,
      title: "Architecture Réseau",
      subtitle: "Conception réseau optimale",
      description: "Conception et optimisation d'infrastructures réseau performantes et sécurisées.",
      image: "/services/architecture-reseau.jpg",
      color: "from-indigo-600 to-blue-500",
      shadowColor: "rgba(99, 102, 241, 0.3)",
      features: ["Conception réseau", "Optimisation WAN/LAN", "WiFi d'entreprise", "SD-WAN", "Téléphonie IP"],
      technologies: ["Cisco", "Juniper", "Aruba", "Ubiquiti", "MikroTik"],
      popularity: 83
    },
    {
      id: 11,
      icon: Wrench,
      title: "Maintenance Équipements",
      subtitle: "Maintenance équipements réseau",
      description: "Maintenance préventive et corrective pour vos équipements réseau.",
      image: "/services/maintenance-equipements.jpg",
      color: "from-amber-600 to-yellow-500",
      shadowColor: "rgba(217, 119, 6, 0.3)",
      features: ["Maintenance préventive", "Dépannage", "Mises à jour", "Gestion des actifs", "Support technique"],
      technologies: ["Cisco", "HP", "Dell", "Fortinet", "Ubiquiti"],
      popularity: 80
    },
    {
      id: 12,
      icon: Server,
      title: "Déploiement Réseau",
      subtitle: "Installation et migration réseau",
      description: "Déploiement complet de solutions réseau sur mesure pour votre entreprise.",
      image: "/services/deploiement-reseau.jpg",
      color: "from-blue-600 to-indigo-600",
      shadowColor: "rgba(37, 99, 235, 0.3)",
      features: ["Installation complète", "Migration réseau", "Configuration", "Tests de performance", "Documentation"],
      technologies: ["Cisco", "Juniper", "Aruba", "Ruckus", "MikroTik"],
      popularity: 82
    },
    {
      id: 13,
      icon: ShieldAlert,
      title: "Cybersécurité",
      subtitle: "Protection cybersécurité avancée",
      description: "Solutions complètes de cybersécurité pour protéger vos données sensibles.",
      image: "/services/cybersecurite.jpg",
      color: "from-red-600 to-orange-500",
      shadowColor: "rgba(220, 38, 38, 0.3)",
      features: ["Audit de sécurité", "Pentesting", "Formation", "Sécurité des applications", "RGPD"],
      technologies: ["Kali Linux", "Metasploit", "Nessus", "Wireshark", "Burp Suite"],
      popularity: 94
    },
    {
      id: 14,
      icon: Cloud,
      title: "Solutions Cloud",
      subtitle: "Infrastructure et DevOps cloud",
      description: "Migration, gestion et optimisation de vos infrastructures cloud.",
      image: "/services/cloud.jpg",
      color: "from-cyan-500 to-blue-500",
      shadowColor: "rgba(6, 182, 212, 0.3)",
      features: ["Migration cloud", "Multi-cloud", "Conteneurisation", "DevOps", "Sauvegarde"],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      popularity: 91
    },
    {
      id: 15,
      icon: LockKeyhole,
      title: "Solutions VPN",
      subtitle: "Connectivité sécurisée VPN",
      description: "Mise en place de réseaux privés virtuels sécurisés pour vos équipes distantes.",
      image: "/services/vpn.jpg",
      color: "from-violet-600 to-purple-500",
      shadowColor: "rgba(124, 58, 237, 0.3)",
      features: ["VPN d'entreprise", "Accès distant sécurisé", "Chiffrement", "Authentification forte", "Audit"],
      technologies: ["OpenVPN", "IPsec", "WireGuard", "Cisco AnyConnect", "FortiClient"],
      popularity: 84
    },
    {
      id: 16,
      icon: Brain,
      title: "Intelligence Artificielle",
      subtitle: "Solutions IA sur mesure",
      description: "Développement de solutions d'IA personnalisées pour automatiser et optimiser vos processus.",
      image: "/services/ia.jpg",
      color: "from-purple-600 to-pink-500",
      shadowColor: "rgba(147, 51, 234, 0.3)",
      features: ["Machine Learning", "Deep Learning", "Vision par ordinateur", "Traitement du langage", "Automatisation"],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Hugging Face"],
      popularity: 96
    }
  ]

  // Mappage des titres de service vers leurs URLs correspondantes
  const getServiceUrl = (title: string): string => {
    const serviceUrls: { [key: string]: string } = {
      "Consulting": "/services/consulting",
      "Développement": "/services/development",
      "Design": "/services/design",
      "Marketing": "/services/marketing",
      "Formation": "/services/formation",
      "Maintenance": "/services/maintenance",
      "Support": "/services/support",
      "Media": "/services/media",
      "Sécurité Réseau": "/services/securite-reseau",
      "Architecture Réseau": "/services/architecture-reseau",
      "Maintenance Équipements": "/services/maintenance-equipements-reseau",
      "Déploiement Réseau": "/services/deploiement-reseau",
      "Cybersécurité": "/services/cybersecurite",
      "Solutions Cloud": "/services/solutions-cloud",
      "Solutions VPN": "/services/solutions-vpn",
      "Intelligence Artificielle": "/services/ia-intelligence-artificielle"
    }
    
    return serviceUrls[title] || `/services/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`
  }

  // Gestion du clic/touch sur un service
  const handleServiceClick = (service: Service, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setSelectedService(service)
  }

  // Gestion du touch pour mobile
  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0].clientY)
  }

  const handleTouchEnd = (service: Service, event: React.TouchEvent) => {
    if (!touchStart) return
    
    const touchEnd = event.changedTouches[0].clientY
    const diff = touchStart - touchEnd
    
    // Si c'est un tap (pas un scroll)
    if (Math.abs(diff) < 10) {
      handleServiceClick(service, event)
    }
    
    setTouchStart(null)
  }

  // Fermeture du modal
  const closeModal = (event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation()
    }
    setSelectedService(null)
  }

  // Navigation vers le service
  const navigateToService = (serviceTitle: string) => {
    const url = getServiceUrl(serviceTitle)
    window.open(url, '_blank')
  }

  // Trier les services par popularité pour l'affichage
  const sortedServices = [...services].sort((a, b) => b.popularity - a.popularity)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services numériques conçus pour propulser votre entreprise vers l&apos;avant.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Services les plus demandés en premier
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service, index) => {
            const delay = index * 100
            const isPopular = service.popularity >= 80
            
            return (
              <div
                key={service.id}
                className={`h-full group relative ${isPopular ? 'md:scale-105 z-10' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${delay / 1000}s`
                }}
              >
                {isPopular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                    Populaire
                  </div>
                )}
                
                <div 
                  onClick={(e) => handleServiceClick(service, e)}
                  onTouchStart={isMobile ? handleTouchStart : undefined}
                  onTouchEnd={isMobile ? (e) => handleTouchEnd(service, e) : undefined}
                  className={`block h-full p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer select-none
                    bg-gradient-to-r ${service.color} text-white hover:shadow-xl
                    ${isPopular ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}
                    active:scale-95`}
                  style={{
                    boxShadow: isPopular ? `0 20px 25px -5px ${service.shadowColor}, 0 10px 10px -5px ${service.shadowColor}` : undefined
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{service.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="text-xs opacity-75">
                      {service.popularity}% demandes
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal de détail du service */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'all 0.3s ease-out'
            }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r ${selectedService.color}`}>
                    <selectedService.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <p className="text-gray-600">{selectedService.subtitle}</p>
                  <div className="flex items-center mt-2">
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {selectedService.popularity}% de demandes
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => closeModal()}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedService.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités clés :</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => window.open('/contacts')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center flex items-center justify-center"
                >
                  Discuter de ce service
                </button>
                <button
                  onClick={() => navigateToService(selectedService.title)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center flex items-center justify-center"
                >
                  <span>Découvrir ce service</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesGrid