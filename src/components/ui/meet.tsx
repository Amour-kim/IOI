"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, Check, Star, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Meet() {
  const [formData, setFormData] = useState({
    name: "John Smith",
    firm: "Company GmbH",
    email: "john.smith@mail.com",
    telephone: "+49 123 45 67 890",
    isDirector: "yes",
    services: [] as string[],
    agreedToTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const services = [
    "Website & Landing Page creation",
    "Webflow Development",
    "Branding & Web Design",
    "Google Ads",
    "SEO - Search Engine Optimization",
    "Multilingual Website",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2500)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-0 md:p-8 flex flex-col justify-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-center py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Sparkles className="w-[60vw] max-w-3xl h-auto opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl text-blue-300" style={{ animationDuration: "22s" }} />
        </div>
        <div className="relative z-10">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-base shadow animate-pulse mb-4">Gratuit & sans engagement</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg animate-slide-down">Prenez rendez-vous avec un expert IOI</h1>
          <p className="text-lg md:text-2xl text-blue-800/80 mb-2 font-medium animate-fade-in">Analyse personnalisée de votre projet, conseils concrets et recommandations sur-mesure.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 bg-white/90 rounded-3xl shadow-2xl p-4 md:p-12 animate-fade-in-up">
        {/* Left Column - Form */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-7 h-7 text-blue-400 animate-pulse" />
            <span className="text-blue-700 font-semibold text-lg">+ de 100 clients accompagnés</span>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name and Firm Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-blue-900 font-medium">
                  Nom
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="bg-blue-50 border-2 border-transparent focus:border-blue-400 rounded-full px-6 py-4 text-blue-700 h-14 transition-all focus:shadow-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firm" className="text-blue-900 font-medium">
                  Société
                </Label>
                <Input
                  id="firm"
                  value={formData.firm}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firm: e.target.value }))}
                  className="bg-blue-50 border-2 border-transparent focus:border-blue-400 rounded-full px-6 py-4 text-blue-700 h-14 transition-all focus:shadow-lg"
                  required
                />
              </div>
            </div>
            {/* Email and Telephone Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-900 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-blue-50 border-2 border-transparent focus:border-blue-400 rounded-full px-6 py-4 text-blue-700 h-14 transition-all focus:shadow-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-blue-900 font-medium">
                  Téléphone *
                </Label>
                <Input
                  id="telephone"
                  value={formData.telephone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, telephone: e.target.value }))}
                  className="bg-blue-50 border-2 border-transparent focus:border-blue-400 rounded-full px-6 py-4 text-blue-700 h-14 transition-all focus:shadow-lg"
                  required
                />
              </div>
            </div>
            {/* Director Question */}
            <div className="space-y-4">
              <Label className="text-blue-900 font-medium">Êtes-vous dirigeant ou entrepreneur ?</Label>
              <RadioGroup
                value={formData.isDirector}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, isDirector: value }))}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" className="border-blue-400" />
                  <Label htmlFor="yes" className="text-blue-700">
                    Oui
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" className="border-blue-400" />
                  <Label htmlFor="no" className="text-blue-700">
                    Non
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {/* Services */}
            <div className="space-y-4">
              <Label className="text-blue-900 font-medium">Quels services vous intéressent ?</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox
                      id={`service-${index}`}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                      className="border-blue-400"
                    />
                    <Label htmlFor={`service-${index}`} className="text-blue-700 text-sm leading-relaxed">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreedToTerms: checked as boolean }))}
                className="border-blue-400 mt-1"
                required
              />
              <Label htmlFor="terms" className="text-blue-700 text-sm leading-relaxed">
                J'ai pris connaissance des conditions d'utilisation
              </Label>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-16 text-lg font-semibold flex items-center justify-center transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {success ? (
                <>
                  <Check className="w-6 h-6 mr-2 animate-bounce" /> Envoyé !
                </>
              ) : loading ? (
                <span className="animate-pulse">Envoi...</span>
              ) : (
                <>
                  Prendre rendez-vous <ArrowRight className="w-6 h-6 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
        {/* Right Column - Expert Profile */}
        <div className="space-y-8 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-tr from-blue-200 to-blue-400 shadow-xl border-4 border-white relative z-10">
              <Image
                src="/placeholder.svg?height=112&width=112"
                alt="Aleksey Rogalev"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-blue-200/60 blur-2xl rounded-full z-0 animate-float" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-1">Aleksey Rogalev</h2>
            <p className="text-blue-700 text-lg">CEO, SEO & Expert Digital</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 animate-pulse" />
              ))}
              <span className="ml-2 text-blue-700 font-semibold text-sm">4.9/5 (112 avis)</span>
            </div>
          </div>
          <div className="border-t border-blue-100 pt-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Un accompagnement humain & expert</h3>
            <p className="text-blue-700 text-base leading-relaxed mb-6">
              Ensemble, nous analysons vos enjeux digitaux et trouvons les leviers pour booster votre activité.
            </p>
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-blue-800 text-base">Conseils personnalisés et concrets</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-blue-800 text-base">+100 clients accompagnés</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-blue-800 text-base">Recommandations actionnables</p>
              </div>
            </div>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-base shadow animate-pulse">Témoignages disponibles sur demande</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
