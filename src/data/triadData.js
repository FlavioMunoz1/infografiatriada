export const TRIAD_DATA = {
  C: {
    id: 'C',
    name: 'Confidencialidad',
    tagline: 'Solo quien debe verla, la ve.',
    analogy: 'Una carta dentro de un sobre lacrado y sellado.',
    color: '#2563eb',
    bgLight: '#eff6ff',
    borderColor: '#93c5fd',
    question: '¿Quién puede acceder a los datos?',
    whatIs: 'Garantiza que los datos solo sean accesibles o visibles por las personas o sistemas debidamente autorizados.',
    incident: 'Alguien no autorizado lee o accede a datos que no le corresponden (por ejemplo, fuga de fichas sociales privadas de clientes).',
    solution: 'Controles de acceso estrictos, autenticación multifactor (MFA), roles por usuario y cifrado de extremo a extremo.'
  },
  I: {
    id: 'I',
    name: 'Integridad',
    tagline: 'Los datos son exactos, completos y sin alteraciones.',
    analogy: 'Un cheque bancario sin borrones, tachones ni montos modificados.',
    color: '#059669',
    bgLight: '#ecfdf5',
    borderColor: '#a7f3d0',
    question: '¿La información sigue siendo auténtica y original?',
    whatIs: 'Asegura que los datos se mantengan exactos, auténticos y completos, sin alteraciones no autorizadas ni corrupción accidental.',
    incident: 'Se borran o corrompen registros de transacciones (por ejemplo, pérdida de horas de operaciones o manipulación de saldos).',
    solution: 'Firmas digitales, sumas de verificación (hashes), pistas de auditoría (logs) y bloqueos contra modificaciones no autorizadas.'
  },
  A: {
    id: 'A',
    name: 'Disponibilidad (Availability)',
    tagline: 'Disponible y funcionando cuando realmente se necesita.',
    analogy: 'La puerta principal del local abierta en horario de atención comercial.',
    color: '#d97706',
    bgLight: '#fffbeb',
    borderColor: '#fde68a',
    question: '¿Pueden las personas autorizadas utilizar el servicio ahora?',
    whatIs: 'Garantiza que los sistemas, redes y datos permanezcan accesibles y utilizables en el momento oportuno.',
    incident: 'Caídas del sistema, cortes eléctricos prolongados sin respaldo o fallas de conectividad que impiden atender al público.',
    solution: 'Equipos redundantes (UPS, enlaces de respaldo), copias de seguridad periódicas y planes de continuidad de negocio.'
  }
}