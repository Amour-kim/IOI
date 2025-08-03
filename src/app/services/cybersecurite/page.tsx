"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const CybersecuritePage = () => {
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

  // Domaines d'expertise pour la Cybersécurité
  const domains = [
    {
      icon: Shield,
      title: 'Audit Sécurité',
      description: "Évaluation complète de votre posture de sécurité et identification des vulnérabilités.",
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Lock,
      title: 'Conformité RGPD',
      description: "Mise en conformité avec le RGPD et autres réglementations de protection des données.",
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Eye,
      title: 'Monitoring Avancé',
      description: "Surveillance 24/7, détection d'intrusions et réponse aux incidents en temps réel.",
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Audit & Analyse",
      description: "Évaluation complète de votre infrastructure et identification des risques."
    },
    {
      step: "02",
      title: "Stratégie Sécurité",
      description: "Élaboration d'une stratégie de cybersécurité adaptée à vos besoins."
    },
    {
      step: "03",
      title: "Implémentation",
      description: "Mise en place des solutions de sécurité et formation des équipes."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Surveillance continue et amélioration continue de la sécurité."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Dr. Sarah Benali",
      role: "Expert Cybersécurité",
      experience: "12 ans",
      expertise: ["Audit", "RGPD", "Incident Response"],
      avatar: "/experts/sarah.jpg"
    },
    {
      name: "Karim El Mansouri",
      role: "Architecte Sécurité",
      experience: "10 ans",
      expertise: ["Firewall", "IDS/IPS", "SIEM"],
      avatar: "/experts/karim.jpg"
    },
    {
      name: "Fatima Zahra",
      role: "Consultante Conformité",
      experience: "8 ans",
      expertise: ["RGPD", "ISO 27001", "Audit"],
      avatar: "/experts/fatima.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Mohammed Alami",
      company: "Banque Digitale",
      role: "CISO",
      content: "L'audit de cybersécurité d'IOI nous a permis d'identifier et corriger des vulnérabilités critiques. Leur expertise est exceptionnelle.",
      rating: 5
    },
    {
      name: "Leila Mansouri",
      company: "E-commerce Luxe",
      role: "DPO",
      content: "Mise en conformité RGPD réussie avec IOI. Leur approche méthodique nous a donné confiance dans notre conformité.",
      rating: 5
    },
    {
      name: "Youssef Tazi",
      company: "Startup Tech",
      role: "CTO",
      content: "Le monitoring de sécurité 24/7 nous protège efficacement. L'équipe IOI est réactive et professionnelle.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "Nessus", category: "Vulnérabilités" },
    { name: "Wireshark", category: "Analyse" },
    { name: "Splunk", category: "SIEM" },
    { name: "Metasploit", category: "Pentest" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "CrowdStrike", category: "EDR" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Banque Digitale",
      description: "Audit de sécurité complet et mise en place d'un SOC pour une banque en ligne.",
      result: "Conformité 100% atteinte"
    },
    {
      title: "E-commerce Sécurisé",
      description: "Protection contre les attaques et mise en conformité RGPD pour un e-commerce.",
      result: "Zéro incident en 18 mois"
    },
    {
      title: "Startup Tech",
      description: "Monitoring de sécurité et formation des équipes pour une startup en croissance.",
      result: "Détection 99% des menaces"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Quels types d'audits de sécurité proposez-vous ?",
      answer: "Audits de vulnérabilités, tests d'intrusion, audits de conformité RGPD, audits d'architecture de sécurité."
    },
    {
      question: "Le monitoring est-il disponible 24h/24 ?",
      answer: "Oui, notre SOC opère 24/7 avec détection automatique et intervention humaine en cas d'incident."
    },
    {
      question: "Combien de temps pour un audit de sécurité ?",
      answer: "Entre 1 à 4 semaines selon la complexité de votre infrastructure et le type d'audit."
    },
    {
      question: "Proposez-vous des formations en cybersécurité ?",
      answer: "Oui, nous formons vos équipes aux bonnes pratiques et à la sensibilisation aux menaces."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Cybersécurité
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Protection <span className="text-purple-600">Cybersécurité</span> Avancée
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Solutions de cybersécurité complètes pour protéger vos données, 
              assurer la conformité et défendre votre infrastructure contre les menaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                Demander un audit
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
            <p className="text-xl text-gray-600">Solutions de cybersécurité complètes et innovantes</p>
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
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour une cybersécurité optimale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
            <p className="text-xl text-gray-600">Équipe spécialisée en cybersécurité</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 mb-4">{expert.experience} d'expérience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
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
              <div key={index} className={`p-8 rounded-2xl bg-gray-50 ${index === activeTestimonial ? 'ring-2 ring-purple-500' : ''}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-purple-600">{testimonial.company}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Outils & Technologies</h2>
            <p className="text-xl text-gray-600">Solutions de cybersécurité de pointe</p>
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
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur la cybersécurité</p>
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

export default CybersecuritePage; 