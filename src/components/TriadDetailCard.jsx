const styles = {
  card: (pillar) => ({
    borderRadius: '16px',
    border: `2px solid ${pillar.borderColor ?? pillar.color}`,
    backgroundColor: '#ffffff',
    padding: 'clamp(18px, 4vw, 28px)',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
    marginBottom: '24px'
  }),
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px'
  },
  badge: (pillar) => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: pillar.color,
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  }),
  title: (pillar) => ({
    margin: '0 0 4px 0',
    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
    fontWeight: 800,
    lineHeight: 1.2,
    color: pillar.color
  }),
  tagline: {
    margin: 0,
    fontSize: '0.92rem',
    color: '#64748b',
    fontStyle: 'italic'
  },
  facts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '12px',
    margin: '0 0 22px 0'
  },
  fact: {
    backgroundColor: '#f1f5f9',
    padding: '12px 16px',
    borderRadius: '10px'
  },
  factTerm: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#475569'
  },
  factDesc: {
    margin: '4px 0 0 0',
    fontWeight: 600,
    color: '#1e293b',
    fontSize: '0.95rem',
    lineHeight: 1.45
  },
  body: {
    maxWidth: '72ch'
  },
  heading: (color = '#0f172a', first = false) => ({
    fontSize: '1rem',
    fontWeight: 700,
    margin: first ? '0 0 6px 0' : '20px 0 6px 0',
    color
  }),
  text: {
    margin: 0,
    color: '#334155',
    lineHeight: 1.6,
    fontSize: '0.95rem'
  },
  incident: {
    margin: 0,
    backgroundColor: '#fef2f2',
    borderLeft: '4px solid #ef4444',
    padding: '10px 14px',
    borderRadius: '0 8px 8px 0',
    color: '#991b1b',
    fontSize: '0.93rem',
    lineHeight: 1.5
  }
}

export default function TriadDetailCard({ pillar }) {
  return (
    <article style={styles.card(pillar)}>
      <header style={styles.header}>
        <span style={styles.badge(pillar)} aria-hidden="true">
          {pillar.id}
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
          <dd style={styles.factDesc}>{pillar.question}</dd>
        </div>
      </dl>

      <div style={styles.body}>
        <h3 style={styles.heading('#0f172a', true)}>¿Qué significa en la práctica?</h3>
        <p style={styles.text}>{pillar.whatIs}</p>

        <h3 style={styles.heading('#dc2626')}>¿Cuándo ocurre un fallo o incidente?</h3>
        <p style={styles.incident}>
          <strong>Ejemplo concreto:</strong> {pillar.incident}
        </p>

        <h3 style={styles.heading('#15803d')}>¿Cómo se protege habitualmente?</h3>
        <p style={styles.text}>{pillar.solution}</p>
      </div>
    </article>
  )
}