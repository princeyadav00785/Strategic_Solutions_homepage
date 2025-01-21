import Services from '@/components/Services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#001233] via-[#001845] to-[#023E7D] py-24">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                Our Services
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                Comprehensive business solutions tailored to your needs. Explore our range of professional services designed to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services showAll={true} />
    </div>
  )
} 