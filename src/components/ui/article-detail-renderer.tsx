import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { fr } from 'date-fns/locale';
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import type { Article, ArticleSection, ArticleImage } from "@/types/article"

interface ArticleDetailRendererProps {
  article: Article
}

export default function ArticleDetailRenderer({ article }: ArticleDetailRendererProps) {
  // Fonction pour générer du contenu d'article simulé basé sur la description
  const generateArticleContent = (description: string, title: string): ArticleSection[] => {
    const sections: ArticleSection[] = [
      {
        type: "intro",
        content: `${description} Cette introduction nous permet de comprendre les enjeux principaux de ce sujet et d'explorer les différentes perspectives qui s'offrent à nous.`
      } as const,
      {
        type: "image-text",
        title: "Analyse approfondie",
        content: `Dans cette section, nous allons examiner en détail les aspects techniques et pratiques de ${title.toLowerCase()}. Les recherches récentes montrent que cette approche présente de nombreux avantages pour les professionnels du domaine.\n\nIl est important de noter que l'implémentation de ces concepts nécessite une compréhension approfondie des mécanismes sous-jacents. Les experts recommandent une approche progressive pour maximiser les résultats.`,
        image: {
          src: article.thumbnail,
          alt: `Illustration pour ${title}`,
          width: 400,
          height: 300,
        }
      } as const,
      {
        type: "quote",
        content: "L'innovation ne consiste pas seulement à créer quelque chose de nouveau, mais à améliorer ce qui existe déjà de manière significative."
      } as const,
      {
        type: "text-image",
        title: "Applications pratiques",
        content: `Les applications pratiques de ces concepts sont nombreuses et variées. Dans le contexte professionnel, nous observons une adoption croissante de ces méthodes.\n\nLes retours d'expérience des utilisateurs confirment l'efficacité de cette approche, particulièrement dans les environnements où la performance et la fiabilité sont critiques.`,
        image: {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Applications pratiques",
          width: 400,
          height: 300,
        }
      } as const,
      {
        type: "sidebar",
        content: `Pour conclure cette analyse, il est essentiel de retenir que ${title.toLowerCase()} représente une évolution significative dans notre domaine. Les bénéfices observés justifient pleinement l'investissement en temps et en ressources.\n\nL'avenir semble prometteur pour cette technologie, et nous recommandons vivement aux professionnels de se familiariser avec ces concepts pour rester compétitifs sur le marché.`,
        sidebarContent: `Points clés à retenir:\n\n• Approche progressive recommandée\n• Résultats mesurables à court terme\n• Impact positif sur la productivité\n• Facilité d'intégration dans les processus existants`
      } as const
    ]
    return sections
  }

  const articleSections = generateArticleContent(article.description, article.title)

  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="text-gray-700 text-base leading-relaxed text-justify mb-4 last:mb-0">
        {paragraph}
      </p>
    ))
  }

  // Vérification de la présence de l'image avant de l'utiliser
  const renderImage = (image?: ArticleImage) => {
    if (!image) return null;
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-auto rounded-lg shadow-md"
      />
    );
  };

  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case "intro":
        return (
          <div key={index} className="mb-12">
            {renderContent(section.content)}
          </div>
        )

      case "image-text":
        if (!section.image || !section.title) return null;
        return (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>{renderImage(section.image)}</div>
              <div>
                <h2 className="text-gray-900 text-2xl font-bold mb-6 text-orange-700">{section.title}</h2>
                {renderContent(section.content)}
              </div>
            </div>
          </div>
        )

      case "quote":
        return (
          <div key={index} className="my-12 px-8 py-6 bg-blue-50 border-l-4 border-blue-500 italic">
            <blockquote className="text-xl text-gray-700">"{section.content}"</blockquote>
          </div>
        )

      case "text-image":
        if (!section.image || !section.title) return null;
        return (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-gray-900 text-2xl font-bold mb-6 text-orange-700">{section.title}</h2>
                {renderContent(section.content)}
              </div>
              <div>{renderImage(section.image)}</div>
            </div>
          </div>
        )

      case "sidebar":
        return (
          <div key={index} className="my-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                {renderContent(section.content)}
              </div>
              <div className="lg:w-1/3">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">À retenir</h3>
                  {section.sidebarContent && (
                    <div className="prose prose-sm text-gray-700">
                      {renderContent(section.sidebarContent)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <main className="flex-1 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/ressources/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux articles
          </Link>
        </div>
        
        {/* Image de couverture */}
        {article.thumbnail && (
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={1200}
              height={630}
              className="w-full h-auto max-h-[500px] object-cover"
              priority
            />
          </div>
        )}

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-1" />
                {article.author || 'Auteur inconnu'}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {article.date ? format(new Date(article.date), 'PPP', { locale: fr }) : 'Date inconnue'}
              </div>
            </div>
            {article.tags && article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Ligne décorative */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
          </div>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            {articleSections.map((section, index) => renderSection(section, index))}
          </article>

          {/* Section de fin */}
          <footer className="text-center mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">Fin de l'article</p>
          </footer>
        </article>
      </div>
    </main>
  )
}
