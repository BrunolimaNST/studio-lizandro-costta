import React from 'react'
import { Dumbbell, Flame, Activity, ArrowRight } from 'lucide-react'
import { PROGRAMS } from '../../data/content'

interface ProgramsPanelProps {
  className?: string
}

export const ProgramsPanel: React.FC<ProgramsPanelProps> = ({ className = '' }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell size={18} className="text-[#FF6B00]" />
      case 'flame':
        return <Flame size={18} className="text-[#FF6B00]" />
      case 'activity':
        return <Activity size={18} className="text-[#FF6B00]" />
      default:
        return <Dumbbell size={18} className="text-[#FF6B00]" />
    }
  }

  return (
    <div
      id="treinos"
      className={`rounded-2xl bg-[#0E1016]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          Treinos e Programas
        </h2>
        <p className="text-xs text-zinc-400 font-normal mt-0.5">
          Programas completos para cada objetivo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            className="group rounded-xl bg-[#13151B] border border-white/10 hover:border-[#FF6B00]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#13151B] via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded bg-[#FF6B00]/10 flex items-center justify-center">
                    {getIcon(prog.icon)}
                  </div>
                  <h3 className="text-sm font-black uppercase text-white group-hover:text-[#FF6B00] transition-colors">
                    {prog.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FF6B00] transition-colors"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight size={12} className="text-[#FF6B00]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
