export default function RansomwareAlert() {
  return (
    <footer
      style={{
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        backgroundColor: '#fff7ed',
        border: '1px solid #fed7aa',
        borderRadius: '14px',
        padding: '18px 20px'
      }}
    >
      <div style={{ fontSize: '1.6rem', lineHeight: '1' }}>⚠️</div>
      <div>
        <h3 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: '700', color: '#9a3412' }}>
          ¿Qué ocurre cuando fallan los tres pilares a la vez?
        </h3>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#7c2d12', lineHeight: '1.45' }}>
          En ataques modernos como el <strong>Ransomware</strong>: los agresores primero exfiltran o leen los archivos 
          (quiebre de <strong>Confidencialidad</strong>), alteran o corrompen los datos durante el cifrado 
          (quiebre de <strong>Integridad</strong>), e inhabilitan el acceso al servicio pidiendo un rescate 
          (quiebre de <strong>Disponibilidad</strong>).
        </p>
      </div>
    </footer>
  )
}