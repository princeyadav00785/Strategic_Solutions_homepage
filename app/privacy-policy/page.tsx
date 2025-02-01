'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: "Introduction",
    content: "Strategic Solutions is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
  },
  {
    title: "Information We Collect",
    content: "We collect information that you voluntarily provide to us when you express interest in obtaining information about us or our services. The personal information we collect may include: Name, Email address, Phone number, Company details, and any other information you choose to provide.",
    subsections: [
      {
        title: "Automatically Collected Information",
        content: "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."
      }
    ]
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to:",
    bullets: [
      "Provide, operate, and maintain our services",
      "Improve, personalize, and expand our services",
      "Understand and analyze how you use our services",
      "Develop new products, services, features, and functionality",
      "Communicate with you about our services",
      "Send you emails and other communications",
      "Find and prevent fraud"
    ]
  },
  {
    title: "Information Sharing and Disclosure",
    content: "We may share your information with third parties only in the ways that are described in this Privacy Policy:",
    bullets: [
      "With your consent",
      "To comply with laws",
      "To protect our rights",
      "With our trusted service providers and business partners",
      "In connection with a business transaction"
    ]
  },
  {
    title: "Data Security",
    content: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure."
  },
  {
    title: "Your Data Protection Rights",
    content: "You have the following data protection rights:",
    bullets: [
      "The right to access, update or delete your information",
      "The right of rectification",
      "The right to object",
      "The right of restriction",
      "The right to data portability",
      "The right to withdraw consent"
    ]
  },
  {
    title: "Changes to This Privacy Policy",
    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at info@strategicsolutionsuae.com."
  }
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="mt-6">
                  <h3 className="text-xl font-semibold text-[#001233]">
                    {subsection.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {subsection.content}
                  </p>
                </div>
              ))}
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