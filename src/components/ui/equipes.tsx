"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Award,
  Users,
  Star,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Trophy,
  Zap,
} from "lucide-react"

interface Employee {
  id: number
  name: string
  position: string
  department: string
  image: string
  bio: string
  skills: string[]
  linkedin: string
  email: string
  phone: string
  achievements: string[]
  experience: string
  location?: string
  joinDate?: string
  rating?: number
}

interface ModernEmployeeCarouselProps {
  employees?: Employee[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const ModernEmployeeCarousel = ({
  employees = [
    {
      id: 1,
      name: "Sophie Dubois",
      position: "Directrice Générale",
      department: "Direction",
      image: "/api/placeholder/300/400",
      bio: "Leader visionnaire avec 15 ans d'expérience dans le secteur technologique. Passionnée par l'innovation et la transformation digitale.",
      skills: ["Leadership", "Stratégie", "Innovation", "Management"],
      linkedin: "https://linkedin.com/in/sophie-dubois",
      email: "sophie.dubois@entreprise.com",
      phone: "+33 1 23 45 67 89",
      achievements: ["Prix Innovation 2023", "Top 40 sous 40", "Forbes 30 Under 30"],
      experience: "15 ans",
      location: "Paris, France",
      joinDate: "2019",
      rating: 5,
    },
    {
      id: 2,
      name: "Marc Leroy",
      position: "Directeur Technique",
      department: "Développement",
      image: "/api/placeholder/300/400",
      bio: "Expert en architecture logicielle et transformation digitale. Spécialiste des solutions cloud et de l'intelligence artificielle.",
      skills: ["Architecture", "Cloud", "DevOps", "AI/ML"],
      linkedin: "https://linkedin.com/in/marc-leroy",
      email: "marc.leroy@entreprise.com",
      phone: "+33 1 23 45 67 90",
      achievements: ["Certifié AWS", "Speaker Tech Conference", "Microsoft MVP"],
      experience: "12 ans",
      location: "Lyon, France",
      joinDate: "2020",
      rating: 5,
    },
    {
      id: 3,
      name: "Julie Martin",
      position: "Responsable UX/UI",
      department: "Design",
      image: "/api/placeholder/300/400",
      bio: "Passionnée par l'expérience utilisateur et le design thinking. Créatrice d'interfaces intuitives et engageantes.",
      skills: ["UX Design", "Prototypage", "User Research", "Figma"],
      linkedin: "https://linkedin.com/in/julie-martin",
      email: "julie.martin@entreprise.com",
      phone: "+33 1 23 45 67 91",
      achievements: ["Best Design Award", "UX Mentor", "Design Systems Lead"],
      experience: "8 ans",
      location: "Bordeaux, France",
      joinDate: "2021",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Thomas Rousseau",
      position: "Ingénieur Senior IA",
      department: "Développement",
      image: "/api/placeholder/300/400",
      bio: "Spécialiste en intelligence artificielle et machine learning. Docteur en informatique avec une expertise en deep learning.",
      skills: ["AI/ML", "Python", "Data Science", "TensorFlow"],
      linkedin: "https://linkedin.com/in/thomas-rousseau",
      email: "thomas.rousseau@entreprise.com",
      phone: "+33 1 23 45 67 92",
      achievements: ["PhD en IA", "10+ Publications", "Google AI Researcher"],
      experience: "10 ans",
      location: "Toulouse, France",
      joinDate: "2022",
      rating: 5,
    },
    {
      id: 5,
      name: "Emma Petit",
      position: "Chef de Projet Senior",
      department: "Gestion",
      image: "/api/placeholder/300/400",
      bio: "Experte en gestion de projet agile et coordination d'équipes. Spécialisée dans la transformation digitale des entreprises.",
      skills: ["Agile", "Scrum", "Management", "Digital Transformation"],
      linkedin: "https://linkedin.com/in/emma-petit",
      email: "emma.petit@entreprise.com",
      phone: "+33 1 23 45 67 93",
      achievements: ["PMP Certified", "Agile Coach", "Transformation Leader"],
      experience: "7 ans",
      location: "Nantes, France",
      joinDate: "2023",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Antoine Moreau",
      position: "Développeur Full Stack",
      department: "Développement",
      image: "/api/placeholder/300/400",
      bio: "Passionné par les technologies modernes et l'innovation. Expert en développement web et mobile avec une approche créative.",
      skills: ["React", "Node.js", "TypeScript", "React Native"],
      linkedin: "https://linkedin.com/in/antoine-moreau",
      email: "antoine.moreau@entreprise.com",
      phone: "+33 1 23 45 67 94",
      achievements: ["Open Source Contributor", "Tech Blogger", "Community Leader"],
      experience: "5 ans",
      location: "Lille, France",
      joinDate: "2023",
      rating: 4.7,
    },
  ],
  className = "",
  autoPlay = false,
  autoPlayInterval = 5000,
}: ModernEmployeeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, time: 0 })
  const [dragOffset, setDragOffset] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const totalSlides = employees.length

  // Intersection Observer pour l'animation d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isDragging && !isTransitioning && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
      }, autoPlayInterval)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, isDragging, isTransitioning, totalSlides, isVisible])

  // Drag handlers améliorés
  const handleDragStart = (clientX: number) => {
    if (isTransitioning) return
    setIsDragging(true)
    setDragStart({ x: clientX, time: Date.now() })
    setDragOffset(0)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const offset = clientX - dragStart.x
    setDragOffset(offset)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return

    const offset = clientX - dragStart.x
    const duration = Date.now() - dragStart.time
    const velocity = Math.abs(offset) / duration

    // Seuils adaptatifs basés sur la distance et la vélocité
    const threshold = velocity > 0.5 ? 50 : 100

    if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        // Drag vers la droite = slide précédent
        prevSlide()
      } else {
        // Drag vers la gauche = slide suivant
        nextSlide()
      }
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0]) {
      handleDragEnd(e.changedTouches[0].clientX)
    }
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const getCardPosition = (index: number): "center" | "left" | "right" | "hidden" => {
    const diff = index - currentIndex
    if (diff === 0) return "center"
    if (diff === -1 || (diff === totalSlides - 1 && currentIndex === 0)) return "left"
    if (diff === 1 || (diff === -(totalSlides - 1) && currentIndex === totalSlides - 1)) return "right"
    return "hidden"
  }

  const getCardStyles = (position: "center" | "left" | "right" | "hidden", index: number): string => {
    const baseStyles = `absolute transition-all duration-700 ease-out transform-gpu`
    const dragTransform = isDragging ? `translateX(${dragOffset * 0.5}px)` : ""

    switch (position) {
      case "center":
        return `${baseStyles} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 z-30 ${dragTransform}`
      case "left":
        return `${baseStyles} left-1/2 top-1/2 -translate-x-[200%] -translate-y-1/2 scale-85 opacity-70 z-20 ${dragTransform}`
      case "right":
        return `${baseStyles} left-1/2 top-1/2 translate-x-[100%] -translate-y-1/2 scale-85 opacity-70 z-20 ${dragTransform}`
      default:
        return `${baseStyles} left-1/2 top-1/2 opacity-0 scale-75 pointer-events-none z-10`
    }
  }

  const getDepartmentColor = (department: string) => {
    const colors = {
      Direction: "from-purple-600 to-pink-600",
      Développement: "from-blue-600 to-cyan-600",
      Design: "from-pink-600 to-rose-600",
      Gestion: "from-green-600 to-emerald-600",
    }
    return colors[department as keyof typeof colors] || "from-gray-600 to-gray-800"
  }

  const EmployeeCard = ({
    employee,
    position,
    index,
  }: {
    employee: Employee
    position: "center" | "left" | "right" | "hidden"
    index: number
  }) => {
    const isCenter = position === "center"
    const isHovered = hoveredCard === index

    return (
      <div
        className={`${getCardStyles(position, index)} cursor-pointer select-none`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => !isCenter && goToSlide(index)}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        <div
          className={`
            relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden
            w-80 h-[500px] md:w-96 md:h-[550px]
            transform transition-all duration-500 hover:shadow-3xl
            ${isCenter ? "hover:scale-105" : "hover:scale-90"}
            ${isHovered ? "ring-4 ring-blue-500/30" : ""}
            border border-white/20
          `}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getDepartmentColor(employee.department)} opacity-5`} />

          {/* Floating particles */}
          {isHovered && (
            <>
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300" />
              <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500" />
            </>
          )}

          {/* Image Section */}
          <div className="relative h-64 md:h-72 overflow-hidden">
            <img
              src={employee.image || "/placeholder.svg"}
              alt={employee.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              draggable={false}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Social Links */}
            <div
              className={`
                absolute top-4 right-4 flex flex-col space-y-2 transform transition-all duration-500
                ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
              `}
            >
              <a
                href={employee.linkedin}
                className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
              <a
                href={`mailto:${employee.email}`}
                className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
            </div>

            {/* Department Badge */}
            <div className="absolute top-4 left-4">
              <div
                className={`px-4 py-2 bg-gradient-to-r ${getDepartmentColor(employee.department)} text-white text-sm font-semibold rounded-full shadow-lg`}
              >
                {employee.department}
              </div>
            </div>

            {/* Rating */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white font-medium text-sm">{employee.rating}</span>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4">
              <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full">
                {employee.experience}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Name and Position */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center gap-2">
                {employee.name}
                {employee.rating === 5 && <Sparkles className="w-5 h-5 text-yellow-500" />}
              </h3>
              <p className="text-blue-600 font-semibold text-lg">{employee.position}</p>
            </div>

            {/* Location and Join Date */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{employee.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Depuis {employee.joinDate}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{employee.bio}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {employee.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex items-center space-x-2 pt-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-xs text-gray-600 font-medium">{employee.achievements[0]}</span>
            </div>

            {/* Action Button */}
            {isCenter && (
              <div className="pt-2">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                  Voir le profil
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000" />

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Utiliser des valeurs fixes basées sur l'index pour éviter l'hydratation
          const positions = [
            { left: "8%", top: "12%", delay: "0.8s", duration: "4.2s" },
            { left: "85%", top: "28%", delay: "1.5s", duration: "5.1s" },
            { left: "22%", top: "78%", delay: "0.3s", duration: "3.8s" },
            { left: "72%", top: "82%", delay: "2.2s", duration: "4.7s" },
            { left: "45%", top: "15%", delay: "1.8s", duration: "6.3s" },
            { left: "18%", top: "45%", delay: "0.7s", duration: "4.5s" },
            { left: "68%", top: "58%", delay: "2.9s", duration: "3.9s" },
            { left: "12%", top: "32%", delay: "1.2s", duration: "5.4s" },
            { left: "88%", top: "68%", delay: "0.9s", duration: "4.8s" },
            { left: "38%", top: "85%", delay: "2.6s", duration: "3.4s" },
            { left: "58%", top: "18%", delay: "1.1s", duration: "5.7s" },
            { left: "25%", top: "62%", delay: "0.6s", duration: "4.1s" },
            { left: "75%", top: "42%", delay: "2.4s", duration: "3.6s" },
            { left: "35%", top: "28%", delay: "1.7s", duration: "5.9s" },
            { left: "65%", top: "75%", delay: "0.4s", duration: "4.3s" },
          ]
          
          const pos = positions[i % positions.length]
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
                animationDuration: pos.duration,
              }}
            />
          )
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Notre Équipe</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Talents Exceptionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les experts passionnés qui donnent vie à vos projets les plus ambitieux avec créativité et
            excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Drag Indicator */}
          {isDragging && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 bg-black/80 text-white text-sm rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Glissez pour naviguer
              </div>
            </div>
          )}

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50/30 to-transparent z-40 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 via-blue-50/30 to-transparent z-40 pointer-events-none" />

          {/* Carousel */}
          <div
            ref={carouselRef}
            className={`
              relative h-[500px] md:h-[550px] py-8 overflow-visible select-none
              ${isDragging ? "cursor-grabbing" : "cursor-grab"}
              ${isTransitioning ? "pointer-events-none" : ""}
            `}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {employees.map((employee, index) => (
              <EmployeeCard key={employee.id} employee={employee} position={getCardPosition(index)} index={index} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {employees.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`
                relative w-3 h-3 rounded-full transition-all duration-300 overflow-hidden
                ${index === currentIndex ? "bg-blue-600 scale-125 w-8" : "bg-gray-300 hover:bg-gray-400"}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              value: `${employees.length}+`,
              label: "Experts Qualifiés",
              color: "from-blue-600 to-cyan-600",
            },
            {
              icon: Award,
              value: "150+",
              label: "Projets Réalisés",
              color: "from-purple-600 to-pink-600",
            },
            {
              icon: Star,
              value: "98%",
              label: "Satisfaction Client",
              color: "from-yellow-500 to-orange-500",
            },
            {
              icon: Trophy,
              value: "25+",
              label: "Prix & Certifications",
              color: "from-green-600 to-emerald-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div
                  className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}

export default ModernEmployeeCarousel
