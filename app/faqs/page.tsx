'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    category: "Business Setup",
    questions: [
      {
        q: "What are the types of business licenses available in UAE?",
        a: "In the UAE, there are several types of business licenses available: Commercial License (for trading activities), Professional License (for services), Industrial License (for manufacturing), and Tourism License. The type of license you need depends on your business activity."
      },
      {
        q: "How long does it take to set up a business in UAE?",
        a: "The timeline for business setup in UAE typically ranges from 1-3 weeks, depending on the type of business, location (Free Zone or Mainland), and documentation readiness. Our team ensures the fastest possible processing."
      }
    ]
  },
  {
    category: "Tax & Accounting",
    questions: [
      {
        q: "What are the current VAT rates in UAE?",
        a: "The standard VAT rate in UAE is 5% on most goods and services. However, some categories are zero-rated or exempt, such as certain healthcare, education, and local transport services."
      },
      {
        q: "How often do I need to file VAT returns?",
        a: "VAT returns must be filed quarterly or monthly, depending on your business turnover. We help ensure timely and accurate filing to maintain compliance."
      }
    ]
  },
  {
    category: "Banking & Finance",
    questions: [
      {
        q: "What documents are required to open a corporate bank account?",
        a: "Required documents typically include trade license, memorandum of association, passport copies of shareholders, board resolution, and other KYC documents. Requirements may vary by bank."
      },
      {
        q: "How long does bank account opening take?",
        a: "Corporate bank account opening usually takes 2-4 weeks. With our established banking relationships and proper documentation, we help expedite the process."
      }
    ]
  },
  {
    category: "Compliance & Regulations",
    questions: [
      {
        q: "What are the annual compliance requirements for UAE companies?",
        a: "Annual requirements include license renewal, maintaining proper books of accounts, filing VAT returns, ESR notifications, and UBO declarations. We provide comprehensive compliance services."
      },
      {
        q: "What are the penalties for non-compliance?",
        a: "Penalties vary based on the type of non-compliance, ranging from monetary fines to potential license cancellation. We help you stay compliant to avoid such penalties."
      }
    ]
  }
]

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#001233] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Find answers to common questions about our services and business operations in UAE
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <button
                onClick={() => toggleCategory(category.category)}
                className="flex w-full items-center justify-between bg-[#001233] px-6 py-4"
              >
                <h2 className="text-xl font-semibold text-white">
                  {category.category}
                </h2>
                <ChevronDown
                  className={`h-6 w-6 text-white transition-transform duration-200 ${
                    openCategory === category.category ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openCategory === category.category && (
                <div className="divide-y divide-gray-200">
                  {category.questions.map((item, index) => (
                    <div key={index} className="px-6 py-4">
                      <button
                        onClick={() => toggleQuestion(item.q)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.q}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            openQuestions.includes(item.q) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openQuestions.includes(item.q) && (
                        <p className="mt-4 text-gray-600">
                          {item.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 