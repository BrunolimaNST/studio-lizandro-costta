import React from 'react'
import { Quote } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { StarRating } from '../components/ui/StarRating'
import { TESTIMONIALS } from '../data/content'

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#090A0C] relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <SectionTitle
          title="Depoimentos"
          subtitle="A confiança de quem já treina comigo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-[#13151B] border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1"
            >
              <div>
                {/* Quotation icon in orange */}
                <div className="mb-4">
                  <Quote size={28} className="text-[#FF6B00] fill-[#FF6B00]/20 transform -scale-x-100" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Rating */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <StarRating rating={item.rating} size={15} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
