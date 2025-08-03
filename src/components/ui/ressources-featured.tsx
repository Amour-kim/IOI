"use client";

import React, { useState } from 'react';
import { Download, Clock, BookOpen, Star, Plus, Play, FileText, Video, Headphones, Image, File } from 'lucide-react';

interface FeaturedResource {
  id: string;
  title: string;
  description: string;
  type: string;
  level: string;
  duration: string;
  image: string;
  isNew?: boolean;
  isTrending?: boolean;
  downloads: number;
  rating: number;
  format: string;
}

const RessourcesFeatured = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const featuredResources: FeaturedResource[] = [
    {
      id: '1',
      title: 'Guide complet de l\'intelligence artificielle en entreprise',
      description: 'Découvrez comment implémenter l\'IA dans votre organisation avec des cas d\'usage concrets et des bonnes pratiques.',
      type: 'Guide',
      level: 'Intermédiaire',
      duration: '45 min',
      image: '/api/placeholder/400/250',
      isNew: true,
      downloads: 1247,
      rating: 4.8,
      format: 'PDF'
    },
    {
      id: '2',
      title: 'Webinaire: Transformation digitale réussie',
      description: 'Retour d\'expérience sur la transformation digitale d\'une PME avec des résultats concrets et mesurables.',
      type: 'Webinaire',
      level: 'Tous niveaux',
      duration: '1h 15min',
      image: '/api/placeholder/400/250',
      isTrending: true,
      downloads: 892,
      rating: 4.9,
      format: 'Vidéo'
    },
    {
      id: '3',
      title: 'Livre blanc: Cybersécurité en 2024',
      description: 'Les nouvelles menaces et les solutions pour protéger votre infrastructure informatique.',
      type: 'Livre blanc',
      level: 'Expert',
      duration: '30 min',
      image: '/api/placeholder/400/250',
      downloads: 2156,
      rating: 4.7,
      format: 'PDF'
    },
    {
      id: '4',
      title: 'Étude de cas: Optimisation des processus métier',
      description: 'Comment une entreprise a réduit ses coûts de 40% grâce à l\'automatisation intelligente.',
      type: 'Étude de cas',
      level: 'Intermédiaire',
      duration: '20 min',
      image: '/api/placeholder/400/250',
      downloads: 567,
      rating: 4.6,
      format: 'PDF'
    },
    {
      id: '5',
      title: 'Podcast: L\'avenir du travail à distance',
      description: 'Discussion avec des experts sur les nouvelles modalités de travail et leurs impacts.',
      type: 'Podcast',
      level: 'Tous niveaux',
      duration: '35 min',
      image: '/api/placeholder/400/250',
      downloads: 743,
      rating: 4.5,
      format: 'Audio'
    },
    {
      id: '6',
      title: 'Infographie: Écosystème tech 2024',
      description: 'Vue d\'ensemble des technologies émergentes et de leur adoption dans différents secteurs.',
      type: 'Infographie',
      level: 'Débutant',
      duration: '10 min',
      image: '/api/placeholder/400/250',
      downloads: 1892,
      rating: 4.8,
      format: 'Image'
    }
  ];

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'PDF':
        return <FileText className="w-5 h-5" />;
      case 'Vidéo':
        return <Video className="w-5 h-5" />;
      case 'Audio':
        return <Headphones className="w-5 h-5" />;
      case 'Image':
        return <Image className="w-5 h-5" />;
      default:
        return <File className="w-5 h-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-100 text-green-800';
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const handleDownload = (resourceId: string) => {
    console.log('Téléchargement de la ressource:', resourceId);
    // Ici on pourrait déclencher le téléchargement réel
  };

  const handleAddToLibrary = (resourceId: string) => {
    console.log('Ajout à la bibliothèque:', resourceId);
    // Ici on pourrait ajouter à la bibliothèque personnelle
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Ressources mises en avant
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez nos{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              meilleures ressources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une sélection curatée de nos contenus les plus populaires et les plus récents pour vous accompagner dans votre développement.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-200"
              onMouseEnter={() => setSelectedResource(resource.id)}
              onMouseLeave={() => setSelectedResource(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">
                    {getFormatIcon(resource.format)}
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {resource.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Nouveau
                    </span>
                  )}
                  {resource.isTrending && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Tendance
                    </span>
                  )}
                </div>

                {/* Format badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {getFormatIcon(resource.format)}
                </div>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  selectedResource === resource.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDownload(resource.id)}
                      className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleAddToLibrary(resource.id)}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type and level */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">{resource.type}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(resource.level)}`}>
                    {resource.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{resource.downloads.toLocaleString()}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(resource.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({resource.rating})</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownload(resource.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                  <button
                    onClick={() => handleAddToLibrary(resource.id)}
                    className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-yellow-200 transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 bg-white border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Voir toutes les ressources
          </button>
        </div>
      </div>
    </section>
  );
};

export default RessourcesFeatured; 