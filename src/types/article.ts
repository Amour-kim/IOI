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

export interface Article {
  id: string
  title: string
  description: string
  thumbnail: string
  date?: string
  author?: string
  tags?: string[]
  sections?: ArticleSection[]
}
