import React, { useEffect, useRef, useState, type ComponentType, type SVGProps } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { gsap } from '../../utils/gsapConfig'

export interface ModalSection {
  heading: string
  text?: string
  items?: string[]
}

export interface ModalData {
  badge?: string
  title: string
  subtitle?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon
  image?: {
    src: string
    alt: string
  }
  paragraphs?: string[]
  sections?: ModalSection[]
  benefits?: string[]
  ctaText?: string
  ctaHref?: string
  onCtaClick?: () => void
  /** 'about' abre o modal exclusivo "Sobre Mim" (ModalSobreMim) */
  variant?: 'default' | 'about'
}

export interface AnimatedModalProps {
  open?: boolean
  isOpen?: boolean
  onClose: () => void
  data: ModalData | null
}

/**
 * Modal animado reutilizável com GSAP, suporte a scroll suave Lenis,
 * bloqueio de rolagem do body e animações fluidas de entrada e saída.
 */
export const AnimatedModal: React.FC<AnimatedModalProps> = ({ open, isOpen, onClose, data }) => {
  const isModalOpen = open ?? isOpen ?? false
  const [mounted, setMounted] = useState(isModalOpen)
  const backdropRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const isClosingRef = useRef(false)

  // Sincroniza abertura quando a prop isModalOpen for true
  useEffect(() => {
    if (isModalOpen) {
      setMounted(true)
      isClosingRef.current = false
    } else if (mounted && !isClosingRef.current) {
      triggerCloseAnimation()
    }
  }, [isModalOpen, mounted])

  // Body Scroll Lock: Bloqueia o scroll da página enquanto o modal estiver aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Animação de entrada com GSAP
  useEffect(() => {
    if (!mounted || !backdropRef.current || !modalRef.current) return

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    })

    // Estado inicial
    gsap.set(backdropRef.current, { opacity: 0 })
    gsap.set(modalRef.current, { y: 50, scale: 0.95, opacity: 0 })

    // Entrada fluida
    tl.to(backdropRef.current, {
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
    }).to(
      modalRef.current,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      },
      '-=0.2',
    )
  }, [mounted])

  // Animação reversa rápida de saída antes de desmontar do DOM
  const triggerCloseAnimation = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true

    if (!backdropRef.current || !modalRef.current) {
      isClosingRef.current = false
      setMounted(false)
      onClose()
      return
    }

    const exitTl = gsap.timeline({
      onComplete: () => {
        isClosingRef.current = false
        setMounted(false)
        onClose()
      },
    })

    exitTl
      .to(modalRef.current, {
        y: 40,
        scale: 0.96,
        opacity: 0,
        duration: 0.25,
        ease: 'power3.in',
      })
      .to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
        },
        '-=0.15',
      )
  }

  // Tecla Escape para fechar
  useEffect(() => {
    if (!mounted) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerCloseAnimation()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mounted])

  // Trata clique no CTA interno do modal (fecha e navega suavemente)
  const handleCtaClick = () => {
    if (data?.onCtaClick) {
      data.onCtaClick()
    }
    triggerCloseAnimation()
  }

  if (!mounted || !data) return null

  const Icon = data.icon

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 overflow-y-auto flex min-h-full items-center justify-center p-3 sm:p-5 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop escuro com glassmorphism */}
      <div
        ref={backdropRef}
        onClick={triggerCloseAnimation}
        data-lenis-prevent
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer transition-colors"
        aria-hidden="true"
      />

      {/* Container principal do Modal */}
      <div
        ref={modalRef}
        data-lenis-prevent
        className="relative w-full max-w-2xl lg:max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#111114] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,107,0,0.15)] overflow-hidden z-10 my-auto"
      >
        {/* Linha de acento decorativa superior em degradê laranja/vermelho */}
        <div
          className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935] z-30"
          aria-hidden="true"
        />

        {/* Botão de Fechar Estilizado */}
        <button
          type="button"
          onClick={triggerCloseAnimation}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-black/70 hover:bg-[#FF6B00] text-zinc-300 hover:text-white border border-white/10 hover:border-[#FF6B00] shadow-lg transition-all duration-200 cursor-pointer group"
          aria-label="Fechar modal"
        >
          <X size={18} className="transition-transform duration-200 group-hover:rotate-90" />
        </button>

        {/* Conteúdo rolável com scroll suave */}
        <div data-lenis-prevent className="overflow-y-auto overscroll-contain flex-1 custom-scrollbar">
          {/* Banner fotográfico com degradê suave (se houver imagem) */}
          {data.image && (
            <div className="relative h-44 sm:h-56 w-full overflow-hidden shrink-0 bg-[#0A0B0E]">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/50 to-transparent"
                aria-hidden="true"
              />
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-6">
            {/* Cabeçalho do Modal: Badge, Ícone, Título e Subtítulo */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {Icon && (
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                )}
                {data.badge && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                    {data.badge}
                  </span>
                )}
              </div>

              <h3 id="modal-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                {data.title}
              </h3>

              {data.subtitle && (
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Parágrafos explicativos */}
            {data.paragraphs && data.paragraphs.length > 0 && (
              <div className="space-y-3.5 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                {data.paragraphs.map((paragraph, idx) => (
                  <p key={`${paragraph.slice(0, 20)}-${idx}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Seções Estruturadas (Metodologia, Pilares, Certificações) */}
            {data.sections && data.sections.length > 0 && (
              <div className="space-y-4 pt-2">
                {data.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3"
                  >
                    <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                      {section.heading}
                    </h4>

                    {section.text && (
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {section.text}
                      </p>
                    )}

                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-2 list-none m-0 p-0">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-snug">
                            <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Benefícios em grid (se houver) */}
            {data.benefits && data.benefits.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200">
                  Benefícios Diretos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0" aria-hidden="true" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rodapé com CTA do Modal */}
            {data.ctaText && (
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-xs text-zinc-400 uppercase tracking-wider hidden sm:inline-block">
                  Atendimento individual e personalizado
                </span>

                <a
                  href={data.ctaHref || '#contato'}
                  onClick={handleCtaClick}
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
