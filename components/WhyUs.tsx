'use client'

import { motion } from 'framer-motion'
import { DollarSign, Shield, CheckSquare, Settings, PieChart, Package } from 'lucide-react'

const features = [
  {
    title: "COST-EFFECTIVE NETWORK",
    description: "Fostering strong relationships with our associates and ensuring cost-effective access to the finest professional advice and solutions.",
    icon: DollarSign
  },
  {
    title: "CONFIDENTIALITY",
    description: "Diligently upholding and enforcing stringent protocols to ensure complete confidentiality of our clients' information.",
    icon: Shield
  },
  {
    title: "SOLUTION ORIENTED",
    description: "We take pride in our solution-oriented approach, which is dedicated to delivering practical and effective resolutions for our clients.",
    icon: CheckSquare
  },
  {
    title: "TECHNICAL EXPERTISE",
    description: "Impressive depth of technical knowledge and substantial experience in delivering effective business solutions to our prestigious clients.",
    icon: Settings
  },
  {
    title: "RESOURCE PLANNING",
    description: "Proactive planning ahead of time to ensure the most effective and efficient utilisation of available time and resources.",
    icon: PieChart
  },
  {
    title: "CUSTOMISED SOLUTIONS",
    description: "Crafting customised solutions to precisely align with the clients' diverse array of short-term and long-term objectives.",
    icon: Package
  }
]

export default function WhyUs() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-[#001233] sm:text-5xl"
        >
          WHY US ?
        </motion.h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105"
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-[#001233]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#001233]">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 