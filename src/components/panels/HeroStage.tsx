import React from 'react'
import { ArrowRight, Dumbbell, BarChart3, ShieldCheck, Zap, Menu } from 'lucide-react'
import { Button } from '../ui/Button'
import { HIGHLIGHTS, NAVIGATION_LINKS } from '../../data/content'

interface HeroStageProps {
  onOpenMobileMenu?: () => void
  onNavigate?: (sectionId: string) => void
  className?: string
}

export const HeroStage: React.FC<HeroStageProps> = ({
  onOpenMobileMenu,
  onNavigate,
  className = ''
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'dumbbell':
        return <Dumbbell className="text-[#FF6B00] shrink-0" size={16} />
      case 'chart':
        return <BarChart3 className="text-[#FF6B00] shrink-0" size={16} />
      case 'shield':
        return <ShieldCheck className="text-[#FF6B00] shrink-0" size={16} />
      case 'zap':
        return <Zap className="text-[#FF6B00] shrink-0" size={16} />
      default:
        return <Zap className="text-[#FF6B00] shrink-0" size={16} />
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    if (onNavigate) {
      onNavigate(targetId)
    } else {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="inicio"
      className={`relative w-full rounded-2xl bg-[#090A0C] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FF6B00]/12 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Internal Stage Header (as seen in the reference mockup) */}
      <div className="relative z-20 px-6 sm:px-8 py-4 border-b border-white/5 flex items-center justify-between bg-[#090A0C]/80 backdrop-blur-md">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Lizandro Costta Personal Trainer | Nutricionista"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação do palco">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-[#FF6B00] transition-colors relative py-1 group/nav"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="#planos"
            variant="primary"
            size="sm"
            glow
            className="rounded-full px-4 py-1.5 text-xs font-bold"
            onClick={(e) => handleLinkClick(e, '#planos')}
          >
            Comece Agora
          </Button>

          {onOpenMobileMenu && (
            <button
              onClick={onOpenMobileMenu}
              className="p-1.5 text-zinc-300 hover:text-white rounded-md md:hidden hover:bg-white/5"
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Hero Body */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left relative">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722]">
              Personal Trainer | Nutricionista
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.15] text-white">
            Transforme <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935] drop-shadow-[0_2px_20px_rgba(255,107,0,0.4)]">
              Seu Potencial
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-zinc-300 font-normal max-w-lg leading-relaxed">
            Treinamento personalizado para alcançar seus objetivos com foco, consistência e acompanhamento de excelência.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              href="#planos"
              variant="primary"
              size="md"
              glow
              className="group"
              onClick={(e) => handleLinkClick(e, '#planos')}
            >
              <span>Comece Agora</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              href="#sobre"
              variant="secondary"
              size="md"
              onClick={(e) => handleLinkClick(e, '#sobre')}
            >
              Conheça meu trabalho
            </Button>
          </div>
        </div>

        {/* Right column: Trainer Photo */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[380px] lg:max-w-none">
            {/* Ambient orange glow */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/25 to-transparent rounded-xl blur-xl"
              aria-hidden="true"
            />

            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#12141A] shadow-2xl group">
              <img
                src="/images/hero-trainer.jpg"
                alt="Lizandro Costta treinando"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent opacity-60"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal geometric orange accent in the bottom-left */}
      <div
        className="absolute left-6 bottom-16 w-3 h-20 bg-gradient-to-b from-[#FF6B00] to-[#E53935] -skew-x-[25deg] shadow-[0_0_15px_rgba(255,107,0,0.5)] z-20 pointer-events-none hidden sm:block"
        aria-hidden="true"
      />

      {/* Highlights Bar at Bottom of Stage */}
      <div className="relative z-10 px-6 sm:px-8 py-4 bg-[#0D0F14]/90 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
            >
              <div className="w-8 h-8 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0 group-hover/item:border-[#FF6B00] transition-colors">
                {getIcon(item.icon)}
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover/item:text-white transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
