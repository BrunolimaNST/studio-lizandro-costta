import type { SVGProps } from 'react'

/**
 * Ícones que não existem no Lucide instalado (v1.56), desenhados no mesmo
 * padrão visual (viewBox 24, traço, pontas arredondadas).
 */
type IconProps = SVGProps<SVGSVGElement>

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

/** Corredor (programa Condicionamento). */
export function RunnerIcon({ className = '', ...props }: IconProps) {
  return (
    <svg {...base} {...props} className={`lucide ${className}`}>
      <circle cx="15" cy="4.5" r="1.8" />
      <path d="M13.5 8 11 13.5" />
      <path d="m11 13.5 3.5 3-1 4.5" />
      <path d="m11 13.5-3 2.5H5" />
      <path d="M13.5 8 9.5 9l-2 2.5" />
      <path d="m13.5 8 2 3.5H19" />
    </svg>
  )
}

/** WhatsApp em versão traço (balão + telefone). */
export function WhatsAppIcon({ className = '', ...props }: IconProps) {
  return (
    <svg {...base} {...props} className={`lucide ${className}`}>
      <path d="M3.5 20.5 4.8 16.6A8.5 8.5 0 1 1 8 19.6Z" />
      <path d="M9.2 8.4c.3-.5.8-.5 1.1 0l.7 1.3c.2.3.1.6-.1.9l-.5.5a5.2 5.2 0 0 0 2.5 2.5l.5-.5c.3-.2.6-.3.9-.1l1.3.7c.5.3.5.8 0 1.1l-.8.5a2 2 0 0 1-1.9.1 8.4 8.4 0 0 1-4.3-4.3 2 2 0 0 1 .1-1.9Z" />
    </svg>
  )
}
