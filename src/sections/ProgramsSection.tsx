import React from 'react'
import { Dumbbell, Flame, Activity, ArrowRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { PROGRAMS } from '../data/content'

export const ProgramsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell size={20} className="text-[#FF6B00]" />
      case 'flame':
        return <Flame size={20} className="text-[#FF6B00]" />
      case 'activity':
        return <Activity size={20} className="text-[#FF6B00]" />
      default:
        return <Dumbbell size={20} className="text-[#FF6B00]" />
    }
  }

  return (
    <section id="treinos" className="py-20 lg:py-28 bg-[#0B0C10] relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <SectionTitle
          title="Treinos e Programas"
          subtitle="Programas completos para cada objetivo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group relative rounded-xl bg-[#13151B] border border-white/10 hover:border-[#FF6B00]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,107,0,0.15)] flex flex-col"
            >
              {/* Image banner with dark overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#13151B] via-[#13151B]/40 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating icon badge */}
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-[#0E1016]/90 border border-[#FF6B00]/30 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:border-[#FF6B00] transition-colors">
                  {getIcon(prog.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#FF6B00] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 font-normal leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Link */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FF6B00] transition-colors group/link"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight
                      size={14}
                      className="text-[#FF6B00] transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
