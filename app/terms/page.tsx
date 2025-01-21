'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: "Agreement to Terms",
    content: "These Terms and Conditions constitute a legally binding agreement made between you and Strategic Solutions concerning your use of our website and services. You agree that by accessing our website and using our services, you have read, understood, and agree to be bound by all of these Terms and Conditions."
  },
  {
    title: "Services",
    content: "Strategic Solutions provides business setup, accounting, taxation, and related consulting services in the UAE. We reserve the right to withdraw or amend our services, and any service or material we provide, in our sole discretion without notice.",
    bullets: [
      "Business Setup and Licensing",
      "Accounting and Bookkeeping",
      "Tax Advisory and Compliance",
      "Business Consulting",
      "Corporate Banking Assistance",
      "Company Formation Services"
    ]
  },
  {
    title: "Professional Fees and Payment",
    content: "Our professional fees are based on the complexity of work, time involved, and expertise required. Payment terms are as follows:",
    bullets: [
      "Fees are quoted and agreed upon before commencement of services",
      "Payment is required as per the agreed payment schedule",
      "Late payments may incur additional charges",
      "All quoted fees are exclusive of VAT",
      "Bank charges for international transfers are borne by the client"
    ]
  },
  {
    title: "Intellectual Property",
    content: "The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Strategic Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
  },
  {
    title: "Confidentiality",
    content: "We maintain strict confidentiality regarding all client information and business affairs. However, we may be required to disclose information if mandated by law or regulatory requirements."
  },
  {
    title: "Limitation of Liability",
    content: "In no event shall Strategic Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services."
  },
  {
    title: "Termination",
    content: "We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.",
    bullets: [
      "All provisions of the Terms which by their nature should survive termination shall survive",
      "Upon termination, your right to use the services will immediately cease"
    ]
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect."
  },
  {
    title: "Contact Information",
    content: "If you have any questions about these Terms, please contact us at info@strategicsolutionsuae.com or (+971) 52-403-7229."
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#001233] sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Last Updated: January 2024
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="prose max-w-none"
            >
              <h2 className="text-2xl font-bold text-[#001233]">
                {section.title}
              </h2>
              <p className="mt-4 text-gray-600">
                {section.content}
              </p>
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 