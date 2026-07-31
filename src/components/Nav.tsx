import { useEffect, useState } from 'react'
import { meta, secciones } from '../content/codigo'
import { useActiveSection, useReadingProgress } from '../hooks/useScrollUI'

const ids = secciones.map((s) => s.id)

export function Nav() {
  const progreso = useReadingProgress()
  const activa = useActiveSection(ids)
  const [oscuro, setOscuro] = useState(false)
  const [listo, setListo] = useState(false)
  const [compacta, setCompacta] = useState(false)

  // El tema ya lo fijó el script en index.html; aquí solo lo leemos para que
  // el botón arranque sincronizado y no invierta el estado en el primer clic.
  useEffect(() => {
    setOscuro(document.documentElement.dataset.theme === 'dark')
    setListo(true)
  }, [])

  useEffect(() => {
    if (!listo) return
    document.documentElement.dataset.theme = oscuro ? 'dark' : 'light'
    try {
      localStorage.setItem('code-tema', oscuro ? 'dark' : 'light')
    } catch {
      // Modo privado: el tema funciona igual, solo no se recuerda.
    }
  }, [oscuro, listo])

  useEffect(() => {
    const alScroll = () => setCompacta(window.scrollY > 120)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b border-rule bg-paper/85 backdrop-blur-md transition-all duration-300 ${
          compacta ? 'py-2' : 'py-3.5'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 sm:px-8">
          <a
            href="#portada"
            className="font-mono text-[0.8rem] tracking-[0.18em] text-ink transition-colors hover:text-accent"
          >
            {meta.siglas}
          </a>

          <span className="hidden h-4 w-px bg-rule-strong sm:block" />

          <ul className="hidden flex-1 items-center gap-1 md:flex">
            {secciones.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={activa === s.id ? 'true' : undefined}
                  className={`rounded px-2.5 py-1 text-[0.82rem] transition-colors ${
                    activa === s.id
                      ? 'text-accent'
                      : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {s.nav}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1.5 md:ml-0">
            <button
              type="button"
              onClick={() => window.print()}
              title="Exportar el código como PDF"
              className="rounded border border-rule-strong px-2.5 py-1 font-mono text-[0.72rem] tracking-wide text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              PDF
            </button>
            <button
              type="button"
              onClick={() => setOscuro((v) => !v)}
              aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="rounded border border-rule-strong px-2.5 py-1 font-mono text-[0.72rem] text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              {oscuro ? 'Claro' : 'Oscuro'}
            </button>
          </div>
        </div>
      </nav>

      <div
        role="progressbar"
        aria-label="Progreso de lectura"
        aria-valuenow={Math.round(progreso * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-[2px] origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progreso})` }}
      />
    </header>
  )
}
