import { useEffect, useRef, useState } from 'react'
import { X, ArrowRight, CheckCircle2, Award, GraduationCap, Flame, MapPin, Dumbbell } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { gsap } from '../../utils/gsapConfig'
import type { ModalData } from './AnimatedModal'

/** Mapeia o emoji inicial de cada item da lista para o ícone SVG correspondente. */
const EMOJI_ICONS: Record<string, LucideIcon> = {
  '🏅': Award,
  '🎓': GraduationCap,
  '🔥': Flame,
  '📍': MapPin,
  '🏢': Dumbbell,
}

export interface ModalSobreMimProps {
  open: boolean
  onClose: () => void
  data: ModalData | null
}

/**
 * Modal exclusivo "Sobre Mim": layout dividido (foto em altura total + conteúdo rolável).
 * Os modais de treinos continuam usando o AnimatedModal (card simples).
 */
export function ModalSobreMim({ open, onClose, data }: ModalSobreMimProps) {
  const [mounted, setMounted] = useState(open)
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const isClosingRef = useRef(false)

  useEffect(() => {
    if (open) {
      setMounted(true)
      isClosingRef.current = false
    } else if (mounted && !isClosingRef.current) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mounted])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // Entrada
  useEffect(() => {
    if (!mounted || !backdropRef.current || !panelRef.current) return
    gsap.set(backdropRef.current, { opacity: 0 })
    gsap.set(panelRef.current, { y: 50, scale: 0.96, opacity: 0 })
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .to(backdropRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' })
      .to(panelRef.current, { y: 0, scale: 1, opacity: 1, duration: 0.45 }, '-=0.2')
  }, [mounted])

  const close = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true

    if (!backdropRef.current || !panelRef.current) {
      isClosingRef.current = false
      setMounted(false)
      onClose()
      return
    }

    gsap
      .timeline({
        onComplete: () => {
          isClosingRef.current = false
          setMounted(false)
          onClose()
        },
      })
      .to(panelRef.current, { y: 40, scale: 0.97, opacity: 0, duration: 0.25, ease: 'power3.in' })
      .to(backdropRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '-=0.15')
  }

  useEffect(() => {
    if (!mounted) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  if (!mounted || !data) return null

  const handleCta = () => {
    data.onCtaClick?.()
    close()
  }

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sobre-mim-title"
    >
      <div
        ref={backdropRef}
        onClick={close}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        data-lenis-prevent
        className="relative z-10 w-full max-w-6xl h-[90vh] max-h-[860px] flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-[#0D0E12]/95 border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95),0_0_60px_rgba(255,107,0,0.15)]"
      >
        <div
          className="absolute top-0 inset-x-0 h-1 z-30 bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={close}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-black/70 hover:bg-[#FF6B00] text-zinc-300 hover:text-white border border-white/10 hover:border-[#FF6B00] shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <X size={18} className="transition-transform duration-200 group-hover:rotate-90" />
        </button>

        {/* Imagem: topo no mobile, lado esquerdo em telas grandes (altura total) */}
        {data.image && (
          <div className="relative shrink-0 h-52 sm:h-64 lg:h-full lg:w-[42%] bg-[#0A0B0E]">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-[#0D0E12]"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Conteúdo com scroll interno */}
        <div
          data-lenis-prevent
          className="relative flex-1 min-h-0 overflow-y-auto overscroll-contain custom-scrollbar"
        >
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            <header className="space-y-4">
              {data.badge && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                  {data.badge}
                </span>
              )}
              <h2
                id="sobre-mim-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.15] text-white"
              >
                A HISTÓRIA DE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935]">
                  LIZANDRO COSTTA
                </span>
              </h2>
              {data.subtitle && (
                <p className="text-base sm:text-lg text-[#FF6B00] font-semibold leading-relaxed">
                  {data.subtitle}
                </p>
              )}
            </header>

            {data.paragraphs && data.paragraphs.length > 0 && (
              <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {data.paragraphs.map((p, i) => (
                  <p key={`${p.slice(0, 20)}-${i}`}>{p}</p>
                ))}
              </div>
            )}

            {data.sections?.map((section) => (
              <section key={section.heading} className="space-y-3 pt-2">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF6B00] leading-snug">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                  {section.heading}
                </h3>
                {section.text && (
                  <p className="text-sm text-zinc-300 leading-relaxed">{section.text}</p>
                )}
                {section.items && (
                  <ul className="space-y-3 list-none m-0 p-0">
                    {section.items.map((item) => {
                      const match = item.match(/^(\p{Extended_Pictographic})\uFE0F?\s*(.*)$/u)
                      const Icon = match ? EMOJI_ICONS[match[1]] : undefined
                      if (match && Icon) {
                        return (
                          <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-200 leading-snug">
                            <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{match[2]}</span>
                          </li>
                        )
                      }
                      return (
                        <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-snug">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </section>
            ))}

            {data.ctaText && (
              <div className="pt-6 border-t border-white/10">
                <a
                  href={data.ctaHref || '#contato'}
                  onClick={handleCta}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#FF6B00] to-[#E53935] text-white shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_28px_rgba(255,107,0,0.55)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <span>{data.ctaText}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
