import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import Image from "next/image"
import { productsItems } from "@/data/products/products.data"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#000000] mb-4">Nos realisations</h1>
          <p className="text-[#4d4d4d] text-lg mb-6">
            IOI vous accompagne avec des solutions digitales efficaces pour faire évoluer votre activité et fixer de
            nouveaux standards.
          </p>
        </div>

        {/* Cards Grid: populated from centralized products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {productsItems.slice(0, 4).map((p) => (
            <div key={p.id} className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-700" />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  {p.title}
                  <br />
                  {p.tagline}
                </h3>
                <p className="text-[#4d4d4d] text-sm mb-6">
                  {p.description}
                </p>
                <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
              </div>
              <div className="mt-8">
                <Image
                  src={p.images?.[0]?.src ?? "/placeholder.svg?height=200&width=350"}
                  alt={p.images?.[0]?.alt ?? p.title}
                  width={350}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button
        <div className="text-center">
          <Button
            className="border-[#dbdbdb] text-[#4d4d4d] hover:bg-[#e5e7eb] rounded-full px-8 bg-transparent"
          >
            Voir plus de Service →
          </Button>
        </div> */}
      </div>
    </div>
  )
}
