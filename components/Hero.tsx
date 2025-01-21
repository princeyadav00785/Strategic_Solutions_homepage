
import Image from "next/image"
import Link from "next/link"
import heroImage from '../public/images/hero.jpg';

export default function Hero() {
    
    const features = [
        {
          title: "GROWTH",
          description: "Sustainable Growth Approach",
          icon: "📈"
        },
        {
          title: "COMPLIANCE",
          description: "Commitment to Compliance",
          icon: "✓"
        },
        {
          title: "INTEGRITY",
          description: "Unwavering Adherence to Ethics",
          icon: "🛡️"
        }
      ]
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen mx-auto px-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            // src="https://i.postimg.cc/pdypTrg3/high-angle-beautiful-buildings-nighttime.jpg"
            src={heroImage}
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <div className="mx-auto lg:pl-36 max-w-7xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-8xl">
                ONE STOP SOLUTION
              </h1>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
                >
                  GET A FREE QUOTE
                </Link>
              </div>

              {/* Features Grid */}
              <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>
    </div>
  )
}