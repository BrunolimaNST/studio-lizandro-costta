import React from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating?: number
  maxRating?: number
  size?: number
  className?: string
}

/**
 * Componente acessível de avaliação por estrelas (Star Rating).
 * Renderiza ícones de estrela proporcionais à nota com suporte a leitores de tela.
 */
export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  size = 14,
  className = ''
}) => {
  return (
    <div
      role="img"
      className={`flex items-center gap-1 ${className}`}
      aria-label={`Avaliação: ${rating} de ${maxRating} estrelas`}
    >
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={`star-item-${index}`}
          size={size}
          aria-hidden="true"
          className={`${
            index < rating
              ? 'fill-[#FF6B00] text-[#FF6B00]'
              : 'fill-zinc-700 text-zinc-700'
          }`}
        />
      ))}
    </div>
  )
}
