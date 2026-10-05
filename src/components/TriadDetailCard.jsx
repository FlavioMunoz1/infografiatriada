export default function TriadDetailCard({ pillar }) {
  return (
    <section
      style={{
        borderRadius: '16px',
        border: `2px solid ${pillar.borderColor}`,
        backgroundColor: '#ffffff',
        padding: '28px',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
        marginBottom: '24px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: pillar.color,
            color: '#ffffff',
            fontWeight: '800',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {pillar.id}
        </div>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '800', color: pillar.color }}>
            {pillar.name}
          </h2>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#64748b', fontStyle: 'italic' }}>
            "{pillar.tagline}"
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '22px' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '12px 16px', borderRadius: '10px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: '#64748b' }}>
            Metáfora cotidiana
          </span>
          <p style={{ margin: '4px 0 0 0', fontWeight: '600', color: '#1e293b', fontSize: '0.94rem' }}>
            {pillar.analogy}
          </p>
        </div>
        <div style={{ backgroundColor: '#f1f5f9', padding: '12px 16px', borderRadius: '10px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700', color: '#64748b' }}>
            Pregunta clave
          </span>
          <p style={{ margin: '4px 0 0 0', fontWeight: '600', color: '#1e293b', fontSize: '0.94rem' }}>
            {pillar.question}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ fontSize: '0.98rem', fontWeight: '700', margin: '8px 0 2px 0', color: '#0f172a' }}>
          ¿Qué significa en la práctica?
        </h3>
        <p style={{ margin: 0, color: '#334155', lineHeight: '1.5', fontSize: '0.94rem' }}>
          {pillar.whatIs}
        </p>

        <h3 style={{ fontSize: '0.98rem', fontWeight: '700', margin: '12px 0 2px 0', color: '#dc2626' }}>
          ¿Cuándo ocurre un fallo o incidente?
        </h3>
        <div
          style={{
            backgroundColor: '#fef2f2',
            borderLeft: '4px solid #ef4444',
            padding: '10px 14px',
            borderRadius: '0 8px 8px 0',
            color: '#991b1b',
            fontSize: '0.92rem',
            lineHeight: '1.45'
          }}
        >
          <strong>Ejemplo concreto:</strong> {pillar.incident}
        </div>

        <h3 style={{ fontSize: '0.98rem', fontWeight: '700', margin: '12px 0 2px 0', color: '#16a34a' }}>
          ¿Cómo se protege habitualmente?
        </h3>
        <p style={{ margin: 0, color: '#334155', lineHeight: '1.5', fontSize: '0.94rem' }}>
          {pillar.solution}
        </p>
      </div>
    </section>
  )
}