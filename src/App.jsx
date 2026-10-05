import { useState } from 'react'
import { TRIAD_DATA } from './data/triadData'
import TriadDetailCard from './components/TriadDetailCard'
import RansomwareAlert from './components/RansomwareAlert'

export default function App() {
  const [selectedKey, setSelectedKey] = useState('C')
  const activePillar = TRIAD_DATA[selectedKey]

  return (
    <main
      style={{
        maxWidth: '920px',
        margin: '0 auto',
        padding: '36px 20px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#0f172a',
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: '#e2e8f0',
            color: '#475569',
            fontSize: '0.82rem',
            fontWeight: '600',
            marginBottom: '10px'
          }}
        >
          Seguridad de la Información Didáctica
        </span>
        <h1 style={{ fontSize: '2.1rem', margin: '0 0 10px 0', fontWeight: '800', color: '#0f172a' }}>
          La Tríada CIA Explicada Sencillo
        </h1>
        <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto', lineHeight: '1.5' }}>
          Proteger los datos de una organización consiste en equilibrar tres propiedades básicas:
          evitar que se filtren, que se alteren o que no estén disponibles cuando se requieran.
        </p>
      </header>

      {/* Selector interactivo */}
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px',
          marginBottom: '24px'
        }}
      >
        {Object.entries(TRIAD_DATA).map(([key, item]) => {
          const isSelected = selectedKey === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '14px',
                borderRadius: '12px',
                border: `2px solid ${isSelected ? item.color : '#e2e8f0'}`,
                backgroundColor: isSelected ? item.bgLight : '#ffffff',
                boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  backgroundColor: item.color,
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  flexShrink: 0
                }}
              >
                {key}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '1rem', marginBottom: '2px', color: isSelected ? item.color : '#1e293b' }}>
                  {item.name.split(' ')[0]}
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.tagline}</span>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Detalle y Cierre */}
      <TriadDetailCard pillar={activePillar} />
      <RansomwareAlert />
    </main>
  )
}