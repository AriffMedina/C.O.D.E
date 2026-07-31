import { useEffect, useState } from 'react'

/** Progreso de lectura del documento, de 0 a 1. */
export function useReadingProgress() {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    let frame = 0
    const medir = () => {
      frame = 0
      const alcance = document.documentElement.scrollHeight - window.innerHeight
      setProgreso(alcance > 0 ? Math.min(1, window.scrollY / alcance) : 0)
    }
    const alScroll = () => {
      if (!frame) frame = requestAnimationFrame(medir)
    }
    medir()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
    }
  }, [])

  return progreso
}

/**
 * Sección visible actualmente. Elegimos la última sección cuyo inicio ya
 * cruzó el punto de lectura (35% del viewport), que es más estable que
 * quedarse con la de mayor intersección cuando hay secciones muy largas.
 */
export function useActiveSection(ids: string[]) {
  const [activa, setActiva] = useState(ids[0] ?? '')

  useEffect(() => {
    let frame = 0
    const medir = () => {
      frame = 0
      const linea = window.innerHeight * 0.35
      let actual = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= linea) actual = id
      }
      setActiva(actual)
    }
    const alScroll = () => {
      if (!frame) frame = requestAnimationFrame(medir)
    }
    medir()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
    }
  }, [ids])

  return activa
}
