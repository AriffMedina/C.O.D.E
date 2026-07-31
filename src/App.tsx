import { Clausulas } from './components/Clausulas'
import { Compromiso } from './components/Compromiso'
import { Introduccion } from './components/Introduccion'
import { Nav } from './components/Nav'
import { Normas } from './components/Normas'
import { Portada } from './components/Portada'
import { Principios } from './components/Principios'
import { Trazabilidad } from './components/Trazabilidad'
import { meta } from './content/codigo'

export default function App() {
  return (
    <>
      <a
        href="#introduccion"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main>
        <Portada />
        <Introduccion />
        <Principios />
        <Normas />
        <Clausulas />
        <Trazabilidad />
        <Compromiso />
      </main>

      <footer className="no-print border-t border-rule px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-3">
            {meta.siglas} · {meta.version} · {meta.fecha}
          </p>
          <p className="text-[0.85rem] text-ink-3">
            {meta.institucion} — {meta.lugar}
          </p>
        </div>
      </footer>
    </>
  )
}
