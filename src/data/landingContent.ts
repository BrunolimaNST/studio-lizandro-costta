/**
 * Conteúdo da landing page (textos exatos do briefing/mockup).
 * Centralizado aqui para manter os componentes apenas com estrutura.
 */

export type SectionId = 'inicio' | 'sobre' | 'treinos' | 'planos' | 'depoimentos' | 'contato'

export interface NavLink {
  id: SectionId
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'treinos', label: 'Treinos' },
  { id: 'planos', label: 'Planos' },
  { id: 'contato', label: 'Contato' },
]

/** Ordem exata das seções na página (usada pelo IntersectionObserver). */
export const SECTION_IDS: SectionId[] = ['inicio', 'sobre', 'treinos', 'planos', 'depoimentos', 'contato']

export const BRAND = {
  name: 'Lizandro Costta – Personal Trainer | Nutricionista',
  logoAlt: 'Lizandro Costta – Personal Trainer | Nutricionista',
  slogan: ['MAIS QUE TREINO,', 'UM ESTILO DE VIDA.'],
}

export const HERO = {
  eyebrow: 'PERSONAL TRAINER | NUTRICIONISTA',
  titleTop: 'TRANSFORME',
  titleBottom: 'SEU POTENCIAL',
  subtitle: 'Treinamento personalizado para alcançar seus objetivos.',
  primaryCta: 'COMECE AGORA',
  secondaryCta: 'CONHEÇA MEU TRABALHO',
}

export type HighlightIcon = 'clipboard' | 'chart' | 'shield' | 'zap'

export interface Highlight {
  icon: HighlightIcon
  top: string
  bottom: string
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'clipboard', top: 'TREINAMENTO', bottom: 'PERSONALIZADO' },
  { icon: 'chart', top: 'ACOMPANHAMENTO', bottom: 'CONSTANTE' },
  { icon: 'shield', top: 'FOCO EM', bottom: 'RESULTADOS' },
  { icon: 'zap', top: 'EVOLUÇÃO', bottom: 'SEMPRE' },
]

export const ABOUT = {
  eyebrow: 'SOBRE MIM',
  titleTop: 'O CAMINHO É LONGO,',
  titleBottom: 'MAS A VISTA É LINDA.',
  text: 'Como Educador Físico e Nutricionista, dedico a minha vida a guiar pessoas rumo à sua melhor versão. São mais de 15 anos a entregar emagrecimento, saúde e alta performance com um método que alia ciência, suor e consistência.',
  cta: 'SAIBA MAIS',
  image: {
    src: '/lizandro.principal.png',
    alt: 'Lizandro Costta treinando na academia',
    width: 1200,
    height: 896,
  },
}

export const ABOUT_MODAL = {
  variant: 'about' as const,
  badge: 'TRAJETÓRIA & FILOSOFIA',
  title: 'A HISTÓRIA DE LIZANDRO COSTTA',
  subtitle: 'Educador Físico, Nutricionista e Fundador do Sttudio Lizandro Costta.',
  image: {
    src: '/lizandro.jpg',
    alt: 'Lizandro Costta no Sttudio Lizandro Costta',
  },
  paragraphs: [
    'Há mais de 15 anos movimentando a região de São Joaquim, Lizandro construiu sua carreira pautada na transformação real. Como Educador Físico e idealizador do Centro de Condicionamento Físico Sttudio Lizandro Costta, ele criou um espaço de referência focado em musculação, treinamento funcional e alta performance.',
    'A busca por entregar resultados definitivos o levou a expandir sua atuação. Bacharel em Nutrição, Lizandro uniu a ciência biomecânica à nutrição estratégica. Hoje, é especialista em queima de gordura, aceleração de metabolismo e reeducação alimentar, realizando atendimentos unificados em São Joaquim e Lages.',
    'Com mais de 10 mil vidas transformadas, sua filosofia de trabalho é direta: "O caminho é longo, mas a vista é linda". Seu papel vai muito além de prescrever treinos ou dietas; trata-se de construir disciplina, honrar suas raízes e guiar cada aluno para a sua melhor versão física e mental.',
  ],
  sections: [
    {
      heading: 'Pilares & Formação',
      items: [
        '🏅 Mais de 15 Anos de Experiência e +10.000 Vidas Transformadas.',
        '🎓 Dupla Formação: Educador Físico e Bacharel em Nutrição.',
        '🔥 Especialista em Queima de Gordura e Metabolismo.',
        '📍 Atendimento presencial e consultoria em São Joaquim e Lages.',
        '🏢 Fundador do Sttudio Lizandro Costta (Musculação, Funcional e Cross Training).',
      ],
    },
  ],
  ctaText: 'FALAR COM LIZANDRO',
  ctaHref: '#contato',
}

export type ProgramIcon = 'dumbbell' | 'flame' | 'runner'

export interface Program {
  id: string
  title: string
  description: string
  icon: ProgramIcon
  image: { src: string; alt: string; width: number; height: number }
}

export interface ProgramModalDetail {
  badge: string
  title: string
  subtitle: string
  paragraphs: string[]
  methodology: {
    heading: string
    items: string[]
  }
  benefits: string[]
  ctaText: string
  ctaHref: string
}

export const PROGRAM_MODALS: Record<string, ProgramModalDetail> = {
  hipertrofia: {
    badge: 'METODOLOGIA APLICADA',
    title: 'PROGRAMA DE HIPERTROFIA',
    subtitle: 'Ganho consistente de massa muscular, densidade e força máxima com respaldo científico.',
    paragraphs: [
      'O programa de hipertrofia é desenhado para otimizar a tensão mecânica e o estresse metabólico sem sobrecarregar tendões e articulações. Não se trata apenas de aumentar o peso na barra, mas de garantir recrutamento motor eficiente em cada repetição.',
      'A periodização é dividida em blocos estratégicos com controle rigoroso de volume semanal, densidade e descanso, garantindo superação contínua de platôs para você conquistar um físico denso, simétrico e imponente.',
    ],
    methodology: {
      heading: 'Como Funciona a Metodologia',
      items: [
        'Sobrecarga progressiva planejada ciclo a ciclo com registro de evolução.',
        'Variação técnica de estímulos (tensão mecânica, estresse metabólico e tempo sob tensão).',
        'Seleção inteligente de exercícios adaptada à sua biomecânica individual.',
        'Controle de fadiga neuromuscular para evitar lesões e overtraining.',
      ],
    },
    benefits: [
      'Aumento expressivo de volume e densidade muscular magra',
      'Elevação natural da taxa metabólica basal',
      'Fortalecimento estrutural de tendões e densidade óssea',
      'Melhora postural e alinhamento corporal simétrico',
    ],
    ctaText: 'COMEÇAR HIPERTROFIA',
    ctaHref: '#planos',
  },
  emagrecimento: {
    badge: 'METODOLOGIA APLICADA',
    title: 'PROGRAMA DE EMAGRECIMENTO & DEFINIÇÃO',
    subtitle: 'Queima acelerada de gordura corporal com preservação rigorosa da massa muscular.',
    paragraphs: [
      'Muitas pessoas emagrecem sacrificando massa muscular e tônus, resultando em flacidez e desaceleração metabólica. O protocolo de emagrecimento de Lizandro foca na queima eficiente de gordura visceral e subcutânea preservando os músculos.',
      'Combinamos treinos resistidos de alta densidade com estímulos intervalados estratégicos, potencializando o efeito EPOC (queima calórica estendida por até 36 horas após o término da sessão).',
    ],
    methodology: {
      heading: 'Como Funciona a Metodologia',
      items: [
        'Treinos com intervalos curtos e densidade alta para elevar o gasto calórico.',
        'Manutenção de estímulos de força pesados para sinalizar a retenção de massa magra.',
        'Circuitos metabólicos funcionais complementares de alta eficiência.',
        'Acompanhamento constante de circunferências e composição corporal.',
      ],
    },
    benefits: [
      'Redução progressiva e sustentável do percentual de gordura (BF%)',
      'Definição muscular acentuada sem perda de energia ou flacidez',
      'Aumento da sensibilidade à insulina e saúde cardiovascular',
      'Maior vigor, leveza e disposição ao longo de todo o dia',
    ],
    ctaText: 'COMEÇAR EMAGRECIMENTO',
    ctaHref: '#planos',
  },
  condicionamento: {
    badge: 'METODOLOGIA APLICADA',
    title: 'PROGRAMA DE CONDICIONAMENTO & PERFORMANCE',
    subtitle: 'Resistência cardiorrespiratória, agilidade e vitalidade para o dia a dia e esportes.',
    paragraphs: [
      'Projetado para quem quer energia inabalável, disposição física contínua e excelente rendimento para esportes (como corrida, lutas, futebol ou ciclismo) ou para a rotina diária.',
      'O treinamento integra capacidade aeróbia, potência anaeróbia, mobilidade articular e estabilidade de core, desenvolvendo um corpo atlético, funcional e pronto para qualquer desafio.',
    ],
    methodology: {
      heading: 'Como Funciona a Metodologia',
      items: [
        'Treinamento híbrido integrando levantamentos funcionais e capacidade metabólica.',
        'Sessões intervaladas e de ritmo constante periodizadas cientificamente.',
        'Ênfase em mobilidade dinâmica, estabilidade lombar e saúde dos joelhos.',
        'Técnicas de controle respiratório e recuperação cardíaca rápida.',
      ],
    },
    benefits: [
      'Capacidade pulmonar e resistência cardiovascular significativamente ampliadas',
      'Alívio de dores posturais, tensões musculares e fadiga crônica',
      'Recuperação mais rápida entre esforços e noites de sono mais reparadoras',
      'Corpo funcional, ágil e preparado para qualquer atividade física',
    ],
    ctaText: 'COMEÇAR CONDICIONAMENTO',
    ctaHref: '#planos',
  },
}

export const PROGRAMS_SECTION = {
  title: 'TREINOS E PROGRAMAS',
  subtitle: 'Programas completos para cada objetivo.',
}

export const PROGRAMS: Program[] = [
  {
    id: 'hipertrofia',
    title: 'HIPERTROFIA',
    description: 'Ganhe massa muscular e aumente sua força, com treinos estruturados e acompanhamento de perto.',
    icon: 'dumbbell',
    image: { src: '/images/program-hypertrophy.jpg', alt: 'Treino de hipertrofia com pesos na academia', width: 1200, height: 896 },
  },
  {
    id: 'emagrecimento',
    title: 'EMAGRECIMENTO',
    description: 'Queime gordura, acelere seu metabolismo e conquiste o corpo que você quer, com um plano personalizado.',
    icon: 'flame',
    image: { src: '/images/program-weightloss.jpg', alt: 'Treino de emagrecimento na academia', width: 1200, height: 896 },
  },
  {
    id: 'condicionamento',
    title: 'CONDICIONAMENTO',
    description: 'Mais resistência, energia e performance. Treine seu corpo para ir mais longe, em todas as áreas da sua vida.',
    icon: 'runner',
    image: { src: '/images/program-conditioning.jpg', alt: 'Treino de condicionamento físico na academia', width: 1200, height: 896 },
  },
]

export interface Plan {
  id: string
  name: string
  tagline: string
  currency: string
  amount: string
  period: string
  precoPrincipal?: string
  subtextoPreco?: string
  features: string[]
  featured: boolean
  badge?: string
  whatsappMessage?: string
}

export const PLANS_SECTION = {
  title: 'PLANOS',
  subtitle: 'Escolha o plano ideal para você e seus objetivos.',
  badge: 'MAIS POPULAR',
  cta: 'ESCOLHER PLANO',
}

export const PLANS: Plan[] = [
  {
    id: 'mensal',
    name: 'PLANO MENSAL',
    tagline: 'Treinos direcionados ao seu objetivo',
    currency: 'R$',
    amount: '215,00',
    period: 'a R$ 260,00/mês',
    precoPrincipal: '215,00',
    subtextoPreco: 'a R$ 260,00/mês',
    features: [
      '2x por semana: R$ 215,00',
      '3x por semana: R$ 245,00',
      '6x por semana: R$ 260,00',
      'Profissionais sempre orientando seus treinos',
    ],
    featured: false,
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Mensal do Sttudio Lizandro Costta.',
  },
  {
    id: 'trimestral',
    name: 'PLANO TRIMESTRAL',
    tagline: 'Compromisso com sua evolução',
    currency: 'R$',
    amount: '230,00',
    period: '/mês (total R$ 690,00)',
    precoPrincipal: '230,00',
    subtextoPreco: '/mês (total R$ 690,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 3x no cartão',
      'Treinos direcionados ao seu objetivo',
      'Profissionais sempre orientando seus treinos',
    ],
    featured: false,
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Trimestral do Sttudio Lizandro Costta.',
  },
  {
    id: 'semestral',
    name: 'PLANO SEMESTRAL',
    tagline: 'Consistência e melhores resultados',
    currency: 'R$',
    amount: '210,00',
    period: '/mês (total R$ 1.260,00)',
    precoPrincipal: '210,00',
    subtextoPreco: '/mês (total R$ 1.260,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 6x no cartão',
      'Treinos direcionados ao seu objetivo',
      'Profissionais sempre orientando seus treinos',
    ],
    featured: true,
    badge: 'MAIS POPULAR',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Semestral do Sttudio Lizandro Costta.',
  },
  {
    id: 'anual',
    name: 'PLANO ANUAL',
    tagline: 'O melhor custo-benefício para o seu ano',
    currency: 'R$',
    amount: '200,00',
    period: '/mês (total R$ 2.400,00)',
    precoPrincipal: '200,00',
    subtextoPreco: '/mês (total R$ 2.400,00)',
    features: [
      'Treino liberado até 6x por semana',
      'Pagamento em até 12x no cartão',
      'Treinos direcionados ao seu objetivo',
      'Profissionais sempre orientando seus treinos',
    ],
    featured: false,
    badge: 'MELHOR VALOR',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Anual do Sttudio Lizandro Costta.',
  },
]

export interface NutritionPlan {
  id: string
  name: string
  tagline: string
  currency: string
  amount: string
  period: string
  precoPrincipal?: string
  subtextoPreco?: string
  features: string[]
  featured: boolean
  badge?: string
  whatsappMessage: string
}

export const NUTRITION_PLANS: NutritionPlan[] = [
  {
    id: 'consulta-inbody',
    name: 'OPÇÃO 1 — CONSULTA + INBODY',
    tagline: 'Avaliação corporal completa e acompanhamento clínico',
    currency: 'R$',
    amount: '450,00',
    period: 'Consulta com retorno em 30 dias',
    precoPrincipal: '450,00',
    subtextoPreco: 'Consulta com retorno em 30 dias',
    features: [
      'Avaliação corporal completa (massa muscular, gordura, água)',
      'Retorno de acompanhamento em 30 dias',
      'Duração média da consulta: 60 minutos',
    ],
    featured: false,
    whatsappMessage: 'Olá! Gostaria de agendar a Consulta + InBody de R$ 450,00.',
  },
  {
    id: 'calorimetria-inbody-consulta',
    name: 'OPÇÃO 2 — CALORIMETRIA + INBODY + CONSULTA',
    tagline: 'O protocolo mais completo de precisão metabólica',
    currency: 'R$',
    amount: '600,00',
    period: 'Protocolo completo com retorno',
    precoPrincipal: '600,00',
    subtextoPreco: 'Protocolo completo com retorno',
    features: [
      'Bioimpedância InBody completa',
      'Calorimetria Indireta (avaliação do metabolismo basal e gasto calórico)',
      'Retorno para ajuste de resultados em 30 dias',
      'Duração média da consulta: 90 minutos',
    ],
    featured: true,
    badge: 'O MAIS COMPLETO',
    whatsappMessage: 'Olá! Gostaria de agendar a opção de Calorimetria + InBody + Consulta.',
  },
]

export interface Testimonial {
  id: string
  quote: string
  author: string
  rating: number
}

export const TESTIMONIALS_SECTION = {
  title: 'DEPOIMENTOS',
  subtitle: 'A confiança de quem já treina comigo.',
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Você é top Lizandro! Muito obrigada pela parceria, por nos incentivar a não desistir!!!',
    author: '@gi_marafigo',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Parabéns pelos 15 anos da academia! 🎉👏 Uma trajetória de dedicação, profissionalismo e sucesso. Parabéns a esse grande profissional por transformar vidas através do seu trabalho! 💪🏆',
    author: '@michelli2sj',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Passando para agradecer, o profissional que você é conseguiu mudar minha vida, com apenas dieta e treino ,hoje sou uma pessoa melhor graças a você obrigado por tudo.......',
    author: '@hugenpablo',
    rating: 5,
  },
]

export const CONTACT = {
  title: 'VAMOS CONVERSAR?',
  text: 'Tire suas dúvidas, agende seu treino ou saiba mais sobre os planos.',
  cta: 'ENTRE EM CONTATO',
  whatsappUrl: 'https://wa.me/554999003369?text=Ol%C3%A1%20Lizandro!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20suas%20consultorias.',
  items: {
    whatsapp: { label: 'WhatsApp', value: 'Fale comigo' },
    email: { label: 'E-mail', value: 'Envie uma mensagem', href: 'mailto:contato@lizandrocostta.com.br' },
    location: { label: 'Localização', value: 'Atendimento na sua região' },
  },
}

export const OPERATING_HOURS = {
  title: 'Horário de Funcionamento',
  schedule: [
    { days: 'Segunda a Quinta', hours: '06h às 12h | 14h às 22h' },
    { days: 'Sexta-feira', hours: '06h às 12h | 16h às 21h' },
    { days: 'Sábado', hours: '08h às 12h' },
  ],
  note: 'O horário fica à sua escolha dentro destes períodos.',
}

