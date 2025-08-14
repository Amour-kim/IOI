"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react"
import { servicesData } from "@/data/services/services.data"
import { Button } from "@/components/ui/button"
import { Service } from "@/types/services.types"

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)
    return () => clearTimeout(timer)
  }, [index])

  // Get the base pricing tier (usually the first one)
  const basePrice = service.pricingTiers?.[0]?.price
  const pricePeriod = service.pricingTiers?.[0]?.period || 'mois'
  
  // Format price based on its type (string or number)
  const formatPrice = (price: string | number | undefined) => {
    if (price === undefined) return ''
    if (typeof price === 'number') {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)
    }
    return price
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      onViewportEnter={() => setIsVisible(true)}
    >
      <div 
        className={`h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 ${
          isHovered ? 'shadow-xl -translate-y-1' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                  <span className="text-xl">{service.icon || '✨'}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                {basePrice && (
                  <div className="flex items-baseline mt-1">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(basePrice)}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">/{pricePeriod === 'project' ? 'projet' : 'mois'}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              Premium
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{service.shortDescription}</p>
          
          <div className="space-y-3 mb-6">
            {service.features.slice(0, 4).map((feature: string, i: number) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            <Button 
              className="w-full group"
              onClick={() => window.open(`/services/${service.slug}`, '_blank')}
            >
              Découvrir
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-white">
              <h4 className="font-bold text-lg mb-2">En savoir plus</h4>
              <p className="text-sm text-gray-200 mb-4">{service.fullDescription.substring(0, 150)}...</p>
              <Button
                className="w-full group"
                onClick={() => window.open(`/services/${service.slug}`, '_blank')}
              >
                Voir les détails
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export const PremiumServices = () => {
  // Filter services that are marked as featured and have pricing tiers
  const premiumServices = servicesData
    .filter(service => service.isFeatured && service.pricingTiers && service.pricingTiers.length > 0)
    .slice(0, 4) // Limit to 4 premium services for the section

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Premium
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services haut de gamme conçus pour propulser votre entreprise vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="group"
            onClick={() => window.open('/services', '_blank')}
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PremiumServices
