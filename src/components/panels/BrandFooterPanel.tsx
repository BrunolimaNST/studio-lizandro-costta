import React from 'react'

interface BrandFooterPanelProps {
  className?: string
}

export const BrandFooterPanel: React.FC<BrandFooterPanelProps> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-2xl bg-[#08090D]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 ${className}`}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-[#FF6B00]/8 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Left: Official Logo + Slogan */}
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative z-10">
        <a href="#inicio" className="inline-block transition-transform duration-300 hover:scale-105">
          <img
            src="/logo.png"
            alt="Lizandro Costta Personal Trainer | Nutricionista"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        <div className="hidden sm:block h-10 w-[1px] bg-white/15" aria-hidden="true" />

        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-300 font-extrabold max-w-xs">
          Mais que treino, um estilo de vida.
        </p>
      </div>

      {/* Right side: Geometric angular cut in red/orange as seen in reference mockup */}
      <div className="flex items-center gap-6 relative z-10">
        <div className="text-right hidden lg:block">
          <p className="text-[11px] text-zinc-400 font-medium">
            Consultoria Esportiva & Personal Trainer | Nutricionista
          </p>
          <p className="text-[10px] text-zinc-600">
            © {new Date().getFullYear()} Lizandro Costta. Todos os direitos reservados.
          </p>
        </div>

        {/* Angular decorative badge accent */}
        <div
          className="w-12 h-12 border-r-2 border-b-2 border-[#FF6B00] -skew-x-[20deg] opacity-70 hidden sm:block"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
