"use client";

import { useState } from "react"
import { ChevronDown, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Valeur() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqItems = [
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous",
    },
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous",
    },
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous",
    },
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous",
    },
    {
      question: "Comment démarrer une collaboration avec vous ?",
      answer: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement. Nous",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f7f7] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Nos Valeurs Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-8 sm:mb-10 lg:mb-12">Nos Valeurs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#ffffff] rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-[#e5e7eb]">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-3 sm:mb-4">Intégrité</h3>
                <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
                  Nous maintenons les plus hauts Nous maintenons les plus hauts Nous maintenons les plus hauts
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Questions Fréquentes Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 text-center mb-8 sm:mb-10 lg:mb-12">Questions Fréquentes</h2>

          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#ffffff] rounded-lg border border-[#e5e7eb] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#000000] pr-2">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#4b5563] transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-[#4b5563]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-green-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffffff] mb-3 sm:mb-4">Prêt à Commencer ?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#ffffff] mb-6 sm:mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour transformer vos idées en réalité
          </p>
          <Button className="bg-[#ffffff] text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded-lg">
            Contactez-nous
          </Button>
        </div>
      </div>
    </div>
  )
}
