"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Network, Wifi, Lock, Users, Award, Target, Zap, CheckCircle, Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';

const SecuriteReseauPage = () => {
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

  // Domaines d'expertise pour la Sécurité Réseau
  const domains = [
    {
      icon: Shield,
      title: 'Firewall & Protection',
      description: "Configuration et maintenance de firewalls avancés, protection contre les intrusions.",
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Lock,
      title: 'Chiffrement & VPN',
      description: "Mise en place de VPN sécurisés et chiffrement des données sensibles.",
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Network,
      title: 'Monitoring Sécurité',
      description: "Surveillance 24/7, détection d'intrusions et alertes en temps réel.",
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  // Approche méthodologique
  const approach = [
    {
      step: "01",
      title: "Audit Sécurité",
      description: "Analyse complète de votre infrastructure réseau et identification des vulnérabilités."
    },
    {
      step: "02",
      title: "Plan de Sécurité",
      description: "Élaboration d'une stratégie de sécurité adaptée à vos besoins spécifiques."
    },
    {
      step: "03",
      title: "Implémentation",
      description: "Mise en place des solutions de sécurité et configuration des protections."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Surveillance continue et maintenance préventive de votre sécurité réseau."
    }
  ];

  // Experts
  const experts = [
    {
      name: "Ahmed El Kadi",
      role: "Expert Sécurité Réseau",
      experience: "8 ans",
      expertise: ["Firewall", "VPN", "IDS/IPS"],
      avatar: "/experts/ahmed.jpg"
    },
    {
      name: "Sarah Benali",
      role: "Architecte Sécurité",
      experience: "10 ans",
      expertise: ["Chiffrement", "Audit", "Conformité"],
      avatar: "/experts/sarah.jpg"
    },
    {
      name: "Karim Mansouri",
      role: "Ingénieur Réseau",
      experience: "6 ans",
      expertise: ["Monitoring", "Incident Response", "Forensics"],
      avatar: "/experts/karim.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Mohammed Alami",
      company: "Banque Digitale",
      role: "Directeur IT",
      content: "La sécurité de notre réseau a été considérablement renforcée grâce à l'équipe IOI. Leur expertise en firewall et monitoring nous donne une tranquillité d'esprit totale.",
      rating: 5
    },
    {
      name: "Fatima Zahra",
      company: "Clinique Privée",
      role: "Responsable Systèmes",
      content: "Conformité RGPD et protection des données médicales : IOI a mis en place une solution de sécurité réseau parfaitement adaptée à nos besoins.",
      rating: 5
    },
    {
      name: "Youssef Tazi",
      company: "E-commerce Luxe",
      role: "CTO",
      content: "Le monitoring 24/7 et la détection d'intrusions nous ont permis d'éviter plusieurs attaques. Un investissement rentable pour notre sécurité.",
      rating: 5
    }
  ];

  // Outils et technologies
  const tools = [
    { name: "Fortinet", category: "Firewall" },
    { name: "Cisco ASA", category: "Sécurité" },
    { name: "Palo Alto", category: "NGFW" },
    { name: "Wireshark", category: "Analyse" },
    { name: "Snort", category: "IDS" },
    { name: "OpenVPN", category: "VPN" }
  ];

  // Cas d'usage
  const useCases = [
    {
      title: "Protection d'Infrastructure Critique",
      description: "Sécurisation complète d'un réseau bancaire avec firewall haute performance et monitoring avancé.",
      result: "Réduction de 95% des tentatives d'intrusion"
    },
    {
      title: "Conformité RGPD",
      description: "Mise en place de solutions de chiffrement et VPN pour une clinique privée.",
      result: "Conformité totale RGPD atteinte"
    },
    {
      title: "E-commerce Sécurisé",
      description: "Protection d'une plateforme e-commerce contre les attaques DDoS et fraudes.",
      result: "Zéro incident de sécurité en 2 ans"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "Quels sont les types d'attaques contre lesquels vous nous protégez ?",
      answer: "Nous protégeons contre les attaques DDoS, intrusions, malware, phishing, et toutes les menaces réseau modernes avec des solutions adaptées."
    },
    {
      question: "Le monitoring est-il disponible 24h/24 et 7j/7 ?",
      answer: "Oui, notre centre de sécurité opère en continu avec des alertes en temps réel et une équipe d'intervention disponible 24/7."
    },
    {
      question: "Combien de temps faut-il pour mettre en place la sécurité ?",
      answer: "L'audit prend 1-2 semaines, puis l'implémentation 2-4 semaines selon la complexité de votre infrastructure."
    },
    {
      question: "Proposez-vous des formations pour nos équipes ?",
      answer: "Absolument, nous formons vos équipes aux bonnes pratiques de sécurité et à l'utilisation des outils mis en place."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Sécurité Réseau
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Protection <span className="text-red-600">Réseau</span> Avancée
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sécurisez votre infrastructure réseau avec nos solutions de protection avancées, 
              monitoring 24/7 et expertise en cybersécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
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
            <p className="text-xl text-gray-600">Solutions complètes de sécurité réseau adaptées à vos besoins</p>
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
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour une sécurité réseau optimale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
            <p className="text-xl text-gray-600">Équipe spécialisée en sécurité réseau</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-600 mb-4">{expert.experience} d'expérience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
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
              <div key={index} className={`p-8 rounded-2xl bg-gray-50 ${index === activeTestimonial ? 'ring-2 ring-red-500' : ''}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-red-600">{testimonial.company}</p>
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
            <p className="text-xl text-gray-600">Solutions de sécurité réseau de pointe</p>
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
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur la sécurité réseau</p>
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

export default SecuriteReseauPage; 