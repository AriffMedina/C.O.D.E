import { useEffect, useState } from 'react'
import { compromiso, integrantes, meta } from '../content/codigo'
import { FirmaCanvas } from './FirmaCanvas'
import { Reveal } from './Reveal'
import { Seccion } from './Seccion'

type Registro = { trazo: string | null; sellada: string | null }
type Estado = Record<string, Registro>

const CLAVE = 'code-firmas-v1'
const vacio: Registro = { trazo: null, sellada: null }

export function Compromiso() {
  const [firmas, setFirmas] = useState<Estado>({})
  const [cargado, setCargado] = useState(false)

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(CLAVE)
      if (guardado) setFirmas(JSON.parse(guardado) as Estado)
    } catch {
      // Un localStorage corrupto o bloqueado no debe tumbar la página.
    }
    setCargado(true)
  }, [])

  useEffect(() => {
    if (!cargado) return
    try {
      localStorage.setItem(CLAVE, JSON.stringify(firmas))
    } catch {
      // Modo privado: la firma sigue funcionando en pantalla, solo no persiste.
    }
  }, [firmas, cargado])

  const registro = (nombre: string) => firmas[nombre] ?? vacio

  const actualizar = (nombre: string, cambio: Partial<Registro>) =>
    setFirmas((prev) => ({ ...prev, [nombre]: { ...(prev[nombre] ?? vacio), ...cambio } }))

  const selladas = integrantes.filter((i) => registro(i.nombre).sellada).length

  return (
    <Seccion
      id="compromiso"
      numero="06"
      titulo="Compromiso final"
      saltoPagina
    >
      <Reveal>
        <div className="space-y-4 border-l-2 border-accent pl-6">
          {compromiso.parrafos.map((p, i) => (
            <p
              key={i}
              className={`leading-[1.8] text-ink ${
                i === 0 ? 'font-display text-lg sm:text-xl' : 'text-[1.04rem] text-ink-2'
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-8 font-mono text-[0.76rem] tracking-[0.12em] text-ink-3">
          {compromiso.cierre}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-12 flex items-baseline justify-between border-b border-rule pb-3">
          <h3 className="font-display text-xl font-normal text-ink">Firmas</h3>
          <span className="font-mono text-[0.72rem] text-ink-3">
            {selladas} de {integrantes.length} selladas
          </span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {integrantes.map((integrante, i) => {
          const r = registro(integrante.nombre)
          const bloqueado = Boolean(r.sellada)

          return (
            <Reveal key={integrante.nombre} delay={i * 60} className="print-avoid-break">
              <article className="flex h-full flex-col rounded-sm border border-rule bg-paper-2 p-5">
                <FirmaCanvas
                  nombre={integrante.nombre}
                  valor={r.trazo}
                  bloqueado={bloqueado}
                  onCambio={(trazo) => actualizar(integrante.nombre, { trazo })}
                />

                <div className="mt-3 flex-1">
                  <p className="text-[1rem] text-ink">{integrante.nombre}</p>
                  <p className="text-[0.86rem] text-ink-3">{integrante.rol}</p>
                  <p className="text-[0.86rem] text-ink-3 italic">{integrante.perfil}</p>
                </div>

                {bloqueado ? (
                  <p className="mt-4 flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.1em] text-accent uppercase">
                    <span aria-hidden="true">✓</span>
                    Sellada el {r.sellada}
                  </p>
                ) : (
                  <button
                    type="button"
                    disabled={!r.trazo}
                    onClick={() =>
                      actualizar(integrante.nombre, {
                        sellada: new Date().toLocaleDateString('es-MX', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        }),
                      })
                    }
                    className="no-print mt-4 rounded-sm border border-rule-strong px-4 py-1.5 font-mono text-[0.7rem] tracking-wide text-ink-2 transition-colors enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-40"
                  >
                    Sellar firma
                  </button>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>

      <p className="no-print mt-6 text-[0.85rem] leading-relaxed text-ink-3">
        Las firmas se guardan en este navegador. Cada integrante firma desde su propio
        equipo y exporta el PDF con su firma sellada; para la entrega conjunta, firmen
        desde el mismo dispositivo antes de generar el documento.
      </p>

      <Reveal delay={120}>
        <div className="mt-14 border-t border-rule pt-8 text-center">
          <p className="font-mono text-[0.68rem] tracking-[0.2em] text-ink-3 uppercase">
            {meta.siglas} · {meta.institucion}
          </p>
          <p className="mt-2 font-display text-lg text-ink-2 italic">{meta.epigrafe}</p>
        </div>
      </Reveal>
    </Seccion>
  )
}
