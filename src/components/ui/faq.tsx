"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  iconClassName?: string;
  showTitle?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
  faqs,
  title = "Questions Fréquentes",
  subtitle = "Trouvez les réponses aux questions les plus courantes",
  className = "",
  titleClassName = "text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4",
  subtitleClassName = "text-xl text-gray-600 max-w-3xl mx-auto",
  itemClassName = "bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300",
  questionClassName = "text-lg font-semibold text-gray-900 pr-4",
  answerClassName = "text-gray-600 leading-relaxed pt-4",
  iconClassName = "w-5 h-5 text-blue-500 transition-transform duration-200 flex-shrink-0",
  showTitle = true
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-white to-blue-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className={titleClassName}>
              {title}
            </h2>
            <p className={subtitleClassName}>
              {subtitle}
            </p>
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${itemClassName} ${
                activeFaq === index ? 'ring-2 ring-blue-200 shadow-xl' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <h3 className={questionClassName}>
                  {faq.question}
                </h3>
                {activeFaq === index ? (
                  <ChevronUp className={`${iconClassName} rotate-180`} />
                ) : (
                  <ChevronDown className={iconClassName} />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className={answerClassName}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ? Notre équipe est là pour vous répondre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="inline mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nous appeler
            </button>
            <button className="group bg-white border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="inline mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous écrire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 