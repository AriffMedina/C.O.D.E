import { useState } from 'react'
import { trazabilidad } from '../content/codigo'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

/** A qué sección del documento apunta cada referencia. */
function destino(ref: string) {
  if (ref.startsWith('Principio')) return 'principios'
  if (ref.startsWith('Norma')) return 'normas'
  if (ref.startsWith('Cláusula')) return 'clausulas'
  return 'introduccion'
}

export function Trazabilidad() {
  const [abierta, setAbierta] = useState<string | null>(null)

  return (
    <Seccion
      id="trazabilidad"
      numero="05"
      titulo="Trazabilidad institucional"
      bajada="Este código no se escribió en abstracto. Cada principio y cada cláusula responde a algo que la Propuesta Institucional de C.O.D.E. ya había definido: sus ejes, su modelo de sostenibilidad y los riesgos que el propio comité identificó."
      saltoPagina
    >
      <p className="no-print mb-6 text-[0.9rem] text-ink-3">
        Selecciona un elemento para ver de dónde viene y a dónde llega.
      </p>

      <ul className="border-t border-rule">
        {trazabilidad.map((t, i) => {
          const activa = abierta === t.origen
          return (
            <Reveal key={t.origen} as="li" delay={i * 30} className="print-avoid-break">
              <div className="border-b border-rule">
                <button
                  type="button"
                  onClick={() => setAbierta(activa ? null : t.origen)}
                  aria-expanded={activa}
                  className="flex w-full items-baseline gap-4 py-4 text-left transition-colors hover:text-accent"
                >
                  <span className="font-mono text-[0.7rem] text-rule-strong">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[1.02rem] text-ink">{t.origen}</span>
                  <span
                    className={`no-print font-mono text-[0.85rem] text-ink-3 transition-transform duration-300 ${
                      activa ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-out print:grid-rows-[1fr] ${
                    activa ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-8 text-[0.98rem] leading-relaxed text-ink-2">
                      {t.detalle}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 pl-8">
                      {t.refs.map((ref) => (
                        <a
                          key={ref}
                          href={`#${destino(ref)}`}
                          className="rounded-sm border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-[0.72rem] text-accent transition-colors hover:border-accent"
                        >
                          {ref}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Seccion>
  )
}
