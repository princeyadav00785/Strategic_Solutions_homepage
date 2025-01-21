'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const CountingNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

const stats = [
  {
    number: 15,
    label: "Years of industry experience"
  },
  {
    number: 600,
    label: "Clients"
  },
  {
    number: 1000,
    label: "Assignments Managed"
  }
]

export default function Stats() {
  return (
    <section className="bg-[#001233] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="grid gap-12 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold text-white">
                  <CountingNumber end={stat.number} />+
                </div>
                <div className="mt-2 text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-12 max-w-2xl text-center text-lg text-gray-300"
          >
            We understand the challenges that entrepreneurs face and are committed to providing tailored solutions that meet the unique needs of each of our clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="inline-block rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#001233]"
            >
              KNOW MORE ABOUT US
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 