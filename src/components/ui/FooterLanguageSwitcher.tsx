'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterLanguageSwitcher = () => {
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
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm rounded bg-gray-700 text-gray-400">
          FR
        </button>
      </div>
    );
  }

  if (!isClient) {
    return (
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm rounded bg-gray-700 text-gray-400">
          FR
        </button>
      </div>
    );
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setCurrentLanguage('fr')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          currentLanguage === 'fr' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setCurrentLanguage('en')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          currentLanguage === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default FooterLanguageSwitcher;
