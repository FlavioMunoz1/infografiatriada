const styles = {
  container: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
    backgroundColor: '#fff7ed',
    border: '1px solid #fed7aa',
    borderRadius: '14px',
    padding: '18px 20px'
  },
  icon: {
    fontSize: '1.6rem',
    lineHeight: 1
  },
  title: {
    margin: '0 0 6px 0',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#9a3412'
  },
  text: {
    margin: 0,
    maxWidth: '72ch',
    fontSize: '0.92rem',
    lineHeight: 1.55,
    color: '#7c2d12'
  }
}

export default function RansomwareAlert() {
  return (
    <aside style={styles.container} aria-labelledby="ransom-alert-title">
      <span style={styles.icon} aria-hidden="true">
        ⚠️
      </span>
      <div>
        <h2 id="ransom-alert-title" style={styles.title}>
          ¿Qué ocurre cuando fallan los tres pilares a la vez?
        </h2>
        <p style={styles.text}>
          En ataques modernos como el <strong>ransomware</strong>, los agresores primero
          exfiltran o leen los archivos (quiebre de <strong>confidencialidad</strong>), luego
          alteran o corrompen los datos durante el cifrado (quiebre de{' '}
          <strong>integridad</strong>) y por último bloquean el acceso al servicio mientras
          piden un rescate (quiebre de <strong>disponibilidad</strong>).
        </p>
      </div>
    </aside>
  )
}