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

// Preguntas del minijuego
const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: 'Ticket #104: Fuga de nómina',
    context: 'Un empleado con acceso general descarga un archivo Excel con los sueldos de toda la compañía y lo comparte en un grupo de mensajería.',
    correctPillar: 'C',
    explanation: 'Se violó la Confidencialidad: información privada expuesta a personas sin autorización.'
  },
  {
    id: 2,
    title: 'Ticket #219: Modificación de calificaciones',
    context: 'Un atacante aprovecha una falla web en el portal de alumnos y cambia las notas finales de un curso en la base de datos.',
    correctPillar: 'I',
    explanation: 'Se violó la Integridad: los registros legítimos fueron alterados de forma no autorizada.'
  },
  {
    id: 3,
    title: 'Ticket #308: Corte de fibra óptica',
    context: 'Una retroexcavadora corta el cable de red principal del datacenter y deja sin sistema a las sucursales durante 4 horas.',
    correctPillar: 'A',
    explanation: 'Se violó la Disponibilidad: los datos están intactos y a salvo, pero los usuarios no pueden acceder al servicio.'
  },
  {
    id: 4,
    title: 'Ticket #412: Inyección de datos falsos',
    context: 'Un sensor IoT comprometido envía lecturas térmicas falsas a la sala de servidores para engañar al sistema de enfriamiento.',
    correctPillar: 'I',
    explanation: 'Se violó la Integridad: los datos manipulados provocan que el sistema tome decisiones erróneas.'
  },
  {
    id: 5,
    title: 'Ticket #501: Ataque SYN Flood',
    context: 'El servidor web recibe millones de conexiones incompletas por segundo, agotando su memoria y tirando el sitio abajo.',
    correctPillar: 'A',
    explanation: 'Se violó la Disponibilidad: el servicio colapsa ante la saturación de recursos.'
  }
]

export default function App() {
  const [selectedKey, setSelectedKey] = useState('C')
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id)

  // Estados del minijuego
  const [quizIndex, setQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswer, setUserAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const activePillar = TRIAD_DATA[selectedKey]
  const currentScenario = SCENARIOS.find((item) => item.id === activeScenarioId)
  const currentQuestion = QUIZ_QUESTIONS[quizIndex]

  const handleQuizAnswer = (pillarCode) => {
    if (isAnswered) return
    setUserAnswer(pillarCode)
    setIsAnswered(true)

    if (pillarCode === currentQuestion.correctPillar) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (quizIndex + 1 < QUIZ_QUESTIONS.length) {
      setQuizIndex((prev) => prev + 1)
      setUserAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setQuizIndex(0)
    setScore(0)
    setUserAnswer(null)
    setIsAnswered(false)
    setQuizCompleted(false)
  }

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

      {/* MINIJUEGO: Desafío de Clasificación SOC */}
      <section
        style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.3rem' }}>🎮</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: '#f8fafc' }}>
                Minijuego: Desafío del Analista SOC
              </h2>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.84rem', color: '#94a3b8' }}>
                Evalúa el incidente y selecciona qué principio de la tríada fue vulnerado.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#131e32',
              border: '1px solid #38bdf840',
              color: '#38bdf8',
              fontWeight: '700',
              fontSize: '0.85rem'
            }}
          >
            Puntaje: {score} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        {!quizCompleted ? (
          <div
            style={{
              backgroundColor: '#131e32',
              border: '1px solid #22324e',
              borderRadius: '14px',
              padding: '20px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>
                Caso {quizIndex + 1} de {QUIZ_QUESTIONS.length}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: '700' }}>
                {currentQuestion.title}
              </span>
            </div>

            <p style={{ margin: '0 0 20px 0', fontSize: '0.98rem', color: '#f1f5f9', lineHeight: '1.55' }}>
              {currentQuestion.context}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '18px' }}>
              {[
                { code: 'C', name: 'Confidencialidad', color: '#38bdf8' },
                { code: 'I', name: 'Integridad', color: '#34d399' },
                { code: 'A', name: 'Disponibilidad', color: '#fbbf24' }
              ].map((opt) => {
                const isChosen = userAnswer === opt.code
                const isCorrect = opt.code === currentQuestion.correctPillar

                let btnBg = '#0f172a'
                let btnBorder = '#334155'
                let btnColor = '#cbd5e1'

                if (isAnswered) {
                  if (isCorrect) {
                    btnBg = 'rgba(52, 211, 153, 0.2)'
                    btnBorder = '#34d399'
                    btnColor = '#34d399'
                  } else if (isChosen) {
                    btnBg = 'rgba(239, 68, 68, 0.2)'
                    btnBorder = '#ef4444'
                    btnColor = '#ef4444'
                  }
                }

                return (
                  <button
                    key={opt.code}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleQuizAnswer(opt.code)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: `1.5px solid ${btnBorder}`,
                      backgroundColor: btnBg,
                      color: btnColor,
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      cursor: isAnswered ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        backgroundColor: opt.color,
                        color: '#090d16',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: '900'
                      }}
                    >
                      {opt.code}
                    </span>
                    {opt.name}
                  </button>
                )
              })}
            </div>

            {isAnswered && (
              <div
                style={{
                  backgroundColor: userAnswer === currentQuestion.correctPillar ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  borderLeft: `4px solid ${userAnswer === currentQuestion.correctPillar ? '#34d399' : '#ef4444'}`,
                  borderRadius: '0 8px 8px 0',
                  padding: '12px 16px',
                  marginBottom: '16px',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  color: '#e2e8f0'
                }}
              >
                <div style={{ fontWeight: '700', marginBottom: '4px', color: userAnswer === currentQuestion.correctPillar ? '#34d399' : '#f87171' }}>
                  {userAnswer === currentQuestion.correctPillar ? '✓ ¡Respuesta Correcta!' : '✗ Respuesta Incorrecta'}
                </div>
                {currentQuestion.explanation}
              </div>
            )}

            {isAnswered && (
              <button
                type="button"
                onClick={handleNextQuestion}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#38bdf8',
                  color: '#090d16',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
              >
                {quizIndex + 1 === QUIZ_QUESTIONS.length ? 'Ver Resultados Finales' : 'Siguiente Caso →'}
              </button>
            )}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#131e32',
              border: '1px solid #22324e',
              borderRadius: '14px',
              padding: '28px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
              {score >= 4 ? '🏆' : score >= 2 ? '⚡' : '📚'}
            </div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#f8fafc' }}>
              Entrenamiento Finalizado
            </h3>
            <p style={{ margin: '0 0 18px 0', color: '#94a3b8', fontSize: '0.95rem' }}>
              Acertaste <strong>{score} de {QUIZ_QUESTIONS.length}</strong> incidentes analizados.
              {score === QUIZ_QUESTIONS.length && ' ¡Clasificación impecable de la tríada CIA!'}
            </p>
            <button
              type="button"
              onClick={handleRestartQuiz}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                backgroundColor: '#38bdf8',
                color: '#090d16',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Reiniciar Simulador
            </button>
          </div>
        )}
      </section>

      {/* Simulador de Casos Prácticos */}
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
              Casos Reales con Solución Técnica
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
              Selecciona un escenario común para revisar los controles defensivos sugeridos.
            </p>
          </div>
        </div>

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

      {/* Propiedades complementarias */}
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