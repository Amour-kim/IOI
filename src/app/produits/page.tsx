"use client"

import ContactUs from "@/components/ui/contact_us";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import SocialSidebar from "@/components/ui/social-sidebar"
import { ArrowRight, CheckCircle, Code, Cpu, Github, Globe, Menu, MessageSquare, Twitter, X, Shield } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CloudPlatform } from "@/components/ui/interactive/cloud-platform"
import { AnalyticsPlatform } from "@/components/ui/interactive/analytics-platform"
import { SecurityPlatform } from "@/components/ui/interactive/security-platform"
import { TeamVisualization } from "@/components/ui/interactive/team-visualization"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Produits() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass =
    scrollY > 50 ? "py-4 bg-black/80 backdrop-blur-md border-b border-gray-800/50" : "py-6 bg-transparent"

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />
      <SocialSidebar />

      {/* Hero Section */}

      {/* Features Section */}
      <section id="fonctionnalites" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.15),transparent_50%)]" />{" "}
        {/* Changed to orange rgba */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Fonctionnalités Puissantes</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Notre plateforme offre une suite complète d'outils conçus pour améliorer votre productivité et
                rationaliser votre flux de travail.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-orange-500" />, // Changed to orange-500
                title: "API Avancée",
                description:
                  "Intégrez-vous en toute transparence avec notre API robuste conçue pour les développeurs, avec une documentation complète et des exemples.",
              },
              {
                icon: <Globe className="h-10 w-10 text-yellow-500" />, // Changed to yellow-500
                title: "CDN Mondial",
                description:
                  "Livraison de contenu ultra-rapide sur notre réseau mondial avec une garantie de disponibilité de 99,9%.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-green-500" />,
                title: "Sécurité Fiable",
                description:
                  "Sécurité de niveau entreprise avec chiffrement de bout en bout et conformité aux normes de l'industrie.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-red-500" />,
                title: "Propulsé par l'IA",
                description:
                  "Tirez parti de la puissance de l'intelligence artificielle pour optimiser votre flux de travail et obtenir des informations précieuses.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-blue-500" />, // Changed to blue-500 (complementary)
                title: "Support 24/7",
                description:
                  "Notre équipe dédiée est toujours disponible pour vous aider avec tout problème via plusieurs canaux.",
              },
              {
                icon: <Github className="h-10 w-10 text-gray-400" />,
                title: "Open Source",
                description:
                  "Contribuez à notre écosystème croissant d'outils et de bibliothèques open source avec un support communautaire actif.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-orange-500/50 transition-colors backdrop-blur-sm">
                    {" "}
                    {/* Changed to orange-500/50 */}
                    <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,165,0,0.15),transparent_50%)]" />{" "}
        {/* Changed to orange rgba */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Produits et Projets</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explorez notre suite de produits innovants conçus pour transformer votre expérience numérique.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {/* IOI Cloud */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold">IOI Cloud</h3> {/* Changed to IOI */}
                <p className="text-gray-300 text-lg">
                  Une plateforme cloud évolutive qui s'adapte à vos besoins. Déployez des applications en toute
                  simplicité et gérez les ressources efficacement.
                </p>
                <ul className="space-y-3">
                  {[
                    "Mise à l'échelle automatique",
                    "Distribution mondiale",
                    "Tarification à l'usage",
                    "SLA de disponibilité de 99,9%",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" /> {/* Changed to orange-500 */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  En savoir plus
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <CloudPlatform />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* IOI Analytics */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-last space-y-4 md:space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI Analytique</h3> {/* Changed to IOI */}
                <p className="text-gray-300 text-base md:text-lg">
                  Obtenez des informations précieuses à partir de vos données avec notre puissante plateforme d'analyse.
                  Prenez des décisions basées sur les données en toute confiance.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Tableaux de bord en temps réel",
                    "Rapports personnalisés",
                    "Prédictions basées sur l'IA",
                    "Visualisation des données",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />{" "}
                      {/* Changed to orange-500 */}
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  En savoir plus
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-first"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <AnalyticsPlatform />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* IOI Security */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6 order-1 md:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI Sécurité</h3> {/* Changed to IOI */}
                <p className="text-gray-300 text-base md:text-lg">
                  Protégez vos actifs numériques avec notre solution de sécurité complète. Gardez une longueur d'avance
                  sur les menaces avec une protection avancée.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Détection des menaces",
                    "Analyse des vulnérabilités",
                    "Surveillance de la conformité",
                    "Opérations de sécurité 24/7",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />{" "}
                      {/* Changed to orange-500 */}
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  En savoir plus
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-2"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  {" "}
                  {/* Changed to orange-yellow gradient */}
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                    <SecurityPlatform />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* IA Avancée */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI Intelligence Artificielle</h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Des solutions d’IA sur mesure pour automatiser, prédire et optimiser vos processus métier. Notre IA s’adapte à vos besoins spécifiques.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Automatisation intelligente des tâches",
                    "Analyse prédictive avancée",
                    "Traitement du langage naturel (NLP)",
                    "Vision par ordinateur",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  En savoir plus
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden flex items-center justify-center">
                    <Cpu className="w-32 h-32 md:w-48 md:h-48 text-orange-500 opacity-80" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Automatisation */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-last space-y-4 md:space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI Automatisation</h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Automatisez vos processus métiers, gagnez du temps et réduisez les erreurs grâce à nos solutions d’automatisation intelligente.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Workflows personnalisés",
                    "Intégration multi-applications",
                    "Déclencheurs et actions automatiques",
                    "Tableaux de bord de suivi",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  En savoir plus
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-first"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden flex items-center justify-center">
                    <MessageSquare className="w-32 h-32 md:w-48 md:h-48 text-blue-500 opacity-80" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* API Dynamique */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI API Dynamique</h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Créez, gérez et déployez des APIs dynamiques et évolutives pour connecter toutes vos applications et services en toute sécurité.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Création d’API sans code",
                    "Gestion centralisée des accès",
                    "Documentation interactive",
                    "Scalabilité instantanée",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  En savoir plus
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden flex items-center justify-center">
                    <Code className="w-32 h-32 md:w-48 md:h-48 text-orange-500 opacity-80" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Plateforme de Collaboration */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-last space-y-4 md:space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">IOI Collaboration</h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Facilitez la collaboration et la communication au sein de vos équipes grâce à notre plateforme collaborative sécurisée et intuitive.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Messagerie instantanée intégrée",
                    "Partage de fichiers sécurisé",
                    "Gestion de projets et tâches",
                    "Visioconférence HD",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  En savoir plus
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-first"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1 rounded-lg">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden flex items-center justify-center">
                    <MessageSquare className="w-32 h-32 md:w-48 md:h-48 text-blue-500 opacity-80" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Nos Projets Récents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plateforme e-learning pour EduPlus",
                description: "Développement d’une plateforme d’apprentissage en ligne avec gestion de cours, quiz et suivi des progrès.",
                tech: ["React", "Node.js", "AWS"],
                image: "/images/projet-eduplus.jpg",
                result: "Plus de 10 000 utilisateurs actifs en 6 mois.",
              },
              {
                title: "Refonte du site e-commerce ShopX",
                description: "Modernisation de l’interface, optimisation mobile et intégration d’un nouveau système de paiement.",
                tech: ["Next.js", "Stripe", "Vercel"],
                image: "/images/projet-shopx.jpg",
                result: "Augmentation du taux de conversion de 25%.",
              },
              {
                title: "Application mobile CityConnect",
                description: "Application pour connecter citoyens et services municipaux avec notifications en temps réel.",
                tech: ["React Native", "Firebase"],
                image: "/images/projet-cityconnect.jpg",
                result: "Adoptée par 5 grandes villes.",
              },
            ].map((projet, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <img src={projet.image} alt={projet.title} className="rounded mb-4 w-full h-40 object-cover" />
                <h3 className="text-xl font-bold mb-2">{projet.title}</h3>
                <p className="text-gray-300 mb-2">{projet.description}</p>
                <div className="text-xs text-gray-400 mb-2">Technologies : {projet.tech.join(", ")}</div>
                <div className="text-green-400 text-sm font-semibold">{projet.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir IOI Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Pourquoi choisir IOI ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Cpu className="mx-auto mb-4 text-orange-500" size={40} />
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">Des solutions à la pointe de la technologie pour anticiper vos besoins.</p>
            </div>
            <div>
              <Shield className="mx-auto mb-4 text-green-500" size={40} />
              <h3 className="font-bold mb-2">Sécurité</h3>
              <p className="text-gray-400">Protection avancée de vos données et conformité aux normes.</p>
            </div>
            <div>
              <MessageSquare className="mx-auto mb-4 text-blue-500" size={40} />
              <h3 className="font-bold mb-2">Support 24/7</h3>
              <p className="text-gray-400">Une équipe dédiée pour vous accompagner à chaque étape.</p>
            </div>
            <div>
              <CheckCircle className="mx-auto mb-4 text-yellow-500" size={40} />
              <h3 className="font-bold mb-2">Satisfaction client</h3>
              <p className="text-gray-400">Nos clients sont au cœur de notre démarche qualité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open: boolean) => !open && setIsModalOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Obtenez un accès anticipé</DialogTitle>
            <DialogDescription>
              Rejoignez notre programme bêta exclusif et soyez parmi les premiers à découvrir l'avenir de la
              technologie.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email</Label>
              <Input
                id="modal-email"
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-700 focus:border-orange-500" // Changed to orange-500
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-name">Nom complet</Label>
              <Input
                id="modal-name"
                type="text"
                placeholder="Entrez votre nom complet"
                className="bg-gray-800/50 border-gray-700 focus:border-orange-500" // Changed to orange-500
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-company">Entreprise (Facultatif)</Label>
              <Input
                id="modal-company"
                type="text"
                placeholder="Entrez le nom de votre entreprise"
                className="bg-gray-800/50 border-gray-700 focus:border-orange-500" // Changed to orange-500
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button
              className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700" // Changed to orange-yellow gradient
              onClick={() => {
                alert("Merci de votre intérêt ! Nous vous contacterons bientôt.")
                setIsModalOpen(false)
              }}
            >
              Soumettre
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
