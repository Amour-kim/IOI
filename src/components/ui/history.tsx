"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Calendar,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Mail,
  FileText,
  Search,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe,
  Lightbulb,
  Target,
  Star,
  Briefcase,
  Trophy,
  Zap,
  Rocket,
  Crown,
  Sparkles,
  Network,
  Shield,
  Filter,
  SlidersHorizontal,
  MapPin,
  Clock,
  ChevronDown,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function History() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slides periods (Timeline)
  const timelinePeriods = [
    { period: "2018-2020", label: "Genèse & Réflexion" },
    { period: "2021-2023", label: "Structuration & Premices" },
    { period: "2024-2025", label: "Expansion" },
  ];
  const slidesCount = timelinePeriods.length;

  // Auto-scroll pour les carrousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount)
    }, 5000)
    return () => clearInterval(interval)
  }, [slidesCount])

  return (
    <div className="min-h-[60vh] bg-gradient-to-br
 from-slate-50 to-blue-50 overflow-x-hidden">
        <section className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl transform -skew-y-1"></div>
            <div className="relative z-10 p-4 md:p-8">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
                <Crown className="inline-block w-8 h-8 md:w-12 md:h-12 text-amber-600 mr-2 md:mr-4" />
                Histoire & Vision Fondatrice de IOI
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
                Découvrez la naissance, la croissance et l'ambition d'IOI — une entreprise visionnaire créée pour transformer le numérique éducatif, administratif et institutionnel en Afrique. Une histoire bâtie sur l'innovation, l'engagement communautaire et la souveraineté technologique africaine.
                </p>
            </div>

            {/* Timeline Navigation */}
            <div className="flex justify-center mb-8 md:mb-12">
                <div className="bg-white rounded-full shadow-lg border border-amber-200 p-0.5 md:p-2 max-w-full overflow-x-auto">
                <div className="flex flex-nowrap space-x-0.5 md:space-x-1">
                    {timelinePeriods.map((era, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-xs md:text-sm font-bold whitespace-nowrap ${
                        currentSlide === index
                            ? "bg-amber-600 text-white shadow-md"
                            : "text-amber-700 hover:text-amber-800 hover:bg-amber-100"
                        }`}
                    >
                        <div>{era.period}</div>
                        <div className="text-[10px] md:text-xs font-normal">{era.label}</div>
                    </button>
                    ))}
                </div>
                </div>
            </div>

            {/* Contenu Historique Détaillé */}
            <div className="max-w-full md:max-w-7xl mx-auto">
                <div className="relative">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-white">
                    <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                    {/* Période 2018-2020 : Genèse & Réflexion */}
                    <div className="w-full flex-shrink-0 p-4 sm:p-6 md:p-12">
                        <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-amber-800 mb-2 md:mb-4">2018-2020 : Genèse & Réflexion</h3>
                        <p className="text-base md:text-lg text-amber-700 italic">
                            "Imaginer une Afrique technologiquement souveraine"
                        </p>
                        </div>

                        <div className="space-y-8 md:space-y-16">
                        {/* Constat de Départ */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                            <h4 className="text-lg md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 flex items-center">
                                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-600 mr-2 md:mr-3" />
                                Constat de Départ
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                                Le fondateur, NZILA NGALA Amour Samuel, jeune visionnaire passionné d'éducation, de réseau et de développement numérique, prend conscience du <strong>vide structurel en solutions numériques locales adaptées aux réalités africaines</strong>. Le continent dépend trop des technologies étrangères : peu flexibles, onéreuses et déconnectées des besoins réels.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                                Cette prise de conscience marque le début d'une réflexion profonde sur la nécessité de créer des solutions technologiques africaines, conçues par des Africains pour les Africains.
                            </p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-6 rounded-r-lg">
                                <h5 className="font-semibold text-amber-800 mb-1 md:mb-2 text-sm md:text-base">Citation Fondatrice</h5>
                                <blockquote className="text-amber-700 italic text-xs md:text-base">
                                "L'Afrique doit coder ses propres solutions pour façonner son destin numérique." – N.N.A. Samuel
                                </blockquote>
                            </div>
                            </div>
                            <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Crown className="w-16 h-16 md:w-24 md:h-24 text-amber-700 mx-auto mb-2 md:mb-4" />
                                    <h6 className="text-base md:text-xl font-bold text-amber-800">N.N.A. Samuel</h6>
                                    <p className="text-amber-700 text-xs md:text-base">Fondateur & Visionnaire</p>
                                    <p className="text-xs text-amber-600">IOI</p>
                                </div>
                                </div>
                                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-white rounded-full p-2 md:p-3 shadow-lg">
                                <Lightbulb className="w-5 h-5 md:w-8 md:h-8 text-amber-600" />
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Naissance de la Vision IOI */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                            <div className="relative">
                                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Target className="w-20 h-20 text-blue-700 mx-auto mb-4" />
                                    <h6 className="text-lg font-bold text-blue-800">Vision IOI</h6>
                                    <p className="text-blue-700">Écosystème numérique complet</p>
                                    <p className="text-sm text-blue-600">Intelligence, Ordre, Innovation</p>
                                </div>
                                </div>
                                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                                <Star className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            </div>
                            <div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <Target className="w-6 h-6 text-amber-600 mr-3" />
                                Naissance de la Vision IOI
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                IOI (Intelligence, Ordre, Innovation) naît dans l'esprit de son créateur comme <strong>un écosystème numérique complet</strong>, pensé pour <strong>automatiser, éduquer, transformer et connecter</strong> les structures académiques, professionnelles et communautaires en Afrique.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                L'entreprise sera <strong>africaine, adaptable, souveraine et pérenne</strong>, répondant aux défis spécifiques du continent tout en s'inscrivant dans une vision de développement durable et inclusif.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-blue-700">4</div>
                                <div className="text-sm text-blue-600">Piliers fondamentaux</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-green-700">100%</div>
                                <div className="text-sm text-green-600">Souveraineté africaine</div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Les Valeurs Fondatrices */}
                        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
                            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
                            <Star className="w-6 h-6 text-amber-600 mr-3" />
                            Les Valeurs Fondatrices d'IOI
                            </h4>
                            <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="w-12 h-12 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Intelligence</h5>
                                <p className="text-sm text-slate-600 mb-2">Solutions intelligentes</p>
                                <p className="text-xs text-slate-500">
                                Développement de technologies adaptées aux besoins locaux
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-12 h-12 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Ordre</h5>
                                <p className="text-sm text-slate-600 mb-2">Organisation structurée</p>
                                <p className="text-xs text-slate-500">Processus optimisés et méthodiques</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-12 h-12 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Innovation</h5>
                                <p className="text-sm text-slate-600 mb-2">Créativité continue</p>
                                <p className="text-xs text-slate-500">Recherche constante de nouvelles solutions</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Période 2021-2023 : Structuration & Premiers Développements */}
                    <div className="w-full flex-shrink-0 p-12">
                        <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-amber-800 mb-4">2021-2023 : Structuration & Premices</h3>
                        <p className="text-lg text-amber-700 italic">
                            "Passer de l'idée à l'architecture systémique"
                        </p>
                        </div>

                        <div className="space-y-16">
                        {/* Création de la Société IOI */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Building className="w-24 h-24 text-blue-700 mx-auto mb-4" />
                                    <h6 className="text-xl font-bold text-blue-800">Société IOI</h6>
                                    <p className="text-blue-700">Structure légale officielle</p>
                                    <p className="text-sm text-blue-600">2021-2023</p>
                                </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                                <Rocket className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            </div>
                            <div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <Building className="w-6 h-6 text-amber-600 mr-3" />
                                Création de la Société IOI
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                La structure légale IOI est officiellement formée, avec une vision claire, des statuts définis et une équipe fondatrice ambitieuse. Le projet s'articule autour de <strong>10 pôles stratégiques</strong> : Développement, Réseautique, Cybersécurité, DevOps, IA & Automatisation, Conception, Accompagnement, Services, Personnel, Commercial.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Cette structuration permet d'organiser méthodiquement les différentes compétences et domaines d'expertise nécessaires au développement d'un écosystème numérique complet.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">Pôles Stratégiques</h5>
                                <ul className="text-blue-700 space-y-1">
                                <li>• Développement & Réseautique</li>
                                <li>• Cybersécurité & DevOps</li>
                                <li>• IA & Automatisation</li>
                                <li>• Conception & Accompagnement</li>
                                <li>• Services, Personnel & Commercial</li>
                                </ul>
                            </div>
                            </div>
                        </div>

                        {/* Développement des premiers prototypes */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <Zap className="w-6 h-6 text-amber-600 mr-3" />
                                Développement des Premiers Prototypes
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Durant cette période, IOI entame la <strong>création de ses socles technologiques</strong> : développement de plateformes éducatives multi-tenant, conception de solutions de gestion administrative numérique, création des premiers modules API universels.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Des tests pilotes sont menés dans quelques établissements partenaires pour valider les concepts et affiner les solutions selon les retours d'expérience réels.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-green-700">Multi-tenant</div>
                                <div className="text-sm text-green-600">Plateformes éducatives</div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-purple-700">API</div>
                                <div className="text-sm text-purple-600">Modules universels</div>
                                </div>
                            </div>
                            </div>
                            <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Zap className="w-20 h-20 text-green-700 mx-auto mb-4" />
                                    <h6 className="text-lg font-bold text-green-800">Prototypes</h6>
                                    <p className="text-green-700">Socles technologiques</p>
                                    <p className="text-sm text-green-600">Tests pilotes</p>
                                </div>
                                </div>
                                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                                <Zap className="w-8 h-8 text-green-600" />
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Réseautage stratégique */}
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
                            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
                            <Network className="w-6 h-6 text-blue-600 mr-3" />
                            Réseautage Stratégique et Partenariats
                            </h4>
                            <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h5 className="font-bold text-slate-800 mb-4">Événements et Forums</h5>
                                <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Participation aux forums d'éducation numérique</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Organisation et participation à des hackathons</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Événements de networking technologique</span>
                                </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-800 mb-4">Partenariats Institutionnels</h5>
                                <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Relations avec des universités partenaires</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Collaborations avec des ONG</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Partenariats avec des ministères</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="mt-6 text-center">
                                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                    <h5 className="font-semibold text-amber-800 mb-2">Objectif Stratégique</h5>
                                    <p className="text-amber-700 italic">
                                        Bâtir les fondations d'un <strong>écosystème ouvert mais souverain</strong>, au service du continent.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Période 2024-2025 : Lancement Officiel & Expansion */}
                    <div className="w-full flex-shrink-0 p-12">
                        <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-amber-800 mb-4">2024-2025 : Lancement Officiel & Expansion</h3>
                        <p className="text-lg text-amber-700 italic">
                            "Donner vie à la vision et impacter le terrain"
                        </p>
                        </div>

                        <div className="space-y-16">
                        {/* Lancement national */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <Rocket className="w-6 h-6 text-amber-600 mr-3" />
                                Lancement National
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                IOI organise une <strong>campagne de lancement</strong> avec un plan marketing complet : stratégie de communication, site officiel, documents de présentation, démonstrations dans les universités, création d'un réseau d'ambassadeurs.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Cette phase marque la transition de l'entreprise du stade de développement à celui de commercialisation et d'impact réel sur le terrain éducatif africain.
                            </p>
                            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                                <h5 className="font-semibold text-indigo-800 mb-2">Éléments du Lancement</h5>
                                <ul className="text-indigo-700 space-y-1">
                                <li>• Stratégie de communication complète</li>
                                <li>• Site officiel et documentation</li>
                                <li>• Démonstrations universitaires</li>
                                <li>• Réseau d'ambassadeurs</li>
                                </ul>
                            </div>
                            </div>
                            <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-indigo-200 to-purple-300 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Rocket className="w-24 h-24 text-indigo-700 mx-auto mb-4" />
                                    <h6 className="text-xl font-bold text-indigo-800">Lancement</h6>
                                    <p className="text-indigo-700">Campagne nationale</p>
                                    <p className="text-sm text-indigo-600">2024-2025</p>
                                </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                                <Star className="w-8 h-8 text-indigo-600" />
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Déploiement des premiers services */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                            <div className="relative">
                                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Network className="w-20 h-20 text-emerald-700 mx-auto mb-4" />
                                    <h6 className="text-lg font-bold text-emerald-800">Services en Production</h6>
                                    <p className="text-emerald-700">Déploiement actif</p>
                                    <p className="text-sm text-emerald-600">Universités partenaires</p>
                                </div>
                                </div>
                                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                                <Rocket className="w-8 h-8 text-emerald-600" />
                                </div>
                            </div>
                            </div>
                            <div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <Network className="w-6 h-6 text-amber-600 mr-3" />
                                Déploiement des Premiers Services en Production
                            </h4>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Intranet éducatif modulaire</strong>, interconnecté à un datacenter central, plateforme de gestion d'actes administratifs, interfaces de communication interne pour institutions.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Déploiement de solutions dans plusieurs universités partenaires, marquant le début de l'impact concret d'IOI sur le terrain éducatif africain.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-emerald-700">Intranet</div>
                                <div className="text-sm text-emerald-600">Éducatif modulaire</div>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-teal-700">Datacenter</div>
                                <div className="text-sm text-teal-600">Central interconnecté</div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Montée en puissance */}
                        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8">
                            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-cyan-600 mr-3" />
                            Montée en Puissance et Développements
                            </h4>
                            <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Équipe</h5>
                                <p className="text-sm text-slate-600 mb-2">Structuration technique et commerciale</p>
                                <p className="text-xs text-slate-500">Renforcement des compétences</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GraduationCap className="w-10 h-10 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Formation</h5>
                                <p className="text-sm text-slate-600 mb-2">Centre de formation IOI</p>
                                <p className="text-xs text-slate-500">Développement des compétences</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-10 h-10 text-white" />
                                </div>
                                <h5 className="font-bold text-slate-800 mb-2">Innovation</h5>
                                <p className="text-sm text-slate-600 mb-2">Versions mobiles et IA</p>
                                <p className="text-xs text-slate-500">Cybersécurité avancée</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <Button
                    className="bg-white/80 backdrop-blur-sm border-amber-300 hover:bg-amber-50"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount)}
                    >
                    <ChevronLeft className="w-4 h-4 text-amber-600" />
                    </Button>

                    <div className="flex space-x-2">
                    {Array.from({ length: slidesCount }).map((_, index) => (
                        <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-amber-600 w-8" : "bg-amber-300"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                    </div>

                    <Button
                    className="bg-white/80 backdrop-blur-sm border-amber-300 hover:bg-amber-50"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slidesCount)}
                    >
                    <ChevronRight className="w-4 h-4 text-amber-600" />
                    </Button>
                </div>

                {/* IOI Demain : L'Avenir en Construction */}
                <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8">
                    <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                    🌍 IOI Demain : L'Avenir en Construction
                    </h4>
                    <p className="text-slate-700 text-center mb-8 leading-relaxed">
                    IOI aspire à devenir <strong>le cœur numérique de l'éducation africaine</strong>. Son ambition est de transformer le paysage éducatif du continent.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-amber-600 mb-2">10</div>
                        <div className="text-slate-600">Pays africains d'ici 2030</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">Cloud</div>
                        <div className="text-slate-600">Africain souverain éducatif</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
                        <div className="text-slate-600">Jeunes formés en 5 ans</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">IOI</div>
                        <div className="text-slate-600">Label CERTIFIÉ</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
