import type { NavItem, HighlightItem, ProgramItem, PlanItem, TestimonialItem, ContactInfo } from '../types'

/**
 * Base de dados complementar para layouts alternativos e referências de conteúdo.
 */
export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Treinos', href: '#treinos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: 'dumbbell',
    title: 'TREINAMENTO PERSONALIZADO'
  },
  {
    icon: 'chart',
    title: 'ACOMPANHAMENTO CONSTANTE'
  },
  {
    icon: 'shield',
    title: 'FOCO EM RESULTADOS'
  },
  {
    icon: 'zap',
    title: 'EVOLUÇÃO SEMPRE'
  }
]

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'hipertrofia',
    title: 'HIPERTROFIA',
    description: 'Ganhe massa muscular e aumente sua força, com treinos estruturados e acompanhamento de perto.',
    image: '/images/program-hypertrophy.jpg',
    icon: 'dumbbell'
  },
  {
    id: 'emagrecimento',
    title: 'EMAGRECIMENTO',
    description: 'Queime gordura, acelere seu metabolismo e conquiste o corpo que você quer, com um plano personalizado.',
    image: '/images/program-weightloss.jpg',
    icon: 'flame'
  },
  {
    id: 'condicionamento',
    title: 'CONDICIONAMENTO',
    description: 'Mais resistência, energia e performance. Treine seu corpo para ir mais longe, em todas as áreas da sua vida.',
    image: '/images/program-conditioning.jpg',
    icon: 'activity'
  }
]

export const PLANS: PlanItem[] = [
  {
    id: 'mensal',
    name: 'PLANO MENSAL',
    tagline: 'Treinos direcionados ao seu objetivo',
    price: '215,00',
    period: 'a R$ 260,00/mês',
    precoPrincipal: '215,00',
    subtextoPreco: 'a R$ 260,00/mês',
    features: [
      '2x por semana: R$ 215,00',
      '3x por semana: R$ 245,00',
      '6x por semana: R$ 260,00',
      'Profissionais sempre orientando',
    ],
    ctaText: 'ESCOLHER PLANO',
    popular: false,
  },
  {
    id: 'trimestral',
    name: 'PLANO TRIMESTRAL',
    tagline: 'Compromisso com sua evolução',
    price: '230,00',
    period: '/mês (total R$ 690,00)',
    precoPrincipal: '230,00',
    subtextoPreco: '/mês (total R$ 690,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 3x no cartão',
      'Profissionais sempre orientando',
    ],
    ctaText: 'ESCOLHER PLANO',
    popular: false,
  },
  {
    id: 'semestral',
    name: 'PLANO SEMESTRAL',
    tagline: 'Consistência e melhores resultados',
    price: '210,00',
    period: '/mês (total R$ 1.260,00)',
    precoPrincipal: '210,00',
    subtextoPreco: '/mês (total R$ 1.260,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 6x no cartão',
      'Profissionais sempre orientando',
    ],
    ctaText: 'ESCOLHER PLANO',
    popular: true,
    highlight: true,
  },
  {
    id: 'anual',
    name: 'PLANO ANUAL',
    tagline: 'O melhor custo-benefício',
    price: '200,00',
    period: '/mês (total R$ 2.400,00)',
    precoPrincipal: '200,00',
    subtextoPreco: '/mês (total R$ 2.400,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 12x no cartão',
      'Profissionais sempre orientando',
    ],
    ctaText: 'ESCOLHER PLANO',
    popular: false,
  },
]

export const ABOUT_CONTENT = {
  tag: 'SOBRE MIM',
  title: 'O CAMINHO É LONGO, MAS A VISTA É LINDA.',
  paragraph: 'Como Educador Físico e Nutricionista, dedico a minha vida a guiar pessoas rumo à sua melhor versão. São mais de 15 anos a entregar emagrecimento, saúde e alta performance com um método que alia ciência, suor e consistência.',
  ctaText: 'SAIBA MAIS →',
  image: '/lizandro.jpg'
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: '@gi_marafigo',
    quote: 'Você é top Lizandro! Muito obrigada pela parceria, por nos incentivar a não desistir!!!',
    rating: 5
  },
  {
    id: '2',
    name: '@michelli2sj',
    quote: 'Parabéns pelos 15 anos da academia! 🎉👏 Uma trajetória de dedicação, profissionalismo e sucesso. Parabéns a esse grande profissional por transformar vidas através do seu trabalho! 💪🏆',
    rating: 5
  },
  {
    id: '3',
    name: '@hugenpablo',
    quote: 'Passando para agradecer, o profissional que você é conseguiu mudar minha vida, com apenas dieta e treino ,hoje sou uma pessoa melhor graças a você obrigado por tudo.......',
    rating: 5
  }
]

export const CONTACT_INFO: ContactInfo = {
  whatsapp: {
    label: 'WhatsApp',
    value: 'Fale comigo',
    link: 'https://wa.me/554999003369?text=Ol%C3%A1%20Lizandro!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20suas%20consultorias.'
  },
  email: {
    label: 'E-mail',
    value: 'Envie uma mensagem',
    link: 'mailto:contato@lizandrocostta.com.br'
  },
  location: {
    label: 'Localização',
    value: 'Atendimento na sua região'
  }
}
