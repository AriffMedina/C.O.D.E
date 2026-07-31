import { introduccion } from '../content/codigo'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

export function Introduccion() {
  return (
    <Seccion id="introduccion" numero="01" titulo="Introducción">
      <div className="space-y-14">
        {introduccion.bloques.map((bloque, i) => (
          <Reveal key={bloque.pregunta} delay={i * 60} className="print-avoid-break">
            <article className="grid gap-6 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-10">
              <h3 className="font-display text-xl leading-snug font-normal text-accent md:sticky md:top-24 md:self-start">
                {bloque.pregunta}
              </h3>

              <div className="space-y-4">
                {bloque.parrafos.map((p, j) => (
                  <p
                    key={j}
                    className={`text-[1.06rem] leading-[1.8] text-ink-2 ${
                      i === 0 && j === 0 ? 'dropcap' : ''
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Seccion>
  )
}
