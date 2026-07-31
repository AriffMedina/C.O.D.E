/**
 * Contenido canónico del Código de Ética de C.O.D.E.
 * Todo el sitio se renderiza desde aquí. Para cambiar el texto, cambia esto.
 */

export const meta = {
  titulo: 'Código de Ética',
  subtitulo: 'Comité de Organización y Desempeño de Excelencia',
  siglas: 'C.O.D.E.',
  epigrafe: 'No qué podemos construir, sino qué debemos construir.',
  institucion: 'Tecnológico de Software',
  carrera: 'Desarrollo de Software y Negocios Digitales',
  semestre: '[semestre]',
  grupo: '[grupo]',
  docente: '[nombre del docente]',
  version: 'v1.0',
  fecha: '30 de julio de 2026',
  fechaISO: '2026-07-30',
  lugar: 'Mérida, Yucatán, México',
} as const

export type Integrante = {
  nombre: string
  rol: string
  perfil: string
}

export const integrantes: Integrante[] = [
  { nombre: 'Ariff Medina', rol: 'Núcleo Coordinador', perfil: 'Integrante fundador' },
  { nombre: 'Mateo Martín', rol: 'Núcleo Coordinador', perfil: 'Integrante fundador' },
  { nombre: 'Fernando Castro', rol: 'Núcleo Coordinador', perfil: 'Integrante fundador' },
  { nombre: 'Joaquin Uriona', rol: 'Núcleo Coordinador', perfil: 'Backend e infraestructura' },
]

export type Seccion = { id: string; titulo: string; nav: string }

export const secciones: Seccion[] = [
  { id: 'introduccion', titulo: 'Introducción', nav: 'Introducción' },
  { id: 'principios', titulo: 'Principios éticos fundamentales', nav: 'Principios' },
  { id: 'normas', titulo: 'Normas de conducta profesional', nav: 'Normas' },
  { id: 'clausulas', titulo: 'Cláusulas especiales', nav: 'Cláusulas' },
  { id: 'trazabilidad', titulo: 'Trazabilidad institucional', nav: 'Trazabilidad' },
  { id: 'compromiso', titulo: 'Compromiso final', nav: 'Firmar' },
]

/* ── Introducción ──────────────────────────────────────────────────── */

export const introduccion = {
  bloques: [
    {
      pregunta: '¿Qué implica un código de ética?',
      parrafos: [
        'Un código de ética no es un reglamento ni una lista de prohibiciones. Es la respuesta escrita a una pregunta que la técnica por sí sola no puede contestar: no qué podemos construir, sino qué debemos construir.',
        'Escribir software es ejercer poder. Quien diseña un sistema decide quién queda dentro y quién queda fuera, qué datos se guardan y por cuánto tiempo, qué error es tolerable y cuál es inaceptable. Ese poder se ejerce todos los días, casi siempre sin supervisión y casi siempre bajo presión de tiempo.',
        'Un código de ética es el conjunto de decisiones que tomamos antes de estar bajo esa presión, para no tener que improvisarlas cuando llegue.',
      ],
    },
    {
      pregunta: '¿Por qué es importante tenerlo como profesional?',
      parrafos: [
        'Porque en tecnología las consecuencias de una decisión rara vez son visibles en el momento en que se toma. Una consulta sin cifrar, un sesgo no revisado en un modelo, una funcionalidad prometida que no se puede sostener: nada de eso truena el día que se escribe. Truena meses después, y para entonces afecta a personas que nunca supieron que existíamos.',
        'Como integrantes de C.O.D.E. la responsabilidad es doble. No solo desarrollamos: competimos representando al Tecnológico de Software, recibimos mentorías de profesionales de la industria y formamos a las generaciones que vienen detrás. Cada una de esas tres cosas es una relación de confianza que se construye lento y se rompe rápido.',
      ],
    },
    {
      pregunta: '¿Cuál es la finalidad de este código?',
      parrafos: [
        'Este documento es el marco ético del comité. Establece los principios que rigen nuestra conducta en competencias, en mentorías, en las comunidades especializadas y en el trabajo técnico cotidiano.',
        'Nace además de una necesidad concreta: la Propuesta Institucional de C.O.D.E. define, en su Modelo de Sostenibilidad, la obligación de documentar los procesos y criterios del comité para que trascienda a la generación fundadora. Este código es la primera pieza de esa documentación: la que define no cómo operamos, sino bajo qué condiciones aceptamos operar.',
        'No pretende ser definitivo. Pretende ser honesto, verificable y heredable.',
      ],
    },
  ],
}

/* ── Principios ────────────────────────────────────────────────────── */

export type Principio = {
  numero: string
  n: number
  nombre: string
  sintesis: string
  desarrollo: string[]
  costo: string
}

export const principios: Principio[] = [
  {
    numero: 'I',
    n: 1,
    nombre: 'Integridad competitiva',
    sintesis: 'Competimos con trabajo propio.',
    desarrollo: [
      'En hackatones, game jams, CTFs y certámenes de innovación respetamos las bases: los tiempos de inicio, los límites de código preexistente, la composición declarada del equipo y la autoría real de lo que entregamos.',
      'Aceptamos perder un certamen antes que ganarlo con una entrega que no podríamos defender frente al jurado línea por línea.',
    ],
    costo: 'Renunciar a ventajas que otros equipos podrían tomar.',
  },
  {
    numero: 'II',
    n: 2,
    nombre: 'Autoría honesta en la era de la IA',
    sintesis: 'No entregamos código que no podamos explicar.',
    desarrollo: [
      'Usamos inteligencia artificial como herramienta de aprendizaje y productividad, nunca como sustituto del entendimiento. Declaramos su uso cuando las bases de una competencia o un docente lo exigen.',
      'La responsabilidad final sobre lo que entregamos es nuestra, sin importar qué herramienta lo haya escrito.',
    ],
    costo: 'Ir más lento: entender una solución generada toma más tiempo que pegarla.',
  },
  {
    numero: 'III',
    n: 3,
    nombre: 'Responsabilidad sobre el impacto',
    sintesis: 'El software que construimos afecta personas reales.',
    desarrollo: [
      'Asumimos las consecuencias del software que construimos, incluidas las que no anticipamos. Un prototipo de hackatón que maneja datos reales es software real.',
      'Consideramos seguridad, accesibilidad y sesgos desde el diseño, no como una capa que se agrega si sobra tiempo.',
    ],
    costo: 'Admitir públicamente cuando un sistema nuestro falló, en lugar de corregirlo en silencio.',
  },
  {
    numero: 'IV',
    n: 4,
    nombre: 'Confidencialidad y respeto a los datos',
    sintesis: 'Los datos personales son un derecho, no un recurso del proyecto.',
    desarrollo: [
      'No recolectamos datos que no necesitamos, no almacenamos sin consentimiento explícito ni sin controles criptográficos, y no conservamos indefinidamente lo que fue recolectado para un fin puntual.',
      'Esto aplica también hacia adentro: lo que un mentor, una empresa aliada o un compañero comparte con el comité en confianza, no sale del comité.',
    ],
    costo: 'Perder funcionalidades atractivas que dependen de datos que no nos corresponde pedir.',
  },
  {
    numero: 'V',
    n: 5,
    nombre: 'Conocimiento que se comparte',
    sintesis: 'El conocimiento no se acumula, se transmite.',
    desarrollo: [
      'Ningún integrante concentra un saber crítico para el comité sin documentarlo ni enseñarlo. Cada generación forma explícitamente a la siguiente antes de egresar.',
      'Esto convierte la mentoría en una obligación ética, no en un favor: recibimos formación de la industria bajo el compromiso implícito de devolverla hacia abajo.',
    ],
    costo: 'El tiempo de enseñar, y renunciar a ser indispensables.',
  },
  {
    numero: 'VI',
    n: 6,
    nombre: 'Respeto e inclusión técnica',
    sintesis: 'Criticamos el código, nunca a la persona.',
    desarrollo: [
      'En revisiones, pull requests, retroalimentación post-competencia y sesiones internas, las observaciones se dirigen a la estructura técnica o a la lógica, jamás al individuo.',
      'Rechazamos la discriminación, el acoso y el elitismo técnico. La pregunta de quien está empezando tiene el mismo derecho a una respuesta seria que la de quien lleva años. Un comité que humilla a quien no sabe deja de recibir preguntas, y un comité sin preguntas deja de aprender.',
    ],
    costo: 'Paciencia, y corregir a un compañero con talento cuando trata mal a alguien.',
  },
  {
    numero: 'VII',
    n: 7,
    nombre: 'Excelencia sostenible',
    sintesis: 'Alto rendimiento sin quemar a quien lo produce.',
    desarrollo: [
      'Bajo el modelo dual del Tecnológico de Software, el tiempo de cada integrante es limitado y esa limitación es un dato de diseño, no un obstáculo a vencer.',
      'Nadie en C.O.D.E. está obligado a elegir entre el comité y su bienestar, su familia o sus materias. La excelencia que quema a quien la produce no es excelencia: es una deuda que alguien más va a pagar.',
    ],
    costo: 'Decir que no a competencias que sí queríamos.',
  },
]

/* ── Normas ────────────────────────────────────────────────────────── */

export type BloqueNormas = {
  id: string
  clave: string
  titulo: string
  intro: string
  reglas: string[]
}

export const normas: BloqueNormas[] = [
  {
    id: 'competencias',
    clave: '3.1',
    titulo: 'Conducta en competencias',
    intro: 'Hackatones, game jams, CTFs y certámenes de innovación.',
    reglas: [
      'Leemos y respetamos las bases completas de cada certamen antes de inscribirnos.',
      'No iniciamos desarrollo antes del banderazo oficial ni reutilizamos código propio preexistente cuando las bases lo prohíben.',
      'Declaramos con exactitud la composición del equipo. No inscribimos integrantes que no participan ni ocultamos a quienes sí.',
      'Damos crédito explícito a librerías, plantillas, assets y trabajos de terceros que utilicemos, respetando sus licencias.',
      'No saboteamos, obstruimos ni desprestigiamos a equipos rivales. Reconocemos públicamente las victorias ajenas.',
      'Al perder, hacemos retroalimentación técnica documentada en lugar de buscar culpables.',
    ],
  },
  {
    id: 'informacion',
    clave: '3.2',
    titulo: 'Conducta con la información y la tecnología',
    intro: 'Aplica a todo sistema que toquemos, incluidos los prototipos.',
    reglas: [
      'Aplicamos buenas prácticas de seguridad en servidores, APIs y bases de datos, incluso en prototipos de corta vida.',
      'No recolectamos información personal sin consentimiento explícito ni la almacenamos sin los controles criptográficos correspondientes.',
      'No desarrollamos lógica cuyo objetivo sea manipular, engañar, forzar acciones no deseadas o comprometer la privacidad o las finanzas de las personas.',
      'Reportamos de inmediato al Núcleo Coordinador cualquier vulnerabilidad o fuga que detectemos en un sistema del comité.',
      'Eliminamos los datos de prueba con información real al terminar cada proyecto o competencia.',
    ],
  },
  {
    id: 'ia',
    clave: '3.3',
    titulo: 'Uso ético de la inteligencia artificial',
    intro: 'La herramienta cambia; la responsabilidad sigue siendo nuestra.',
    reglas: [
      'Declaramos el uso de IA cuando las bases de una competencia, un cliente o un docente lo exigen.',
      'No entregamos código, texto ni diseño generado por IA que no podamos explicar y defender.',
      'Verificamos las salidas de IA antes de integrarlas: alucinaciones, licencias incompatibles y vulnerabilidades introducidas son nuestra responsabilidad, no de la herramienta.',
      'No usamos IA para suplantar personas, fabricar evidencia, generar contenido engañoso ni automatizar acoso.',
      'No cargamos datos personales, credenciales ni información confidencial de mentores o empresas aliadas en servicios de IA de terceros.',
      'En trabajos académicos respetamos íntegramente los criterios de la institución sobre uso de IA.',
    ],
  },
  {
    id: 'colegas',
    clave: '3.4',
    titulo: 'Conducta con colegas y dentro del comité',
    intro: 'El comité se sostiene sobre cómo nos tratamos, no sobre cuánto sabemos.',
    reglas: [
      'Dirigimos las observaciones técnicas al código y nunca a la persona.',
      'Documentamos lo que construimos pensando en quien lo va a mantener sin poder preguntarnos.',
      'Cumplimos los compromisos adquiridos con el equipo; si no podemos, lo avisamos a tiempo en lugar de desaparecer.',
      'Compartimos oportunidades —convocatorias, becas, vacantes, contactos— en lugar de reservarlas.',
      'Reconocemos la autoría de las ideas ajenas, incluidas las de integrantes de menor antigüedad.',
      'Escalamos los conflictos al Núcleo Coordinador antes de que se conviertan en rupturas.',
    ],
  },
  {
    id: 'mentores',
    clave: '3.5',
    titulo: 'Conducta con mentores, empresas e instituciones',
    intro: 'Vinculación nos abre puertas; nosotros decidimos cómo entramos.',
    reglas: [
      'Llegamos preparados a las mentorías quincenales; el tiempo de un mentor es una donación, no un servicio contratado.',
      'No prometemos entregables, arquitecturas ni niveles de seguridad que no podamos cumplir en tiempo y forma.',
      'No usamos el nombre del Tecnológico de Software ni el de C.O.D.E. para gestiones personales sin autorización del comité y de la Dirección de Vinculación.',
      'Respetamos la confidencialidad de la información técnica o comercial que una empresa aliada comparta con nosotros.',
      'Agradecemos y damos seguimiento: informamos a nuestros mentores en qué se tradujo su acompañamiento.',
    ],
  },
  {
    id: 'ley',
    clave: '3.6',
    titulo: 'Conducta ante la ley y la propiedad intelectual',
    intro: 'Lo técnicamente posible no siempre es legalmente admisible.',
    reglas: [
      'Respetamos las licencias de software libre y de código abierto, incluidas sus obligaciones de atribución y de apertura.',
      'Rechazamos el plagio en cualquier forma: académico, de código, de diseño o de idea.',
      'Cumplimos la legislación mexicana aplicable en materia de protección de datos personales y propiedad intelectual.',
      'No participamos en proyectos cuyo fin sea ilícito, aunque sean técnicamente atractivos o bien remunerados.',
    ],
  },
  {
    id: 'personal',
    clave: '3.7',
    titulo: 'Conducta personal y académica',
    intro: 'El comité existe sobre la formación, no en su lugar.',
    reglas: [
      'El comité no es un pretexto para descuidar las materias: la formación académica es la base sobre la que C.O.D.E. existe.',
      'Cuidamos nuestros límites y los de los demás; señalamos cuando un ritmo de trabajo se vuelve insostenible.',
      'Sostenemos la formación continua como obligación, no como mérito.',
      'Representamos al comité con la misma conducta dentro y fuera de la institución, incluyendo redes sociales y espacios digitales.',
    ],
  },
]

/* ── Cláusulas ─────────────────────────────────────────────────────── */

export type Clausula = {
  id: string
  titulo: string
  ambito?: string
  parrafos: string[]
  destacada?: boolean
}

export const clausulas: Clausula[] = [
  {
    id: 'hacking-etico',
    titulo: 'Cláusula de hacking ético',
    ambito: 'CTFs y futura célula de Ciberseguridad',
    destacada: true,
    parrafos: [
      'Todo conocimiento ofensivo adquirido por integrantes de C.O.D.E. —análisis de vulnerabilidades, explotación, ingeniería inversa, técnicas de intrusión— se ejerce exclusivamente en entornos de práctica autorizados, laboratorios controlados, competencias formales o sistemas sobre los que se cuente con permiso explícito y por escrito.',
      'Aplicarlo fuera de ese ámbito constituye una falta grave a este código, con independencia de la intención, del resultado o de si hubo daño. La curiosidad técnica nunca es justificación suficiente.',
    ],
  },
  {
    id: 'relevo',
    titulo: 'Cláusula de relevo generacional',
    ambito: 'Modelo de Sostenibilidad',
    parrafos: [
      'Ningún integrante se retira del comité dejando un vacío operativo. Antes de egresar o separarse, cada integrante con responsabilidades documenta sus procesos, entrega accesos y credenciales al Núcleo Coordinador y acompaña a su relevo durante al menos un ciclo de actividades.',
      'El liderazgo en C.O.D.E. se mide por lo que sobrevive a quien lo ejerció.',
    ],
  },
  {
    id: 'arquitectura',
    titulo: 'Cláusula de arquitectura limpia y mantenibilidad',
    ambito: 'Trabajo técnico',
    parrafos: [
      'Escribimos código modular, legible y escalable pensando en los desarrolladores del futuro —que con frecuencia seremos nosotros mismos sin memoria del contexto—.',
      'Aplicamos buenas prácticas y patrones sólidos incluso en proyectos de corta vida, porque la deuda técnica de un prototipo termina heredándose a la siguiente generación del comité.',
    ],
  },
  {
    id: 'actualizacion',
    titulo: 'Cláusula de actualización continua',
    ambito: 'Desarrollo del talento',
    parrafos: [
      'Dado que el entorno tecnológico cambia con rapidez, asumimos la obligación ética de mantenernos preparados —nuevos lenguajes, frameworks, entornos y prácticas de seguridad— para no entregar sistemas obsoletos o vulnerables.',
      'La desactualización deliberada, en un comité que se define por la excelencia, es una forma de negligencia.',
    ],
  },
  {
    id: 'representacion',
    titulo: 'Cláusula de representación institucional',
    ambito: 'Competencias y vocería',
    parrafos: [
      'Cuando competimos, publicamos o hablamos como C.O.D.E., no hablamos a título personal: llevamos el nombre del Tecnológico de Software.',
      'Esa representación obliga a un estándar de conducta más alto, no a uno más flexible, y se sostiene también cuando nadie del comité está mirando.',
    ],
  },
  {
    id: 'revision',
    titulo: 'Cláusula de revisión',
    ambito: 'Vigencia del documento',
    parrafos: [
      'Este código es un documento vivo. El Núcleo Coordinador lo revisa al cierre de cada ciclo competitivo, incorporando las lecciones aprendidas.',
      'Toda modificación queda registrada con fecha y justificación, y ninguna reforma puede reducir el nivel de exigencia ética alcanzado por las generaciones anteriores.',
    ],
  },
]

/* ── Trazabilidad con la Propuesta Institucional ───────────────────── */

export type Trazo = {
  origen: string
  detalle: string
  refs: string[]
}

export const trazabilidad: Trazo[] = [
  {
    origen: 'Modelo de Sostenibilidad',
    detalle: 'Documentación de procesos y formación de relevos entre generaciones.',
    refs: ['Principio V', 'Cláusula de relevo generacional'],
  },
  {
    origen: 'Eje Competencias',
    detalle: 'Hackatones, game jams, innovation challenges y CTFs.',
    refs: ['Principio I', 'Norma 3.1', 'Cláusula de hacking ético'],
  },
  {
    origen: 'Eje Desarrollo del Talento',
    detalle: 'Mentorías quincenales con expertos de la industria.',
    refs: ['Principio V', 'Norma 3.5'],
  },
  {
    origen: 'Eje Comunidades',
    detalle: 'Células especializadas: IA, ciberseguridad, cloud, data science, videojuegos.',
    refs: ['Principio VI', 'Cláusula de hacking ético'],
  },
  {
    origen: 'Modelo dual',
    detalle: 'El tiempo del estudiante es limitado por diseño institucional.',
    refs: ['Principio VII', 'Norma 3.7'],
  },
  {
    origen: 'Riesgo: sobrecarga y deserción',
    detalle: 'Identificado en la matriz de riesgos de la propuesta.',
    refs: ['Principio VII'],
  },
  {
    origen: 'Relación con Dirección de Vinculación',
    detalle: 'Enlace institucional con mentores y empresas aliadas.',
    refs: ['Norma 3.5', 'Cláusula de representación institucional'],
  },
]

/* ── Compromiso final ──────────────────────────────────────────────── */

export const compromiso = {
  parrafos: [
    'Nosotros, integrantes fundadores de C.O.D.E. — Comité de Organización y Desempeño de Excelencia del Tecnológico de Software, nos comprometemos a cumplir con los principios, normas y cláusulas establecidos en este Código de Ética, tanto en nuestra formación académica como en el ejercicio profesional que le siga.',
    'Reconocemos que la excelencia técnica sin ética no es excelencia, sino riesgo; y que el valor de este documento no está en haberlo firmado, sino en sostenerlo el día en que cumplirlo nos cueste algo.',
    'Asumimos además la responsabilidad de heredarlo: de que quien entre a C.O.D.E. después de nosotros lo reciba, lo entienda y lo mejore.',
  ],
  cierre: `Firmado en ${meta.lugar}, a ${meta.fecha}.`,
}
