"use client"

import Image from "next/image"
import { useEffect, useState, ReactNode } from "react"

const slides = [
  { src: "/website-img-1.jpg", alt: "Slide 1" },
  { src: "/website-img-2.webp", alt: "Slide 2" },
  { src: "/website-img-3.jpg", alt: "Slide 3" },
  { src: "/pys.jpg", alt: "Slide 4" },
]

interface BlogCarouselProps {
  children?: ReactNode
}

export function BlogCarousel({ children }: BlogCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-[38vw] min-h-[240px] max-h-[420px] overflow-hidden flex items-center justify-center">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover w-full h-full opacity-60"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-20" />
      {/* Overlay centré pour children */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {children}
        </div>
      )}
    </div>
  )
} 