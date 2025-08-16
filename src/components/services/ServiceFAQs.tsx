'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Service } from '@/types/services.types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, ChevronDown, Sparkles, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView, useAnimation, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';

// Configuration des animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  exit: { y: -20, opacity: 0 },
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const hoverVariants = {
  hover: {
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
  },
};

interface ServiceFAQsProps {
  service: Service;
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Animer l'entrée de la section
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  if (!service.faqs || service.faqs.length === 0) {
    return null;
  }

  // Filtrer les FAQ en fonction de la recherche
  const filteredFaqs = service.faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Grouper par catégorie si disponible
  const faqsByCategory = filteredFaqs.reduce((acc, faq) => {
    const category = faq.category || 'Général';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, typeof filteredFaqs>);

  const hasCategories = Object.keys(faqsByCategory).length > 1;

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Effets de fond décoratifs */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
      </motion.div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Questions Fréquentes</span>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-4"
            variants={fadeInUp}
          >
            Besoin d'aide ?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Trouvez rapidement les réponses à vos questions ou contactez notre équipe.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Barre de recherche améliorée */}
          <motion.div 
            className={`relative mb-12 transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : 'scale-100'}`}
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'} transition-colors`} />
            </div>
            <motion.input
              ref={searchInputRef}
              type="text"
              className="block w-full pl-12 pr-10 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-lg"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              variants={fadeInUp}
            />
            {searchTerm && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => {
                  setSearchTerm('');
                  searchInputRef.current?.focus();
                }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" />
              </motion.button>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredFaqs.length === 0 ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                key="no-results"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
                  <MessageCircle className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucun résultat</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Aucune question ne correspond à votre recherche. Essayez d'autres termes.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                key="faq-list"
              >
                {Object.entries(faqsByCategory).map(([category, faqs]) => (
                  <motion.div 
                    key={category} 
                    className={cn({
                      'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50': hasCategories,
                      'p-6': hasCategories,
                      'mb-8': hasCategories,
                      'hover:shadow-2xl transition-all duration-300': true
                    })}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -2,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {hasCategories && (
                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
                        {category}
                      </motion.h3>
                    )}
                    <Accordion 
                      type="multiple" 
                      className="space-y-4"
                      defaultValue={[`faq-${faqs[0].id}`]}
                    >
                      <AnimatePresence>
                        {faqs.map((faq, index) => (
                          <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            layout
                          >
                            <AccordionItem 
                              value={`faq-${faq.id}`}
                              className="group overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                            >
                              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-left hover:no-underline group-hover:bg-gray-50/50 dark:group-hover:bg-gray-700/30 transition-colors">
                                <motion.h3 
                                  className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4"
                                  layout
                                >
                                  {faq.question}
                                </motion.h3>
                                <motion.div
                                  className="flex-shrink-0 ml-2 p-1 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors"
                                  animate={{
                                    rotate: activeCategory === category ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </motion.div>
                              </AccordionTrigger>
                              <AccordionContent className="overflow-hidden px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-800/30">
                                <motion.div 
                                  className="prose prose-blue dark:prose-invert max-w-none"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  {faq.answer}
                                </motion.div>
                              </AccordionContent>
                            </AccordionItem>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </Accordion>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Section de contact améliorée */}
        <motion.div 
          className="mt-20 text-center relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Effets de fond */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Vous ne trouvez pas votre réponse ?
            </motion.h3>
            
            <motion.p 
              className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Notre équipe est là pour vous aider. Contactez-nous pour des réponses personnalisées et un accompagnement sur mesure.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-600 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Nous contacter
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Effet de particules décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-white/5"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

// Ajout de styles globaux pour les animations
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
);

export default ServiceFAQs;
