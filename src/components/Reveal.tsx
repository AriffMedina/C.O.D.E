import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Retraso en ms para escalonar elementos de una misma lista. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article' | 'tr'
}

/**
 * Aparición suave al entrar en viewport. Se hace con IntersectionObserver y
 * una clase CSS en lugar de una librería de animación: menos peso y respeta
 * `prefers-reduced-motion` desde la hoja de estilos.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.dataset.visible = 'true'
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Etiqueta = as as 'div'

  return (
    <Etiqueta
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Etiqueta>
  )
}
