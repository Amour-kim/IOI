// Centralized resource types (similar to services architecture)

export type FAQCategory = 'general' | 'technical' | 'billing' | 'support';

export type FAQItem = {
  question: string;
  answer: string;
  category: FAQCategory;
};

// Flat list of FAQ items
export type FAQItems = FAQItem[];

// Documentation types
export type DocAccessType = 'gratuit' | 'payant';
export type DocFileType = 'pdf' | 'docx' | 'ppt' | 'md' | 'html' | 'other';

export type DocumentationItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  version: string[]; // e.g., ['current','previous','beta']
  type: DocAccessType; // gratuit or payant
  fileUrl: string; // direct download URL when gratuit
  docType: DocFileType; // pdf, docx, ppt, etc.
  domain: string; // display domain (e.g., 'Sécurité')
  audience: string[]; // e.g., ['PME','Débutant']
  cover: string; // cover image path
};

export type DocumentationItems = DocumentationItem[];

// Tutorials types
export type TutorialFormat = 'video' | 'article';

export type TutorialItem = {
  id: number; // numeric ID for routing
  category: string; // e.g., 'Next.js', 'CSS', 'Backend'
  title: string;
  description: string;
  tags: string[];
  format: TutorialFormat; // video or article
  url: string; // watch or read URL (internal route or external)
  thumbnail: string; // cover image
  duration?: string; // hh:mm or mm:ss for video
  channel?: string; // author/channel name
  channelAvatar?: string;
  views?: string;
  publishedAt: string; // ISO date
  domain?: string; // e.g., 'Frontend', 'Sécurité'
  audience?: string[]; // e.g., ['Débutant','PME']
  isVedette?: boolean; // featured flag to highlight in UI
};

export type TutorialItems = TutorialItem[];

// Blog post types
export type BlogPost = {
  id: number;
  type: 'article';
  title: string;
  description: string;
  content: string;
  author: string;
  date: string; // ISO date
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  slug: string;
};

export type BlogPosts = BlogPost[];
