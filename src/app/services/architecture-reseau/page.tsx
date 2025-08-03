"use client";
import React, { useState, useEffect } from 'react';
import { Network, Server, Wifi, Database, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const ArchitectureReseauPage = () => {
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

  // Domaines d'expertise pour l'Architecture Réseau
  const domains = [
    {
      icon: Network,
      title: 'Conception Réseau',
      description: "Architecture réseau scalable et performante adaptée à vos besoins métier.",
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Server,
      title: 'Infrastructure Cloud',
      description: "Design d'infrastructure cloud hybride et multi-cloud pour optimiser les performances.",
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Database,
      title: 'Data Center',
      description: "Conception et optimisation de data centers modernes et éco-responsables.",
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Analyse Besoins",
      description: "Étude approfondie de vos besoins métier et contraintes techniques."
    },
    {
      step: "02",
      title: "Conception",
      description: "Design de l'architecture réseau optimale avec schémas détaillés."
    },
    {
      step: "03",
      title: "Validation",
      description: "Tests et validation de la solution avant implémentation."
    },
    {
      step: "04",
      title: "Déploiement",
      description: "Mise en œuvre progressive et formation des équipes."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Hassan El Fassi",
      role: "Architecte Réseau Senior",
      experience: "12 ans",
      expertise: ["Cisco", "Juniper", "SDN"],
      avatar: "/experts/hassan.jpg"
    },
    {
      name: "Amina Benjelloun",
      role: "Ingénieure Cloud",
      experience: "8 ans",
      expertise: ["AWS", "Azure", "Kubernetes"],
      avatar: "/experts/amina.jpg"
    },
    {
      name: "Omar Tazi",
      role: "Spécialiste Data Center",
      experience: "10 ans",
      expertise: ["VMware", "Storage", "Backup"],
      avatar: "/experts/omar.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Leila Mansouri",
      company: "Startup Tech",
      role: "CTO",
      content: "L'architecture réseau conçue par IOI a permis à notre startup de scaler de 10 à 1000 utilisateurs sans problème de performance.",
      rating: 5
    },
    {
      name: "Rachid Alami",
      company: "Banque Régionale",
      role: "Directeur IT",
      content: "Migration cloud réussie et architecture réseau robuste. IOI a su répondre à tous nos besoins de sécurité et performance.",
      rating: 5
    },
    {
      name: "Nadia El Kadi",
      company: "E-commerce Scale",
      role: "Responsable Infrastructure",
      content: "L'architecture multi-cloud nous donne une flexibilité totale et une haute disponibilité. Excellent travail d'IOI.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "Cisco", category: "Routage" },
    { name: "Juniper", category: "Switching" },
    { name: "VMware", category: "Virtualisation" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Kubernetes", category: "Orchestration" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Startup Scalable",
      description: "Architecture cloud-native pour une startup en croissance rapide avec auto-scaling.",
      result: "Performance x10 améliorée"
    },
    {
      title: "Banque Multi-Sites",
      description: "Réseau WAN sécurisé connectant 50 agences avec redondance et failover.",
      result: "99.9% de disponibilité"
    },
    {
      title: "E-commerce Haute Performance",
      description: "Architecture microservices avec load balancing et CDN pour trafic élevé.",
      result: "Temps de réponse <100ms"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Combien de temps faut-il pour concevoir une architecture réseau ?",
      answer: "Entre 2 à 8 semaines selon la complexité, incluant l'analyse, la conception, les tests et la documentation."
    },
    {
      question: "Proposez-vous des architectures cloud hybrides ?",
      answer: "Oui, nous concevons des architectures multi-cloud et hybrides pour optimiser coûts et performances."
    },
    {
      question: "L'architecture sera-t-elle évolutive ?",
      answer: "Absolument, nous concevons toujours des architectures modulaires et évolutives pour anticiper la croissance."
    },
    {
      question: "Assurez-vous la maintenance post-déploiement ?",
      answer: "Oui, nous proposons des contrats de maintenance et support pour garantir la pérennité de votre infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Architecture Réseau
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Architecture <span className="text-blue-600">Réseau</span> Optimale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conception d'architectures réseau performantes, scalables et sécurisées 
              pour répondre aux défis de votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
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
            <p className="text-xl text-gray-600">Solutions d'architecture réseau complètes et innovantes</p>
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
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour des architectures réseau optimales</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
            <p className="text-xl text-gray-600">Équipe spécialisée en architecture réseau</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 mb-4">{expert.experience} d'expérience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
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
              <div key={index} className={`p-8 rounded-2xl bg-gray-50 ${index === activeTestimonial ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
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
            <p className="text-xl text-gray-600">Solutions d'architecture réseau de pointe</p>
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
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur l'architecture réseau</p>
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

export default ArchitectureReseauPage; 