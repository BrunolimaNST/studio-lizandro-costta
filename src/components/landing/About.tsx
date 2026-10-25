import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { useMagneticButton } from '../../animations/useMagneticButton'
import { MOTION } from '../../animations/constants'

// Conteúdo e Tipos
import { ABOUT, ABOUT_MODAL } from '../../data/landingContent'
import type { ModalData } from '../ui/AnimatedModal'

interface AboutProps {
  onOpenModal?: (data: ModalData) => void
}

/**
 * Seção "Sobre Mim" com animação de entrada coordenada entre biografia e foto diagonal,
 * além de disparar o modal dedicado de trajetória profissional.
 */
export function About({ onOpenModal }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const ctaRef = useMagneticButton<HTMLButtonElement>({ strength: 0.2 })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.about__content, .about__media', {
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })

        // Coluna de texto entrando pela esquerda
        tl.from('.about__content > *', {
          x: -28,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: MOTION.easePrimary,
        })
          // Foto com recorte diagonal entrando pela direita
          .from(
            '.about__media',
            {
              x: 35,
              scale: 0.96,
              autoAlpha: 0,
              duration: 0.85,
              ease: MOTION.easePrimary,
            },
            '-=0.55',
          )
          // Leve zoom reverso na imagem interna
          .from(
            '.about__image',
            {
              scale: 1.08,
              duration: 1.1,
              ease: MOTION.easeSmooth,
            },
            '-=0.85',
          )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="sobre" className="section bg-transparent relative z-10" aria-labelledby="sobre-title">
      <div className="container about__grid">
        <div className="about__content">
          <p className="eyebrow">{ABOUT.eyebrow}</p>
          <h2 id="sobre-title" className="about__title">
            <span className="about__title-line">{ABOUT.titleTop}</span>{' '}
            <span className="about__title-line">{ABOUT.titleBottom}</span>
          </h2>
          <p className="about__text">{ABOUT.text}</p>
          <button
            ref={ctaRef}
            type="button"
            onClick={() => onOpenModal?.(ABOUT_MODAL)}
            className="btn btn--outline about__cta cursor-pointer"
            aria-label="Conheça a história e trajetória de Lizandro Costta"
          >
            <span>{ABOUT.cta}</span>
            <ArrowRight className="btn__icon" aria-hidden="true" />
          </button>
        </div>

        <figure className="about__media h-[400px] md:h-[550px] lg:h-[650px] w-full rounded-2xl overflow-hidden aspect-auto">
          <img
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            width={ABOUT.image.width}
            height={ABOUT.image.height}
            className="about__image w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
