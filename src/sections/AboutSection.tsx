import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { ABOUT_CONTENT } from '../data/content'

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#FF6B00]/8 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
                {ABOUT_CONTENT.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {ABOUT_CONTENT.title}
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
              {ABOUT_CONTENT.paragraph}
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Button
                href="#contato"
                variant="outline"
                size="md"
                className="group"
              >
                <span>Saiba Mais</span>
                <ArrowRight size={16} className="text-[#FF6B00] transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column: Image with dynamic geometric orange accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Bold diagonal orange slashes flanking the image as in reference mockup */}
              <div
                className="absolute -left-4 sm:-left-6 top-1/4 w-3.5 h-32 bg-gradient-to-b from-[#FF6B00] to-[#E53935] -skew-x-[25deg] shadow-[0_0_20px_rgba(255,107,0,0.5)] z-20"
                aria-hidden="true"
              />
              <div
                className="absolute -right-3 bottom-12 w-3.5 h-24 bg-gradient-to-b from-[#FF6B00] to-[#E53935] -skew-x-[25deg] shadow-[0_0_20px_rgba(255,107,0,0.5)] z-20 hidden sm:block"
                aria-hidden="true"
              />

              {/* Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#14161E] shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <img
                  src={ABOUT_CONTENT.image}
                  alt="Lizandro Costta treinando"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-50"
                  aria-hidden="true"
                />

                {/* Corner detail */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] uppercase font-bold tracking-wider text-zinc-300">
                  Alta Performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
