"use client"

import React, { useState, useEffect } from "react"
import { Sparkles, ArrowRight, Code, Smartphone, Palette, TrendingUp, Shield, Zap } from "lucide-react"

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentService, setCurrentService] = useState(0)

  const services = [
    { icon: Code, name: "Développement Web", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, name: "Apps Mobile", color: "from-green-500 to-emerald-500" },
    { icon: Palette, name: "Design UI/UX", color: "from-pink-500 to-rose-500" },
    { icon: TrendingUp, name: "Marketing Digital", color: "from-orange-500 to-yellow-500" },
    { icon: Shield, name: "Cybersécurité", color: "from-purple-500 to-indigo-500" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full 
            border border-white/20 shadow-lg mb-8 transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Services Premium</span>
        </div>

        {/* Main Title */}
        <h1
          className={`
            text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Transformez
          </span>
          <br />
          <span className="text-gray-900">Vos Idées</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`
            text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed
            transition-all duration-1000 delay-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          Nous créons des solutions digitales exceptionnelles qui propulsent votre entreprise vers le succès. De la
          conception à la réalisation, nous donnons vie à vos projets les plus ambitieux.
        </p>

        {/* Rotating Service Display */}
        <div
          className={`
            flex items-center justify-center mb-12 transition-all duration-1000 delay-900
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="relative">
            <div className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${services[currentService].color} shadow-lg`}>
                {services[currentService].icon && React.createElement(services[currentService].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 font-medium">Service Actuel</div>
                <div className="text-lg font-bold text-gray-900">{services[currentService].name}</div>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentService ? "bg-blue-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-1100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center gap-2">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>

          <button className="group px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-900 font-semibold rounded-2xl border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Consultation gratuite
            </span>
          </button>
        </div>

        {/* Stats */}
        <div
          className={`
            grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-1300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {[
            { value: "500+", label: "Projets Réalisés" },
            { value: "98%", label: "Satisfaction Client" },
            { value: "50+", label: "Entreprises Partenaires" },
            { value: "24/7", label: "Support Technique" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default ServicesHero
