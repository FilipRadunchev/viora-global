'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const highlightedCountries = [
  '826', '470', '196', '784', '566', '404', '710', '124', '531', '833', '292'
]

const countryNames = {
  '826': 'United Kingdom',
  '470': 'Malta',
  '196': 'Cyprus',
  '784': 'UAE',
  '566': 'Nigeria',
  '404': 'Kenya',
  '710': 'South Africa',
  '124': 'Canada',
  '531': 'Curacao',
  '833': 'Isle of Man',
  '292': 'Gibraltar',
}

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
  const [tooltip, setTooltip] = useState({ visible: false, name: '', x: 0, y: 0 })
  const [hoveredCountry, setHoveredCountry] = useState(null)

  const showTooltip = (name, e) => {
    const rect = e.target.closest('svg').parentElement.getBoundingClientRect()
    setTooltip({ visible: true, name, x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const moveTooltip = (e) => {
    const rect = e.target.closest('svg').parentElement.getBoundingClientRect()
    setTooltip((prev) => ({ ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top }))
  }

  const hideTooltip = () => {
    setTooltip({ visible: false, name: '', x: 0, y: 0 })
    setHoveredCountry(null)
  }

  return (
    <section className="py-24" style={{ backgroundColor: '#FFF2E6' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#0B493A' }}>Where We Operate</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0B493A' }}>Global Reach</h2>
        </div>
        <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#e8f0ee' }}>
          {tooltip.visible && (
            <div style={{
              position: 'absolute',
              left: tooltip.x + 12,
              top: tooltip.y - 32,
              backgroundColor: '#1a6b55',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '0.05em',
              pointerEvents: 'none',
              zIndex: 10,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}>
              {tooltip.name}
            </div>
          )}
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140, center: [10, 20] }} height={500}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedCountries.includes(geo.id)
                  const isHovered = hoveredCountry === geo.id
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted && isHovered ? '#0B493A' : '#c5d9d4'}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      onMouseEnter={(e) => {
                        if (isHighlighted) {
                          setHoveredCountry(geo.id)
                          showTooltip(countryNames[geo.id], e)
                        }
                      }}
                      onMouseMove={(e) => { if (isHighlighted) moveTooltip(e) }}
                      onMouseLeave={hideTooltip}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>
            {markers.map((marker) => (
              <Marker key={marker.name} coordinates={marker.coordinates}>
                <circle
                  r={5}
                  fill="#0B493A"
                  stroke="#ffffff"
                  strokeWidth={2}
                  style={{ pointerEvents: 'none' }}
                />
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