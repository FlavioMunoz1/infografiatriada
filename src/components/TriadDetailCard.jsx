const styles = {
  card: (pillar) => {
    const accentColor = pillar.color || '#38bdf8'
    return {
      borderRadius: '16px',
      border: `1px solid ${accentColor}40`,
      backgroundColor: '#0f172a', /* Azul noche oscuro en vez de blanco */
      padding: '28px',
      boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -8px ${accentColor}25`,
      marginBottom: '24px'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '22px'
  },
  badge: (pillar) => {
    const accentColor = pillar.color || '#38bdf8'
    return {
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      backgroundColor: accentColor,
      color: '#ffffff',
      fontWeight: 800,
      fontSize: '1.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: `0 0 16px ${accentColor}60`
    }
  },
  title: (pillar) => ({
    margin: '0 0 4px 0',
    fontSize: '1.6rem',
    fontWeight: 800,
    lineHeight: 1.2,
    color: pillar.color || '#38bdf8'
  }),
  tagline: {
    margin: 0,
    fontSize: '0.92rem',
    color: '#94a3b8',
    fontStyle: 'italic'
  },
  facts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '12px',
    margin: '0 0 24px 0'
  },
  fact: {
    backgroundColor: '#1e293b', /* Superficie interna elevada */
    border: '1px solid #334155',
    padding: '14px 18px',
    borderRadius: '12px'
  },
  factTerm: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    color: '#94a3b8'
  },
  factDesc: {
    margin: '6px 0 0 0',
    fontWeight: 600,
    color: '#f1f5f9',
    fontSize: '0.95rem',
    lineHeight: 1.45
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '75ch'
  },
  sectionBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  heading: (color = '#f8fafc') => ({
    fontSize: '0.94rem',
    fontWeight: 700,
    margin: 0,
    color
  }),
  text: {
    margin: 0,
    color: '#cbd5e1',
    lineHeight: 1.6,
    fontSize: '0.95rem'
  },
  incident: {
    margin: 0,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.25)',
    borderLeft: '4px solid #ef4444',
    padding: '12px 16px',
    borderRadius: '8px',
    color: '#fca5a5',
    fontSize: '0.92rem',
    lineHeight: 1.5
  }
}

export default function TriadDetailCard({ pillar }) {
  const accentColor = pillar.color || '#38bdf8'

  return (
    <article style={styles.card(pillar)}>
      <header style={styles.header}>
        <span style={styles.badge(pillar)} aria-hidden="true">
          {pillar.id || pillar.name.charAt(0)}
        </span>
        <div>
          <h2 style={styles.title(pillar)}>{pillar.name}</h2>
          <p style={styles.tagline}>“{pillar.tagline}”</p>
        </div>
      </header>

      <dl style={styles.facts}>
        <div style={styles.fact}>
          <dt style={styles.factTerm}>Metáfora cotidiana</dt>
          <dd style={styles.factDesc}>{pillar.analogy}</dd>
        </div>
        <div style={styles.fact}>
          <dt style={styles.factTerm}>Pregunta clave</dt>
          <dd style={{ ...styles.factDesc, color: accentColor }}>{pillar.question}</dd>
        </div>
      </dl>

      <div style={styles.body}>
        <div style={styles.sectionBlock}>
          <h3 style={styles.heading('#f8fafc')}>¿Qué significa en la práctica?</h3>
          <p style={styles.text}>{pillar.whatIs}</p>
        </div>

        <div style={styles.sectionBlock}>
          <h3 style={styles.heading('#f87171')}>¿Cuándo ocurre un fallo o incidente?</h3>
          <p style={styles.incident}>
            <strong style={{ color: '#ffffff' }}>Ejemplo concreto:</strong> {pillar.incident}
          </p>
        </div>

        <div style={styles.sectionBlock}>
          <h3 style={styles.heading('#4ade80')}>¿Cómo se protege habitualmente?</h3>
          <p style={styles.text}>{pillar.solution || pillar.realSolution}</p>
        </div>
      </div>
    </article>
  )
}