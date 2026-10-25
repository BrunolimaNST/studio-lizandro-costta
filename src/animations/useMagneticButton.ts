import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsapConfig'
import { MOTION } from './constants'

interface MagneticOptions {
  strength?: number
  innerStrength?: number
}

/**
 * Hook para efeito magnético em botões interativos
 * Usa gsap.quickTo para 60-120fps sem layout thrashing.
 * Desativa automaticamente em dispositivos touch.
 */
export function useMagneticButton<T extends HTMLElement = HTMLAnchorElement>(
  options: MagneticOptions = {}
) {
  const ref = useRef<T>(null)
  const { strength = 0.28, innerStrength = 0.14 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Só ativa em ponteiros precisos com hover (desktop)
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isPointerFine) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: MOTION.easeSmooth })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: MOTION.easeSmooth })

    // Se houver ícone interno com classe .btn__icon, aplica deslocamento sutil
    const icon = el.querySelector('.btn__icon')
    const iconXTo = icon ? gsap.quickTo(icon, 'x', { duration: 0.35, ease: MOTION.easeSmooth }) : null
    const iconYTo = icon ? gsap.quickTo(icon, 'y', { duration: 0.35, ease: MOTION.easeSmooth }) : null

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      xTo(deltaX)
      yTo(deltaY)

      if (iconXTo && iconYTo) {
        iconXTo(deltaX * innerStrength)
        iconYTo(deltaY * innerStrength)
      }
    }

    const onMouseLeave = () => {
      xTo(0)
      yTo(0)
      if (iconXTo && iconYTo) {
        iconXTo(0)
        iconYTo(0)
      }
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
      gsap.set(el, { x: 0, y: 0 })
      if (icon) gsap.set(icon, { x: 0, y: 0 })
    }
  }, [strength, innerStrength])

  return ref
}
