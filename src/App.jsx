import { useState } from 'react'
import { TRIAD_DATA } from './data/triadData'
import TriadDetailCard from './components/TriadDetailCard'
import RansomwareAlert from './components/RansomwareAlert'

// Casos prácticos para poner a prueba el entendimiento
const SCENARIOS = [
  {
    id: 'phishing',
    title: 'Phishing a un ejecutivo',
    desc: 'Un atacante roba credenciales corporativas y accede a revisar balances financieros confidenciales.',
    affectedPillar: 'Confidencialidad',
    code: 'C',
    color: '#38bdf8',
    solution: 'Autenticación multifactor obligatoria (MFA) y principio de menor privilegio.'
  },
  {
    id: 'ransomware-data',
    title: 'Modificación silenciosa de base de datos',
    desc: 'Un script no autorizado altera los saldos de transferencias bancarias sin dejar trazas claras de auditoría.',
    affectedPillar: 'Integridad',
    code: 'I',
    color: '#34d399',
    solution: 'Firmas criptográficas, funciones hash (checksums) y bases de datos con logs de auditoría inmutables.'
  },
  {
    id: 'ddos-attack',
    title: 'Ataque DDoS al portal web',
    desc: 'Tráfico masivo coordinado satura el enlace y deja inoperativo el servicio de atención durante el día de mayor demanda.',
    affectedPillar: 'Disponibilidad',
    code: 'A',
    color: '#fbbf24',
    solution: 'Servicios de mitigación perimetral (CDN/WAF), balanceadores de carga y enlaces redundantes.'
  }
]

// Propiedades que van más allá del modelo CIA clásico
const COMPLEMENTARY_TRAITS = [
  {
    name: 'Autenticidad',
    badgeColor: '#38bdf8',
    summary: 'Garantiza que la persona o servicio que envía los datos sea verdaderamente quien afirma ser.',
    danger: 'Se quiebra ante: Suplantación de identidad (Spoofing) o credenciales robadas.'
  },
  {
    name: 'No Repudio',
    badgeColor: '#34d399',
    summary: 'Asegura que ninguna de las partes pueda negar haber realizado una firma, mensaje o transferencia.',
    danger: 'Se quiebra ante: Cuentas genéricas compartidas sin firma digital individual.'
  },
  {
    name: 'Trazabilidad',
    badgeColor: '#fbbf24',
    summary: 'Permite reconstruir detalladamente el historial, sabiendo quién ejecutó cada acción y en qué fecha.',
    danger: 'Se quiebra ante: Sistemas sin logs centralizados o registros que pueden borrarse fácilmente.'
  }
]

export default function App() {
  const [selectedKey, setSelectedKey] = useState('C')
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id)

  const activePillar = TRIAD_DATA[selectedKey]
  const currentScenario = SCENARIOS.find((item) => item.id === activeScenarioId)

  return (
    <main
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#f1f5f9',
        backgroundColor: '#090d16',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      {/* Cabecera */}
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: '#131e32',
            border: '1px solid #1e293b',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '14px'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
          Seguridad de la Información · Guía Interactiva
        </span>

        <h1 style={{ fontSize: '2.4rem', margin: '0 0 10px 0', fontWeight: '800', color: '#f8fafc' }}>
          La Tríada CIA Explicada Sencillo
        </h1>
        <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
          Proteger los datos de una organización consiste en equilibrar tres propiedades básicas:
          evitar que se filtren, que se alteren o que no estén disponibles cuando se requieran.
        </p>
      </header>

      {/* Selector interactivo de Pilares */}
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px',
          marginBottom: '28px'
        }}
      >
        {Object.entries(TRIAD_DATA).map(([key, item]) => {
          const isSelected = selectedKey === key
          const itemColor = item.color || '#38bdf8'

          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                borderRadius: '14px',
                border: `1.5px solid ${isSelected ? itemColor : '#1e293b'}`,
                backgroundColor: isSelected ? `${itemColor}15` : '#0f172a',
                boxShadow: isSelected ? `0 0 20px -4px ${itemColor}35` : 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  backgroundColor: itemColor,
                  fontWeight: '800',
                  fontSize: '1.15rem',
                  borderRadius: '10px',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '14px',
                  flexShrink: 0,
                  boxShadow: isSelected ? `0 0 14px ${itemColor}80` : 'none'
                }}
              >
                {key}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong
                  style={{
                    fontSize: '1.02rem',
                    marginBottom: '2px',
                    color: isSelected ? '#ffffff' : '#cbd5e1'
                  }}
                >
                  {item.name.split(' ')[0]}
                </strong>
                <span style={{ fontSize: '0.8rem', color: isSelected ? '#94a3b8' : '#64748b' }}>
                  {item.tagline}
                </span>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Detalle del pilar activo */}
      <TriadDetailCard pillar={activePillar} />

      {/* SECCIÓN NUEVA: Simulador de Casos Prácticos */}
      <section
        style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span style={{ fontSize: '1.25rem' }}>🧪</span>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: '#f8fafc' }}>
              Simulador de Casos Reales: ¿Qué pilar se rompió?
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
              Evalúa diferentes escenarios comunes y analiza el control técnico requerido.
            </p>
          </div>
        </div>

        {/* Botones de selección de escenarios */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
          {SCENARIOS.map((sc) => {
            const isCurrent = activeScenarioId === sc.id
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setActiveScenarioId(sc.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: `1px solid ${isCurrent ? '#38bdf8' : '#334155'}`,
                  backgroundColor: isCurrent ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                  color: isCurrent ? '#f8fafc' : '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {sc.title}
              </button>
            )
          })}
        </div>

        {/* Tarjeta del caso seleccionado */}
        <div
          style={{
            backgroundColor: '#131e32',
            border: '1px solid #22324e',
            borderRadius: '12px',
            padding: '18px'
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: `${currentScenario.color}20`,
                border: `1px solid ${currentScenario.color}45`,
                color: currentScenario.color,
                fontSize: '0.78rem',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}
            >
              Pilar Comprometido: {currentScenario.affectedPillar} ({currentScenario.code})
            </span>
          </div>
          <p style={{ margin: '0 0 12px 0', fontSize: '0.92rem', color: '#e2e8f0', lineHeight: '1.5' }}>
            <strong>Situación:</strong> {currentScenario.desc}
          </p>
          <div
            style={{
              backgroundColor: 'rgba(56, 189, 248, 0.08)',
              borderLeft: '3px solid #38bdf8',
              padding: '10px 14px',
              borderRadius: '0 8px 8px 0',
              fontSize: '0.88rem',
              color: '#bae6fd'
            }}
          >
            <strong>Mitigación:</strong> {currentScenario.solution}
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: Propiedades complementarias */}
      <section
        style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <span style={{ fontSize: '1.25rem' }}>🛡️</span>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: '#f8fafc' }}>
              Propiedades Complementarias
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
              En entornos empresariales y normativas (como ISO 27001), la tríada se amplía con estos tres principios:
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '14px'
          }}
        >
          {COMPLEMENTARY_TRAITS.map((prop) => (
            <div
              key={prop.name}
              style={{
                backgroundColor: '#131e32',
                border: '1px solid #1e293b',
                borderLeft: `3px solid ${prop.badgeColor}`,
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <h3 style={{ margin: 0, fontSize: '0.98rem', fontWeight: '700', color: prop.badgeColor }}>
                {prop.name}
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.45' }}>
                {prop.summary}
              </p>
              <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: 'auto', fontWeight: '600' }}>
                {prop.danger}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Alerta Ransomware */}
      <RansomwareAlert />
    </main>
  )
}