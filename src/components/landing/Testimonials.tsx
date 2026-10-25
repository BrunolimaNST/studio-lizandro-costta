import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { MOTION } from '../../animations/constants'

// Componentes Internos
import { SectionHeading } from './SectionHeading'

// Conteúdo e Tipos
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '../../data/landingContent'

/**
 * Seção de Depoimentos e Prova Social com depoimentos reais de alunos
 * do Sttudio Lizandro Costta e avaliação por estrelas.
 */
export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.section-heading, .testimonial-card', {
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
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

        tl.from('.section-heading > *', {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: MOTION.easePrimary,
        }).from(
          '.testimonials__grid > li',
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: MOTION.easePrimary,
          },
          '-=0.3',
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="depoimentos" className="section bg-transparent relative z-10" aria-labelledby="depoimentos-title">
      <div className="container">
        <SectionHeading
          id="depoimentos-title"
          title={TESTIMONIALS_SECTION.title}
          subtitle={TESTIMONIALS_SECTION.subtitle}
        />

        <ul className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <li key={item.id}>
              <figure className="testimonial-card transition-all duration-300 hover:-translate-y-1 hover:border-[var(--c-border-strong)]">
                <Quote className="testimonial-card__quote-icon transition-transform duration-300 hover:scale-110" aria-hidden="true" />
                <blockquote className="testimonial-card__quote">
                  <p className="text-[15px] leading-relaxed">{item.quote}</p>
                </blockquote>
                <figcaption className="testimonial-card__author normal-case">{item.author}</figcaption>
                <div className="stars" role="img" aria-label={`Avaliação: ${item.rating} de 5 estrelas`}>
                  {Array.from({ length: item.rating }, (_, index) => (
                    <Star key={`${item.id}-star-${index}`} className="stars__icon transition-transform duration-200 hover:scale-125" aria-hidden="true" />
                  ))}
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
