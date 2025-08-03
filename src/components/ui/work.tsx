import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Work() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-orange-500 text-xs sm:text-sm mb-2 sm:mb-4">Comment travailler avec nous ?</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-12 lg:mb-16 leading-tight">
            Travaillez avec nous en 3 Etapes
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="border border-[#e6e6e6] shadow-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-orange-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4">Marketing Potential Analysis</h3>
                <p className="text-[#4d4d4d] text-xs sm:text-sm leading-relaxed">
                  During the potential analysis, we will work together to define your current situation and set your
                  goals. Please allocate 15-30 minutes for this initial meeting.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-green-900 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 mb-4 sm:mb-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Acquire New Customers Reliably With Proven Online Marketing Strategies
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              We have been supporting businesses in their digital journey for over six years and have successfully
              completed more than 200 projects. Our strength lies in creative thinking and turning ideas into successful
              marketing strategies. We value effective results that ensure lasting benefits for your company. Rely on
              our expertise for your digital breakthrough.
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
              Discover Your Marketing Potential →
            </Button>
          </div>
          <div className="flex-shrink-0 w-full lg:w-96">
            <Image
              src="/logo.png"
              alt="Logo entreprise"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
