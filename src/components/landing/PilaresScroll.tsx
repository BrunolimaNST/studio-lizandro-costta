import { useRef } from 'react'
import { Brain, Activity, CalendarCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Animações e Configurações
import { gsap, ScrollTrigger, useGSAP } from '../../utils/gsapConfig'

interface Pilar {
  number: string
  title: string
  text: string
  icon: LucideIcon
}

const PILARES: Pilar[] = [
  {
    number: '01',
    title: 'Mindset Blindado',
    text: 'Foco mental e resiliência para manter o ritmo mesmo nos dias difíceis. A mente decide até onde o corpo vai.',
    icon: Brain,
  },
  {
    number: '02',
    title: 'Biomecânica Perfeita',
    text: 'Técnica e execução precisas em cada movimento, para render mais, evoluir com segurança e prevenir lesões.',
    icon: Activity,
  },
  {
    number: '03',
    title: 'Consistência Diária',
    text: 'Pequenas vitórias todos os dias constroem resultados duradouros. Disciplina vence motivação.',
    icon: CalendarCheck,
  },
]

interface LocalImage {
  src: string
  alt: string
  caption: string
}

const LOCAL_IMAGES: LocalImage[] = [
  {
    src: '/academia.1.png',
    alt: 'Equipamentos de musculação de alta performance',
    caption: 'Equipamentos de Alta Performance',
  },
  {
    src: '/academia.2.png',
    alt: 'Espaço de treino amplo e focado',
    caption: 'Espaço Focado',
  },
  {
    src: '/academia.3.jpeg',
    alt: 'Ambiente climatizado para treino',
    caption: 'Ambiente Climatizado',
  },
]

/**
 * Seção de Rolagem Horizontal Fixada (Pinned Horizontal Scroll).
 * Apresenta os três pilares metodológicos e a galeria fotográfica do Sttudio.
 */
export function PilaresScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth)

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="pilares"
      aria-labelledby="pilares-title"
      className="relative z-10 h-screen w-full overflow-hidden bg-transparent flex flex-col justify-center"
    >
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={trackRef}
        className="relative flex flex-nowrap items-center gap-6 sm:gap-10 w-max px-6 sm:px-12 lg:px-20 will-change-transform"
      >
        <div className="shrink-0 w-[85vw] sm:w-[60vw] lg:w-[40vw] max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
            <span className="h-[2px] w-6 bg-[#FF6B00]" aria-hidden="true" />
            Os Pilares
          </p>
          <h2
            id="pilares-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.15] text-white"
          >
            Não é apenas levantar peso.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]">
              É construir disciplina.
            </span>
          </h2>
        </div>

        {PILARES.map(({ number, title, text, icon: Icon }) => (
          <article
            key={number}
            className="relative shrink-0 w-[80vw] sm:w-[50vw] lg:w-[32vw] max-w-md min-h-[340px] flex flex-col justify-between rounded-2xl bg-[#111114] border border-white/10 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div
              className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]"
              aria-hidden="true"
            />
            <span
              className="absolute -right-2 -top-4 text-[8rem] font-black leading-none text-white/[0.04] select-none"
              aria-hidden="true"
            >
              {number}
            </span>

            <div className="relative w-12 h-12 rounded-lg bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="relative space-y-3 mt-8">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                <span className="text-[#FF6B00]">{number}.</span> {title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{text}</p>
            </div>
          </article>
        ))}

        {/* Card de transição: ponte entre os pilares e o local */}
        <div className="shrink-0 w-[70vw] sm:w-[40vw] lg:w-[28vw] max-w-sm flex flex-col items-center justify-center text-center gap-4 px-4">
          <span className="h-[2px] w-10 bg-[#FF6B00]" aria-hidden="true" />
          <p className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-white">
            Onde o resultado{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]">
              acontece
            </span>
          </p>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">A Estrutura</span>
        </div>

        {/* Cards de imagem: O Local */}
        {LOCAL_IMAGES.map(({ src, alt, caption }) => (
          <figure
            key={caption}
            className="relative shrink-0 w-[80vw] md:w-[600px] aspect-video m-0 rounded-2xl overflow-hidden bg-[#111114] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              draggable={false}
              onLoad={() => ScrollTrigger.refresh()}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 left-0 p-5 sm:p-8 text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
              {caption}
            </figcaption>
          </figure>
        ))}

        {/* Respiro final para o último card não colar na borda */}
        <div className="shrink-0 w-4 sm:w-12" aria-hidden="true" />
      </div>
    </section>
  )
}
