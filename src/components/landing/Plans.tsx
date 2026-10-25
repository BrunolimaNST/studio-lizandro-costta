import { useRef, useState, useEffect } from 'react'
import { Check, Dumbbell, Activity } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { MOTION } from '../../animations/constants'

// Componentes Internos
import { SectionHeading } from './SectionHeading'

// Conteúdo e Tipos
import { PLANS, PLANS_SECTION, NUTRITION_PLANS } from '../../data/landingContent'

/**
 * Seção de Planos de Investimento (Sttudio & Treino / Nutrição Clínica).
 * Oferece alternador de abas animado e cards elásticos com valores e links diretos para WhatsApp.
 */
export function Plans() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'treino' | 'nutricao'>('treino')
  const contentRef = useRef<HTMLDivElement>(null)

  // Scroll entrance animation
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.section-heading, .plans__toggle, .plan-card', {
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          clearProps: 'all',
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
          '.plans__toggle',
          {
            y: 15,
            autoAlpha: 0,
            duration: 0.5,
            ease: MOTION.easePrimary,
            clearProps: 'all',
          },
          '-=0.2',
        )
      })
    },
    { scope: sectionRef },
  )

  // Tab switch transition animation with clearProps: "all" to prevent trapped opacity
  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'all' },
    )
  }, [activeTab])

  return (
    <section ref={sectionRef} id="planos" className="section bg-transparent relative z-10" aria-labelledby="planos-title">
      <div className="container">
        <SectionHeading id="planos-title" title={PLANS_SECTION.title} subtitle={PLANS_SECTION.subtitle} />

        {/* Toggle Switch */}
        <div className="plans__toggle relative flex w-[90%] max-w-[400px] p-1 bg-zinc-900/80 backdrop-blur-sm rounded-full mx-auto border border-zinc-800 mt-8 mb-12 shadow-xl">
          {/* Peça que desliza (Fundo Laranja Animado) */}
          <div
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-orange-600 rounded-full transition-transform duration-500 ease-in-out shadow-lg shadow-orange-600/30 ${
              activeTab === 'nutricao' ? 'translate-x-full' : 'translate-x-0'
            }`}
            aria-hidden="true"
          />

          {/* Botões Transparentes sobrepostos */}
          <button
            type="button"
            onClick={() => setActiveTab('treino')}
            className={`relative z-10 w-1/2 flex items-center justify-center py-2.5 sm:py-3 px-1 sm:px-2 text-[11px] sm:text-sm font-bold transition-colors duration-500 cursor-pointer ${
              activeTab === 'treino' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
            aria-pressed={activeTab === 'treino'}
          >
            <Dumbbell className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 shrink-0 inline" />
            <span className="whitespace-nowrap">STTUDIO & TREINO</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nutricao')}
            className={`relative z-10 w-1/2 flex items-center justify-center py-2.5 sm:py-3 px-1 sm:px-2 text-[11px] sm:text-sm font-bold transition-colors duration-500 cursor-pointer ${
              activeTab === 'nutricao' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
            aria-pressed={activeTab === 'nutricao'}
          >
            <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 shrink-0 inline" />
            <span className="whitespace-nowrap">NUTRIÇÃO CLÍNICA</span>
          </button>
        </div>

        {/* Content Container - min-h-[600px] to prevent layout shifts & relative z-10 for layering */}
        <div ref={contentRef} className="plans__content relative z-10 min-h-[600px]">
          {activeTab === 'treino' ? (
            <ul className="plans__grid !flex !flex-col md:!flex-row md:!flex-wrap items-stretch justify-center gap-8 pt-4">
              {PLANS.map((plan) => (
                <li key={plan.id} className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(25%-1.25rem)] max-w-sm mx-auto md:mx-0 flex flex-col items-stretch">
                  <article
                    className={`plan-card relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                      plan.featured ? 'plan-card--featured !border-orange-500/80 shadow-[0_0_35px_rgba(255,107,0,0.25)]' : 'hover:border-zinc-700'
                    }`}
                    aria-labelledby={`plano-${plan.id}`}
                  >
                    {(plan.badge || (plan.featured && PLANS_SECTION.badge)) && (
                      <p className="plan-card__badge">{plan.badge || PLANS_SECTION.badge}</p>
                    )}

                    <div className="flex flex-col flex-1">
                      <header className="plan-card__header">
                        <h3 id={`plano-${plan.id}`} className="plan-card__title text-lg sm:text-xl font-bold break-words whitespace-normal text-white">
                          {plan.name}
                        </h3>
                        <p className="plan-card__tagline break-words whitespace-normal text-zinc-400 mt-1">{plan.tagline}</p>
                      </header>

                      {/* Valor Principal Inteiro com Centavos */}
                      <div className="mt-4 mb-6">
                        <div className="flex items-baseline text-white whitespace-nowrap">
                          <span className="text-xl md:text-2xl font-bold text-orange-500 mr-1">R$</span>
                          <span className="text-4xl lg:text-5xl font-extrabold leading-none tracking-normal">
                            {plan.precoPrincipal || plan.amount}
                          </span>
                        </div>
                        {/* Texto Complementar com margem superior extra (mt-2) */}
                        <p className="text-sm md:text-base text-zinc-400 mt-2 font-medium">
                          {plan.subtextoPreco || plan.period}
                        </p>
                      </div>

                      {/* Lista de Benefícios */}
                      <ul className="plan-card__features space-y-3 flex-1 border-t border-zinc-800/80 pt-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="plan-card__check w-4 h-4 shrink-0 text-orange-500 mt-1" aria-hidden="true" />
                            <span className="flex-1 text-zinc-300 leading-relaxed text-sm md:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/554999003369?text=${encodeURIComponent(
                        plan.whatsappMessage || `Olá! Gostaria de saber mais sobre o ${plan.name} do Sttudio Lizandro Costta.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn--block mt-6 transition-transform duration-300 active:scale-95 ${
                        plan.featured ? 'btn--primary' : 'btn--outline'
                      }`}
                      aria-label={`${PLANS_SECTION.cta}: ${plan.name}`}
                    >
                      {PLANS_SECTION.cta}
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="plans__grid plans__grid--nutrition !flex !flex-col md:!flex-row md:!flex-wrap items-stretch justify-center gap-8 pt-4">
              {NUTRITION_PLANS.map((plan) => (
                <li key={plan.id} className="w-full md:w-[calc(50%-1rem)] max-w-md mx-auto md:mx-0 flex flex-col items-stretch">
                  <article
                    className={`plan-card relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                      plan.featured
                        ? 'plan-card--featured !border-orange-500/80 shadow-[0_0_35px_rgba(255,107,0,0.25)]'
                        : 'hover:border-zinc-700'
                    }`}
                    aria-labelledby={`nutricao-${plan.id}`}
                  >
                    {plan.featured && (
                      <p className="plan-card__badge">{plan.badge || 'O MAIS COMPLETO'}</p>
                    )}

                    <div className="flex flex-col flex-1">
                      <header className="plan-card__header">
                        <h3
                          id={`nutricao-${plan.id}`}
                          className="plan-card__title text-lg sm:text-xl font-bold break-words whitespace-normal text-white leading-snug"
                        >
                          {plan.name}
                        </h3>
                        <p className="plan-card__tagline break-words whitespace-normal text-zinc-400 mt-1">{plan.tagline}</p>
                      </header>

                      {/* Valor Principal Inteiro com Centavos */}
                      <div className="mt-4 mb-6">
                        <div className="flex items-baseline text-white whitespace-nowrap">
                          <span className="text-xl md:text-2xl font-bold text-orange-500 mr-1">R$</span>
                          <span className="text-4xl lg:text-5xl font-extrabold leading-none tracking-normal">
                            {plan.precoPrincipal || plan.amount}
                          </span>
                        </div>
                        {/* Texto Complementar com margem superior extra (mt-2) */}
                        <p className="text-sm md:text-base text-zinc-400 mt-2 font-medium">
                          {plan.subtextoPreco || plan.period}
                        </p>
                      </div>

                      {/* Lista de Benefícios */}
                      <ul className="plan-card__features space-y-3 flex-1 border-t border-zinc-800/80 pt-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="plan-card__check w-4 h-4 shrink-0 text-orange-500 mt-1" aria-hidden="true" />
                            <span className="flex-1 text-zinc-300 leading-relaxed text-sm md:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/554999003369?text=${encodeURIComponent(
                        plan.whatsappMessage,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn--block mt-6 transition-transform duration-300 active:scale-95 ${
                        plan.featured ? 'btn--primary' : 'btn--outline'
                      }`}
                      aria-label={`Agendar: ${plan.name}`}
                    >
                      AGENDAR CONSULTA
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
