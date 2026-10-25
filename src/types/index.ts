export interface NavItem {
  label: string
  href: string
}

export interface HighlightItem {
  icon: 'dumbbell' | 'chart' | 'shield' | 'zap'
  title: string
}

export interface ProgramItem {
  id: string
  title: string
  description: string
  image: string
  icon: 'dumbbell' | 'flame' | 'activity'
  badge?: string
}

export interface PlanItem {
  id: string
  name: string
  tagline: string
  price: string
  period: string
  precoPrincipal?: string
  subtextoPreco?: string
  popular?: boolean
  features: string[]
  ctaText: string
  highlight?: boolean
}

export interface TestimonialItem {
  id: string
  name: string
  quote: string
  rating: number
  role?: string
}

export interface ContactInfo {
  whatsapp: {
    label: string
    value: string
    link: string
  }
  email: {
    label: string
    value: string
    link: string
  }
  location: {
    label: string
    value: string
  }
}
