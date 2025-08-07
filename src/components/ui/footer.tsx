import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <footer className="bg-[#1a1a1a] text-[#d3dde8] py-16 px-6 relative overflow-hidden">
      {/* Single Large Animated Background Logo */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute animate-floating-logo">
          <img
            src="/logo.png"
            alt="IOI Logo"
            className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain"
            style={{
              filter: 'brightness(0.9) saturate(0.8) opacity(0.1)',
            }}
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Left Section - Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="IOI Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Company Description */}
            <p className="text-sm mb-8 leading-relaxed">
              IOI est une entreprise numérique spécialisée dans la création de solutions innovantes pour vous
              accompagner dans votre croissance.
            </p>

            {/* Partner Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#ffffff] p-3 rounded flex items-center justify-center">
                <div className="text-[#4285f4] font-semibold text-xs">
                  <div>Google</div>
                  <div>Partner</div>
                </div>
              </div>
              <div className="bg-[#ffffff] p-3 rounded flex items-center justify-center">
                <div className="text-[#1a1a1a] text-xs font-bold">
                  <div>Clutch</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#004c89] p-3 rounded flex items-center justify-center">
                <div className="text-white text-xs font-bold">IHK</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded flex items-center justify-center">
                <div className="text-[#1a1a1a] text-xs font-bold">
                  <div>WINNER</div>
                  <div className="text-[10px]">German Web</div>
                  <div className="text-[10px]">Award 2023</div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              <Link href="#" className="text-[#d3dde8] hover:text-[#3884ff] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#d3dde8] hover:text-[#3884ff] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#d3dde8] hover:text-[#3884ff] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#d3dde8] hover:text-[#3884ff] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#d3dde8] hover:text-[#3884ff] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>

            {/* Language Selector */}
            <div className="flex gap-2">
              <Button
                className="bg-transparent border-[#d3dde8] text-[#d3dde8] hover:bg-[#d3dde8] hover:text-[#1a1a1a]"
              >
                EN
              </Button>
              <Button className="bg-[#3884ff] text-white hover:bg-[#2563eb]">
                FR
              </Button>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Navigation</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm hover:text-[#3884ff] transition-colors">Accueil</Link>
              <Link href="/produits" className="block text-sm hover:text-[#3884ff] transition-colors">Produits</Link>
              <Link href="/services" className="block text-sm hover:text-[#3884ff] transition-colors">Services</Link>
              <Link href="/ressources" className="block text-sm hover:text-[#3884ff] transition-colors">Ressources</Link>
              <Link href="/ressources/docs" className="block text-sm hover:text-[#3884ff] transition-colors">Documentation</Link>
              <Link href="/ressources/blog" className="block text-sm hover:text-[#3884ff] transition-colors">Blog</Link>
              <Link href="/ressources/tutorials" className="block text-sm hover:text-[#3884ff] transition-colors">Tutoriels</Link>
              <Link href="/ressources/faq" className="block text-sm hover:text-[#3884ff] transition-colors">FAQ</Link>
              <Link href="/rendez-vous" className="block text-sm hover:text-[#3884ff] transition-colors">Rendez-vous</Link>
              <Link href="/contacts" className="block text-sm hover:text-[#3884ff] transition-colors">Contacts</Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Services</h3>
            <nav className="space-y-3">
              <Link href="/services/consulting" className="block text-sm hover:text-[#3884ff] transition-colors">Consulting</Link>
              <Link href="/services/development" className="block text-sm hover:text-[#3884ff] transition-colors">Développement</Link>
              <Link href="/services/design" className="block text-sm hover:text-[#3884ff] transition-colors">Design</Link>
              <Link href="/services/marketing" className="block text-sm hover:text-[#3884ff] transition-colors">Marketing</Link>
              <Link href="/services/formation" className="block text-sm hover:text-[#3884ff] transition-colors">Formation</Link>
              <Link href="/services/maintenance" className="block text-sm hover:text-[#3884ff] transition-colors">Maintenance</Link>
              <Link href="/services/support" className="block text-sm hover:text-[#3884ff] transition-colors">Support</Link>
              <Link href="/services/media" className="block text-sm hover:text-[#3884ff] transition-colors">Media</Link>
              <Link href="/services/securite-reseau" className="block text-sm hover:text-[#3884ff] transition-colors">Sécurité Réseau</Link>
              <Link href="/services/architecture-reseau" className="block text-sm hover:text-[#3884ff] transition-colors">Architecture Réseau</Link>
              <Link href="/services/maintenance-equipements-reseau" className="block text-sm hover:text-[#3884ff] transition-colors">Maintenance Équipements</Link>
              <Link href="/services/deploiement-reseau" className="block text-sm hover:text-[#3884ff] transition-colors">Déploiement Réseau</Link>
              <Link href="/services/cybersecurite" className="block text-sm hover:text-[#3884ff] transition-colors">Cybersécurité</Link>
              <Link href="/services/solutions-cloud" className="block text-sm hover:text-[#3884ff] transition-colors">Solutions Cloud</Link>
              <Link href="/services/solutions-vpn" className="block text-sm hover:text-[#3884ff] transition-colors">Solutions VPN</Link>
              <Link href="/services/ia-intelligence-artificielle" className="block text-sm text-[#3884ff] font-medium hover:underline transition-colors">IA & Intelligence Artificielle</Link>
            </nav>
          </div>

          {/* Contacts Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Contacts</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">IOI Gabon</div>
                <div>Derrière la pédiatrie</div>
                <div>75000 Owendo, Gabon</div>
              </div>
              <div>
                <Link href="tel:+24174343776" className="hover:text-[#3884ff] transition-colors">+241 74 34 37 76</Link> / <Link href="tel:+24165457664" className="hover:text-[#3884ff] transition-colors">+241 65 45 76 64</Link>
              </div>
              <div>
                <Link href="mailto:ioi.gabon101@gmail.com" className="hover:text-[#3884ff] transition-colors">ioi.gabon101@gmail.com</Link>
              </div>
              <div>
                <span className="text-[#3884ff]">Lun-Ven: 9h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#4d4d4d] mt-12 pt-8 space-y-4">
          <p className="text-xs text-center">
            Ce site, opéré par IOI, n'est pas affilié à Facebook™ ou à Facebook™ Inc. De plus, IOI n'est en aucun cas
            approuvé ou sponsorisé par Facebook™. Facebook™ est une marque déposée de Facebook™, Inc.
          </p>
          <p className="text-xs text-center">© 2024 – 2025 IOI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
