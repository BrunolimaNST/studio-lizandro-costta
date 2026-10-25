import { useRef } from 'react'
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { useMagneticButton } from '../../animations/useMagneticButton'
import { MOTION } from '../../animations/constants'

// Componentes Internos e Ícones
import { WhatsAppIcon } from './icons'

// Conteúdo e Tipos
import { CONTACT, OPERATING_HOURS } from '../../data/landingContent'

/**
 * Seção de Contato e Localização.
 * Apresenta canais diretos (WhatsApp, E-mail, Google Maps) e horários de funcionamento do Sttudio.
 */
export function Contact() {
  const { whatsapp, email } = CONTACT.items
  const sectionRef = useRef<HTMLElement>(null)
  const ctaRef = useMagneticButton<HTMLAnchorElement>({ strength: 0.25 })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.contact__intro, .contact__list > li', {
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

        tl.from('.contact__intro > *', {
          x: -24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: MOTION.easePrimary,
        }).from(
          '.contact__list > li',
          {
            x: 28,
            autoAlpha: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: MOTION.easePrimary,
          },
          '-=0.4',
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="contato" className="section contact" aria-labelledby="contato-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <h2 id="contato-title" className="contact__title">
            {CONTACT.title}
          </h2>
          <p className="contact__text">{CONTACT.text}</p>
          <a
            ref={ctaRef}
            href={CONTACT.whatsappUrl}
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.cta}
            <ArrowRight className="btn__icon" aria-hidden="true" />
            <span className="visually-hidden">(abre o WhatsApp em nova aba)</span>
          </a>
        </div>

        <ul className="contact__list">
          <li>
            <a
              href={CONTACT.whatsappUrl}
              className="contact-item group py-2 sm:py-2.5 px-2 -mx-2 rounded-lg transition-all duration-300 hover:border-[var(--c-orange)] hover:bg-[var(--c-graphite-3)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="contact-item__icon transition-transform duration-300 group-hover:scale-110" />
              <span className="contact-item__text">
                <span className="contact-item__label">{whatsapp.label}</span>
                <span className="contact-item__value">{whatsapp.value}</span>
                <span className="visually-hidden">(abre em nova aba)</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={email.href}
              className="contact-item group py-2 sm:py-2.5 px-2 -mx-2 rounded-lg transition-all duration-300 hover:border-[var(--c-orange)] hover:bg-[var(--c-graphite-3)]"
            >
              <Mail className="contact-item__icon transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span className="contact-item__text">
                <span className="contact-item__label">{email.label}</span>
                <span className="contact-item__value">{email.value}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/mgXGBCR2Bhui9cy36"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item group cursor-pointer py-2 sm:py-2.5 px-2 -mx-2 rounded-lg transition-all duration-300 hover:border-[var(--c-orange)] hover:bg-[var(--c-graphite-3)] flex items-center gap-x-3.5"
            >
              <MapPin className="contact-item__icon text-orange-500 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span className="contact-item__text">
                <span className="contact-item__label">
                  <span className="group-hover:text-orange-500 transition-colors duration-300">
                    São Joaquim - SC
                  </span>
                </span>
                <span className="contact-item__value">
                  Sttudio Lizandro Costta (clique para ver no mapa)
                </span>
                <span className="visually-hidden">(abre no Google Maps em nova aba)</span>
              </span>
            </a>
          </li>
          <li className="contact-item py-3 px-3 -mx-2 rounded-lg bg-[var(--c-graphite-2)]/60 border border-white/5 flex flex-col gap-2.5">
            <div className="flex items-center gap-x-2.5 text-orange-500 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 shrink-0 text-orange-500" aria-hidden="true" />
              <span>{OPERATING_HOURS.title}</span>
            </div>
            <div className="text-xs text-zinc-300 space-y-1.5 pl-6 sm:pl-7">
              {OPERATING_HOURS.schedule.map((item) => (
                <p key={item.days} className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <strong className="text-white">{item.days}:</strong>
                  <span className="text-zinc-300">{item.hours}</span>
                </p>
              ))}
              <p className="text-[11px] text-zinc-400 italic pt-1 border-t border-white/5 mt-1">
                {OPERATING_HOURS.note}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
