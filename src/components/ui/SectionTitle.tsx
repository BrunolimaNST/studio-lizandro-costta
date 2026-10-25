import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  align = 'left',
  className = ''
}) => {
  const isCenter = align === 'center'

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-bold tracking-widest text-[#FF6B00] uppercase mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-zinc-400 font-normal max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
