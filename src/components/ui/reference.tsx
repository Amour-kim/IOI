import Image from "next/image"
import { Star, CheckCircle, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projectsItems } from "@/data"

export default function Reference() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-blue-900">Nos références</h1>
        </div>

        {/* Reference Cards alimentées par projectsItems */}
        <div className="space-y-10">
          {projectsItems.map((projet) => {
            const clientName = projet.client || "Client";
            const initials = clientName
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((s) => s[0]?.toUpperCase())
              .join("") || "CL";
            const subtitle = [projet.category, projet.year].filter(Boolean).join(", ");
            return (
              <Card key={projet.id} className="bg-white/95 border-none rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row p-0">
                {/* Image immersive */}
                <div className="md:w-1/2 w-full h-64 md:h-auto relative flex-shrink-0">
                  <Image
                    src={projet.image?.src || "/images/placeholder.jpg"}
                    alt={projet.image?.alt || projet.title}
                    fill
                    className="object-cover w-full h-full rounded-none md:rounded-l-3xl"
                    style={{ minHeight: 260 }}
                  />
                </div>
                {/* Contenu textuel */}
                <div className="flex-1 flex flex-col justify-between p-8 md:p-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">{projet.title}</h2>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        <span>Client vérifié</span>
                      </div>
                    </div>
                    <blockquote className="text-slate-700 text-lg leading-relaxed italic border-l-4 border-blue-200 pl-4 mb-4">
                      {projet.description || projet.content || "Projet réalisé avec succès."}
                    </blockquote>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">{initials}</div>
                      <div>
                        <div className="font-semibold text-blue-700">{clientName}</div>
                        {subtitle ? (
                          <div className="text-sm text-slate-500">{subtitle}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <a href={projet.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-2 rounded-full font-semibold text-base shadow-none border border-blue-200">
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  )
}
