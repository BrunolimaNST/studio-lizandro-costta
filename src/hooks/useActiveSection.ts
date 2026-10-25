import { useEffect, useState } from 'react'

/**
 * Faixa de detecção: observa a porção central/superior da viewport
 */
const DETECTION_BAND = '-25% 0px -65% 0px'

/** Retorna o id da seção atualmente visível, observando os ids informados. */
export function useActiveSection<T extends string>(ids: readonly T[], initial: T): T {
  const [active, setActive] = useState<T>(initial)

  useEffect(() => {
    const handleScroll = () => {
      // No topo da página (< 100px), a primeira seção é sempre ativa
      if (window.scrollY < 100) {
        setActive(ids[0])
        return
      }
      // Perto do final da página, a última seção é ativa
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (isBottom) {
        setActive(ids[ids.length - 1])
        return
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      window.removeEventListener('scroll', handleScroll)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) {
          setActive(ids[0])
          return
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
          setActive(ids[ids.length - 1])
          return
        }

        const intersecting = entries.filter((entry) => entry.isIntersecting)
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))
          setActive(intersecting[0].target.id as T)
        }
      },
      { rootMargin: DETECTION_BAND, threshold: [0, 0.2, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [ids])

  return active
}

