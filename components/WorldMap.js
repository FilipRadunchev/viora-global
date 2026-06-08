'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const highlightedCountries = [
  '826', '470', '196', '784', '566', '404', '710', '124', '531', '833', '292'
]

const markers = [
  { name: 'United Kingdom', coordinates: [-2.5, 54] },
  { name: 'Malta', coordinates: [14.4, 35.9] },
  { name: 'Cyprus', coordinates: [33.4, 35.1] },
  { name: 'UAE', coordinates: [54, 24] },
  { name: 'Nigeria', coordinates: [8, 9] },
  { name: 'Kenya', coordinates: [37.9, 0.02] },
  { name: 'South Africa', coordinates: [25, -29] },
  { name: 'Canada', coordinates: [-96, 60] },
  { name: 'Curacao', coordinates: [-69, 12.2] },
  { name: 'Isle of Man', coordinates: [-4.5, 54.2] },
  { name: 'Gibraltar', coordinates: [-5.35, 36.14] },
]

export default function WorldMap() {
  return (
    <section className="py-24" style={{ backgroundColor: '#FFF2E6' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#0B493A' }}>Where We Operate</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0B493A' }}>Global Reach</h2>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#e8f0ee' }}>
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140, center: [10, 20] }} height={500}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedCountries.includes(geo.id)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#c5d9d4"
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: isHighlighted ? '#0B493A' : '#c5d9d4', outline: 'none', cursor: isHighlighted ? 'pointer' : 'default' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>
            {markers.map((marker) => (
              <Marker key={marker.name} coordinates={marker.coordinates}>
                <circle r={5} fill="#0B493A" stroke="#ffffff" strokeWidth={2} style={{ pointerEvents: 'none' }} />
                <title>{marker.name}</title>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {markers.map((marker) => (
            <span key={marker.name} className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#0B493A' }}>
              {marker.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}