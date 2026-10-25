import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'dark' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  className = ''
}) => {
  const variantStyles = {
    orange: 'bg-gradient-to-r from-[#FF6B00] to-[#E53935] text-white font-bold shadow-[0_2px_10px_rgba(255,107,0,0.3)]',
    dark: 'bg-[#191C24] text-zinc-300 border border-white/10 font-semibold',
    outline: 'border border-[#FF6B00]/40 text-[#FF6B00] bg-[#FF6B00]/10 font-semibold'
  }

  return (
    <span className={`inline-flex items-center text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
