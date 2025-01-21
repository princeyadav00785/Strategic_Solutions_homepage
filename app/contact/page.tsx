'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const contactInfo = [
  {
    title: "PHONE",
    icon: Phone,
    content: "(+971) 526520909",
    color: "text-blue-500"
  },
  {
    title: "EMAIL",
    icon: Mail,
    content: "info@strategicsolutionsuae.com",
    color: "text-amber-500"
  },
  {
    title: "OFFICE",
    icon: MapPin,
    content: "230, Rose Palace Al Barsha Arjan Dubai, UAE",
    color: "text-cyan-500"
  },
  {
    title: "HOURS",
    icon: Clock,
    content: "Monday-Friday: 09:00 AM-06:00 PM",
    color: "text-white"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/pdypTrg3/high-angle-beautiful-buildings-nighttime.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001233]/80 via-[#001845]/80 to-[#023E7D]/90" />
          
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            >
              CONTACT US
            </motion.h1>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="relative z-20 mx-auto -mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-[#001233]/80 p-8 backdrop-blur-sm transition-all hover:bg-[#001233]"
              >
                <div className="flex flex-col items-center text-center">
                  <info.icon className={`h-12 w-12 ${info.color}`} />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {info.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#F5F7FA] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-cyan-500">FAQs</h2>
            <h3 className="mt-2 text-4xl font-bold text-gray-900">COMMON QUESTIONS</h3>
          </div>

          <div className="mt-16 grid gap-6">
            {/* FAQ Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why should I work with Strategic Solutions for my business?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Strategic Solutions has the best customer satisfaction ratio out there. We don't hide anything from you and all pricing is made clear before start of the project and everything comes under a legal framework.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Are Strategic Solutions' services available to startups as well as established businesses?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Yes, we cater to both startups and established businesses. Our services are tailored to meet the specific needs of each client, whether you're just starting out or looking to expand your established business.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What are the benefits of hiring Strategic Solutions?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    We offer comprehensive business solutions, expert guidance, and personalized service. Our team ensures compliance with local regulations, provides cost-effective solutions, and helps streamline your business operations.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What is the approach used by Strategic Solutions' consultants?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Our consultants take a client-centric approach, focusing on understanding your unique business needs and challenges. We develop customized solutions while ensuring compliance with UAE regulations and industry best practices.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How experienced are Strategic Solutions' consultants in the UAE business landscape?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Our consultants have extensive experience in the UAE market, with deep knowledge of local business regulations, customs, and practices. We stay updated with the latest changes in UAE business laws and regulations.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Is my business information kept confidential and secure when working with Strategic Solutions?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Yes, we maintain strict confidentiality of all client information. Our security protocols and professional ethics ensure your business information is protected and only accessed by authorized personnel.
                  </p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What is the billing structure of Strategic Solutions' services?
                  </h3>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    We offer transparent pricing with no hidden fees. Our billing structure is project-based or service-based, depending on your needs. We provide detailed quotes upfront and ensure all costs are clearly communicated.
                  </p>
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 