import { normas } from '../content/codigo'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

export function Normas() {
  const total = normas.reduce((suma, b) => suma + b.reglas.length, 0)

  return (
    <Seccion
      id="normas"
      numero="03"
      titulo="Normas de conducta profesional"
      bajada={`Los principios dicen en qué creemos; las normas dicen qué hacemos. Están redactadas en primera persona del plural y en presente, porque ${total} compromisos verificables valen más que una declaración elegante.`}
      saltoPagina
    >
      <div className="space-y-12">
        {normas.map((bloque, i) => (
          <Reveal key={bloque.id} delay={i * 40} className="print-avoid-break">
            <article>
              <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[0.75rem] text-accent">{bloque.clave}</span>
                <h3 className="font-display text-xl leading-snug font-normal text-ink">
                  {bloque.titulo}
                </h3>
              </header>

              <p className="mt-1.5 text-[0.95rem] text-ink-3 italic">{bloque.intro}</p>

              <ul className="mt-4 space-y-2.5">
                {bloque.reglas.map((regla, j) => (
                  <li
                    key={j}
                    className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-baseline text-[1.02rem] leading-[1.7] text-ink-2"
                  >
                    <span className="font-mono text-[0.7rem] text-rule-strong">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span>{regla}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Seccion>
  )
}
