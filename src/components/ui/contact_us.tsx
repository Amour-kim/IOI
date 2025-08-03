import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg lg:text-xl text-orange-100">Nous sommes là pour répondre à vos questions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Une idée en tête ?<br />
                Écrivez-nous, on s'en
                <br />
                occupe ensemble.
              </h2>
              <p className="text-orange-100 text-lg leading-relaxed">
                Nous concevons des solutions numériques intuitives, modernes et performantes pour aider les entreprises
                à évoluer dans un monde digital. Faites confiance à notre expertise pour transformer vos idées en
                réalité.
              </p>
            </div>

            {/* Email Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wide">EMAIL US</span>
              </div>
              <p className="text-xl font-medium">ioi.gabon101@gmail.com</p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wide">Connect with us:</p>
              <div className="flex gap-4">
                <Button  className="bg-white/10 hover:bg-white/20 border-0">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 border-0">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 border-0">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 border-0">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 border-0">
                  <div className="w-5 h-5 rounded-full bg-current" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-white text-gray-900 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Travaillons ensemble — recevez votre devis personnalisé.
                  </h3>
                  <p className="text-[#838e9e] leading-relaxed">
                    Une idée ? Un besoin ? Parlons-en ! IOI est prêt à vous accompagner dans la réalisation de vos
                    projets.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Full name"
                        className="border-[#e6e8ec] focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email adress"
                        className="border-[#e6e8ec] focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-900">
                      Subjects
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="border-[#e6e8ec] focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-900">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="border-[#e6e8ec] focus:border-orange-500 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Soumettre Mon Idée
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
