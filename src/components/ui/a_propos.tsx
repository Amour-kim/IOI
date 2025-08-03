import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-[#ffffff] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden relative">
      {/* Single Large Animated Background Logo */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute animate-floating-logo">
          <img
            src="/logo.png"
            alt="IOI Logo"
            className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain"
            style={{
              filter: 'brightness(0.9) saturate(0.8) opacity(0.15)',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-14 lg:mb-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Notre Histoire
            </h1>

            <p className="text-[#4b5563] text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12">
              Fondée en 2015, notre entreprise s'est développée avec une vision claire : fournir des solutions
              innovantes qui transforment la façon dont les entreprises opèrent. Avec plus de 10 ans d'expérience dans
              l'industrie, nous avons servi plus de 500 clients à travers le monde.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</div>
                <div className="text-[#4b5563] text-xs sm:text-sm font-medium">Clients Satisfaits</div>
              </div>

              <div className="text-center">
                <div className="text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">50+</div>
                <div className="text-[#4b5563] text-xs sm:text-sm font-medium">Experts</div>
              </div>

              <div className="text-center">
                <div className="text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">15+</div>
                <div className="text-[#4b5563] text-xs sm:text-sm font-medium">Pays</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <Image
              src="/ioi-home.jpg"
              alt="Modern office space with team working"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
            />
          </div>
        </div>

        {/* Team Photos Section */}
        <div className="flex w-full gap-4">
          {[
            {
              name: "Christian Kallinich",
              role: "CEO & Fondateur",
              image: "/images/DG1.jpg",
              alt: "Christian Kallinich, CEO"
            },
            {
              name: "Alexandre Martin",
              role: "Directeur Commercial",
              image: "/team/alexandre.jpg",
              alt: "Alexandre Martin, Directeur Commercial"
            }
          ].map((member, index) => (
            <div key={index} className="relative group w-full">
              <Image
                src={member.image}
                alt={member.alt}
                width={400}
                height={500}
                className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              />
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000]/80 to-transparent p-3 sm:p-4 lg:p-6 rounded-b-lg">
                <h3 className="text-[#ffffff] text-base sm:text-lg lg:text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#e5e7eb] text-xs sm:text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
