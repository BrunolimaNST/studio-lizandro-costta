import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

/**
 * Componente utilitário de revelação suave com IntersectionObserver
 * para animações de fade e slide ao rolar a página.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentElem = domRef.current
    if (currentElem) observer.observe(currentElem)

    return () => {
      if (currentElem) observer.unobserve(currentElem)
    }
  }, [])

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8 opacity-0'
        case 'down':
          return '-translate-y-8 opacity-0'
        case 'left':
          return 'translate-x-8 opacity-0'
        case 'right':
          return '-translate-x-8 opacity-0'
        default:
          return 'opacity-0'
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100'
  }

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  )
}
