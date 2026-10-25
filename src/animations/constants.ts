/**
 * GSAP Motion Design Constants — Lizandro Costta
 * Movimentos firmes, energéticos e elegantes adequados ao universo fitness de alta performance.
 */
export const MOTION = {
  // Easings
  easePrimary: 'power3.out',
  easeDramatic: 'power4.out',
  easeSmooth: 'power2.out',
  easeExpo: 'expo.out',
  easeWipe: 'expo.inOut',

  // Durações base (em segundos)
  durationFast: 0.35,
  durationBase: 0.65,
  durationSlow: 0.95,
  durationIntro: 1.25,

  // Staggers
  staggerFast: 0.08,
  staggerBase: 0.12,
  staggerSlow: 0.18,

  // Distâncias de entrada
  distanceY: 28,
  distanceX: 32,
} as const
