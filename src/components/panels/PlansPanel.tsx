import React from 'react'
import { Check } from 'lucide-react'
import { PLANS } from '../../data/content'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

interface PlansPanelProps {
  className?: string
  isInteractive?: boolean
}

export const PlansPanel: React.FC<PlansPanelProps> = ({ className = '' }) => {
  return (
    <div
      id="planos"
      className={`rounded-2xl bg-[#0E1016]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          Planos
        </h2>
        <p className="text-xs text-zinc-400 font-normal mt-0.5">
          Escolha o plano ideal para você.
        </p>
      </div>

      {/* Grid of plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch pt-2">
        {PLANS.map((plan) => {
          const isPopular = plan.popular

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 justify-between transition-all duration-300 ${
                isPopular
                  ? 'border-orange-500/80 shadow-[0_0_30px_rgba(255,87,34,0.3)] z-10'
                  : 'hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <Badge variant="orange" className="px-3 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    Mais Popular
                  </Badge>
                </div>
              )}

              <div>
                <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-tight break-words whitespace-normal">
                  {plan.name}
                </h3>
                <p className="text-[11px] text-zinc-400 font-normal mt-0.5 break-words whitespace-normal">
                  {plan.tagline}
                </p>

                {/* Valor Principal Inteiro com Centavos */}
                <div className="mt-4 mb-5">
                  <div className="flex items-baseline text-white whitespace-nowrap">
                    <span className="text-lg md:text-xl font-bold text-orange-500 mr-1">R$</span>
                    <span className="text-3xl lg:text-4xl font-extrabold leading-none tracking-normal">
                      {plan.precoPrincipal || plan.price.replace('R$', '').trim()}
                    </span>
                  </div>
                  {/* Texto Complementar com margem superior extra (mt-2) */}
                  <p className="text-xs text-zinc-400 mt-2 font-medium">
                    {plan.subtextoPreco || plan.period}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 border-t border-zinc-800/80 pt-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#FF6B00]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#FF6B00] stroke-[3]" />
                      </div>
                      <span className="flex-1 text-zinc-300 leading-relaxed text-xs">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <Button
                  href={`https://wa.me/554999003369?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${plan.name} do Sttudio Lizandro Costta.`)}`}
                  variant={isPopular ? 'primary' : 'outline'}
                  size="sm"
                  glow={isPopular}
                  className="w-full text-center text-xs"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
