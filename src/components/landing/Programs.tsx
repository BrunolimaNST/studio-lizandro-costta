import { useRef } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { ArrowRight, Dumbbell, Flame } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap } from '../../utils/gsapConfig'
import { MOTION } from '../../animations/constants'

// Componentes Internos e Ícones
import { RunnerIcon } from './icons'

// Conteúdo e Tipos
import { PROGRAMS, PROGRAM_MODALS } from '../../data/landingContent'
import type { ProgramIcon } from '../../data/landingContent'
import type { ModalData } from '../ui/AnimatedModal'

// Assets
import flameMark from '../../assets/flame-mark.png'
import logoText from '../../assets/logo-text.png'

const PROGRAM_ICONS: Record<ProgramIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  dumbbell: Dumbbell,
  flame: Flame,
  runner: RunnerIcon,
}

const CUT_CORNER_CLIP_PATH = 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'

interface ProgramsProps {
  onOpenModal?: (data: ModalData) => void
}

/**
 * Seção "Treinos e Programas". Exibe os 3 cards chanfrados de alta performance
 * (Hipertrofia, Emagrecimento, Condicionamento) e aciona o modal detalhado de metodologia.
 */
export function Programs({ onOpenModal }: ProgramsProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.section-heading, .program-card', {
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
          '.programs__grid > li',
          {
            y: 36,
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
    <section ref={sectionRef} id="treinos" className="section bg-transparent relative z-10" aria-labelledby="treinos-title">
      <div className="container">
        {/* Cabeçalho da Secção com layout horizontal */}
        <div className="section-heading flex flex-row items-center mb-10 sm:mb-14">
          {/* Esquerda: Logotipo do Lizandro Costta */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src={flameMark}
              alt=""
              aria-hidden="true"
              className="h-8 sm:h-12 w-auto object-contain"
              width={170}
              height={222}
              loading="lazy"
              decoding="async"
            />
            <img
              src={logoText}
              alt="Lizandro Costta"
              className="h-6 sm:h-9 w-auto object-contain"
              width={472}
              height={135}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Divisor: Linha vertical laranja */}
          <div
            className="border-l-2 border-orange-500 h-10 sm:h-14 ml-3 sm:ml-5 mr-4 shrink-0"
            aria-hidden="true"
          />

          {/* Textos à direita do divisor */}
          <div className="flex flex-col justify-center min-w-0">
            <h2
              id="treinos-title"
              className="text-xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tight text-white leading-tight"
            >
              TREINOS E PROGRAMAS
            </h2>
            <p className="text-xs sm:text-sm lg:text-base italic text-zinc-300 mt-0.5 sm:mt-1">
              Programas completos para cada objetivo.
            </p>
          </div>
        </div>

        {/* Grid de Cards dos Programas */}
        <ul className="programs__grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAMS.map((program) => {
            const Icon = PROGRAM_ICONS[program.icon]
            return (
              <li key={program.id} className="h-full">
                {/* Container externo do card com borda fina laranja e cantos chanfrados */}
                <article
                  className="program-card group transition-all duration-300 hover:-translate-y-1.5 bg-orange-500 p-[1px] h-full"
                  style={{ clipPath: CUT_CORNER_CLIP_PATH }}
                >
                  {/* Container interno com fundo escuro e o mesmo clip-path */}
                  <div
                    className="bg-zinc-950 w-full h-full flex flex-col overflow-hidden"
                    style={{ clipPath: CUT_CORNER_CLIP_PATH }}
                  >
                    {/* Foto na parte superior */}
                    <div className="overflow-hidden aspect-[4/3] w-full relative">
                      <img
                        src={program.image.src}
                        alt={program.image.alt}
                        width={program.image.width}
                        height={program.image.height}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Área de texto: layout flex flex-row gap-4 p-6 */}
                    <div className="flex flex-row gap-4 p-6 flex-1 bg-zinc-950">
                      {/* Ícone à esquerda */}
                      <div className="shrink-0 pt-1">
                        <Icon
                          className="w-10 h-10 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Coluna à direita: Título, Descrição e Botão Saiba Mais */}
                      <div className="flex flex-col gap-2 flex-1">
                        <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tight text-white leading-tight">
                          {program.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {program.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            const detail = PROGRAM_MODALS[program.id]
                            onOpenModal?.({
                              badge: detail?.badge || 'METODOLOGIA APLICADA',
                              title: detail?.title || program.title,
                              subtitle: detail?.subtitle || program.description,
                              icon: Icon,
                              image: program.image,
                              paragraphs: detail?.paragraphs,
                              sections: detail ? [detail.methodology] : undefined,
                              benefits: detail?.benefits,
                              ctaText: detail?.ctaText || 'COMEÇAR AGORA',
                              ctaHref: detail?.ctaHref || '#planos',
                            })
                          }}
                          className="link-arrow group/link cursor-pointer bg-transparent border-0 p-0 text-left inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-500 hover:text-orange-400 transition-colors mt-auto pt-2"
                          aria-label={`Saiba mais sobre a metodologia de ${program.title.toLowerCase()}`}
                        >
                          <span>SAIBA MAIS</span>
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
