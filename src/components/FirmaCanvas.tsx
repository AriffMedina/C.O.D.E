import { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  nombre: string
  /** Trazo guardado previamente, en dataURL. */
  valor: string | null
  onCambio: (dataUrl: string | null) => void
  bloqueado: boolean
}

/**
 * Lienzo de firma manuscrita. Usa Pointer Events para soportar mouse, dedo y
 * lápiz con el mismo código, y se redibuja desde el dataURL cuando cambia el
 * tamaño del contenedor para no perder el trazo al rotar el dispositivo.
 */
export function FirmaCanvas({ nombre, valor, onCambio, bloqueado }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dibujando = useRef(false)
  const hayTrazo = useRef(false)
  const [vacio, setVacio] = useState(!valor)

  const tinta = useCallback(() => {
    return getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#1a1917'
  }, [])

  const configurar = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    if (!rect.width) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)
    ctx.lineWidth = 1.8
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = tinta()

    if (valor) {
      const img = new Image()
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height)
      img.src = valor
      hayTrazo.current = true
    }
  }, [valor, tinta])

  useEffect(() => {
    configurar()
    const canvas = canvasRef.current
    if (!canvas) return
    const observer = new ResizeObserver(() => configurar())
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [configurar])

  const punto = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const iniciar = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (bloqueado) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    e.currentTarget.setPointerCapture(e.pointerId)
    dibujando.current = true
    ctx.strokeStyle = tinta()
    const { x, y } = punto(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const mover = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dibujando.current || bloqueado) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { x, y } = punto(e)
    ctx.lineTo(x, y)
    ctx.stroke()
    hayTrazo.current = true
    if (vacio) setVacio(false)
  }

  const terminar = () => {
    if (!dibujando.current) return
    dibujando.current = false
    const canvas = canvasRef.current
    if (canvas && hayTrazo.current) onCambio(canvas.toDataURL('image/png'))
  }

  const limpiar = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    hayTrazo.current = false
    setVacio(true)
    onCambio(null)
  }

  return (
    <div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          onPointerDown={iniciar}
          onPointerMove={mover}
          onPointerUp={terminar}
          onPointerLeave={terminar}
          onPointerCancel={terminar}
          aria-label={`Área de firma de ${nombre}`}
          className={`h-28 w-full touch-none rounded-sm border border-dashed transition-colors ${
            bloqueado
              ? 'border-transparent'
              : 'border-rule-strong hover:border-accent'
          }`}
        />
        {vacio && !bloqueado && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[0.85rem] text-ink-3 italic">
            Firma aquí
          </span>
        )}
      </div>

      <div className="mt-1.5 h-px w-full bg-rule-strong" />

      {!bloqueado && (
        <button
          type="button"
          onClick={limpiar}
          className="no-print mt-2 font-mono text-[0.68rem] tracking-wide text-ink-3 transition-colors hover:text-accent"
        >
          Limpiar
        </button>
      )}
    </div>
  )
}
