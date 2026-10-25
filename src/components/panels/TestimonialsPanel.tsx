import React from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import { StarRating } from '../ui/StarRating'

interface TestimonialsPanelProps {
  className?: string
}

export const TestimonialsPanel: React.FC<TestimonialsPanelProps> = ({ className = '' }) => {
  return (
    <div
      id="depoimentos"
      className={`rounded-2xl bg-[#0E1016]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          Depoimentos
        </h2>
        <p className="text-xs text-zinc-400 font-normal mt-0.5">
          A confiança de quem já treina comigo.
        </p>
      </div>

      {/* Grid of 3 testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-[#13151B] border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-2.5">
                <Quote size={20} className="text-[#FF6B00] fill-[#FF6B00]/20 transform -scale-x-100" />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                {item.name}
              </span>
              <StarRating rating={item.rating} size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
