import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ABOUT_CONTENT } from '../../data/content'
import { Button } from '../ui/Button'

interface AboutPanelProps {
  className?: string
}

export const AboutPanel: React.FC<AboutPanelProps> = ({ className = '' }) => {
  return (
    <div
      id="sobre"
      className={`rounded-2xl bg-[#0E1016]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left side: Texts */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722] mb-1.5">
            {ABOUT_CONTENT.tag}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {ABOUT_CONTENT.paragraph}
          </p>

          <div className="mt-5">
            <Button
              href="#contato"
              variant="outline"
              size="sm"
              className="text-xs"
            >
              <span>Saiba Mais</span>
              <ArrowRight size={14} className="text-[#FF6B00]" />
            </Button>
          </div>
        </div>

        {/* Right side: Photo with diagonal orange slashes */}
        <div className="md:col-span-5 relative">
          <div className="relative mx-auto max-w-[240px] md:max-w-none">
            {/* Diagonal orange slash as in mockup */}
            <div
              className="absolute -left-3 top-1/4 w-2.5 h-24 bg-gradient-to-b from-[#FF6B00] to-[#E53935] -skew-x-[25deg] shadow-[0_0_15px_rgba(255,107,0,0.5)] z-20"
              aria-hidden="true"
            />

            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#14161E] shadow-xl">
              <img
                src={ABOUT_CONTENT.image}
                alt="Lizandro Costta"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0E1016] via-transparent to-transparent opacity-40"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
