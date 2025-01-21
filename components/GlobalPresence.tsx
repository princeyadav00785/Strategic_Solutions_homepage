'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

const CountingNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
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

export default function GlobalPresence() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)

  return (
    <section className="relative bg-[#001233] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text and Stats */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              SERVING CLIENTS
              <br />
              AROUND THE
              <br />
              WORLD
            </motion.h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-5xl font-bold text-amber-400">
                  <CountingNumber end={600} />+
                </div>
                <div className="mt-2 text-lg text-gray-300">Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-5xl font-bold text-amber-400">
                  <CountingNumber end={24} />+
                </div>
                <div className="mt-2 text-lg text-gray-300">Nationalities</div>
              </motion.div>
            </div>
          </div>

          {/* World Map */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-[url('/images/world-map-dots.svg')] bg-contain bg-center bg-no-repeat" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}