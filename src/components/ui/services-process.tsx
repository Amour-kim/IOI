"use client"

import { useState, useRef, useEffect } from "react"
import {
  Search,
  Lightbulb,
  Code2,
  TestTube,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react"

const ServicesProcess = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Analyse & Découverte",
      subtitle: "Comprendre vos besoins",
      description:
        "Nous analysons en profondeur vos objectifs, votre marché et vos utilisateurs pour définir la stratégie optimale.",
      duration: "1-2 semaines",
      deliverables: ["Audit complet", "Analyse concurrentielle", "Personas utilisateurs", "Cahier des charges"],
      color: "from-blue-600 to-cyan-500",
      details:
        "Phase cruciale où nous plongeons dans votre univers pour comprendre parfaitement vos enjeux business et techniques.",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Conception & Design",
      subtitle: "Créer l'expérience parfaite",
      description:
        "Conception de l'architecture, création des maquettes et prototypage interactif pour valider l'expérience utilisateur.",
      duration: "2-4 semaines",
      deliverables: ["Wireframes", "Maquettes HD", "Prototype interactif", "Design system"],
      color: "from-purple-600 to-pink-500",
      details:
        "Transformation de vos idées en interfaces concrètes avec une attention particulière à l'expérience utilisateur.",
    },
    {
      id: 3,
      icon: Code2,
      title: "Développement",
      subtitle: "Donner vie au projet",
      description:
        "Développement avec les meilleures technologies, intégration des fonctionnalités et optimisation des performances.",
      duration: "4-12 semaines",
      deliverables: ["Code source", "Documentation technique", "API", "Base de données"],
      color: "from-green-600 to-emerald-500",
      details:
        "Phase de développement où notre équipe d'experts transforme les designs en solution fonctionnelle et performante.",
    },
    {
      id: 4,
      icon: TestTube,
      title: "Tests & Validation",
      subtitle: "Garantir la qualité",
      description:
        "Tests complets, correction des bugs, optimisation des performances et validation avec les utilisateurs finaux.",
      duration: "1-3 semaines",
      deliverables: ["Rapports de tests", "Corrections", "Optimisations", "Validation utilisateur"],
      color: "from-orange-600 to-yellow-500",
      details: "Processus rigoureux de tests pour s'assurer que votre solution répond parfaitement aux attentes.",
    },
    {
      id: 5,
      icon: Rocket,
      title: "Lancement",
      subtitle: "Mise en production",
      description: "Déploiement en production, formation des équipes, migration des données et lancement officiel.",
      duration: "1-2 semaines",
      deliverables: ["Déploiement", "Formation", "Documentation", "Go-live"],
      color: "from-red-600 to-pink-500",
      details: "Lancement en douceur avec accompagnement complet pour assurer une transition parfaite.",
    },
    {
      id: 6,
      icon: HeadphonesIcon,
      title: "Support & Évolution",
      subtitle: "Accompagnement continu",
      description: "Maintenance, support technique, évolutions fonctionnelles et optimisations continues.",
      duration: "En continu",
      deliverables: ["Support 24/7", "Mises à jour", "Évolutions", "Monitoring"],
      color: "from-indigo-600 to-purple-500",
      details: "Partenariat à long terme pour faire évoluer votre solution et maintenir ses performances optimales.",
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Rocket className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Notre Processus</span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            De l'Idée à la Réalité
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Une méthodologie éprouvée en 6 étapes pour transformer vos idées en solutions digitales performantes
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 rounded-full hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="flex-1 max-w-lg">
                    <div
                      className={`relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 transition-all duration-500 ${activeStep === index ? "scale-105 shadow-2xl" : "hover:scale-102"}`}
                    >
                      {/* Active indicator */}
                      {activeStep === index && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
                        </div>
                      )}

                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-blue-600 font-semibold">{step.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                      {/* Deliverables */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Livrables
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 italic">{step.details}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative hidden lg:block">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-xl flex items-center justify-center transition-all duration-500 ${activeStep === index ? "scale-125 shadow-2xl" : ""}`}
                    >
                      <span className="text-white font-bold text-lg">{step.id}</span>
                    </div>
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Visual/Stats */}
                  <div className="flex-1 max-w-lg">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {index === 0
                              ? "100%"
                              : index === 1
                                ? "95%"
                                : index === 2
                                  ? "98%"
                                  : index === 3
                                    ? "99%"
                                    : index === 4
                                      ? "100%"
                                      : "24/7"}
                          </div>
                          <div className="text-sm text-gray-600">
                            {index === 0
                              ? "Analyse"
                              : index === 1
                                ? "Satisfaction"
                                : index === 2
                                  ? "Performance"
                                  : index === 3
                                    ? "Qualité"
                                    : index === 4
                                      ? "Réussite"
                                      : "Support"}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {index === 0
                              ? "2-3j"
                              : index === 1
                                ? "5-7j"
                                : index === 2
                                  ? "2-4sem"
                                  : index === 3
                                    ? "3-5j"
                                    : index === 4
                                      ? "1j"
                                      : "∞"}
                          </div>
                          <div className="text-sm text-gray-600">
                            {index === 0
                              ? "Délai"
                              : index === 1
                                ? "Itérations"
                                : index === 2
                                  ? "Sprints"
                                  : index === 3
                                    ? "Tests"
                                    : index === 4
                                      ? "Go-live"
                                      : "Durée"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à démarrer votre projet ?</h3>
            <p className="text-gray-600 mb-6">
              Discutons de vos besoins et définissons ensemble la meilleure approche pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Rencontrer l'équipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess
