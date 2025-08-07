'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { fr } from '@/translations/fr';
import { en } from '@/translations/en';

export type Language = 'fr' | 'en';
type TranslationKey = keyof typeof fr | keyof typeof en;
type TranslationParams = Record<string, string | number>;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: TranslationParams) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Combined translations
const translations: Record<Language, typeof fr | typeof en> = {
  fr,
  en,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function with parameter support
  const t = (key: TranslationKey, params?: TranslationParams): string => {
    // Get the translation string
    const translation = translations[language][key] || key;
    
    // If no params or translation not found, return as is
    if (!params || typeof translation !== 'string') {
      return translation as string;
    }
    
    // Replace placeholders with provided params
    return Object.entries(params).reduce(
      (result, [param, value]) => 
        result.replace(new RegExp(`\\{${param}\\}`, 'g'), String(value)),
      translation
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
