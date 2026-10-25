import React from 'react'
import { ArrowRight, Dumbbell, BarChart3, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { HIGHLIGHTS } from '../data/content'

export const HeroSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'dumbbell':
        return <Dumbbell className="text-[#FF6B00] shrink-0" size={18} />
      case 'chart':
        return <BarChart3 className="text-[#FF6B00] shrink-0" size={18} />
      case 'shield':
        return <ShieldCheck className="text-[#FF6B00] shrink-0" size={18} />
      case 'zap':
        return <Zap className="text-[#FF6B00] shrink-0" size={18} />
      default:
        return <Zap className="text-[#FF6B00] shrink-0" size={18} />
    }
  }

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#090A0C]">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left relative">
            {/* Geometric orange slash accent in background */}
            <div
              className="absolute -left-12 bottom-0 w-8 h-32 bg-gradient-to-b from-[#FF6B00] to-[#E53935] -skew-x-[25deg] opacity-80 blur-[1px] hidden sm:block -z-10"
              aria-hidden="true"
            />

            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-[#FF6B00]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
                Personal Trainer | Nutricionista
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.15] text-white">
              Transforme <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5722] to-[#E53935] drop-shadow-[0_4px_25px_rgba(255,107,0,0.35)]">
                Seu Potencial
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-normal max-w-xl leading-relaxed">
              Treinamento personalizado para alcançar seus objetivos com foco, técnica e consistência.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="#planos"
                variant="primary"
                size="lg"
                glow
                className="group"
              >
                <span>Comece Agora</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                href="#sobre"
                variant="secondary"
                size="lg"
              >
                Conheça meu trabalho
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Frame & Lighting */}
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              {/* Backlight halo */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/25 via-transparent to-transparent rounded-2xl blur-2xl transform scale-95"
                aria-hidden="true"
              />

              {/* Angled geometric accent corner */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#FF6B00] rounded-tr-lg opacity-80"
                aria-hidden="true"
              />

              {/* Trainer photo container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12141A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src="/images/hero-trainer.jpg"
                  alt="Lizandro Costta treinando"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Bottom gradient overlay to blend into the dark container */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent opacity-60"
                  aria-hidden="true"
                />

                {/* Inner brand emblem watermark on photo */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10">
                  <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Bar (4 Pillars) */}
        <div className="py-6 sm:py-8 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-lg bg-[#12141B]/60 border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00]/20 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
