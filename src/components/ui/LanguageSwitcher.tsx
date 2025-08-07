'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  // Utilisation d'un état local pour éviter les problèmes d'hydratation
  const [isClient, setIsClient] = useState(false);
  
  // Toujours appeler le hook, mais avec une valeur par défaut
  const context = useLanguage();
  const { language: currentLanguage = 'fr', setLanguage: setCurrentLanguage = () => {} } = context || {};

  // S'assurer que le rendu côté navigateur est effectif
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si on est côté serveur ou pas encore monté, on rend un placeholder
  if (!isClient) {
    return (
      <div className="flex items-center space-x-1">
        <button className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/50">
          FR
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => setCurrentLanguage('fr')}
        className={`px-2 py-1 rounded text-xs font-medium transition-all ${
          currentLanguage === 'fr' 
            ? 'bg-white text-orange-600' 
            : 'text-orange-100 hover:bg-white/20'
        }`}
      >
        FR
      </button>
      <span className="text-orange-100">/</span>
      <button
        onClick={() => setCurrentLanguage('en')}
        className={`px-2 py-1 rounded text-xs font-medium transition-all ${
          currentLanguage === 'en' 
            ? 'bg-white text-orange-600' 
            : 'text-orange-100 hover:bg-white/20'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
