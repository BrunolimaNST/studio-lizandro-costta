import { useRef } from 'react'
import { Clock } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { MOTION } from '../../animations/constants'

// Conteúdo e Tipos
import { BRAND, OPERATING_HOURS } from '../../data/landingContent'

// Assets
import logo from '../../assets/logo-lizandro-costta.png'

const LOGO_WIDTH = 480
const LOGO_HEIGHT = 377

/**
 * Rodapé principal (Footer) com logomarca oficial, grade de horários de funcionamento,
 * direitos autorais e créditos de desenvolvimento.
 */
export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const year = new Date().getFullYear()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.site-footer__brand, .site-footer__copy, .site-footer__credit', {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        })

        tl.from('.site-footer__logo', {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          ease: MOTION.easePrimary,
        })
          .from(
            '.site-footer__divider',
            {
              scaleY: 0,
              transformOrigin: 'top',
              duration: 0.5,
              ease: MOTION.easeSmooth,
            },
            '-=0.4',
          )
          .from(
            '.site-footer__slogan-line',
            {
              x: -16,
              autoAlpha: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: MOTION.easePrimary,
            },
            '-=0.35',
          )
          .from(
            '.site-footer__copy, .site-footer__credit',
            {
              y: 12,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: MOTION.easePrimary,
            },
            '-=0.3',
          )
      })
    },
    { scope: footerRef },
  )

  return (
    <footer ref={footerRef} id="rodape" className="site-footer">
      <div className="container">
        <div className="site-footer__brand">
          <img
            src={logo}
            alt={BRAND.logoAlt}
            className="site-footer__logo"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            loading="lazy"
            decoding="async"
          />
          <span className="site-footer__divider" aria-hidden="true" />
          <p className="site-footer__slogan">
            {BRAND.slogan.map((line) => (
              <span key={line} className="site-footer__slogan-line">
                {line}{' '}
              </span>
            ))}
          </p>
        </div>

        {/* Bloco de Horário de Funcionamento no Rodapé */}
        <div className="my-8 py-6 border-y border-white/10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
            <Clock size={16} aria-hidden="true" />
            <span>{OPERATING_HOURS.title}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
            {OPERATING_HOURS.schedule.map((item) => (
              <div key={item.days} className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <span className="block font-bold text-white mb-1">{item.days}</span>
                <span className="text-[11px] text-zinc-400">{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-zinc-400 italic mt-3">
            {OPERATING_HOURS.note}
          </p>
        </div>

        <p className="site-footer__copy">
          © {year} {BRAND.name}. Todos os direitos reservados.
        </p>
        <div className="site-footer__credit mt-4 flex items-center justify-center">
          <span className="text-xs text-zinc-500 mr-2">Desenvolvido por</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
            aria-label="Desenvolvido por NotusSoft Tech (abre em nova aba)"
          >
            <img
              src="/notus.png"
              alt="NotusSoft Tech"
              className="h-5 sm:h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <span className="site-footer__diagonal" aria-hidden="true" />
    </footer>
  )
}
