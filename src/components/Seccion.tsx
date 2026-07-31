import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  id: string
  numero: string
  titulo: string
  bajada?: string
  children: ReactNode
  /** Fuerza salto de página al imprimir. */
  saltoPagina?: boolean
}

export function Seccion({ id, numero, titulo, bajada, children, saltoPagina }: Props) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-4xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 ${
        saltoPagina ? 'print-break-before' : ''
      }`}
    >
      <Reveal>
        <div className="flex items-baseline gap-4 border-b border-rule pb-5">
          <span className="font-mono text-[0.78rem] tracking-[0.16em] text-accent">
            {numero}
          </span>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,2.6rem)] leading-tight font-normal tracking-[-0.015em] text-ink">
            {titulo}
          </h2>
        </div>
        {bajada && (
          <p className="mt-5 max-w-2xl font-display text-lg leading-relaxed text-ink-2 italic">
            {bajada}
          </p>
        )}
      </Reveal>

      <div className="mt-10">{children}</div>
    </section>
  )
}
