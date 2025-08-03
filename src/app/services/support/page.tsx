"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, TrendingUp, Shield, Zap, Award, CheckCircle, Quote, Star, ArrowRight, Clock, Globe, FileText, Lightbulb, BarChart3, Calendar, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import ContactUs from '@/components/ui/contact_us';

const SupportPage = () => {
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

  // Domaines d'expertise pour le Support
  const domains = [
    {
      icon: Users,
      title: 'Support Utilisateur',
      description: "Assistance technique, résolution de tickets, accompagnement quotidien.",
      color: 'from-blue-400 to-green-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Award,
      title: 'Helpdesk & Hotline',
      description: "Centre d’appel, support multicanal, prise en main à distance.",
      color: 'from-orange-400 to-pink-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Globe,
      title: 'Support Applicatif',
      description: "Maintenance des applications métiers, gestion des incidents.",
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Lightbulb,
      title: 'Formation & Documentation',
      description: "Guides utilisateurs, FAQ, sessions de formation.",
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: BarChart3,
      title: 'SLA & Qualité de Service',
      description: "Engagements de délai, reporting, satisfaction client.",
      color: 'from-green-400 to-blue-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Zap,
      title: 'Support 24/7',
      description: "Assistance continue, astreinte, gestion des urgences.",
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  // Étapes d'approche pour le Support
  const approachSteps = [
    {
      icon: Target,
      title: 'Prise de Contact',
      description: "Ouverture de ticket, diagnostic initial, priorisation.",
      color: 'from-blue-400 to-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Analyse & Résolution',
      description: "Traitement du ticket, intervention à distance ou sur site.",
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: CheckCircle,
      title: 'Suivi & Communication',
      description: "Information régulière du client, documentation des actions.",
      color: 'from-green-400 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Clôture & Satisfaction',
      description: "Validation de la résolution, enquête de satisfaction, amélioration continue.",
      color: 'from-orange-400 to-pink-500'
    }
  ];

  // Experts Support
  const experts = [
    {
      name: 'Fatou Ndiaye',
      role: 'Responsable Support',
      expertise: 'Helpdesk, gestion d’équipe',
      color: 'from-blue-400 to-green-500',
      rating: 4.9
    },
    {
      name: 'Pierre Martin',
      role: 'Technicien Hotline',
      expertise: 'Assistance, dépannage, hotline',
      color: 'from-orange-400 to-pink-500',
      rating: 4.8
    },
    {
      name: 'Julie Chen',
      role: 'Consultante Support Applicatif',
      expertise: 'Applications métiers, documentation',
      color: 'from-blue-400 to-purple-500',
      rating: 4.9
    },
    {
      name: 'Amadou Diop',
      role: 'Formateur',
      expertise: 'Formation utilisateurs, guides',
      color: 'from-yellow-400 to-orange-500',
      rating: 4.7
    }
  ];

  // Témoignages Support
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Responsable SI',
      text: "Le support IOI est toujours disponible et efficace. Nos utilisateurs sont ravis !",
      rating: 5
    },
    {
      name: 'Lucas Morel',
      role: 'CEO, PME Digitale',
      text: "La hotline a résolu nos incidents en un temps record. Merci à l’équipe support !",
      rating: 5
    },
    {
      name: 'Marie Dupont',
      role: 'Assistante de Direction',
      text: "La documentation et les formations ont facilité l’adoption de nos nouveaux outils.",
      rating: 5
    }
  ];

  // Cas d'usage Support
  const caseStudies = [
    {
      icon: Users,
      industry: 'Services',
      title: 'Support utilisateur multi-sites',
      challenge: 'Assister 300 collaborateurs à distance',
      solution: 'Helpdesk, prise en main à distance',
      result: '95% de tickets résolus en 24h',
      color: 'from-blue-400 to-green-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      industry: 'Tech',
      title: 'Hotline 24/7',
      challenge: 'Garantir la continuité de service',
      solution: 'Support 24/7, astreinte, reporting',
      result: 'Zéro interruption critique',
      color: 'from-orange-400 to-pink-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Lightbulb,
      industry: 'Éducation',
      title: 'Formation utilisateurs',
      challenge: 'Adoption d’un nouvel outil métier',
      solution: 'Sessions de formation, guides, FAQ',
      result: '+80% d’adoption en 1 mois',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  // FAQ Support
  const faqs = [
    {
      question: "Quel est votre délai de réponse ?",
      answer: "95% des tickets sont pris en charge en moins de 2h."
    },
    {
      question: "Proposez-vous un support 24/7 ?",
      answer: "Oui, nous assurons une astreinte continue pour les urgences."
    },
    {
      question: "Aidez-vous à la prise en main des outils ?",
      answer: "Oui, guides, FAQ et formations sont inclus."
    },
    {
      question: "Peut-on suivre l’avancement des tickets ?",
      answer: "Un portail client permet de suivre chaque demande en temps réel."
    },
    {
      question: "Intervenez-vous sur site ?",
      answer: "Oui, pour les incidents critiques ou la formation."
    },
    {
      question: "Avez-vous des engagements de qualité ?",
      answer: "Nos SLA garantissent la rapidité et la satisfaction client."
    }
  ];

  // Outils/technos Support
  const tools = [
    { name: 'Zendesk', icon: Users, color: 'from-blue-400 to-green-500' },
    { name: 'Freshdesk', icon: Award, color: 'from-orange-400 to-pink-500' },
    { name: 'TeamViewer', icon: Globe, color: 'from-blue-400 to-purple-500' },
    { name: 'Confluence', icon: Lightbulb, color: 'from-yellow-400 to-orange-500' },
    { name: 'Jira Service Desk', icon: BarChart3, color: 'from-green-400 to-blue-600' },
    { name: 'Slack', icon: Zap, color: 'from-orange-400 to-red-500' }
  ];

  const techs = [
    { name: 'Zendesk', logo: '/tech/zendesk.png' },
    { name: 'Freshdesk', logo: '/tech/freshdesk.png' },
    { name: 'TeamViewer', logo: '/tech/teamviewer.png' },
    { name: 'Confluence', logo: '/tech/confluence.png' },
    { name: 'Jira Service Desk', logo: '/tech/jira-servicedesk.png' },
    { name: 'Slack', logo: '/tech/slack.png' }
  ];
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      <SocialSidebar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden mt-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            {/* Partie gauche : texte et CTA */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Support IOI
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-xl mb-6">
                Assistance technique, support client, hotline et formation pour votre entreprise
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Support', 'Helpdesk', 'Hotline', 'Formation', 'SLA', '24/7'].map((mot, i) => (
                  <span key={i} className="bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow animate-pulse">
                    {mot}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Prendre rendez-vous
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
                  Nous contacter
                </button>
              </div>
            </div>
            {/* Partie droite : image PNG + avatars animés */}
            <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
              <img
                src="/support-hero.png"
                alt="Support IOI"
                className="w-[340px] h-[340px] object-contain drop-shadow-2xl animate-fade-in"
                style={{ background: 'transparent' }}
              />
              {/* Avatars animés en overlay */}
              <div className="absolute top-10 left-10 animate-bounce">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
              </div>
              <div className="absolute bottom-10 right-10 animate-pulse">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
              </div>
              <div className="absolute bottom-16 left-24 animate-spin-slow">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar3" className="w-12 h-12 rounded-full border-4 border-white shadow-lg" />
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
              { number: '24/7', label: 'Assistance 24/7', color: 'text-orange-500' },
              { number: '98%', label: 'Taux de satisfaction', color: 'text-blue-500' },
              { number: '100+', label: 'Projets réalisés', color: 'text-yellow-600' },
              { number: '1000+', label: 'Tickets traités', color: 'text-green-500' }
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
              Nos Experts Support
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

export default SupportPage;