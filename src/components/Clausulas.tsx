import { clausulas } from '../content/codigo'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

export function Clausulas() {
  return (
    <Seccion
      id="clausulas"
      numero="04"
      titulo="Cláusulas especiales"
      bajada="Compromisos específicos derivados del perfil técnico y del modelo operativo de C.O.D.E. No son adornos del documento: son las reglas que un código genérico no podría contener."
      saltoPagina
    >
      <div className="grid gap-5 md:grid-cols-2">
        {clausulas.map((c, i) => (
          <Reveal
            key={c.id}
            delay={i * 50}
            className={c.destacada ? 'md:col-span-2' : undefined}
          >
            <article
              className={`print-avoid-break h-full rounded-sm border p-6 transition-colors sm:p-7 ${
                c.destacada
                  ? 'border-accent bg-accent-soft'
                  : 'border-rule bg-paper-2 hover:border-rule-strong'
              }`}
            >
              {c.ambito && (
                <p className="font-mono text-[0.66rem] tracking-[0.16em] text-ink-3 uppercase">
                  {c.ambito}
                </p>
              )}

              <h3 className="mt-2 font-display text-xl leading-snug font-normal text-ink">
                {c.titulo}
              </h3>

              <div className="mt-3.5 space-y-3">
                {c.parrafos.map((p, j) => (
                  <p key={j} className="text-[1rem] leading-[1.75] text-ink-2">
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
