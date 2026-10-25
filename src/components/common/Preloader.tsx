import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { MOTION } from '../../animations/constants'

// Assets
import flameMark from '../../assets/flame-mark.png'

interface PreloaderProps {
  onComplete: () => void
}

/**
 * Preloader cinematográfico inicial. Exibe a chama estilizada da marca
 * e a linha luminosa antes de revelar o conteúdo principal suavemente.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        // Reduzido para usuários que não desejam movimento
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.3,
          onComplete,
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          onComplete,
        })

        // Estado inicial
        gsap.set(contentRef.current, { autoAlpha: 0, scale: 0.9 })
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'center' })

        tl.to(contentRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.45,
          ease: MOTION.easePrimary,
        })
          .to(
            lineRef.current,
            {
              scaleX: 1,
              duration: 0.5,
              ease: MOTION.easePrimary,
            },
            '-=0.2',
          )
          .to(contentRef.current, {
            autoAlpha: 0,
            y: -12,
            duration: 0.35,
            ease: MOTION.easePrimary,
          })
          .to(
            containerRef.current,
            {
              yPercent: -100,
              duration: 0.75,
              ease: MOTION.easeWipe,
            },
            '-=0.1',
          )
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070708] pointer-events-auto"
      aria-hidden="true"
    >
      <div ref={contentRef} className="flex flex-col items-center gap-4">
        <img
          src={flameMark}
          alt=""
          aria-hidden="true"
          width={56}
          height={73}
          className="h-12 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]"
        />
        <div
          ref={lineRef}
          className="h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent shadow-[0_0_12px_rgba(255,107,0,0.6)]"
        />
      </div>
    </div>
  )
}
