"use client"

import { useState, useRef, useEffect } from "react"
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Shield,
  Cloud,
  ArrowRight,
  Star,
  CheckCircle,
  X,
  ExternalLink,
  Network,
  Wrench,
  Rocket,
  Lock,
} from "lucide-react"

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Développement Web",
      subtitle: "Sites & Applications Web",
      description: "Création de sites web modernes, applications web complexes et plateformes e-commerce performantes.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-600 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.3)",
      features: ["React/Next.js", "Node.js", "Base de données", "API REST", "Responsive Design", "SEO Optimisé"],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
      pricing: "À partir de 2 500€",
      duration: "4-12 semaines",
      details: {
        process: ["Analyse des besoins", "Maquettage", "Développement", "Tests", "Déploiement", "Maintenance"],
        benefits: ["Performance optimale", "Sécurité renforcée", "Évolutivité", "Support 24/7"],
        portfolio: ["E-commerce Luxe", "Plateforme SaaS", "Site Corporate", "Application Métier"],
      },
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Applications Mobile",
      subtitle: "iOS & Android",
      description:
        "Développement d'applications mobiles natives et hybrides pour une expérience utilisateur exceptionnelle.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-600 to-emerald-500",
      shadowColor: "rgba(34, 197, 94, 0.3)",
      features: ["React Native", "Flutter", "iOS/Android", "App Store", "Push Notifications", "Offline Mode"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      pricing: "À partir de 5 000€",
      duration: "6-16 semaines",
      details: {
        process: ["Conception UX", "Prototypage", "Développement", "Tests", "Publication", "Maintenance"],
        benefits: ["Performance native", "Multi-plateforme", "Notifications push", "Analytics intégrés"],
        portfolio: ["App E-commerce", "Réseau Social", "App Fitness", "Plateforme Éducative"],
      },
    },
    {
      id: 3,
      icon: Palette,
      title: "Design UI/UX",
      subtitle: "Expérience Utilisateur",
      description: "Création d'interfaces intuitives et d'expériences utilisateur mémorables qui convertissent.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-pink-600 to-rose-500",
      shadowColor: "rgba(236, 72, 153, 0.3)",
      features: ["User Research", "Wireframing", "Prototypage", "Design System", "Tests Utilisateur", "Optimisation"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro"],
      pricing: "À partir de 1 500€",
      duration: "2-8 semaines",
      details: {
        process: ["Recherche utilisateur", "Wireframes", "Maquettes", "Prototypage", "Tests", "Itération"],
        benefits: ["Taux de conversion +40%", "Satisfaction utilisateur", "Identité forte", "Accessibilité"],
        portfolio: ["App Bancaire", "Plateforme B2B", "Site E-commerce", "Dashboard Analytics"],
      },
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Marketing Digital",
      subtitle: "Croissance & Visibilité",
      description: "Stratégies marketing complètes pour augmenter votre visibilité et générer plus de leads qualifiés.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-orange-600 to-yellow-500",
      shadowColor: "rgba(249, 115, 22, 0.3)",
      features: ["SEO/SEA", "Social Media", "Content Marketing", "Email Marketing", "Analytics", "Automation"],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "HubSpot", "Mailchimp", "Hootsuite"],
      pricing: "À partir de 800€/mois",
      duration: "Contrat 6-12 mois",
      details: {
        process: ["Audit", "Stratégie", "Mise en œuvre", "Optimisation", "Reporting", "Scaling"],
        benefits: ["ROI mesurable", "Lead generation", "Brand awareness", "Fidélisation client"],
        portfolio: ["Startup Tech", "E-commerce Mode", "Cabinet Médical", "Restaurant Gastronomique"],
      },
    },
    {
      id: 5,
      icon: Shield,
      title: "Cybersécurité",
      subtitle: "Protection & Conformité",
      description: "Solutions de cybersécurité complètes pour protéger vos données et assurer la conformité.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-600 to-indigo-500",
      shadowColor: "rgba(147, 51, 234, 0.3)",
      features: ["Audit Sécurité", "Conformité RGPD", "Monitoring Avancé", "Incident Response", "Formation", "SOC 24/7"],
      technologies: ["Nessus", "Wireshark", "Splunk", "Metasploit", "Burp Suite", "CrowdStrike"],
      pricing: "À partir de 1 200€",
      duration: "2-6 semaines",
      details: {
        process: ["Audit & Analyse", "Stratégie Sécurité", "Implémentation", "Monitoring"],
        benefits: ["Protection avancée", "Conformité", "Réduction risques", "Alertes temps réel"],
        portfolio: ["Banque Digitale", "E-commerce Luxe", "Startup Tech"],
      },
    },
    {
      id: 6,
      icon: Cloud,
      title: "Solutions Cloud",
      subtitle: "Infrastructure & DevOps",
      description: "Migration cloud, infrastructure scalable et DevOps pour optimiser vos performances.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-cyan-600 to-blue-500",
      shadowColor: "rgba(8, 145, 178, 0.3)",
      features: ["Migration Cloud", "Infrastructure Cloud", "DevOps & CI/CD", "Monitoring", "Backup", "Scalabilité Auto"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      pricing: "À partir de 2 000€",
      duration: "3-10 semaines",
      details: {
        process: ["Audit & Planification", "Architecture Cloud", "Migration", "Optimisation"],
        benefits: ["Réduction coûts 30%", "Haute disponibilité", "Scalabilité", "Sécurité renforcée"],
        portfolio: ["Startup SaaS", "E-commerce Scale", "Plateforme Éducative"],
      },
    },
    {
      id: 7,
      icon: Shield,
      title: "Sécurité Réseau",
      subtitle: "Protection & Monitoring",
      description: "Solutions de sécurité réseau avancées avec monitoring 24/7 et protection contre les menaces.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-red-600 to-pink-500",
      shadowColor: "rgba(239, 68, 68, 0.3)",
      features: ["Firewall", "VPN", "IDS/IPS", "Monitoring 24/7", "Audit Sécurité", "Incident Response"],
      technologies: ["Fortinet", "Cisco ASA", "Palo Alto", "Wireshark", "Snort", "OpenVPN"],
      pricing: "À partir de 1 500€",
      duration: "2-8 semaines",
      details: {
        process: ["Audit Sécurité", "Plan de Sécurité", "Implémentation", "Monitoring"],
        benefits: ["Protection avancée", "Conformité", "Réduction risques", "Alertes temps réel"],
        portfolio: ["Banque Digitale", "Clinique Privée", "E-commerce Luxe"],
      },
    },
    {
      id: 8,
      icon: Network,
      title: "Architecture Réseau",
      subtitle: "Conception & Optimisation",
      description: "Conception d'architectures réseau performantes, scalables et sécurisées.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-600 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.3)",
      features: ["Conception Réseau", "Infrastructure Cloud", "Data Center", "SDN", "Load Balancing", "Redondance"],
      technologies: ["Cisco", "Juniper", "VMware", "AWS", "Azure", "Kubernetes"],
      pricing: "À partir de 3 000€",
      duration: "4-12 semaines",
      details: {
        process: ["Analyse Besoins", "Conception", "Validation", "Déploiement"],
        benefits: ["Performance optimale", "Scalabilité", "Haute disponibilité", "Sécurité"],
        portfolio: ["Startup Tech", "Banque Régionale", "E-commerce Scale"],
      },
    },
    {
      id: 9,
      icon: Wrench,
      title: "Maintenance Équipements",
      subtitle: "Préventive & Corrective",
      description: "Maintenance préventive et corrective d'équipements réseau pour garantir la continuité de service.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-600 to-emerald-500",
      shadowColor: "rgba(34, 197, 94, 0.3)",
      features: ["Maintenance Préventive", "Maintenance Corrective", "Optimisation Performance", "Monitoring", "Pièces de rechange", "Support 24/7"],
      technologies: ["Cisco", "Juniper", "HP", "Dell", "NetApp", "VMware"],
      pricing: "À partir de 800€/mois",
      duration: "Contrat annuel",
      details: {
        process: ["Diagnostic", "Planification", "Intervention", "Suivi"],
        benefits: ["Réduction pannes", "Haute disponibilité", "Optimisation coûts", "Support réactif"],
        portfolio: ["Entreprise Industrielle", "Centre Hospitalier", "Université"],
      },
    },
    {
      id: 10,
      icon: Rocket,
      title: "Déploiement Réseau",
      subtitle: "Installation & Migration",
      description: "Déploiement d'infrastructures réseau avec migration sécurisée et zéro interruption.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-600 to-pink-500",
      shadowColor: "rgba(147, 51, 234, 0.3)",
      features: ["Déploiement Infrastructure", "Migration Réseau", "Déploiement WiFi", "Zero Downtime", "Formation", "Validation"],
      technologies: ["Cisco", "Juniper", "Aruba", "Fortinet", "VMware", "Ansible"],
      pricing: "À partir de 2 500€",
      duration: "2-8 semaines",
      details: {
        process: ["Planification", "Préparation", "Déploiement", "Validation"],
        benefits: ["Déploiement rapide", "Zéro interruption", "Performance garantie", "Formation incluse"],
        portfolio: ["Startup Tech", "Centre Commercial", "Banque Multi-Sites"],
      },
    },
    {
      id: 13,
      icon: Lock,
      title: "Solutions VPN",
      subtitle: "Connectivité Sécurisée",
      description: "Solutions VPN professionnelles pour sécuriser vos connexions et protéger vos données.",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-indigo-600 to-purple-500",
      shadowColor: "rgba(99, 102, 241, 0.3)",
      features: ["VPN Entreprise", "VPN Sécurisé", "VPN Global", "Chiffrement Avancé", "Authentification", "Support 24/7"],
      technologies: ["OpenVPN", "WireGuard", "IPSec", "Cisco ASA", "Fortinet", "Palo Alto"],
      pricing: "À partir de 800€/mois",
      duration: "Contrat annuel",
      details: {
        process: ["Analyse Besoins", "Conception VPN", "Déploiement", "Formation"],
        benefits: ["Sécurité maximale", "Connectivité globale", "Performance optimale", "Support réactif"],
        portfolio: ["Cabinet d'Avocats", "Consulting International", "Startup Tech"],
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

  const ServiceModal = ({ service }: { service: (typeof services)[0] }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200/80 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative p-8 pb-0">
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Key Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50/80 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-1">{service.pricing}</div>
              <div className="text-sm text-gray-600">Tarif de base</div>
            </div>
            <div className="text-center p-4 bg-gray-50/80 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-1">{service.duration}</div>
              <div className="text-sm text-gray-600">Durée moyenne</div>
            </div>
            <div className="text-center p-4 bg-gray-50/80 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
            </div>
          </div>

          {/* Features & Technologies */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Fonctionnalités Incluses</h4>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Notre Processus</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.details.process.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-lg">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-sm font-bold`}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className={`flex-1 py-4 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="flex-1 py-4 px-6 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Voir portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Code className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Nos Services</span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Solutions Complètes
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            De la conception à la réalisation, nous vous accompagnons dans tous vos projets digitaux avec expertise et
            passion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 10px 40px ${service.shadowColor}`,
              }}
              onClick={() => setSelectedService(service.id)}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Ripple effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center shadow-lg mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{service.pricing}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Découvrir</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && <ServiceModal service={services.find((s) => s.id === selectedService)!} />}
    </section>
  )
}

export default ServicesGrid
