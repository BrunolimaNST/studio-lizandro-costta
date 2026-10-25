import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

const STORAGE_KEY = 'lizandro_costta_cookies_accepted'

/**
 * Modal centralizado de consentimento de cookies e conformidade com a LGPD.
 * Persiste a decisão no localStorage para suprimir reexibições futuras.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY)
      if (!accepted) {
        setVisible(true)
      }
    } catch {
      // Caso localStorage esteja bloqueado pelo navegador
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setIsHiding(true)
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignora falhas se localStorage indisponível
    }
    setTimeout(() => {
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${
        isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className={`bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-[0_0_50px_rgba(234,88,12,0.15)] flex flex-col items-center text-center relative transform transition-all duration-300 ${
          isHiding ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-500">
          <ShieldCheck className="w-6 h-6" aria-hidden="true" />
        </div>

        <h3 id="cookie-consent-title" className="text-lg font-bold text-white mb-2">
          Aviso de Privacidade
        </h3>

        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
          Usamos cookies e tecnologias semelhantes para medir acessos e oferecer a melhor experiência. Ao continuar navegando, você concorda com a nossa política de privacidade.
        </p>

        <button
          type="button"
          onClick={handleAccept}
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer shadow-lg shadow-orange-600/20 active:scale-[0.98]"
        >
          Entendi e Aceito
        </button>
      </div>
    </div>
  )
}
