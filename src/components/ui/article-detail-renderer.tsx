import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

interface ArticleDetailRendererProps {
  article: any
}

export default function ArticleDetailRenderer({ article }: ArticleDetailRendererProps) {
  // Fonction pour générer du contenu d'article simulé basé sur la description
  const generateArticleContent = (description: string, title: string) => {
    const sections = [
      {
        type: "intro",
        content: `${description} Cette introduction nous permet de comprendre les enjeux principaux de ce sujet et d'explorer les différentes perspectives qui s'offrent à nous.`,
      },
      {
        type: "image-text",
        title: "Analyse approfondie",
        content: `Dans cette section, nous allons examiner en détail les aspects techniques et pratiques de ${title.toLowerCase()}. Les recherches récentes montrent que cette approche présente de nombreux avantages pour les professionnels du domaine.\n\nIl est important de noter que l'implémentation de ces concepts nécessite une compréhension approfondie des mécanismes sous-jacents. Les experts recommandent une approche progressive pour maximiser les résultats.`,
        image: {
          src: article.thumbnail,
          alt: `Illustration pour ${title}`,
          width: 400,
          height: 300,
        },
      },
      {
        type: "quote",
        content:
          "L'innovation ne consiste pas seulement à créer quelque chose de nouveau, mais à améliorer ce qui existe déjà de manière significative.",
      },
      {
        type: "text-image",
        title: "Applications pratiques",
        content: `Les applications pratiques de ces concepts sont nombreuses et variées. Dans le contexte professionnel, nous observons une adoption croissante de ces méthodes.\n\nLes retours d'expérience des utilisateurs confirment l'efficacité de cette approche, particulièrement dans les environnements où la performance et la fiabilité sont critiques.`,
        image: {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Applications pratiques",
          width: 400,
          height: 300,
        },
      },
      {
        type: "sidebar",
        content: `Pour conclure cette analyse, il est essentiel de retenir que ${title.toLowerCase()} représente une évolution significative dans notre domaine. Les bénéfices observés justifient pleinement l'investissement en temps et en ressources.\n\nL'avenir semble prometteur pour cette technologie, et nous recommandons vivement aux professionnels de se familiariser avec ces concepts pour rester compétitifs sur le marché.`,
        sidebarContent: `Points clés à retenir:\n\n• Approche progressive recommandée\n• Résultats mesurables à court terme\n• Impact positif sur la productivité\n• Facilité d'intégration dans les processus existants`,
      },
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

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case "intro":
        return (
          <div key={index} className="mb-12">
            {renderContent(section.content)}
          </div>
        )

      case "image-text":
        return (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl font-bold mb-6 text-orange-700">{section.title}</h2>
                {renderContent(section.content)}
              </div>
            </div>
          </div>
        )

      case "text-image":
        return (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-gray-900 text-2xl font-bold mb-6 text-orange-700">{section.title}</h2>
                {renderContent(section.content)}
              </div>
              <div>
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        )

      case "quote":
        return (
          <div key={index} className="mb-16 text-center">
            <blockquote className="text-orange-700 text-xl md:text-2xl font-semibold leading-tight italic border-l-4 border-orange-400 pl-6 py-4 bg-orange-50 rounded-r-lg">
              "{section.content}"
            </blockquote>
          </div>
        )

      case "sidebar":
        return (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">{renderContent(section.content)}</div>
              <div className="lg:col-span-1">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 text-sm text-gray-700 leading-relaxed rounded-r-lg">
                  {section.sidebarContent.split("\n\n").map((paragraph: string, pIndex: number) => (
                    <div key={pIndex} className="mb-3 last:mb-0">
                      {paragraph.split("\n").map((line: string, lineIndex: number) => (
                        <div key={lineIndex} className={line.startsWith("•") ? "ml-2" : ""}>
                          {line.startsWith("Points clés") ? <strong className="text-blue-800">{line}</strong> : line}
                        </div>
                      ))}
                    </div>
                  ))}
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
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Bouton retour */}
        <div className="mb-8">
          <Link
            href="/ressources/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Retour aux articles
          </Link>
        </div>

        {/* En-tête de l'article */}
        <header className="mb-12">
          {/* Image principale */}
          <div className="mb-8">
            <Image
              src={article.thumbnail || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Publié le {format(new Date(article.publishedAt), "dd MMMM yyyy")}</span>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <Tag size={18} className="text-gray-500" />
              {article.tags.map((tag: string) => (
                <span key={tag} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Ligne décorative */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
          </div>
        </header>

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
      </div>
    </main>
  )
}
