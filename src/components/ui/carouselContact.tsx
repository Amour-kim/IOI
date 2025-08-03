"use client";
import React, { useState, useEffect } from 'react';

const CarouselContact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const slides = [
  //   {
  //     id: 1,
  //     video: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
  //     title: "Intelligence Artificielle",
  //     description: "Découvrez comment l'IA révolutionne notre quotidien avec des algorithmes avancés et des solutions innovantes pour l'avenir.",
  //     tag: "IA"
  //   },
  //   {
  //     id: 2,
  //     video: "https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4",
  //     title: "Développement Web Moderne",
  //     description: "Explorez les dernières technologies web qui transforment la façon dont nous créons et interagissons avec les applications digitales.",
  //     tag: "Web Dev"
  //   },
  //   {
  //     id: 3,
  //     video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
  //     title: "Cybersécurité Avancée",
  //     description: "Plongez dans l'univers de la sécurité numérique où chaque ligne de code protège notre monde connecté des menaces cybernétiques.",
  //     tag: "Sécurité"
  //   },
  //   {
  //     id: 4,
  //     video: "https://videos.pexels.com/video-files/3141209/3141209-uhd_2560_1440_30fps.mp4",
  //     title: "Innovation Technologique",
  //     description: "Voyez comment les nouvelles technologies façonnent l'avenir avec des solutions disruptives et des percées scientifiques.",
  //     tag: "Innovation"
  //   },
  //   {
  //     id: 5,
  //     video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
  //     title: "Réalité Virtuelle & AR",
  //     description: "Immergez-vous dans des expériences immersives qui repoussent les limites entre le monde réel et virtuel.",
  //     tag: "VR/AR"
  //   }
  // ];
  const slides = [
    {
      id: 1,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Découvrez des paysages époustouflants",
      description: "Explorez des destinations uniques à travers le monde et vivez des expériences inoubliables. Chaque voyage est une nouvelle aventure qui vous attend.",
      tag: "Voyage"
    },
    {
      id: 2,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "La nature à l'état pur",
      description: "Immergez-vous dans des environnements naturels préservés où la faune et la flore s'épanouissent en harmonie parfaite.",
      tag: "Nature"
    },
    {
      id: 3,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Architecture moderne",
      description: "Découvrez les merveilles architecturales contemporaines qui redéfinissent nos espaces urbains avec innovation et créativité.",
      tag: "Architecture"
    },
    {
      id: 4,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Aventures extraordinaires",
      description: "Partez à la conquête de nouveaux horizons et repoussez vos limites dans des expériences qui marqueront votre vie à jamais.",
      tag: "Aventure"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // 8 secondes pour laisser le temps de voir le contenu
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                // src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  index === currentSlide && isAnimating
                    ? 'transform -translate-y-4'
                    : 'transform translate-y-0'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div
                  className={`transition-all duration-700 ${
                    index === currentSlide && isAnimating
                      ? 'transform translate-y-6 opacity-80'
                      : 'transform translate-y-0 opacity-100'
                  }`}
                >
                  <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-white bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
                    {slide.tag}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 text-white text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default CarouselContact;