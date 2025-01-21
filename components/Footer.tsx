'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Logo from '../public/images/latestLogo.jpeg';


const mainServices = [
  { name: "Business Setup", href: "/services/business-setup" },
  { name: "Taxation Services", href: "/services/taxation" },
  { name: "Audit & Assurance", href: "/services/audit" },
  { name: "Compliance Services", href: "/services/compliance" },
  { name: "Bank Account Opening", href: "/services/bank-account" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" }
]

const aboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
//   { name: "Blogs", href: "/blogs" },
  { name: "FAQs", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" }
]

const socialLinks = [
  // { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/strategic_solutions_uae?igsh=Y2xramxhcnB5OHhy&utm_source=qr" },
  // { name: "LinkedIn", icon: Linkedin, href: "#" }
]

export default function Footer() {
  return (
    <footer className="bg-[#001233] text-white">
      {/* Contact Banner */}
      <div className="bg-amber-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <h2 className="text-3xl font-bold text-[#001233] sm:text-4xl">CONTACT US NOW</h2>
            <div className="flex flex-col items-end gap-2">
              <a href="tel:+971526520909" className="text-xl font-semibold text-[#001233] hover:underline">
              (+971) 526520909
              </a>
              <a href="mailto:info@strategicsolutionsuae.com" className="text-xl font-semibold text-[#001233] hover:underline">
                info@strategicsolutionsuae.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Main Services */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">MAIN SERVICES</h3>
            <ul className="mt-6 space-y-4">
              {mainServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 transition-colors hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">ABOUT STRATEGIC SOLUTIONS</h3>
            <ul className="mt-6 space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Strategic Solutions"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400">
              © 2025 Strategic Solutions TAX ACCOUNTING AND MANAGEMENT.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-white/10 p-2 text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 