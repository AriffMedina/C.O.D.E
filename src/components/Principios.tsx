import { principios } from '../content/codigo'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

export function Principios() {
  return (
    <Seccion
      id="principios"
      numero="02"
      titulo="Principios éticos fundamentales"
      bajada="Siete principios. Cada uno enuncia un compromiso y, deliberadamente, lo que ese compromiso nos cuesta: un principio que no cuesta nada no es un principio, es una declaración de buenas intenciones."
      saltoPagina
    >
      <ol className="space-y-px">
        {principios.map((p, i) => (
          <Reveal key={p.numero} as="li" delay={i * 40} className="print-avoid-break">
            <article className="group grid gap-5 border-t border-rule py-9 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8">
              <div className="md:pt-1">
                <span className="font-display text-3xl leading-none text-rule-strong transition-colors duration-300 group-hover:text-accent">
                  {p.numero}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-tight font-normal text-ink">
                  {p.nombre}
                </h3>
                <p className="mt-2 font-display text-lg leading-snug text-accent italic">
                  {p.sintesis}
                </p>

                <div className="mt-4 space-y-3">
                  {p.desarrollo.map((d, j) => (
                    <p key={j} className="text-[1.02rem] leading-[1.78] text-ink-2">
                      {d}
                    </p>
                  ))}
                </div>

                <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-l-2 border-cost bg-cost-soft py-2 pr-3 pl-4 text-[0.95rem] text-ink-2">
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-cost uppercase">
                    Nos cuesta
                  </span>
                  <span>{p.costo}</span>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Seccion>
  )
}
