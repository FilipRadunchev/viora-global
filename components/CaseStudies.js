export default function CaseStudies() {
  const cases = [
    {
      industry: 'iGaming',
      title: 'Launching a Licensed Online Casino in a New Market',
      description: 'End-to-end support from business model development and licensing to operational setup and market launch.',
      result: 'Fully licensed and operational within 9 months.',
    },
    {
      industry: 'FinTech',
      title: 'Scaling a Payment Institution Across Three Jurisdictions',
      description: 'Strategic advisory and regulatory support for a fintech company expanding into new European markets.',
      result: 'Successfully licensed in 3 jurisdictions within 12 months.',
    },
    {
      industry: 'Telecommunications',
      title: 'Market Entry Strategy for a Telecom Operator in Africa',
      description: 'Full market entry support including regulatory approvals, partnership development and operational design.',
      result: 'Market entry completed ahead of schedule.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#0B493A' }}>Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0B493A' }}>Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.title} className="flex flex-col p-8 rounded-2xl" style={{ backgroundColor: '#FFF2E6' }}>
              <span className="text-xs font-medium tracking-[0.2em] uppercase mb-6 px-3 py-1 rounded-full self-start text-white" style={{ backgroundColor: '#0B493A' }}>
                {item.industry}
              </span>
              <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: '#0B493A' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium" style={{ color: '#0B493A' }}>{item.result}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-12">Case studies are illustrative. Real client projects will be added upon engagement.</p>
      </div>
    </section>
  )
}