import React from 'react'
import { X } from 'lucide-react'

// Componentes Internos
import { Button } from '../ui/Button'

// Tipos
import type { NavItem } from '../../types'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavItem[]
}

/**
 * Menu gaveta mobile com transição e links de navegação acessíveis.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0E1016] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <img src="/logo.png" alt="Lizandro Costta" className="h-9 w-auto object-contain" />
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-lg font-medium text-zinc-300 hover:text-[#FF6B00] py-2 transition-colors border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-600">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-white/10">
          <Button
            href="#planos"
            variant="primary"
            size="lg"
            glow
            className="w-full text-center"
            onClick={onClose}
          >
            Comece Agora
          </Button>
          <p className="mt-3 text-center text-xs text-zinc-500">
            Lizandro Costta • Personal Trainer | Nutricionista
          </p>
        </div>
      </div>
    </div>
  )
}
