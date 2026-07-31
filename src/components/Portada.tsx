import { integrantes, meta } from '../content/codigo'
import { Reveal } from './Reveal'

export function Portada() {
  return (
    <section
      id="portada"
      className="mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8"
    >
      <Reveal>
        <p className="font-mono text-[0.72rem] tracking-[0.24em] text-accent uppercase">
          Documento fundacional · {meta.version}
        </p>
      </Reveal>

      <Reveal delay={90}>
        <h1 className="mt-7 font-display text-[clamp(2.9rem,10vw,5.6rem)] leading-[0.95] font-normal tracking-[-0.02em] text-ink">
          Código de Ética
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-6 max-w-xl font-display text-xl leading-snug text-ink-2 italic sm:text-2xl">
          «{meta.epigrafe}»
        </p>
      </Reveal>

      <Reveal delay={230}>
        <div className="mt-10 h-px w-full bg-rule" />
      </Reveal>

      <Reveal delay={290}>
        <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          <Campo etiqueta="Comité">
            <span className="font-mono text-[0.95rem] tracking-[0.1em] text-ink">
              {meta.siglas}
            </span>
            <span className="mt-1 block text-[0.92rem] text-ink-2">{meta.subtitulo}</span>
          </Campo>

          <Campo etiqueta="Institución">
            {meta.institucion}
            <span className="mt-1 block text-[0.92rem] text-ink-3">{meta.carrera}</span>
          </Campo>

          <Campo etiqueta="Integrantes">
            <ul className="space-y-0.5">
              {integrantes.map((i) => (
                <li key={i.nombre}>{i.nombre}</li>
              ))}
            </ul>
          </Campo>

          <div className="space-y-7">
            <Campo etiqueta={meta.grupo ? 'Cuatrimestre y grupo' : 'Cuatrimestre'}>
              {meta.grupo ? `${meta.cuatrimestre} · Grupo ${meta.grupo}` : meta.cuatrimestre}
            </Campo>
            <Campo etiqueta="Docente">{meta.docente}</Campo>
            <Campo etiqueta="Fecha de entrega">
              <time dateTime={meta.fechaISO}>{meta.fecha}</time>
              <span className="mt-1 block text-[0.92rem] text-ink-3">{meta.lugar}</span>
            </Campo>
          </div>
        </div>
      </Reveal>

      <Reveal delay={360}>
        <div className="no-print mt-12 flex flex-wrap gap-3">
          <a
            href="#introduccion"
            className="rounded-sm bg-accent px-6 py-2.5 text-[0.92rem] text-paper transition-opacity hover:opacity-88"
          >
            Leer el código
          </a>
          <a
            href="#compromiso"
            className="rounded-sm border border-rule-strong px-6 py-2.5 text-[0.92rem] text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            Ir a las firmas
          </a>
        </div>
      </Reveal>
    </section>
  )
}

function Campo({ etiqueta, children }: { etiqueta: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] tracking-[0.18em] text-ink-3 uppercase">
        {etiqueta}
      </p>
      <div className="mt-1.5 text-[1rem] leading-relaxed text-ink">{children}</div>
    </div>
  )
}
