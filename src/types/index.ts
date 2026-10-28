export interface NavItem {
  number: string
  label: string
  href: string
}

export interface HeroMockupSlide {
  id: string
  number: string
  title: string
  category: string
  metric: string
  url: string
  image: string
  tag: string
}

export interface WorkStep {
  number: string
  title: string
  subtitle: string
  description: string
  timeframe: string
  outputs: string[]
}

export interface Benefit {
  number: string
  title: string
  description: string
  metricLabel: string
}

export interface ShowcaseProject {
  id: string
  number: string
  name: string
  category: string
  industry: string
  headline: string
  description: string
  image: string
  metric: string
  metricDetail: string
  palette: string[]
  tags: string[]
  figNumber: string
}

export interface MatrixRow {
  number: string
  name: string
  category: string
  lookVibe: string
  suitableFor: string
  palette: string[]
  impactMetric: string
  status: string
  thumbnail: string
}

export interface IncludedItem {
  number: string
  title: string
  description: string
  points: string[]
}

export interface PricingPlan {
  id: string
  tier: string
  name: string
  price: string
  priceSuffix: string
  paymentTerms: string
  timeline: string
  description: string
  isFeatured?: boolean
  features: string[]
  ctaText: string
}

export interface FaqItem {
  id: string
  number: string
  question: string
  answer: string
}
