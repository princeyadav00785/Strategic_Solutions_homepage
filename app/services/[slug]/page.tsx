import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/constants/services'
import { servicesContent } from '@/data/services-content'
import { ServiceContent } from '@/types/service'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.href.split('/').pop(),
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params
  const serviceContent = servicesContent[slug]

  if (!serviceContent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-br from-[#001233] via-[#001845] to-[#023E7D]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-transparent opacity-60">
          <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center opacity-20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="max-w-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            {serviceContent.name}
          </h1>
          <div className="mt-12">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-cyan-500">SERVICES</h2>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">{serviceContent.name}</h3>
            <p className="mt-4 text-gray-600">
              {serviceContent.description}
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">WHAT DO WE OFFER?</h3>
              <ul className="mt-6 space-y-4">
                {serviceContent.offerings.map((offering, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white">
                      •
                    </span>
                    <span className="text-gray-600">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <Image
                src={serviceContent.imageUrl}
                alt={`${serviceContent.name} Illustration`}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">WHY STRATEGIC SOLUTIONS?</h3>
              <ul className="mt-6 space-y-4">
                {serviceContent.whyStrategicSolutions.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white">
                      •
                    </span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 rounded-lg bg-gradient-to-r from-[#001233] to-[#023E7D] p-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            WANT TO KNOW MORE ABOUT {serviceContent.name.toUpperCase()}?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 