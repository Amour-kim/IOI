import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import ModernNavbar from "@/components/ui/navbar";

export default function HeaderContact() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Top Bar */}
      <ModernNavbar/>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-[#eb462d] text-sm mb-8">Contact</div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact us</h1>
          <p className="text-[#e5e7eb] text-lg max-w-3xl mx-auto leading-relaxed">
            Contact us to get an offer for your project, schedule a consultation, or simply introduce yourself. We're
            looking forward to seeing you!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-[#1c1c1c] rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Contact person"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-semibold mb-6">How you reach us</h2>
            <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
              Use the contact form to leave us a message. You can also send us an email or call us directly at any time.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <div className="text-[#e5e7eb]">info@marketer-ux.com</div>
            <div className="text-[#e5e7eb]">+49 (0) 211 418 725 66</div>
            <div className="text-[#e5e7eb]">Mo. - Fr. 09:00 - 18:00</div>
            <div className="flex items-center justify-center gap-2 text-[#e5e7eb]">
              <div className="w-2 h-2 bg-[#e5e7eb] rounded-full"></div>
              <span>marketer UX GmbH</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white px-8 py-3 text-lg">
              Prendre rendez-vous <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
