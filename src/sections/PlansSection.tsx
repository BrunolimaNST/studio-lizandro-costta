import React from 'react'
import { Check } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { PLANS } from '../data/content'

export const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#090A0C] relative">
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <SectionTitle
          title="Planos"
          subtitle="Escolha o plano ideal para você."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {PLANS.map((plan) => {
            const isPopular = plan.popular

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 justify-between transition-all duration-300 ${
                  isPopular
                    ? 'border-orange-500/80 shadow-[0_0_40px_rgba(255,107,0,0.25)] lg:-translate-y-3 z-10'
                    : 'hover:border-zinc-700 shadow-lg'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <Badge variant="orange" className="px-4 py-1 text-[11px] font-black uppercase tracking-wider">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Header */}
                  <h3 className="text-xl font-black uppercase tracking-tight text-white break-words whitespace-normal">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 font-normal break-words whitespace-normal">
                    {plan.tagline}
                  </p>

                  {/* Valor Principal Inteiro com Centavos */}
                  <div className="mt-4 mb-6">
                    <div className="flex items-baseline text-white whitespace-nowrap">
                      <span className="text-xl md:text-2xl font-bold text-orange-500 mr-1">R$</span>
                      <span className="text-4xl lg:text-5xl font-extrabold leading-none tracking-normal">
                        {plan.precoPrincipal || plan.price.replace('R$', '').trim()}
                      </span>
                    </div>
                    {/* Texto Complementar com margem superior extra (mt-2) */}
                    <p className="text-sm md:text-base text-zinc-400 mt-2 font-medium">
                      {plan.subtextoPreco || plan.period}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 flex-1 border-t border-zinc-800/80 pt-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={13} className="text-[#FF6B00] stroke-[3]" />
                        </div>
                        <span className="flex-1 text-zinc-300 leading-relaxed text-sm md:text-base">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-10 pt-4">
                  <Button
                    href={`https://wa.me/554999003369?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${plan.name} do Sttudio Lizandro Costta.`)}`}
                    variant={isPopular ? 'primary' : 'outline'}
                    size="md"
                    glow={isPopular}
                    className="w-full text-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
