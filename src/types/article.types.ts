export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  images?: ArticleImage[];
  imagePosition?: 'left' | 'right';
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  sections: ArticleSection[];
}
