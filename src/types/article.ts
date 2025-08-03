export interface ArticleSection {
  id: string
  type: "text" | "image-text" | "text-image" | "quote" | "sidebar" | "image-full"
  title?: string
  content?: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  sidebarContent?: string
}

export interface Article {
  id: string
  date: string
  title: string
  sections: ArticleSection[]
}
