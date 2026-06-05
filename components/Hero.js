export default function Hero() {
  const CALENDLY_URL = 'https://calendly.com/your-link'

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24" style={{ backgroundColor: '#FFF2E6' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-medium tracking-[0.3em] uppercase mb-6" style={{ color: '#0B493A' }}>
          Business Advisory & Growth Consultancy
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-none" style={{ color: '#0B493A' }}>
          Build. Scale. Transform.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Viora Global helps entrepreneurs, investors and operators launch, grow and optimize businesses in highly regulated industries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-white font-medium rounded-full text-sm tracking-wide transition-opacity hover:opacity-90" style={{ backgroundColor: '#0B493A' }}>
            Book a Strategy Session
          </a>
          <a href="#services" className="px-8 py-4 font-medium rounded-full text-sm tracking-wide border-2 transition-colors" style={{ borderColor: '#0B493A', color: '#0B493A' }}>
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}