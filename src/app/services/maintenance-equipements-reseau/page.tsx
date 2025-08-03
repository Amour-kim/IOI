"use client";
import React, { useState, useEffect } from 'react';
import { Wrench, Server, Wifi, Database, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const MaintenanceEquipementsReseauPage = () => {
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

  // Domaines d'expertise pour la Maintenance Équipements Réseau
  const domains = [
    {
      icon: Wrench,
      title: 'Maintenance Préventive',
      description: "Maintenance programmée et préventive pour éviter les pannes et optimiser les performances.",
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Server,
      title: 'Maintenance Corrective',
      description: "Intervention rapide et efficace pour résoudre les pannes et dysfonctionnements.",
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Wifi,
      title: 'Optimisation Performance',
      description: "Amélioration continue des performances et mise à jour des équipements.",
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Diagnostic",
      description: "Analyse complète de l'état des équipements et identification des problèmes."
    },
    {
      step: "02",
      title: "Planification",
      description: "Élaboration d'un plan de maintenance adapté et programmation des interventions."
    },
    {
      step: "03",
      title: "Intervention",
      description: "Exécution des tâches de maintenance avec suivi qualité rigoureux."
    },
    {
      step: "04",
      title: "Suivi",
      description: "Monitoring post-intervention et rapport détaillé des actions réalisées."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Karim El Mansouri",
      role: "Technicien Maintenance Senior",
      experience: "10 ans",
      expertise: ["Cisco", "Juniper", "HP"],
      avatar: "/experts/karim.jpg"
    },
    {
      name: "Fatima Benali",
      role: "Ingénieure Support",
      experience: "7 ans",
      expertise: ["Troubleshooting", "Upgrade", "Monitoring"],
      avatar: "/experts/fatima.jpg"
    },
    {
      name: "Youssef Tazi",
      role: "Spécialiste Équipements",
      experience: "8 ans",
      expertise: ["Hardware", "Firmware", "Backup"],
      avatar: "/experts/youssef.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Ahmed Alami",
      company: "Entreprise Industrielle",
      role: "Responsable IT",
      content: "La maintenance préventive d'IOI nous a permis de réduire nos temps d'arrêt de 80%. Leur équipe est réactive et professionnelle.",
      rating: 5
    },
    {
      name: "Sara El Kadi",
      company: "Centre Hospitalier",
      role: "Directrice Systèmes",
      content: "Maintenance 24/7 et intervention rapide. IOI garantit la continuité de service de nos équipements critiques.",
      rating: 5
    },
    {
      name: "Mohammed Benjelloun",
      company: "Université",
      role: "Responsable Réseau",
      content: "Optimisation des performances et maintenance préventive. Nos équipements fonctionnent parfaitement depuis 2 ans.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "Cisco", category: "Routage" },
    { name: "Juniper", category: "Switching" },
    { name: "HP", category: "Serveurs" },
    { name: "Dell", category: "Équipements" },
    { name: "NetApp", category: "Storage" },
    { name: "VMware", category: "Virtualisation" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Industrie 4.0",
      description: "Maintenance préventive d'équipements réseau critiques dans un environnement industriel.",
      result: "Réduction pannes de 85%"
    },
    {
      title: "Santé",
      description: "Maintenance 24/7 des équipements réseau d'un centre hospitalier multi-sites.",
      result: "99.9% de disponibilité"
    },
    {
      title: "Éducation",
      description: "Optimisation et maintenance des équipements réseau d'une université de 20 000 étudiants.",
      result: "Performance x3 améliorée"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Quels types d'équipements maintenez-vous ?",
      answer: "Nous maintenons tous types d'équipements réseau : routeurs, switches, serveurs, firewalls, équipements WiFi, etc."
    },
    {
      question: "Proposez-vous une maintenance 24h/24 ?",
      answer: "Oui, nous proposons des contrats de maintenance 24/7 avec intervention rapide pour les équipements critiques."
    },
    {
      question: "Quel est le délai d'intervention moyen ?",
      answer: "Intervention sur site sous 4h pour les équipements critiques, 24h pour les équipements standards."
    },
    {
      question: "Incluez-vous les pièces de rechange ?",
      answer: "Oui, nos contrats incluent la gestion des pièces de rechange et leur remplacement en cas de besoin."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Maintenance Équipements Réseau
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Maintenance <span className="text-green-600">Équipements</span> Réseau
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maintenance préventive et corrective de vos équipements réseau pour garantir 
              une performance optimale et une disponibilité maximale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Demander un devis
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Voir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Domaines d'Expertise</h2>
            <p className="text-xl text-gray-600">Services de maintenance complète pour vos équipements réseau</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className={`p-8 rounded-2xl ${domain.bgColor} border ${domain.borderColor} hover:shadow-lg transition-all duration-300`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${domain.color} mb-6`}>
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{domain.title}</h3>
                <p className="text-gray-600 leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche méthodologique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Approche</h2>
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour une maintenance efficace</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Experts</h2>
            <p className="text-xl text-gray-600">Équipe spécialisée en maintenance d'équipements réseau</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 mb-4">{expert.experience} d'expérience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Ce que disent nos clients de notre expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-2xl bg-gray-50 ${index === activeTestimonial ? 'ring-2 ring-green-500' : ''}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-600">{testimonial.company}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils et technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Équipements Maintenus</h2>
            <p className="text-xl text-gray-600">Large gamme d'équipements réseau supportés</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cas d'Usage</h2>
            <p className="text-xl text-gray-600">Exemples concrets de nos réalisations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>{useCase.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur la maintenance d'équipements</p>
          </div>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenanceEquipementsReseauPage; 