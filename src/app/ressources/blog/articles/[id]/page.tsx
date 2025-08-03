"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { allCards } from "@/lib/data"
import ArticleDetailRenderer from "@/components/ui/article-detail-renderer"
import LoadingSpinner from "@/components/ui/loading-spinner"
import ModernNavbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import SocialSidebar from "@/components/ui/social-sidebar"

export default function ArticleDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true)

        // Simulation d'un délai de chargement
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Le système récupère automatiquement l'ID depuis l'URL
        // Dans votre cas, params.id sera "2"

        // Assurez-vous que la recherche de l'article fonctionne correctement
        // Si vous avez des IDs numériques, vous pourriez avoir besoin de convertir :
        const foundArticle = allCards.find((card) => card.id.toString() === params.id && card.type === "article")

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
      <ArticleDetailRenderer article={article} />
      <Footer />
    </div>
  )
}
