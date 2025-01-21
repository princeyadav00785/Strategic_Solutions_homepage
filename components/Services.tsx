'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { servicesContent } from '@/data/services-content'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Services({ showAll = false }) {
  const services = Object.entries(servicesContent).map(([slug, service]) => ({
    ...service,
    href: `/services/${slug}`
  }))
  
  const displayServices = showAll ? services : services.slice(0, 6)

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            OUR SERVICES
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-48 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-3 text-gray-600 line-clamp-3">{service.shortDescription}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        )}
      </div>
    </section>
  )
} 