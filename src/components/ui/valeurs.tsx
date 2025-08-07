"use client";

import { Handshake, Lightbulb, Shield } from "lucide-react";

export default function Valeur() {
  const valeurs = [
    {
      icone: Handshake,
      titre: "Intégrité",
      description: "Nous maintenons les plus hauts standards d'éthique et de professionnalisme dans toutes nos interventions.",
      couleur: "from-yellow-400 to-orange-500"
    },
    {
      icone: Lightbulb,
      titre: "Innovation",
      description: "Nous restons à la pointe des dernières technologies pour vous offrir des solutions modernes et efficaces.",
      couleur: "from-blue-400 to-cyan-500"
    },
    {
      icone: Shield,
      titre: "Engagement",
      description: "Votre satisfaction est notre priorité absolue. Nous nous engageons à dépasser vos attentes.",
      couleur: "from-green-400 to-emerald-500"
    }
  ];

  const faqItems = [
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous serons ravis d'échanger sur votre projet.",
    },
    {
      question: "Quels sont vos domaines d'expertise ?",
      answer: "Nous couvrons un large éventail de services informatiques, du développement web à la cybersécurité en passant par l'infrastructure réseau.",
    },
    {
      question: "Quelle est votre méthodologie de travail ?",
      answer: "Nous suivons une approche agile, avec des itérations courtes et une communication transparente à chaque étape du projet.",
    },
    {
      question: "Proposez-vous un support après la livraison ?",
      answer: "Oui, nous offrons différentes formules de support et de maintenance pour répondre à vos besoins spécifiques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Nos Valeurs */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-12">Nos Valeurs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${valeur.couleur} rounded-lg flex items-center justify-center`}>
                    <valeur.icone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{valeur.titre}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contactez-nous dès aujourd&apos;hui pour transformer vos idées en réalité
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contactez-nous
            <svg 
              className="ml-2 w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
