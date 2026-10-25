import React, { useRef, useState } from 'react'
import { HeroStage } from '../panels/HeroStage'
import { PlansPanel } from '../panels/PlansPanel'
import { ProgramsPanel } from '../panels/ProgramsPanel'
import { AboutPanel } from '../panels/AboutPanel'
import { TestimonialsPanel } from '../panels/TestimonialsPanel'
import { ContactPanel } from '../panels/ContactPanel'
import { BrandFooterPanel } from '../panels/BrandFooterPanel'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../utils/gsapConfig'
import { Maximize2, Layers } from 'lucide-react'

interface PanoramicStageProps {
  onOpenMobileMenu: () => void
}

export const PanoramicStage: React.FC<PanoramicStageProps> = ({ onOpenMobileMenu }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFocus, setActiveFocus] = useState<string | null>(null)

  // GSAP Choreography
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
          reduceMotion: '(prefers-reduced-motion: reduce)'
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean
            isMobile: boolean
            reduceMotion: boolean
          }

          if (reduceMotion) {
            gsap.set('.gsap-panel, .gsap-hero-stage', { autoAlpha: 1, y: 0, x: 0, scale: 1 })
            return
          }

          const masterTl = gsap.timeline({
            defaults: { ease: 'power3.out' }
          })

          if (isDesktop) {
            // Master cinematic entrance matching the reference layout
            masterTl
              .fromTo(
                '.gsap-hero-stage',
                { autoAlpha: 0, scale: 0.92, y: 30 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 1.1 }
              )
              .fromTo(
                '.gsap-panel-left',
                { autoAlpha: 0, x: -60, scale: 0.95 },
                { autoAlpha: 1, x: 0, scale: 1, duration: 0.9, stagger: 0.15 },
                '-=0.7'
              )
              .fromTo(
                '.gsap-panel-right',
                { autoAlpha: 0, x: 60, scale: 0.95 },
                { autoAlpha: 1, x: 0, scale: 1, duration: 0.9, stagger: 0.15 },
                '-=0.8'
              )
              .fromTo(
                '.gsap-panel-bottom',
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 0.8 },
                '-=0.6'
              )
          } else {
            // Smooth vertical cascade on smaller devices
            masterTl.fromTo(
              '.gsap-panel, .gsap-hero-stage',
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 }
            )
          }
        }
      )
    },
    { scope: containerRef }
  )

  const handleFocus = (panelId: string) => {
    setActiveFocus((prev) => (prev === panelId ? null : panelId))
    const el = document.getElementById(panelId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#07080A] text-zinc-100 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Cinematic Ambient Glow and Stage Lighting */}
      <div
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FF6B00]/8 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-[#E53935]/6 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Floating Mode Info Pill */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Studio Lizandro Costta • Experiência Panorâmica
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
          <Layers size={14} className="text-[#FF6B00]" />
          <span>Composição de Painéis Sobrepostos</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP PANORAMIC COMPOSITION (FIDELIDADE EXATA À IMAGEM) */}
      {/* ======================================================== */}
      <div className="hidden xl:block max-w-[1720px] mx-auto relative perspective-[1400px]">
        {/* ROW 1: TOP ROW (Planos Overlapping on Left, Hero in Center, Sobre Mim on Right) */}
        <div className="grid grid-cols-12 gap-6 items-start relative z-10">
          {/* TOP LEFT: PLANOS (Overlapping with subtle angle and lift) */}
          <div
            className={`col-span-4 gsap-panel gsap-panel-left transition-all duration-500 transform ${
              activeFocus === 'planos'
                ? 'scale-[1.03] z-30 shadow-[0_0_50px_rgba(255,107,0,0.35)]'
                : 'hover:scale-[1.01] hover:z-20'
            }`}
            onClick={() => handleFocus('planos')}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-zinc-400 hover:text-white">
                <Maximize2 size={14} />
              </div>
              <PlansPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
            </div>
          </div>

          {/* CENTER: HERO STAGE (The Prominent Main Canvas) */}
          <div className="col-span-8 gsap-hero-stage relative z-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <HeroStage onOpenMobileMenu={onOpenMobileMenu} onNavigate={handleFocus} />
          </div>
        </div>

        {/* ROW 2: MIDDLE / LOWER ROW (Treinos on Left, Sobre Mim & Depoimentos on Right) */}
        <div className="grid grid-cols-12 gap-6 items-start mt-6 relative z-10">
          {/* LOWER LEFT: TREINOS E PROGRAMAS */}
          <div
            className={`col-span-6 gsap-panel gsap-panel-left transition-all duration-500 transform ${
              activeFocus === 'treinos'
                ? 'scale-[1.02] z-30 shadow-[0_0_50px_rgba(255,107,0,0.35)]'
                : 'hover:scale-[1.01] hover:z-20'
            }`}
            onClick={() => handleFocus('treinos')}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-zinc-400 hover:text-white">
                <Maximize2 size={14} />
              </div>
              <ProgramsPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
            </div>
          </div>

          {/* LOWER RIGHT: SOBRE MIM & DEPOIMENTOS */}
          <div className="col-span-6 flex flex-col gap-6">
            {/* SOBRE MIM */}
            <div
              className={`gsap-panel gsap-panel-right transition-all duration-500 transform ${
                activeFocus === 'sobre'
                  ? 'scale-[1.02] z-30 shadow-[0_0_50px_rgba(255,107,0,0.35)]'
                  : 'hover:scale-[1.01] hover:z-20'
              }`}
              onClick={() => handleFocus('sobre')}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-zinc-400 hover:text-white">
                  <Maximize2 size={14} />
                </div>
                <AboutPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
              </div>
            </div>

            {/* DEPOIMENTOS */}
            <div
              className={`gsap-panel gsap-panel-right transition-all duration-500 transform ${
                activeFocus === 'depoimentos'
                  ? 'scale-[1.02] z-30 shadow-[0_0_50px_rgba(255,107,0,0.35)]'
                  : 'hover:scale-[1.01] hover:z-20'
              }`}
              onClick={() => handleFocus('depoimentos')}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-zinc-400 hover:text-white">
                  <Maximize2 size={14} />
                </div>
                <TestimonialsPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: BOTTOM BASE (Vamos Conversar on Left, Brand Footer in Center/Wide) */}
        <div className="grid grid-cols-12 gap-6 items-center mt-6 relative z-10">
          {/* BOTTOM LEFT: VAMOS CONVERSAR? */}
          <div
            className={`col-span-5 gsap-panel gsap-panel-left transition-all duration-500 transform ${
              activeFocus === 'contato'
                ? 'scale-[1.02] z-30 shadow-[0_0_50px_rgba(255,107,0,0.35)]'
                : 'hover:scale-[1.01] hover:z-20'
            }`}
            onClick={() => handleFocus('contato')}
          >
            <div className="relative group cursor-pointer">
              <ContactPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
            </div>
          </div>

          {/* BOTTOM CENTER/RIGHT: BRAND FOOTER PANEL */}
          <div className="col-span-7 gsap-panel gsap-panel-bottom">
            <BrandFooterPanel className="border-[#272B36] hover:border-[#FF6B00]/40 transition-colors" />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* RESPONSIVE LAYOUT (LAPTOPS, TABLETS, SMARTPHONES <1280px) */}
      {/* ======================================================== */}
      <div className="block xl:hidden max-w-5xl mx-auto space-y-8">
        {/* 1. Hero Stage */}
        <div className="gsap-hero-stage">
          <HeroStage onOpenMobileMenu={onOpenMobileMenu} onNavigate={handleFocus} />
        </div>

        {/* 2. Planos Panel */}
        <div className="gsap-panel">
          <PlansPanel />
        </div>

        {/* 3. Treinos e Programas Panel */}
        <div className="gsap-panel">
          <ProgramsPanel />
        </div>

        {/* 4. Sobre Mim Panel */}
        <div className="gsap-panel">
          <AboutPanel />
        </div>

        {/* 5. Depoimentos Panel */}
        <div className="gsap-panel">
          <TestimonialsPanel />
        </div>

        {/* 6. Vamos Conversar (Contato) Panel */}
        <div className="gsap-panel">
          <ContactPanel />
        </div>

        {/* 7. Brand Footer Panel */}
        <div className="gsap-panel">
          <BrandFooterPanel />
        </div>
      </div>
    </div>
  )
}
