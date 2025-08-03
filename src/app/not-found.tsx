"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, AlertTriangle, Calendar, Mail, Star } from "lucide-react"
import Footer from "@/components/ui/footer"
import SocialSidebar from "@/components/ui/social-sidebar"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      
      {/* Main Content - 404 Page */}
      <main className="flex-1 bg-[#ffffff] pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 sm:space-y-12">
            
            {/* 404 Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-red-600" />
              </div>
            </div>

            {/* 404 Number */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-gray-200">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Page non trouvée
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée. 
                Elle a peut-être été supprimée, renommée ou temporairement indisponible.
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Vérifiez l&apos;URL ou utilisez les liens ci-dessous pour naviguer sur notre site.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/" 
                className="bg-[#3884ff] hover:bg-[#3884ff]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium flex items-center gap-2 transition-colors"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Retour à l&apos;accueil
              </Link>
              
              <Link 
                href="/contacts" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Nous contacter
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-8 sm:pt-12 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                Pages populaires
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/services" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#3884ff] hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 mx-auto bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                      Nos Services
                    </p>
                  </div>
                </Link>
                
                <Link 
                  href="/rendez-vous" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#3884ff] hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 mx-auto bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-green-700">
                      Prendre RDV
                    </p>
                  </div>
                </Link>
                
                <Link 
                  href="/contacts" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#3884ff] hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 mx-auto bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-purple-700">
                      Contact
                    </p>
                  </div>
                </Link>
                
                <Link 
                  href="/" 
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#3884ff] hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 mx-auto bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Home className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-orange-700">
                      Accueil
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="pt-8 sm:pt-12 border-t border-gray-200">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  Besoin d&apos;aide ?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur, n&apos;hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="/contacts" 
                    className="text-[#3884ff] hover:text-[#3884ff]/80 font-medium text-sm sm:text-base transition-colors"
                  >
                    Contactez notre équipe →
                  </Link>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <Link 
                    href="/" 
                    className="text-[#3884ff] hover:text-[#3884ff]/80 font-medium text-sm sm:text-base transition-colors"
                  >
                    Retour à l&apos;accueil →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <SocialSidebar />
    </div>
  )
} 