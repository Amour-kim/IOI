"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Jan Bahmann",
    company: "Bahmann Coaching GmbH",
    quote:
      "Our website was realized in webflow with unique functions. We are very satisfied and thank you for the professional work!",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "Christian Demuth",
    company: "Christian Demuth law firm",
    quote:
      "With marketer UX, we have achieved top rankings in SEO. We have also set up a YouTube channel for me. Great job!",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Soufian El Morabiti",
    company: "GoldmanTax",
    quote:
      "Our requirements: Branding, new customer acquisition and applicant generation were perfectly implemented by marketer UX.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 4,
    name: "Marie Dubois",
    company: "TechStart Solutions",
    quote:
      "IOI transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    company: "Global Innovations",
    quote:
      "The team at IOI delivered exceptional results. Our new platform has increased our conversion rates by 300%.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    company: "Digital Dynamics",
    quote:
      "Professional, creative, and results-driven. IOI helped us achieve our digital transformation goals successfully.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 7,
    name: "Marie Dubois",
    company: "TechStart Solutions",
    quote:
      "IOI transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    company: "Global Innovations",
    quote:
      "The team at IOI delivered exceptional results. Our new platform has increased our conversion rates by 300%.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 9,
    name: "Sarah Johnson",
    company: "Digital Dynamics",
    quote:
      "Professional, creative, and results-driven. IOI helped us achieve our digital transformation goals successfully.",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2)
      } else {
        setCardsPerSlide(3)
      }
    }
    updateCardsPerSlide()
    window.addEventListener('resize', updateCardsPerSlide)
    return () => window.removeEventListener('resize', updateCardsPerSlide)
  }, [])

  // Calculate number of slides (cardsPerSlide)
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextTestimonial()
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  const nextTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Get testimonials for current slide
  const getCurrentSlideTestimonials = () => {
    const startIndex = currentIndex * cardsPerSlide
    return testimonials.slice(startIndex, startIndex + cardsPerSlide)
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Que disent nos clients et Partenaires ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to deliver a steady stream of new leads to our customers every week, helping them grow their
            businesses.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 border-0 transition-all duration-300 hover:scale-110"
            onClick={prevTestimonial}
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </Button>

          <Button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 border-0 transition-all duration-300 hover:scale-110"
            onClick={nextTestimonial}
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </Button>

          {/* Carousel Track */}
          <div className="relative overflow-hidden rounded-2xl p-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-8">
                  <div className={`grid gap-6 grid-cols-1 ${cardsPerSlide === 2 ? 'sm:grid-cols-2' : ''} ${cardsPerSlide === 3 ? 'lg:grid-cols-3' : ''}`}>
                    {testimonials.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((testimonial, cardIndex) => (
                      <Card key={`${slideIndex}-${cardIndex}`} className="bg-white border-0 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:z-10 relative">
                        <CardContent className="p-6 text-center">
                          {/* Profile Image with Gradient Border */}
                          <div className="relative mb-6 mx-auto w-24 h-24">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1 animate-pulse">
                              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                <Image
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-black bg-opacity-70 rounded-full p-2 transform hover:scale-110 transition-transform duration-300">
                                    <Play className="w-4 h-4 text-white fill-current" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Star Rating */}
                          <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-orange-400 fill-current mx-0.5" />
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-gray-800 text-sm mb-6 leading-relaxed italic">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Name and Company */}
                          <div>
                            <h4 className="font-bold text-gray-900 text-base mb-1">{testimonial.name}</h4>
                            <p className="text-orange-600 font-medium text-sm">{testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
