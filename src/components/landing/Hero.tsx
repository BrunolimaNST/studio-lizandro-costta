import { useRef } from 'react'
import { ArrowRight, BarChart3, ClipboardCheck, ShieldCheck, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { useMagneticButton } from '../../animations/useMagneticButton'
import { MOTION } from '../../animations/constants'

// Conteúdo e Tipos
import { HERO, HIGHLIGHTS } from '../../data/landingContent'
import type { HighlightIcon } from '../../data/landingContent'

const HIGHLIGHT_ICONS: Record<HighlightIcon, LucideIcon> = {
  clipboard: ClipboardCheck,
  chart: BarChart3,
  shield: ShieldCheck,
  zap: Zap,
}

/**
 * Seção Hero principal com efeito de revelação tipográfica cinematográfica,
 * parallax desacoplado por GPU e botões magnéticos interativos.
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const primaryCtaRef = useMagneticButton<HTMLAnchorElement>({ strength: 0.25 })
  const secondaryCtaRef = useMagneticButton<HTMLAnchorElement>({ strength: 0.2 })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.hero__content, .hero-strip__item', {
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Zoom-out cinematográfico inicial no fundo ancorado no topo
        gsap.fromTo(
          '.hero__bg',
          { scale: 1.05, transformOrigin: 'center top' },
          {
            scale: 1,
            duration: 1.5,
            ease: MOTION.easeSmooth,
          },
        )

        // Parallax sutil ao rolar o Hero
        gsap.to('.hero__bg', {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        })

        // Master Timeline da tipografia e elementos
        const tl = gsap.timeline({
          defaults: { ease: MOTION.easePrimary },
          delay: 0.15,
        })

        // Eyebrow
        tl.from('.hero__eyebrow', {
          y: 18,
          autoAlpha: 0,
          duration: 0.6,
        })
          // Revelação de linhas do título por máscara (overflow-hidden)
          .from(
            '.hero__title-line',
            {
              yPercent: 110,
              duration: 0.9,
              ease: MOTION.easeDramatic,
              stagger: 0.14,
            },
            '-=0.35',
          )
          // Subtítulo
          .from(
            '.hero__subtitle',
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.7,
            },
            '-=0.45',
          )
          // Botões CTA
          .from(
            '.hero__actions .btn',
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.6,
              stagger: 0.12,
            },
            '-=0.4',
          )
          // Traço diagonal decorativo
          .from(
            '.hero__diagonal',
            {
              scaleY: 0,
              transformOrigin: 'bottom left',
              duration: 0.5,
              ease: MOTION.easeSmooth,
            },
            '-=0.3',
          )
          // Cards da faixa de diferenciais (staggered)
          .from(
            '.hero-strip__item',
            {
              y: 22,
              autoAlpha: 0,
              duration: 0.65,
              stagger: 0.08,
            },
            '-=0.35',
          )
      })
    },
    { scope: heroRef },
  )

  return (
    <div ref={heroRef} id="inicio" className="w-full">
      <section
        className="hero relative w-full min-h-[600px] lg:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Camada de fundo desacoplada para aceleração por GPU e parallax */}
        <div
          className="hero__bg bg-cover bg-no-repeat bg-[position:65%_top] lg:bg-[position:60%_top] origin-top"
          aria-hidden="true"
        />

        <div className="hero__main flex-1 flex items-center">
          <div className="container">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow text-[11px] sm:text-xs tracking-widest">{HERO.eyebrow}</p>
              <h1 id="hero-title" className="hero__title">
                <span className="block overflow-hidden py-1.5">
                  <span className="hero__title-line inline-block">{HERO.titleTop}</span>
                </span>
                <span className="block overflow-hidden py-1.5">
                  <span className="hero__title-line hero__title-line--accent inline-block">
                    {HERO.titleBottom}
                  </span>
                </span>
              </h1>
              <p className="hero__subtitle">{HERO.subtitle}</p>
              <div className="hero__actions">
                <a ref={primaryCtaRef} href="#contato" className="btn btn--primary">
                  {HERO.primaryCta}
                  <ArrowRight className="btn__icon" aria-hidden="true" />
                </a>
                <a ref={secondaryCtaRef} href="#sobre" className="btn btn--outline">
                  {HERO.secondaryCta}
                </a>
              </div>
            </div>
          </div>
          <span className="hero__diagonal hidden md:block" aria-hidden="true" />
        </div>
      </section>

      {/* Faixa de destaques preta sólida e independente no fluxo normal da página */}
      <section
        className="hero-strip w-full bg-black py-8 md:py-0 md:h-[80px] flex items-center border-b border-zinc-900/50 relative z-20"
        aria-label="Diferenciais"
      >
        <div className="hero-strip__list w-full max-w-7xl mx-auto grid grid-cols-2 gap-y-8 gap-x-2 md:flex md:flex-row md:justify-evenly items-center justify-items-center px-4 transform translate-y-0 md:-translate-y-5">
          {HIGHLIGHTS.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.icon]
            return (
              <div
                key={`${item.top}-${item.bottom}`}
                className="hero-strip__item flex flex-col md:flex-row items-center gap-2 md:gap-3 transition-transform duration-300 hover:-translate-y-1 w-auto m-0 p-0"
              >
                <Icon className="hero-strip__icon w-7 h-7 shrink-0 text-[#FF6B00]" aria-hidden="true" strokeWidth={1.75} />
                <span className="hero-strip__text flex flex-col justify-center text-center md:text-left m-0 p-0">
                  <span className="hero-strip__text-top leading-tight text-zinc-400 font-medium text-xs uppercase">{item.top}</span>
                  <span className="hero-strip__text-bottom leading-tight text-white font-bold text-xs sm:text-sm uppercase">{item.bottom}</span>
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
