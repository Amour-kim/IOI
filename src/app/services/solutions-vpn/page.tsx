"use client";
import React, { useState, useEffect } from 'react';
import { Lock, Shield, Globe, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const SolutionsVpnPage = () => {
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

  // Domaines d'expertise pour les Solutions VPN
  const domains = [
    {
      icon: Lock,
      title: 'VPN Entreprise',
      description: "Solutions VPN sécurisées pour entreprises avec accès distant et chiffrement avancé.",
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Shield,
      title: 'VPN Sécurisé',
      description: "Protection des données sensibles avec chiffrement militaire et authentification forte.",
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Globe,
      title: 'VPN Global',
      description: "Réseau VPN mondial avec serveurs dans plus de 50 pays pour une connectivité optimale.",
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Analyse Besoins",
      description: "Évaluation de vos besoins en connectivité sécurisée et accès distant."
    },
    {
      step: "02",
      title: "Conception VPN",
      description: "Design de l'architecture VPN adaptée à votre infrastructure."
    },
    {
      step: "03",
      title: "Déploiement",
      description: "Installation et configuration sécurisée de votre solution VPN."
    },
    {
      step: "04",
      title: "Formation",
      description: "Formation des équipes et support technique continu."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Karim El Mansouri",
      role: "Expert VPN Senior",
      experience: "10 ans",
      expertise: ["OpenVPN", "IPSec", "WireGuard"],
      avatar: "/experts/karim.jpg"
    },
    {
      name: "Fatima Benali",
      role: "Ingénieure Sécurité",
      experience: "8 ans",
      expertise: ["Chiffrement", "Authentification", "Monitoring"],
      avatar: "/experts/fatima.jpg"
    },
    {
      name: "Youssef Tazi",
      role: "Spécialiste Réseau",
      experience: "12 ans",
      expertise: ["Routage", "Load Balancing", "Failover"],
      avatar: "/experts/youssef.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Ahmed Alami",
      company: "Cabinet d'Avocats",
      role: "Directeur IT",
      content: "La solution VPN d'IOI nous permet d'accéder à nos dossiers clients en toute sécurité depuis n'importe où. Parfait !",
      rating: 5
    },
    {
      name: "Sara El Kadi",
      company: "Consulting International",
      role: "Responsable Systèmes",
      content: "VPN global avec serveurs dans 30 pays. Nos consultants peuvent travailler en toute sécurité partout dans le monde.",
      rating: 5
    },
    {
      name: "Mohammed Benjelloun",
      company: "Startup Tech",
      role: "CTO",
      content: "Solution VPN simple à déployer et très sécurisée. L'équipe IOI nous accompagne parfaitement.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "OpenVPN", category: "VPN" },
    { name: "WireGuard", category: "VPN Moderne" },
    { name: "IPSec", category: "Protocole" },
    { name: "Cisco ASA", category: "Firewall" },
    { name: "Fortinet", category: "Sécurité" },
    { name: "Palo Alto", category: "NGFW" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Cabinet d'Avocats",
      description: "VPN sécurisé pour accès distant aux dossiers clients avec chiffrement avancé.",
      result: "Sécurité 100% garantie"
    },
    {
      title: "Consulting International",
      description: "Réseau VPN global pour consultants travaillant dans 30 pays différents.",
      result: "Connectivité mondiale"
    },
    {
      title: "Startup Tech",
      description: "Solution VPN simple pour équipe distribuée avec accès sécurisé aux ressources.",
      result: "Déploiement en 24h"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Quels types de VPN proposez-vous ?",
      answer: "VPN site-to-site, VPN client, VPN SSL, et solutions hybrides selon vos besoins."
    },
    {
      question: "Le chiffrement est-il suffisamment sécurisé ?",
      answer: "Oui, nous utilisons des protocoles de chiffrement militaires (AES-256, ChaCha20)."
    },
    {
      question: "Combien d'utilisateurs peuvent se connecter simultanément ?",
      answer: "De 10 à 1000+ utilisateurs selon votre licence et infrastructure."
    },
    {
      question: "Proposez-vous un support technique ?",
      answer: "Oui, support 24/7 et maintenance préventive incluse dans nos contrats."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Solutions VPN
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Solutions <span className="text-indigo-600">VPN</span> Sécurisées
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Solutions VPN professionnelles pour sécuriser vos connexions, 
              protéger vos données et permettre l'accès distant sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Demander un devis
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Voir nos solutions
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
            <p className="text-xl text-gray-600">Solutions VPN complètes et sécurisées</p>
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
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour des solutions VPN optimales</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
            <p className="text-xl text-gray-600">Équipe spécialisée en solutions VPN</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-indigo-600 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 mb-4">{expert.experience} d'expérience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
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
              <div key={index} className={`p-8 rounded-2xl bg-gray-50 ${index === activeTestimonial ? 'ring-2 ring-indigo-500' : ''}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-indigo-600">{testimonial.company}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Outils</h2>
            <p className="text-xl text-gray-600">Solutions VPN de pointe</p>
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
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur les solutions VPN</p>
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

export default SolutionsVpnPage; 