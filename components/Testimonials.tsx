'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    company: "LIKPIN LLC",
    logo: "https://i.postimg.cc/13SJFhB9/image.png",
    text: "There team has been managing our accounting and taxation, auditing and financial planning in a very detailed, result oriented and professional manner. Would highly recommend them.",
    author: "Tarun Gulati",
    role: "LIKPIN LLC"
  },
  {
    company: "Atlas Maritime Co. LLC",
    logo: "https://i.postimg.cc/0y57x8ZJ/image.png",
    text: "NEOM's team swiftly secured our VAT refunds from FTA and exhibited a highly professional approach in providing necessary documentation. Highly recommended.",
    author: "M. Shourideh",
    role: "Atlas Maritime Co. LLC"
  },
  {
    company: "ALNLIN LEGAL TRANSLATION SERVICES",
    logo: "https://i.postimg.cc/13SJFhB9/image.png",
    text: "NEOM's team established my free zone company within 48 hours, offering transparent dealings and no concealed charges, highly satisfied.",
    author: "Abdul Gasim",
    role: "ALNLIN LEGAL TRANSLATION SERVICES, DUBAI"
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-gray-50 py-24">
      {/* Background with Dubai Skyline */}
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/pdypTrg3/high-angle-beautiful-buildings-nighttime.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-bold text-[#001233] sm:text-5xl"
          >
            WHAT OTHERS ARE SAYING ?
          </motion.h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
              >
                {/* Company Logo */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                {/* Star Rating */}
                <div className="mb-4 flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-600">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <Image
              src="https://i.postimg.cc/zGqFBwDv/image.png"
              alt="Google Reviews"
              width={200}
              height={60}
              className="h-auto w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 