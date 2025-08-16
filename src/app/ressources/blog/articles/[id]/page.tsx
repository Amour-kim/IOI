"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { blogPosts } from "@/data/ressources/blog.data"
import { ArticleSection } from "@/components/blog/ArticleSection"
import LoadingSpinner from "@/components/ui/loading-spinner"
import ModernNavbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import SocialSidebar from "@/components/ui/social-sidebar"
import type { Article, ArticleSection as ArticleSectionType } from "@/types/article.types"

export default function ArticleDetailPage() {
  const params = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    function loadArticle() {
      try {
        setLoading(true)
        
        // Trouver l'article par ID (les IDs sont maintenant des chaînes)
        const foundArticle = blogPosts.find(article => article.id === params.id)

        if (foundArticle) {
          setArticle(foundArticle)
        } else {
          setError("Article non trouvé")
        }
      } catch (err) {
        setError("Erreur lors du chargement de l'article")
        console.error("Error fetching article:", err)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      loadArticle()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
        <ModernNavbar />
        <SocialSidebar />
        <LoadingSpinner />
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
        <ModernNavbar />
        <SocialSidebar />
        <div className="flex-1 flex items-center justify-center mt-24">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
        <ModernNavbar />
        <SocialSidebar />
        <div className="flex-1 flex items-center justify-center mt-24">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">Aucun article trouvé</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
      <ModernNavbar />
      <SocialSidebar />
      <article className="container mx-auto max-w-6xl px-4 py-12">
        <header className="mb-12 text-center">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {article.category}
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {article.description}
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="flex items-center">
              <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="flex h-full w-full items-center justify-center bg-gray-400 text-white">
                  {article.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Publié le{' '}
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
            
            <span className="hidden text-gray-400 sm:block">•</span>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </header>

        <div className="relative mb-16 h-64 w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 sm:h-80 md:h-96 lg:h-[32rem]">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose mx-auto max-w-4xl dark:prose-invert">
          <div 
            className="prose-p:leading-relaxed prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </div>

        {article.sections?.map((section: ArticleSectionType) => (
          <ArticleSection key={section.id} section={section} className="mt-16" />
        ))}

        {article.tags && article.tags.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
              Mots-clés
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer />
    </div>
  )
}
