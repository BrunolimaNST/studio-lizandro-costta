import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'

// Utilitários e Animações
import { gsap, ScrollTrigger } from './utils/gsapConfig'

// Componentes Estruturais e de Seção
import { Preloader } from './components/common/Preloader'
import { SiteHeader } from './components/landing/SiteHeader'
import { Hero } from './components/landing/Hero'
import { About } from './components/landing/About'
import { Programs } from './components/landing/Programs'
import { PilaresScroll } from './components/landing/PilaresScroll'
import { Plans } from './components/landing/Plans'
import { Testimonials } from './components/landing/Testimonials'
import { Contact } from './components/landing/Contact'
import { SiteFooter } from './components/landing/SiteFooter'
import { BackgroundNeon } from './components/landing/BackgroundNeon'

// Modais e Conformidade
import { AnimatedModal } from './components/ui/AnimatedModal'
import { ModalSobreMim } from './components/ui/ModalSobreMim'
import { CookieConsent } from './components/ui/CookieConsent'

// Tipos
import type { ModalData } from './components/ui/AnimatedModal'

/**
 * Componente raiz da aplicação do Sttudio Lizandro Costta.
 * Orquestra ciclo de vida do Preloader, Lenis Smooth Scroll sincronizado
 * com GSAP ScrollTrigger, estados dos modais e conformidade LGPD.
 */
export const App: React.FC = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)

  const handleOpenModal = (data: ModalData) => {
    setModalData(data)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    // Desativa a memória de scroll nativa do navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    // Força a página para o pixel zero (topo absoluto) instantaneamente
    window.scrollTo(0, 0)
  }, [])

  // Inicialização e sincronização do Lenis com GSAP ScrollTrigger
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    })
    lenis.scrollTo(0, { immediate: true })

    // Atualiza ScrollTrigger a cada ciclo de scroll do Lenis
    lenis.on('scroll', ScrollTrigger.update)

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateRaf)
    gsap.ticker.lagSmoothing(0)

    // Rolagem suave inteligente para links de âncora (#sobre, #treinos, etc.)
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href && href.length > 1) {
        const targetElement = document.querySelector(href) as HTMLElement | null
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement, {
            offset: -70,
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
        }
      }
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      gsap.ticker.remove(updateRaf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="overflow-x-hidden">
        <Hero />

        {/* Fundo contínuo dinâmico estilo neon tech / cyber-fitness para as seções centrais */}
        <div className="relative bg-zinc-950 overflow-hidden">
          <BackgroundNeon />
          <About onOpenModal={handleOpenModal} />
          <PilaresScroll />
          <Programs onOpenModal={handleOpenModal} />
          <Plans />
          <Testimonials />
        </div>

        <Contact />
      </main>
      <SiteFooter />

      {/* Modal animado reutilizável com GSAP */}
      {/* Modal exclusivo "Sobre Mim" (split layout) */}
      <ModalSobreMim
        open={isModalOpen && modalData?.variant === 'about'}
        onClose={handleCloseModal}
        data={modalData?.variant === 'about' ? modalData : null}
      />

      {/* Modal animado reutilizável com GSAP (treinos e programas) */}
      <AnimatedModal
        open={isModalOpen && modalData?.variant !== 'about'}
        onClose={handleCloseModal}
        data={modalData?.variant === 'about' ? null : modalData}
      />

      {/* Aviso de conformidade e cookies (LGPD) */}
      <CookieConsent />
    </>
  )
}

export default App
