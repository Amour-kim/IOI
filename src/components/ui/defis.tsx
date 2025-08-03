import { Ban } from "lucide-react"

export default function Defis() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Logo IOI en arrière-plan */}
      <div className="absolute left-0 top-0 w-[600px] h-full pointer-events-none select-none opacity-80 z-0 flex items-center">
        <img
          src="/logo.png"
          alt="IOI Logo Background"
          className="w-[2000px] h-[2000px] object-contain rotate-[18deg] ml-[-80px] mt-32"
          style={{ filter: 'brightness(1.1) saturate(1.2)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Les principaux défis numériques que rencontrent les entreprises aujourd'hui
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nous comprenons les défis que rencontrent les entreprises pour se rendre visibles et développer leur
            clientèle à l'ère du numérique.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Top Row - 4 cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-black/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#eb462d] rounded-full flex items-center justify-center">
                  <Ban className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">No Time for Managing Marketing Measures</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                As an owner or managing director, you often have too little time to manage the marketing department.
              </p>
            </div>
          ))}

          {/* Bottom Row - 2 cards centered */}
          <div className="md:col-start-1 lg:col-start-2 lg:col-span-2 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index + 4}
                  className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-black/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#eb462d] rounded-full flex items-center justify-center">
                      <Ban className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white leading-tight">
                        No Time for Managing Marketing Measures
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    As an owner or managing director, you often have too little time to manage the marketing department.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
