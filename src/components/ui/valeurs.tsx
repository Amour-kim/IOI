"use client";

import { valeursData } from "@/data/valeurs/valeurs.data";

export default function Valeur() {
  const valeurs = valeursData;



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

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contactez-nous dès aujourd&apos;hui pour transformer vos idées en réalité
          </p>
          <a 
            href="/contacts" 
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
