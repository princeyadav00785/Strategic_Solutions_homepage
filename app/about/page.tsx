'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, Diamond, HandHeart, Users2 } from 'lucide-react'

const features = [
  {
    title: "CORPORATE GOVERNANCE",
    icon: Users2,
    color: "bg-blue-500",
    borderColor: "border-blue-500"
  },
  {
    title: "PROFESSIONAL APPROACH",
    icon: Briefcase,
    color: "bg-amber-500",
    borderColor: "border-amber-500"
  },
  {
    title: "COMPETITIVE EDGE",
    icon: Diamond,
    color: "bg-cyan-500",
    borderColor: "border-cyan-500"
  },
  {
    title: "ONGOING SUPPORT",
    icon: HandHeart,
    color: "bg-white",
    borderColor: "border-white"
  }
]

// const keyPoints = [
//   "Goal oriented",
//   "Risk based response",
//   "Adherence to laws and regulations",
//   "Equipped with latest developments and regulations"
// ]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1733266941754-36a495b9bc10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWFlJTIwY2l0eSUyMG5pZ2h0JTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001233]/80 via-[#001845]/80 to-[#023E7D]/90" />
          
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            >
              ABOUT US
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
              >
                GET A FREE QUOTE
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative z-20 mx-auto -mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-2 bg-[#001233]/80 p-8 backdrop-blur-sm transition-all hover:bg-[#001233]"
                style={{ borderColor: `var(--${feature.borderColor})` }}
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className={`h-12 w-12 ${feature.color === 'bg-white' ? 'text-white' : feature.color.replace('bg-', 'text-')}`} />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-lg font-semibold text-cyan-500">ABOUT US</h2>
            <h3 className="mt-3 text-3xl font-bold text-gray-900">WHO WE ARE?</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic Solutions is committed to provide productive and cost effective business solutions to its customers hence, enabling them to achieve their goals through our prestigious team of dedicated experts and associates. With 15 plus years of experience, we have established ourselves as a leading business solution provider i.e. Management Consultancy, Audit and Assurance, Taxation and Compliance.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand the challenges that entrepreneurs face and are committed to providing tailored solutions that meet the unique needs of each of our clients. Strategic Solutions team of experts and associates is highly professional in their respective fields which enables us to provide comprehensive cost effective business solutions.
            </p>
          </motion.div>

          {/* Team Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid gap-8 sm:grid-cols-2"
          >
            {/* <div className="relative h-[300px] overflow-hidden rounded-2xl">
              <Image
                src="https://i.postimg.cc/0Ngy8n0K/image.png"
                alt="Team"
                fill
                className="object-cover"
              />
            </div> */}
            {/* <div className="relative h-[300px] overflow-hidden rounded-2xl">
              <Image
                src="https://i.postimg.cc/C17hsgTb/image.png"
                alt="Business Network"
                fill
                className="object-cover"
              />
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">WHY CHOOSE US?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic Solutions knows how important it is to find a reliable partner to help you with your business needs. Strategic Solutions aim is to be a One Point Solution (under one roof) for all of its clients irrespective of their size and it is established through:
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Ensuring confidentiality of information at all levels",
                "Tailoring solutions in conformity with clients objectives",
                "Planning in advance to ensure there is no wastage of resources and time",
                "Close relationships with our affiliates which have cost effective and best professional advice",
                "Expert team at Strategic Solutions who have extensive technical knowledge and experience in the field of Audit & Assurance and Management Consultancy i.e. Business Setup, Taxation, Accounting and Bookkeeping, Compliance, and Audit & Assurance etc."
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Whether you are a startup or an established business, we are here to support you every step of the way. Let us help you achieve your business goals and take your business to the next level.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 