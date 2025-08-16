export interface ArticleImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ArticleSection {
  id?: string
  type: "text" | "image-text" | "text-image" | "quote" | "sidebar" | "image-full" | 'intro'
  content: string
  title?: string
  image?: ArticleImage
  sidebarContent?: string
}

export interface ArticleAnalysis {
  introduction: string
  keyPoints: string[]
  quote?: {
    text: string
    author?: string
  }
  conclusion: string
}

export interface PracticalApplication {
  benefits: string[]
  useCases: string[]
  keyTakeaways: string[]
}

export interface Article {
  id: string
  title: string
  description: string
  content: string
  thumbnail: string
  date: string
  author: string
  readTime: string
  category: string
  tags: string[]
  slug: string
  sections?: ArticleSection[]
  analysis?: ArticleAnalysis
  practicalApplications?: PracticalApplication
}
