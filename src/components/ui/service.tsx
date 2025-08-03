"use client";
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Rocket, Shield, Heart, Sparkles, Users, Globe, Lightbulb, FileText, Languages, Accessibility, Headphones, Bot, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Compteur animé
function AnimatedCounter({ value, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    animate();
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration]);
  return <span>{count}{suffix}</span>;
}

export default function Service() {
  const cards = Array(4).fill({
    title: "Senior Digital Lighting Artist and Real Time ICVFX Stage Operator",
    description:
      "The website is your business card. Your public image. Your shop window into the company. And it can become your money machine. With Webflow, we create websites that convert prospects into customers. Thanks to years of experience, we know exactly what is important. We provide you with an individual design for your website that is both responsive and search engine optimized.",
    buttonText: "Boutons",
  })

  // Nouveaux services dynamiques
  const services = [
    {
      title: "Développement Web sur-mesure",
      description: "Sites vitrines, plateformes, applications métier, e-commerce, tout est possible avec nos experts.",
      image: "/website-img-1.jpg",
      values: [
        { icon: <Rocket className="w-5 h-5 text-orange-400 animate-bounce" />, label: "Rapidité" },
        { icon: <Shield className="w-5 h-5 text-amber-500 animate-pulse" />, label: "Sécurité" },
        { icon: <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />, label: "UX Moderne" },
      ],
      link: "/services/developpement",
    },
    {
      title: "Consulting & Transformation Digitale",
      description: "Conseil, audit, accompagnement pour réussir votre transition numérique et gagner en efficacité.",
      image: "/website-img-2.webp",
      values: [
        { icon: <Lightbulb className="w-5 h-5 text-orange-400 animate-pulse" />, label: "Expertise" },
        { icon: <Users className="w-5 h-5 text-amber-500 animate-float" />, label: "Accompagnement" },
        { icon: <Globe className="w-5 h-5 text-orange-400 animate-spin-slow" />, label: "Ouverture" },
      ],
      link: "/services/consulting",
    },
    {
      title: "Applications Mobiles & API",
      description: "Des apps performantes, connectées à vos outils, pour une expérience utilisateur optimale partout.",
      image: "/DG1.jpg",
      values: [
        { icon: <Rocket className="w-5 h-5 text-orange-400 animate-bounce" />, label: "Performance" },
        { icon: <Shield className="w-5 h-5 text-amber-500 animate-pulse" />, label: "Sécurité" },
        { icon: <Heart className="w-5 h-5 text-orange-400 animate-pulse" />, label: "Support" },
      ],
      link: "/services/mobile",
    },
    {
      title: "Support & Formation",
      description: "Un accompagnement humain, des tutoriels, et un support réactif pour garantir votre succès.",
      image: "/skills.avif",
      values: [
        { icon: <Heart className="w-5 h-5 text-orange-400 animate-pulse" />, label: "Humain" },
        { icon: <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />, label: "Pédagogie" },
        { icon: <Shield className="w-5 h-5 text-amber-500 animate-pulse" />, label: "Fiabilité" },
      ],
      link: "/services/support",
    },
    {
      title: "Design & Identité Visuelle",
      description: "Création de chartes graphiques, logos, UI/UX, et expériences visuelles mémorables.",
      image: "/illustration.png",
      values: [
        { icon: <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />, label: "Créativité" },
        { icon: <Globe className="w-5 h-5 text-orange-400 animate-spin-slow" />, label: "Impact" },
        { icon: <Lightbulb className="w-5 h-5 text-orange-400 animate-pulse" />, label: "Originalité" },
      ],
      link: "/services/design",
    },
    {
      title: "Marketing Digital & SEO",
      description: "Stratégies de visibilité, campagnes, référencement, réseaux sociaux, analytics et plus.",
      image: "/website-img-3.jpg",
      values: [
        { icon: <Rocket className="w-5 h-5 text-orange-400 animate-bounce" />, label: "Croissance" },
        { icon: <Users className="w-5 h-5 text-amber-500 animate-float" />, label: "Audience" },
        { icon: <Shield className="w-5 h-5 text-amber-500 animate-pulse" />, label: "Fiabilité" },
      ],
      link: "/services/marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] px-4 py-12 relative overflow-hidden">
      {/* Animated floating logo background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute animate-floating-logo-service">
          <img
            src="/logo.png"
            alt="IOI Logo"
            className="w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
            style={{ filter: 'brightness(0.9) saturate(0.8) opacity(0.07) blur(1px)' }}
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#eb462d] text-sm mb-4">Quelles sont nos compétences ?</p>
          <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            Ce que vous aurez dans votre site ou application
          </h1>
        </div>

        {/* Cards Section */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#000000] rounded-lg p-6 border border-gray-800">
              <div className="flex gap-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Profile"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#ffffff] text-lg font-medium mb-4">{card.title}</h3>

                  <p className="text-[#ffffff] text-sm leading-relaxed mb-6 opacity-90">{card.description}</p>

                  <button className="flex items-center gap-2 text-[#fbd807] text-sm font-medium hover:opacity-80 transition-opacity">
                    {card.buttonText}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nouvelle section dynamique : Services en valeur */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 text-center animate-fade-in">Nos Services phares</h2>
          <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2">
            {services.map((srv, idx) => (
              <Card
                key={idx}
                className="group shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-amber-100 bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden animate-fade-in-up hover:scale-[1.03] hover:border-orange-400 hover:bg-white/95 hover:backdrop-blur-lg hover:z-10 hover:shadow-amber-200"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative w-full h-44 rounded-t-xl overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-[0_0_40px_10px_rgba(251,191,36,0.25)]"
                  />
                  {/* Glow/halo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-amber-100/10 backdrop-blur-[2px] pointer-events-none" />
                  <div className="absolute -bottom-4 right-4 w-12 h-12 bg-gradient-to-tr from-amber-400/30 to-orange-400/30 rounded-full blur-2xl opacity-60 animate-float" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold text-amber-700 mb-2 animate-fade-in">{srv.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4 min-h-[48px] animate-fade-in-up">{srv.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {srv.values.map((val, vIdx) => (
                      <span key={vIdx} className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold text-xs shadow hover:bg-orange-100 transition-all animate-fade-in">
                        {val.icon}
                        {val.label}
                      </span>
                    ))}
                  </div>
                  <a
                    href={srv.link}
                    className="inline-block px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition relative overflow-hidden focus:outline-none group/button"
                  >
                    <span className="relative z-10">Découvrir</span>
                    <span className="absolute inset-0 rounded-full bg-amber-400/30 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-300 blur-lg" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Chiffres clés et impact */}
        <div className="relative mt-24 mb-8">
          {/* Fond SVG animé */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="impact-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#fbbf24" stopOpacity="0.18" />
                <stop offset="1" stopColor="#fb923c" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path fill="url(#impact-gradient)" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
          <div className="relative z-10 max-w-5xl mx-auto rounded-2xl bg-white/80 backdrop-blur-md shadow-xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-amber-100">
            <div className="flex flex-col items-center flex-1">
              <Rocket className="w-10 h-10 text-orange-400 mb-2 animate-bounce" />
              <div className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-1">
                <AnimatedCounter value={120} duration={1800} />
              </div>
              <div className="text-sm md:text-base text-amber-800 font-semibold">Projets livrés</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Users className="w-10 h-10 text-amber-500 mb-2 animate-float" />
              <div className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-1">
                <AnimatedCounter value={80} duration={1800} />
              </div>
              <div className="text-sm md:text-base text-amber-800 font-semibold">Clients accompagnés</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Heart className="w-10 h-10 text-orange-400 mb-2 animate-pulse" />
              <div className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-1">
                <AnimatedCounter value={98} duration={1800} suffix="%" />
              </div>
              <div className="text-sm md:text-base text-amber-800 font-semibold">Taux de satisfaction</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Globe className="w-10 h-10 text-orange-400 mb-2 animate-spin-slow" />
              <div className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-1">
                <AnimatedCounter value={12} duration={1800} />
              </div>
              <div className="text-sm md:text-base text-amber-800 font-semibold">Pays couverts</div>
            </div>
          </div>
        </div>
        {/* Modules complémentaires : Pourquoi nous choisir ? */}
        <div className="relative mt-24 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 text-center animate-fade-in">Pourquoi nous choisir&nbsp;?</h2>
          <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* IA de conseil */}
            <div className="relative bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all group overflow-hidden animate-fade-in-up">
              <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-white text-xs font-bold shadow animate-pulse">IA</span>
              <Bot className="w-10 h-10 text-amber-500 mb-4 animate-bounce" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Assistant intelligent</h3>
              <p className="text-slate-700 mb-4">Un assistant IA pour vous guider, répondre à vos questions et optimiser vos choix.</p>
              <button className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition">Démarrer l'IA</button>
            </div>
            {/* Téléchargement brochure */}
            <div className="bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all animate-fade-in-up">
              <FileText className="w-10 h-10 text-orange-400 mb-4 animate-float" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Brochure PDF</h3>
              <p className="text-slate-700 mb-4">Téléchargez notre catalogue complet ou des fiches détaillées sur nos services.</p>
              <a href="/brochure-ioi.pdf" download className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition flex items-center gap-2">
                <FileText className="w-4 h-4" /> Télécharger
              </a>
            </div>
            {/* Offres d'emploi */}
            <div className="bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all animate-fade-in-up">
              <ExternalLink className="w-10 h-10 text-amber-500 mb-4 animate-spin-slow" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Offres d'emploi</h3>
              <p className="text-slate-700 mb-4">Découvrez nos opportunités de carrière et rejoignez une équipe innovante.</p>
              <a href="/jobs" className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> Voir les offres
              </a>
            </div>
            {/* Multilingue */}
            <div className="bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all animate-fade-in-up">
              <Languages className="w-10 h-10 text-orange-400 mb-4 animate-float2" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Intégration multilingue</h3>
              <p className="text-slate-700 mb-4">Votre site ou application accessible en plusieurs langues, pour toucher un public international.</p>
              <button className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition">Voir la démo</button>
            </div>
            {/* Accessibilité */}
            <div className="bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all animate-fade-in-up">
              <Accessibility className="w-10 h-10 text-amber-500 mb-4 animate-pulse" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Accessibilité complète</h3>
              <p className="text-slate-700 mb-4">Contraste élevé, lecture vocale, navigation clavier : nos solutions sont inclusives.</p>
              <button className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition">En savoir plus</button>
            </div>
            {/* Support humain */}
            <div className="bg-white/90 rounded-2xl shadow-xl border border-amber-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-all animate-fade-in-up">
              <Headphones className="w-10 h-10 text-orange-400 mb-4 animate-bounce" />
              <h3 className="text-lg font-bold text-amber-700 mb-2">Support humain 24/7</h3>
              <p className="text-slate-700 mb-4">Une équipe à votre écoute, disponible à tout moment pour vous accompagner.</p>
              <button className="px-4 py-2 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition">Contacter le support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
