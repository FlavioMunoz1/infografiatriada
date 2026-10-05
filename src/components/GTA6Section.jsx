import { useState } from 'react'

const GTA_MISSIONS = [
  {
    id: 1,
    title: 'Atraco al Banco de Vice City',
    target: 'Cámaras de vigilancia y alarmas perimetrales',
    objective: 'Inhabilitar la señal del centro de monitoreo durante 15 minutos para entrar a la bóveda.',
    triadTarget: 'Disponibilidad (A)',
    color: '#fbbf24',
    tool: 'Jammer RF perimetral + ataque DDoS al enlace local'
  },
  {
    id: 2,
    title: 'Extorsión en Ocean Drive',
    target: 'Mensajería privada del cartel rival',
    objective: 'Interceptar conversaciones cifradas sin ser detectado para conocer el punto de entrega.',
    triadTarget: 'Confidencialidad (C)',
    color: '#38bdf8',
    tool: 'Ataque Man-in-the-Middle (MitM) sobre la red celular'
  },
  {
    id: 3,
    title: 'Lavado Digital en Leonida State',
    target: 'Registros de transferencias de la policía estatal',
    objective: 'Alterar la base de datos de vehículos incautados para borrar el número de chasis de los autos.',
    triadTarget: 'Integridad (I)',
    color: '#34d399',
    tool: 'Inyección de base de datos y borrado de logs forenses'
  }
]

export default function GTA6Section() {
  const [selectedMission, setSelectedMission] = useState(GTA_MISSIONS[0])

  return (
    <section
      style={{
        backgroundColor: '#0f172a',
        border: '1px solid #1e293b',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Fondo decorativo con degradado neón estilo Vice City */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Cabecera temática */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '0.85rem',
              letterSpacing: '0.05em'
            }}
          >
            GTA VI
          </span>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#f8fafc' }}>
              Caso de Estudio: Leonida & Ciberseguridad
            </h2>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.84rem', color: '#94a3b8' }}>
              La Tríada CIA detrás del juego más esperado de la historia y sus filtraciones reales.
            </p>
          </div>
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            color: '#ec4899',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            backgroundColor: 'rgba(236, 72, 153, 0.08)',
            padding: '4px 10px',
            borderRadius: '9999px',
            fontWeight: '700'
          }}
        >
          VICE CITY SOC
        </span>
      </div>

      {/* Caso Real de la Filtración de GTA 6 */}
      <div
        style={{
          backgroundColor: '#131e32',
          border: '1px solid #22324e',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '1rem' }}>🚨</span>
          <strong style={{ fontSize: '0.9rem', color: '#f43f5e' }}>
            Incidente Real: La filtración masiva de Rockstar Games
          </strong>
        </div>
        <p style={{ margin: 0, fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.5' }}>
          En 2022, un atacante vulneró el Slack corporativo de Rockstar mediante ingeniería social y robo de credenciales. El resultado fue la exposición de más de 90 videos del desarrollo de GTA VI y código fuente del motor.
        </p>
        <div
          style={{
            marginTop: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            color: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            padding: '4px 10px',
            borderRadius: '6px'
          }}
        >
          <span>Impacto directo en CIA:</span>
          <strong>Quiebre masivo de Confidencialidad</strong> (exfiltración de propiedad intelectual sensible).
        </div>
      </div>

      {/* Simulador de Misiones de Infiltración */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', fontWeight: '700', color: '#f8fafc' }}>
          Misiones en Vice City: ¿Qué pilar vulnera cada objetivo?
        </h3>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {GTA_MISSIONS.map((m) => {
            const isCurrent = selectedMission.id === m.id
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMission(m)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: `1px solid ${isCurrent ? '#ec4899' : '#334155'}`,
                  backgroundColor: isCurrent ? 'rgba(236, 72, 153, 0.15)' : '#1e293b',
                  color: isCurrent ? '#ffffff' : '#94a3b8',
                  fontSize: '0.84rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {m.title}
              </button>
            )
          })}
        </div>

        <div
          style={{
            backgroundColor: '#131e32',
            border: '1px solid #22324e',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              <strong>Objetivo:</strong> {selectedMission.target}
            </span>
            <span
              style={{
                backgroundColor: `${selectedMission.color}20`,
                color: selectedMission.color,
                border: `1px solid ${selectedMission.color}50`,
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: '700'
              }}
            >
              Pilar Atacado: {selectedMission.triadTarget}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.45' }}>
            {selectedMission.objective}
          </p>

          <div
            style={{
              marginTop: '4px',
              fontSize: '0.82rem',
              color: '#a78bfa',
              backgroundColor: 'rgba(167, 139, 250, 0.08)',
              padding: '8px 12px',
              borderRadius: '6px',
              borderLeft: '3px solid #8b5cf6'
            }}
          >
            <strong>Vector ofensivo:</strong> {selectedMission.tool}
          </div>
        </div>
      </div>
    </section>
  )
}