"use client";

import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Download, UserPlus, Sparkles, Brain, Users, TrendingUp } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  title: string;
  type: string;
  category: string;
}

const RessourcesHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Tous');

  const filters = [
    { name: 'Tous', icon: '📚' },
    { name: 'Articles', icon: '📄' },
    { name: 'Guides', icon: '🎓' },
    { name: 'Webinaires', icon: '🎥' },
    { name: 'Infographies', icon: '📊' },
    { name: 'Livres blancs', icon: '📘' },
    { name: 'Études de cas', icon: '📁' },
    { name: 'Podcasts', icon: '🎤' },
    { name: 'FAQ', icon: '🧠' }
  ];

  const mockSuggestions: SearchSuggestion[] = [
    { id: '1', title: 'Guide complet de l\'intelligence artificielle', type: 'Guide', category: 'IA' },
    { id: '2', title: 'Webinaire: Optimisation des processus métier', type: 'Webinaire', category: 'Processus' },
    { id: '3', title: 'Étude de cas: Transformation digitale réussie', type: 'Étude de cas', category: 'Transformation' },
    { id: '4', title: 'Livre blanc: Cybersécurité en 2024', type: 'Livre blanc', category: 'Sécurité' },
    { id: '5', title: 'Podcast: L\'avenir du travail à distance', type: 'Podcast', category: 'Travail' }
  ];

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suggestion.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suggestion.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSuggestions(false);
    // Ici on pourrait déclencher la recherche réelle
    console.log('Recherche:', query);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-red-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400/10 rounded-full animate-pulse"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/3 text-white/20 animate-float">
          <BookOpen size={48} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/20 animate-float-delayed">
          <Brain size={40} />
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-white/20 animate-float">
          <Users size={44} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-white/20 animate-float-delayed">
          <TrendingUp size={36} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Centre de Connaissances Stratégique</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Maîtrisez votre{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              avenir
            </span>{' '}
            avec nos ressources
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Guides, livres blancs, études de cas, webinaires, tutoriels, tout ce qu'il vous faut pour passer à l'action.
          </p>
        </div>

        {/* Search and filters */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setSelectedFilter(filter.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === filter.name
                    ? 'bg-yellow-400 text-gray-900 shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <span>{filter.icon}</span>
                <span className="font-medium">{filter.name}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Recherchez des ressources, guides, webinaires..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Search suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 z-50">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSearch(suggestion.title)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100/50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{suggestion.title}</div>
                      <div className="text-sm text-gray-600">{suggestion.type} • {suggestion.category}</div>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      {suggestion.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Explorer les ressources
          </button>
          
          <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
            <UserPlus className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            Créer un compte pour tout débloquer
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Ressources disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Experts contributeurs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10k+</div>
            <div className="text-gray-300">Téléchargements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RessourcesHero; 