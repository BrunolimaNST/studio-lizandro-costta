import React from 'react'
import { MessageCircle, Mail } from 'lucide-react'

// Dados e Navegação
import { NAVIGATION_LINKS } from '../../data/content'

/**
 * Componente de Rodapé alternativo para o layout panorâmico.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#07080A] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#FF6B00]/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline as in mockup */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <a href="#inicio" className="inline-block">
              <img
                src="/logo.png"
                alt="Lizandro Costta Personal Trainer | Nutricionista"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>
            <div className="hidden sm:block h-10 w-[1px] bg-white/10" aria-hidden="true" />
            <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-semibold max-w-xs">
              Mais que treino, um estilo de vida.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FF6B00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/554999003369?text=Ol%C3%A1%20Lizandro!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20suas%20consultorias."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B00]/20 hover:text-[#FF6B00] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B00]/20 hover:text-[#FF6B00] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="mailto:contato@lizandrocostta.com.br"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B00]/20 hover:text-[#FF6B00] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-zinc-300">
              Horário de Funcionamento
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Segunda a Quinta: <strong className="text-zinc-200">06h às 12h | 14h às 22h</strong> &bull; Sexta-feira: <strong className="text-zinc-200">06h às 12h | 16h às 21h</strong> &bull; Sábado: <strong className="text-zinc-200">08h às 12h</strong>
            </p>
          </div>
          <p className="text-xs text-zinc-500 italic">
            O horário fica à sua escolha dentro destes períodos.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Lizandro Costta Personal Trainer | Nutricionista. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com alta performance e precisão visual
          </p>
        </div>
      </div>
    </footer>
  )
}
