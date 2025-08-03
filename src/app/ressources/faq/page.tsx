"use client";

import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { useState } from 'react';
import { faqData, faqCategories } from '@/lib/data';
import RessourcesFAQ from '@/components/ui/ressources-faq';

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getFilteredQuestions = () => {
    if (activeCategory === 'all') {
      return [
        ...faqData.general.map((q, i) => ({ ...q, category: 'general', index: i })),
        ...faqData.technical.map((q, i) => ({ ...q, category: 'technical', index: i + 3 })),
        ...faqData.billing.map((q, i) => ({ ...q, category: 'billing', index: i + 6 })),
        ...faqData.support.map((q, i) => ({ ...q, category: 'support', index: i + 9 }))
      ];
    }
    return faqData[activeCategory as keyof typeof faqData].map((q, i) => ({ 
      ...q, 
      category: activeCategory, 
      index: activeCategory === 'general' ? i : 
             activeCategory === 'technical' ? i + 3 :
             activeCategory === 'billing' ? i + 6 : i + 9
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      <SocialSidebar />
      
      <main className="pt-0">
        {/* Hero Section with Background Video */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/p-api.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-600/80"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              FAQ
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Questions fréquemment posées et réponses pour vous aider rapidement
            </p>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/25 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/15 rounded-full animate-float animation-delay-3000"></div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-6 animate-fade-in-up">Catégories</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {faqCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all shadow-sm text-sm font-medium ${activeCategory === category.id ? 'bg-amber-600 text-white border-amber-600' : ''}`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Questions */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-center mb-6 animate-fade-in-up">Questions Fréquentes</h2>
            <div className="space-y-4">
              {getFilteredQuestions().map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleQuestion(faq.index)}
                    className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                  >
                    <h4 className="text-base font-semibold text-gray-900 pr-4">{faq.question}</h4>
                    <div className={`w-6 h-6 transform transition-transform duration-300 ${openQuestions.includes(faq.index) ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestions.includes(faq.index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-md text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              Posez-nous directement votre question, notre équipe vous répondra rapidement !
            </p>
            <form className="bg-white rounded-xl shadow-md p-6 space-y-4 text-left mx-auto">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Votre question</label>
                <textarea id="question" name="question" rows={4} required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Envoyer ma question</button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-amber-500/10 rounded-full animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              Discutons de vos besoins et trouvons la meilleure solution
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-400">
              Planifier une consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </div>
  );
} 