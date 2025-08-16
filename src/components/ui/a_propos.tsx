import Image from "next/image"
import { aboutHistory } from "@/data/about"

export default function Component() {
  return (
    <div className="bg-[#ffffff] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden relative">
      {/* Single Large Animated Background Logo */}
      {aboutHistory.floatingLogo && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute animate-floating-logo">
            <img
              src={aboutHistory.floatingLogo.image.src}
              alt={aboutHistory.floatingLogo.image.alt}
              className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain"
              style={aboutHistory.floatingLogo.filterCss ? { filter: aboutHistory.floatingLogo.filterCss } : undefined}
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-14 lg:mb-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {aboutHistory.title}
            </h1>

            <p className="text-[#4b5563] text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12">
              {aboutHistory.intro}
            </p>

            {/* Statistics */}
            <div className="rounded-2xl border border-amber-100 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {aboutHistory.stats.map((s) => (
                  <div key={s.id} className="text-center">
                    <div className="text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{s.value}</div>
                    <div className="text-[#4b5563] text-xs sm:text-sm font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <Image
              src={aboutHistory.heroImage.src}
              alt={aboutHistory.heroImage.alt}
              width={aboutHistory.heroImage.width ?? 600}
              height={aboutHistory.heroImage.height ?? 400}
              className="rounded-xl object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] shadow-lg"
            />
          </div>
        </div>

        {/* Team Photos Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {(aboutHistory.teamSpotlight ?? []).map((member, index) => (
            <div
              key={index}
              className="relative group w-full rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={member.image.src}
                alt={member.alt ?? member.image.alt}
                width={member.image.width ?? 400}
                height={member.image.height ?? 500}
                className="object-cover w-full h-[300px] sm:h-[360px] lg:h-[420px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-0.5">{member.name}</h3>
                <p className="text-slate-200 text-xs sm:text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
