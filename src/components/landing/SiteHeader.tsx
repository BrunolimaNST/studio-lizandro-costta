import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useGSAP } from '@gsap/react'

// Animações e Configurações
import { gsap, ScrollTrigger } from '../../utils/gsapConfig'
import { useMagneticButton } from '../../animations/useMagneticButton'
import { MOTION } from '../../animations/constants'

// Hooks Customizados
import { useActiveSection } from '../../hooks/useActiveSection'

// Conteúdo e Tipos
import { BRAND, NAV_LINKS, SECTION_IDS, HERO } from '../../data/landingContent'

// Assets
import flameMark from '../../assets/flame-mark.png'
import logoText from '../../assets/logo-text.png'

/**
 * Cabeçalho principal (Header) fixo com efeito de blur ao rolar (shrink & glass),
 * navegação responsiva com drawer mobile animado e detecção ativa de seções.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const ctaRef = useMagneticButton<HTMLAnchorElement>({ strength: 0.22 })
  const rawActive = useActiveSection(SECTION_IDS, 'inicio')
  const active = rawActive === 'depoimentos' ? 'planos' : rawActive

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Entrada do Header vindo de cima
        gsap.from(headerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: MOTION.easePrimary,
          delay: 0.2,
        })

        // ScrollTrigger para shrink e blur do header ao rolar
        ScrollTrigger.create({
          start: 'top -40',
          onUpdate: (self) => {
            if (self.scroll() > 50) {
              headerRef.current?.classList.add('is-scrolled')
            } else {
              headerRef.current?.classList.remove('is-scrolled')
            }
          },
        })
      })
    },
    { scope: headerRef },
  )

  // Animação suave para o drawer mobile ao abrir/fechar
  useGSAP(
    () => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches
      if (!isMobile || !navRef.current) return

      if (open) {
        gsap.fromTo(
          navRef.current,
          { autoAlpha: 0, y: -16 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: MOTION.easePrimary },
        )
        gsap.fromTo(
          '.site-nav__link, .site-nav__cta',
          { autoAlpha: 0, y: -10 },
          { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.05, ease: MOTION.easePrimary },
        )
      }
    },
    { dependencies: [open], scope: headerRef },
  )

  const close = () => setOpen(false)

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header__inner">
        <a href="#inicio" className="site-header__brand" aria-label={`${BRAND.name} – voltar ao início`} onClick={close}>
          <img
            src={flameMark}
            alt=""
            aria-hidden="true"
            className="site-header__logo-flame"
            width={170}
            height={222}
            decoding="async"
          />
          <img
            src={logoText}
            alt={BRAND.name}
            className="site-header__logo-text"
            width={472}
            height={135}
            decoding="async"
          />
        </a>

        <nav
          id="site-nav"
          ref={navRef}
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`site-nav__link${isActive ? ' is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a href="#contato" className="btn btn--primary btn--pill site-nav__cta" onClick={close}>
            {HERO.primaryCta}
          </a>
        </nav>

        <div className="site-header__actions">
          <a
            ref={ctaRef}
            href="#contato"
            className="btn btn--primary btn--pill btn--sm site-header__cta"
          >
            {HERO.primaryCta}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="menu-toggle__icon" aria-hidden="true" />
            ) : (
              <Menu className="menu-toggle__icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
