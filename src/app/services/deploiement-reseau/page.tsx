"use client";
import React, { useState, useEffect } from 'react';
import { Rocket, Network, Wifi, Database, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const DeploiementReseauPage = () => {
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

  // Domaines d'expertise pour le Déploiement Réseau
  const domains = [
    {
      icon: Rocket,
      title: 'Déploiement Infrastructure',
      description: "Installation et configuration complète d'infrastructures réseau sur mesure.",
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Network,
      title: 'Migration Réseau',
      description: "Migration sécurisée et sans interruption de vos infrastructures existantes.",
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Wifi,
      title: 'Déploiement WiFi',
      description: "Installation de réseaux WiFi haute performance pour tous types d'environnements.",
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Planification",
      description: "Analyse des besoins et planification détaillée du déploiement."
    },
    {
      step: "02",
      title: "Préparation",
      description: "Configuration des équipements et tests pré-déploiement."
    },
    {
      step: "03",
      title: "Déploiement",
      description: "Installation et mise en service progressive de l'infrastructure."
    },
    {
      step: "04",
      title: "Validation",
      description: "Tests complets et formation des équipes utilisateurs."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Rachid El Fassi",
      role: "Chef de Projet Déploiement",
      experience: "12 ans",
      expertise: ["Cisco", "Juniper", "Project Management"],
      avatar: "/experts/rachid.jpg"
    },
    {
      name: "Leila Benali",
      role: "Ingénieure Déploiement",
      experience: "8 ans",
      expertise: ["WiFi", "Security", "Automation"],
      avatar: "/experts/leila.jpg"
    },
    {
      name: "Hassan Tazi",
      role: "Spécialiste Migration",
      experience: "10 ans",
      expertise: ["Migration", "Zero Downtime", "Backup"],
      avatar: "/experts/hassan.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Nadia Mansouri",
      company: "Startup Tech",
      role: "CTO",
      content: "Le déploiement de notre infrastructure réseau par IOI s'est déroulé parfaitement. Zéro interruption de service et performance au rendez-vous.",
      rating: 5
    },
    {
      name: "Youssef Alami",
      company: "Centre Commercial",
      role: "Directeur IT",
      content: "Déploiement WiFi pour 50 000 visiteurs quotidiens. IOI a relevé le défi avec brio et respect des délais.",
      rating: 5
    },
    {
      name: "Amina El Kadi",
      company: "Banque Régionale",
      role: "Responsable Infrastructure",
      content: "Migration réseau complexe sans interruption. L'équipe IOI a fait preuve d'un professionnalisme exemplaire.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "Cisco", category: "Routage" },
    { name: "Juniper", category: "Switching" },
    { name: "Aruba", category: "WiFi" },
    { name: "Fortinet", category: "Sécurité" },
    { name: "VMware", category: "Virtualisation" },
    { name: "Ansible", category: "Automation" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Startup Scalable",
      description: "Déploiement d'infrastructure réseau cloud-native pour une startup en croissance rapide.",
      result: "Déploiement en 2 semaines"
    },
    {
      title: "Centre Commercial",
      description: "Installation WiFi haute densité pour un centre commercial de 50 000 visiteurs.",
      result: "Couverture 100%"
    },
    {
      title: "Banque Multi-Sites",
      description: "Migration réseau sécurisée pour une banque avec 30 agences sans interruption.",
      result: "Zéro downtime"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Combien de temps dure un déploiement réseau ?",
      answer: "Entre 1 à 8 semaines selon la complexité, incluant la planification, le déploiement et la validation."
    },
    {
      question: "Proposez-vous des déploiements sans interruption ?",
      answer: "Oui, nous spécialisons dans les migrations et déploiements avec zéro interruption de service."
    },
    {
      question: "Quels types d'environnements déployez-vous ?",
      answer: "Tous types : bureaux, entrepôts, centres commerciaux, hôpitaux, écoles, data centers, etc."
    },
    {
      question: "Assurez-vous la formation des équipes ?",
      answer: "Oui, nous formons vos équipes à l'utilisation et la maintenance de l'infrastructure déployée."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Déploiement Réseau
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Déploiement <span className="text-purple-600">Réseau</span> Expert
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Déploiement d'infrastructures réseau performantes et sécurisées 
              avec une approche méthodique et des délais optimisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
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
            <p className="text-xl text-gray-600">Services de déploiement réseau complets et professionnels</p>
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
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour des déploiements réussis</p>
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
            <p className="text-xl text-gray-600">Équipe spécialisée en déploiement réseau</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Outils</h2>
            <p className="text-xl text-gray-600">Solutions de déploiement réseau de pointe</p>
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
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur le déploiement réseau</p>
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

export default DeploiementReseauPage; 