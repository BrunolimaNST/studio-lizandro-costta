import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

/**
 * Componente de botão reutilizável com variantes de estilo (primary, secondary, outline, glass),
 * efeito de reflexo dinâmico de luz e suporte a renderização polimórfica como link ou botão nativo.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glow = false,
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded-md overflow-hidden group select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 focus:ring-offset-[#090A0C] active:scale-[0.98]'

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-extrabold tracking-widest'
  }

  const variantStyles = {
    primary: `bg-gradient-to-r from-[#FF6B00] to-[#E53935] text-white hover:from-[#FF7817] hover:to-[#EF4444] shadow-md ${
      glow ? 'shadow-[0_0_25px_rgba(255,107,0,0.45)] hover:shadow-[0_0_35px_rgba(255,107,0,0.65)]' : 'hover:shadow-[0_0_20px_rgba(255,107,0,0.35)]'
    }`,
    secondary: 'bg-[#13151B]/90 hover:bg-[#1A1D26] text-white border border-white/10 hover:border-[#FF6B00]/40 backdrop-blur-md shadow-sm',
    outline: 'bg-transparent text-white border border-white/20 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:bg-[#FF6B00]/5',
    glass: 'bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md'
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const content = (
    <>
      {/* Sliding reflection light shine effect on primary */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} role="button">
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
