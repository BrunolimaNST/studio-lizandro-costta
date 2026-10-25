import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

// Componentes Internos
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'

// Dados e Navegação
import { NAVIGATION_LINKS } from '../../data/content'

/**
 * Componente de Cabeçalho alternativo para o layout panorâmico.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0C]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group" aria-label="Lizandro Costta Início">
              <img
                src="/logo.png"
                alt="Lizandro Costta Personal Trainer | Nutricionista"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right actions: CTA button & Mobile toggle */}
            <div className="flex items-center gap-4">
              <Button
                href="#planos"
                variant="primary"
                size="sm"
                glow
                className="hidden sm:inline-flex rounded-full px-5 py-2 text-xs font-extrabold"
              >
                Comece Agora
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-zinc-300 hover:text-white rounded-md hover:bg-white/5 transition-colors md:hidden focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                aria-label="Abrir menu de navegação"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAVIGATION_LINKS}
      />
    </>
  )
}
