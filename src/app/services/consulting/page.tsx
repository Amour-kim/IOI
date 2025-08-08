"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, TrendingUp, Shield, Zap, Award, CheckCircle, Quote, Star, ArrowRight, Clock, Globe, FileText, Lightbulb, BarChart3, Calendar, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import ContactUs from '@/components/ui/contact_us';

const ConsultingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Domaines d'expertise pour le Consulting
  const domains = [
    {
      icon: Target,
      title: 'Stratégie & Transformation',
      description: "Définition de la vision, transformation organisationnelle, pilotage du changement.",
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Users,
      title: 'Organisation & Processus',
      description: "Optimisation des processus, lean management, conduite du changement.",
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Zap,
      title: 'Digital & Innovation',
      description: "Transformation digitale, innovation, intégration de solutions technologiques.",
      color: 'from-orange-400 to-blue-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Shield,
      title: 'Finance & Gestion',
      description: "Optimisation financière, gestion des risques, pilotage de la performance.",
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Award,
      title: 'Marketing & Expérience Client',
      description: "Stratégies marketing, expérience client, fidélisation.",
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: TrendingUp,
      title: 'Opérations & Supply Chain',
      description: "Optimisation des opérations, logistique, supply chain.",
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  // Étapes d'approche pour le Consulting
  const approachSteps = [
    {
      icon: Target,
      title: 'Diagnostic & Audit',
      description: "Analyse de l’organisation, identification des leviers de performance.",
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Co-construction de la Stratégie',
      description: "Élaboration de solutions sur-mesure avec vos équipes.",
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Déploiement & Accompagnement',
      description: "Mise en œuvre opérationnelle, formation, accompagnement au changement.",
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Suivi & Mesure d’Impact',
      description: "Évaluation continue, ajustements, amélioration continue.",
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  // Experts Consulting
  const experts = [
    {
      name: 'Sophie Martin',
      role: 'Directrice Conseil',
      expertise: 'Stratégie, transformation digitale',
      color: 'from-yellow-400 to-orange-500',
      rating: 4.9
    },
    {
      name: 'Amadou Diop',
      role: 'Consultant Senior',
      expertise: 'Organisation, lean management',
      color: 'from-blue-400 to-blue-600',
      rating: 4.8
    },
    {
      name: 'Julie Chen',
      role: 'Consultante RH',
      expertise: 'Gestion du changement, coaching',
      color: 'from-orange-400 to-blue-500',
      rating: 4.9
    },
    {
      name: 'Lucas Morel',
      role: 'Directeur Financier',
      expertise: 'Gestion des risques, pilotage financier',
      color: 'from-yellow-400 to-yellow-600',
      rating: 4.7
    }
  ];

  // Témoignages Consulting
  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'CEO, TechNova',
      text: "L’équipe consulting IOI a transformé notre organisation. Leur approche humaine et innovante a généré +35% de croissance.",
      rating: 5
    },
    {
      name: 'Jean-Pierre Leroy',
      role: 'Directeur Financier, FinExpert',
      text: "Des experts à l’écoute, des outils performants et un vrai suivi. Nous avons gagné 40% d’efficacité opérationnelle.",
      rating: 5
    },
    {
      name: 'Awa Sarr',
      role: 'Responsable RH, HumanPlus',
      text: "Leur accompagnement RH a révélé le potentiel de nos équipes. Engagement collaborateur +50% en 6 mois.",
      rating: 5
    }
  ];

  // Cas d'usage Consulting
  const caseStudies = [
    {
      icon: BarChart3,
      industry: 'Industrie',
      title: 'Optimisation des processus',
      challenge: 'Réduire les coûts de production',
      solution: 'Lean management, automatisation',
      result: '€2M d’économies/an',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Globe,
      industry: 'Services Financiers',
      title: 'Transformation digitale',
      challenge: 'Moderniser les outils et process',
      solution: 'Migration cloud, outils collaboratifs',
      result: '+60% de productivité',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      industry: 'Santé',
      title: 'Restructuration organisationnelle',
      challenge: 'Optimiser les ressources humaines',
      solution: 'Redéfinition des rôles, formation',
      result: '+40% d’engagement',
      color: 'from-orange-400 to-blue-500',
      bgColor: 'bg-orange-50'
    }
  ];

  // FAQ Consulting
  const faqs = [
    {
      question: "Quelle est la durée moyenne d’un projet de consulting ?",
      answer: "De quelques semaines à plusieurs mois selon la complexité et l’envergure."
    },
    {
      question: "Comment mesurez-vous le succès ?",
      answer: "KPIs définis en amont, suivi régulier, reporting d’impact."
    },
    {
      question: "Intervenez-vous dans tous les secteurs ?",
      answer: "Oui, industrie, services, santé, finance, tech, etc."
    },
    {
      question: "Proposez-vous un accompagnement post-projet ?",
      answer: "Oui, suivi, formation, optimisation continue."
    },
    {
      question: "Comment se déroule le premier contact ?",
      answer: "Diagnostic gratuit, audit, recommandations personnalisées."
    },
    {
      question: "Travaillez-vous avec des PME et des grands groupes ?",
      answer: "Oui, notre approche s’adapte à la taille et aux enjeux de chaque client."
    }
  ];

  // Outils/technos Consulting
  const tools = [
    { name: 'Power BI', icon: TrendingUp, color: 'from-yellow-400 to-orange-500' },
    { name: 'Tableau', icon: Target, color: 'from-blue-400 to-blue-600' },
    { name: 'Slack', icon: Users, color: 'from-orange-400 to-orange-600' },
    { name: 'Miro', icon: Zap, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Notion', icon: CheckCircle, color: 'from-blue-400 to-blue-600' },
    { name: 'Google Analytics', icon: TrendingUp, color: 'from-orange-400 to-orange-600' }
  ];

  const techs = [
    { name: 'Power BI', logo: '/tech/powerbi.png' },
    { name: 'Tableau', logo: '/tech/tableau.png' },
    { name: 'Slack', logo: '/tech/slack.png' },
    { name: 'Miro', logo: '/tech/miro.png' },
    { name: 'Notion', logo: '/tech/notion.png' },
    { name: 'Google Analytics', logo: '/tech/google-analytics.png' }
  ];
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="min-h-screen bg-black">
      <ModernNavbar />
      <SocialSidebar />
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-24">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-in-a-meeting-4460-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left side: Text and CTA */}
            <div className="flex-1 text-center lg:text-left text-white">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Consulting IOI
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-xl mb-6 mx-auto lg:mx-0">
                Expertise stratégique pour optimiser votre entreprise et accélérer votre croissance
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {['Stratégie', 'Transformation', 'Digital', 'RH', 'Innovation', 'Performance'].map((mot, i) => (
                  <span key={i} className="bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow animate-pulse">
                    {mot}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Prendre rendez-vous
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
                  Nous contacter
                </button>
              </div>
            </div>
            
            {/* Right side: Image */}
            <div className="flex-1 flex items-center justify-center relative min-h-[400px] w-full">
              <div className="relative w-full h-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Consulting IOI"
                  className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/20"
                />
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients accompagnés', color: 'text-yellow-500' },
              { number: '15+', label: 'Années d\'expérience', color: 'text-orange-500' },
              { number: '98%', label: 'Taux de satisfaction', color: 'text-blue-500' },
              { number: '200+', label: 'Projets réalisés', color: 'text-yellow-600' }
            ].map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe d'experts couvre tous les aspects de votre transformation d'entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 ${domain.borderColor} hover:border-opacity-50 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{domain.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{domain.description}</p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100/20 to-orange-100/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION: Cas d'usage et industries */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Cas d'Usage & Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé des entreprises de différents secteurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-orange-400 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{study.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-red-600">Défi</p>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-blue-600">Solution</p>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-green-600">Résultat</p>
                        <p className="text-gray-900 text-sm font-bold">{study.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-blue-100/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Voir tous nos cas d'usage
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre transformation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-blue-500"></div>
            {approachSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Nos Experts Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe de consultants expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${expert.color} mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 text-sm mb-4">{expert.expertise}</p>
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{expert.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <Quote className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</p>
                <p className="text-orange-500 font-semibold">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les frameworks et outils que nous maîtrisons pour créer des solutions innovantes
            </p>
          </div>
          {/* Container du défilement avec masque gradient */}
          <div className="relative">
            {/* Gradient gauche */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            {/* Gradient droite */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            {/* Container de défilement */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {duplicatedTechs.map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter transition-all duration-300 group-hover:brightness-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className="hidden w-12 h-12 items-center justify-center text-white text-xs font-bold">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* NOUVELLE SECTION: FAQ */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez les réponses aux questions les plus courantes sur nos services de consulting
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-orange-500 transition-transform duration-200 flex-shrink-0 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Vous avez d'autres questions ? Notre équipe est là pour vous répondre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Phone className="inline mr-2 w-4 h-4" />
                Nous appeler
              </button>
              <button className="group bg-white border-2 border-orange-400 text-orange-600 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Mail className="inline mr-2 w-4 h-4" />
                Nous écrire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Comment Commencer ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour démarrer votre transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Process Steps */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Processus en 4 étapes
              </h3>
              
              {[
                {
                  step: '01',
                  title: 'Premier Contact',
                  description: 'Échange téléphonique de 30 minutes pour comprendre vos besoins',
                  icon: Phone,
                  color: 'from-yellow-400 to-orange-500'
                },
                {
                  step: '02',
                  title: 'Audit Gratuit',
                  description: 'Diagnostic approfondi de votre situation actuelle',
                  icon: FileText,
                  color: 'from-orange-400 to-orange-600'
                },
                {
                  step: '03',
                  title: 'Proposition',
                  description: 'Présentation d\'un plan d\'action personnalisé avec devis',
                  icon: Lightbulb,
                  color: 'from-blue-400 to-blue-600'
                },
                {
                  step: '04',
                  title: 'Lancement',
                  description: 'Démarrage de la mission avec votre équipe dédiée',
                  icon: Zap,
                  color: 'from-yellow-400 to-yellow-600'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-5 h-5 text-orange-500" />
                        <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contactez-nous
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">consulting@ioi-experts.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horaires</p>
                    <p className="text-gray-600">Lun-Ven: 9h-18h<br />Sam: 9h-12h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Réponse garantie</h4>
                <p className="text-gray-600 text-sm">
                  Nous nous engageons à répondre à votre demande dans les 24 heures ouvrées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour un accompagnement sur-mesure et découvrez comment le consulting IOI peut booster votre performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Demander un devis gratuit
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
              Planifier un appel
            </button>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default ConsultingPage;