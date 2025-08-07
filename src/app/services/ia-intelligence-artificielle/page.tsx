"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, TrendingUp, Shield, Zap, Award, CheckCircle, Quote, Star, ArrowRight, Clock, Globe, FileText, Lightbulb, BarChart3, Calendar, Phone, Mail, MapPin, ChevronDown, Cpu, BrainCircuit, Bot, Database, Server, BarChart2, Settings } from 'lucide-react';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import ContactUs from '@/components/ui/contact_us';
import FAQ from '@/components/ui/faq';
import { developmentFAQs } from '@/lib/faq-data';

const AIPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Domaines d'expertise pour l'IA
  const domains = [
    {
      icon: BrainCircuit,
      title: 'Machine Learning',
      description: "Solutions d'apprentissage automatique personnalisées pour l'analyse de données et la prédiction.",
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Cpu,
      title: 'Vision par Ordinateur',
      description: "Systèmes de reconnaissance d'images et de vidéos pour l'analyse en temps réel.",
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Bot,
      title: 'Chatbots Intelligents',
      description: "Assistants virtuels conversationnels pour améliorer l'expérience client.",
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: BarChart2,
      title: 'Analyse Prédictive',
      description: "Modèles prédictifs pour anticiper les tendances et les comportements.",
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      icon: Settings,
      title: 'Automatisation Intelligente',
      description: "Automatisation des processus métiers avec des solutions IA sur mesure.",
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Database,
      title: 'Traitement du Langage Naturel',
      description: "Analyse et compréhension du langage humain pour des interactions plus naturelles.",
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  // Processus de développement
  const process = [
    {
      step: '1',
      title: 'Analyse des Besoins',
      description: 'Évaluation approfondie de vos besoins et objectifs métier.',
      icon: FileText
    },
    {
      step: '2',
      title: 'Conception sur Mesure',
      description: 'Développement d\'une solution IA adaptée à vos spécifications.',
      icon: Lightbulb
    },
    {
      step: '3',
      title: 'Entraînement des Modèles',
      description: 'Création et entraînement des modèles d\'IA avec vos données.',
      icon: BrainCircuit
    },
    {
      step: '4',
      title: 'Intégration',
      description: 'Mise en place et intégration dans votre infrastructure existante.',
      icon: Settings
    },
    {
      step: '5',
      title: 'Formation & Support',
      description: 'Formation de vos équipes et support technique continu.',
      icon: Users
    }
  ];

  // Témoignages
  const testimonials = [
    {
      quote: "L'IA développée par IOI a révolutionné notre analyse de données clients.",
      author: "Marie D.",
      role: "Directrice Marketing",
      company: "DataCorp"
    },
    {
      quote: "Leur chatbot intelligent a réduit notre charge de support de 40%.",
      author: "Thomas P.",
      role: "Responsable Service Client",
      company: "ServicePlus"
    },
    {
      quote: "Une équipe experte qui a su comprendre nos enjeux métiers complexes.",
      author: "Sophie L.",
      role: "DSI",
      company: "Innovatech"
    }
  ];

  return (
    <div className="bg-white">
      <ModernNavbar />
      <SocialSidebar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Solutions d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Intelligence Artificielle</span> sur Mesure
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Libérez le potentiel de vos données avec nos solutions d'IA avancées et personnalisées pour transformer votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Discutons de votre projet <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#solutions" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Expertise */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Nos Expertises</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions d'IA sur Mesure</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions d'intelligence artificielle peuvent transformer votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border ${domain.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-xl ${domain.bgColor} flex items-center justify-center mb-6`}>
                  <domain.icon className={`w-8 h-8 bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{domain.title}</h3>
                <p className="text-gray-600 mb-4">{domain.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Notre Méthode</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Approche en 5 Étapes</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            
            {process.map((step, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="hidden md:block md:w-1/2">
                  {index % 2 === 0 && (
                    <div className="pr-12">
                      <div className={`bg-gradient-to-br ${domains[index % domains.length].color} text-white rounded-xl p-8 shadow-lg`}>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-indigo-100">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${domains[index % domains.length].color} flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white`}>
                    {step.step}
                  </div>
                </div>
                
                <div className="md:w-1/2 mt-8 md:mt-0">
                  {index % 2 !== 0 && (
                    <div className="md:pl-12">
                      <div className={`bg-gradient-to-br ${domains[index % domains.length].color} text-white rounded-xl p-8 shadow-lg`}>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-indigo-100">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Version mobile */}
                <div className="md:hidden mt-6">
                  <div className={`bg-gradient-to-br ${domains[index % domains.length].color} text-white rounded-xl p-6 shadow-lg`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-indigo-100">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${activeTestimonial === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <Quote className="w-8 h-8 text-indigo-400 mb-6" />
                    <p className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                        <p className="text-indigo-600">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  aria-label={`Afficher le témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre entreprise avec l'IA ?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous accompagner dans votre projet d'intelligence artificielle.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Questions Fréquentes</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez les réponses aux questions les plus courantes sur nos services d'IA.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={developmentFAQs} />
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width */}
      <section id="contact" className="w-full">
        <div className="text-center py-16 bg-indigo-50">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Parlons de votre projet</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Notre équipe est à votre disposition pour discuter de votre projet d'IA et vous proposer la meilleure solution.
          </p>
        </div>
        <div className="w-full">
          <ContactUs />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPage;
