'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  Instagram, Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { services } from '@/constants/services'
import { useRouter } from 'next/navigation'
import '../app/globals.css'
import Logo from '../public/images/latestLogo.jpeg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'All Services',
    href: '/services',
    children: services,
  },
  { name: 'Contact Us', href: '/contact' },
  // { name: 'Blog', href: '/blog' },
]

const socialLinks = [
  // { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/strategic_solutions_uae?igsh=Y2xramxhcnB5OHhy&utm_source=qr', icon: Instagram },
  // { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()

  const handleServiceClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Strategic Solutions"
                width={220}
                height={120}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-600",
                    item.name === 'Home' && "text-orange-600"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  )}
                </Link>
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 z-10 w-64 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => handleServiceClick(child.href)}
                        className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <span>{child.name}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          isOpen ? "fixed inset-0 z-40 bg-white" : "hidden"
        )}
      >
        {/* Add close button at the top */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => {
                  if (item.children) {
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  } else {
                    router.push(item.href)
                    setIsOpen(false)
                  }
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-orange-600"
              >
                <span>{item.name}</span>
                {item.children && (
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    activeDropdown === item.name && "rotate-180"
                  )} />
                )}
              </button>
              {item.children && activeDropdown === item.name && (
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.name}
                      onClick={() => handleServiceClick(child.href)}
                      className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-orange-600"
                    >
                      <span>{child.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Social Icons - Mobile */}
          <div className="mt-4 flex space-x-4 px-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

