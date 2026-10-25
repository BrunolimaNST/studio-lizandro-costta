import React from 'react'

/**
 * Fundo contínuo estilizado com iluminação neon tech, grade cyber-fitness,
 * orbs difusos e ondas dinâmicas com efeito de pulso para as seções centrais.
 */
export const BackgroundNeon: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* 1. Grade sutil de pontos tech / cyber-fitness */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:36px_36px]"
      />

      {/* 2. Luzes Difusas (Orbs Neon) distribuídas ao longo da altura */}
      {/* Orb 1 - Topo / Sobre Mim (Canto esquerdo) */}
      <div
        className="absolute top-[5%] -left-[10%] w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] bg-orange-600/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      {/* Orb 2 - Pilares (Canto direito) */}
      <div
        className="absolute top-[26%] -right-[8%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      {/* Orb 3 - Treinos e Programas (Centro-Esquerda) */}
      <div
        className="absolute top-[48%] -left-[5%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-orange-500/10 rounded-full blur-[160px] animate-pulse"
        style={{ animationDuration: '7s' }}
      />
      {/* Orb 4 - Planos (Direita) */}
      <div
        className="absolute top-[70%] -right-[10%] w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] bg-orange-600/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: '9s' }}
      />
      {/* Orb 5 - Depoimentos (Base / Centro) */}
      <div
        className="absolute top-[88%] left-[15%] w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] bg-amber-600/10 rounded-full blur-[130px] animate-pulse"
        style={{ animationDuration: '6.5s' }}
      />

      {/* 3. Ondas Fluidas (SVG Curves com Neon Glow) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1200 4000"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neon-glow-gradient-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
            <stop offset="20%" stopColor="#FF6B00" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FFA000" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#FF5722" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="neon-glow-gradient-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5722" stopOpacity="0" />
            <stop offset="30%" stopColor="#FF6B00" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#FF8A00" stopOpacity="0.65" />
            <stop offset="85%" stopColor="#FF3D00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="neon-glow-gradient-3" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
            <stop offset="25%" stopColor="#FF7A00" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FF9100" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Onda Neon 1: Desce suavemente da esquerda cruzando o meio */}
        <path
          d="M -40 250 C 350 450 850 350 920 950 C 990 1550 250 1700 380 2300 C 510 2900 1150 3100 1240 3850"
          stroke="url(#neon-glow-gradient-1)"
          strokeWidth="2.5"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))' }}
          className="animate-pulse"
        />

        {/* Onda Neon 2: Cruza em sentido inverso com curva S harmoniosa */}
        <path
          d="M 1240 400 C 900 750 380 1000 220 1550 C 60 2100 950 2350 800 2950 C 650 3550 180 3750 -40 3950"
          stroke="url(#neon-glow-gradient-2)"
          strokeWidth="2"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))' }}
        />

        {/* Onda Neon 3: Fluxo dinâmico fino tracejado */}
        <path
          d="M 150 100 C 600 650 1050 1250 650 1900 C 250 2550 1080 2800 750 3650"
          stroke="url(#neon-glow-gradient-3)"
          strokeWidth="1.5"
          strokeDasharray="10 16"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 6px rgba(249, 115, 22, 0.5))' }}
          className="opacity-70"
        />
      </svg>

      {/* 4. Formas Geométricas Tecnológicas Espalhadas */}
      {/* Hexágono 1 - Topo / Direita */}
      <div className="absolute top-[7%] right-[8%] w-16 h-16 text-orange-500/25 animate-[spin_25s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <polygon
            points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Cruz Fina 1 - Esquerda */}
      <div className="absolute top-[17%] left-[6%] w-7 h-7 text-orange-500/30 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Anéis Concêntricos 1 - Pilares */}
      <div className="absolute top-[31%] left-[4%] w-24 h-24 text-orange-500/20 animate-[spin_45s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Hexágono 2 - Treinos / Direita */}
      <div className="absolute top-[46%] right-[6%] w-20 h-20 text-orange-500/25 animate-[spin_32s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <polygon
            points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Cruz Fina 2 - Centro-Direita */}
      <div className="absolute top-[59%] right-[10%] w-6 h-6 text-orange-500/30 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Anéis Concêntricos 2 - Planos */}
      <div className="absolute top-[73%] left-[7%] w-20 h-20 text-orange-500/20 animate-[spin_38s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Hexágono 3 - Depoimentos / Esquerda */}
      <div className="absolute top-[86%] left-[9%] w-14 h-14 text-orange-500/25 animate-[spin_28s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <polygon
            points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Cruz Fina 3 - Depoimentos / Direita */}
      <div className="absolute top-[92%] right-[8%] w-8 h-8 text-orange-500/25 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
