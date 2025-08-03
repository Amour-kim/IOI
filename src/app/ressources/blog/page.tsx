"use client"

import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { VideoGridCard } from "@/components/ui/video-grid-card"
import { TextCard } from "@/components/ui/text-card"
import { allCards } from "@/lib/data"
import { BlogCarousel } from "@/components/ui/blog-carousel"
import { BlogSearchBar } from "@/components/ui/blog-search-bar"
import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import ContactUs from '@/components/ui/contact_us';
import Feedback from '@/components/ui/feedback';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  // Trier les articles par date décroissante
  const articles = allCards.filter(card => card.type === 'article').sort((a, b) => new Date((b as any).publishedAt).getTime() - new Date((a as any).publishedAt).getTime());
  // Recherche et filtre par tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch =
      search.trim() === '' ||
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || (article.tags && article.tags.includes(activeTag));
    return matchesSearch && matchesTag;
  });
  // Récupérer tous les tags uniques
  const allTags = Array.from(new Set(articles.flatMap(a => a.tags || [])));
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50 text-[#1a1a1a]">
      <ModernNavbar />
      <SocialSidebar />
      <main className="flex-1 flex flex-col items-center px-4 py-8 mt-24">
        {/* Barre de recherche */}
        <div className="w-full max-w-2xl mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="w-full px-6 py-4 border-2 border-blue-200 rounded-full focus:border-orange-400 focus:outline-none text-lg transition-all duration-300 shadow-lg bg-white/80"
          />
        </div>
        {/* Filtres par tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1 rounded-full border text-sm font-semibold transition-all ${!activeTag ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-700 border-orange-200'}`}
          >
            Tous
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full border text-sm font-semibold transition-all ${activeTag === tag ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-700 border-orange-200'}`}
            >
              #{tag}
            </button>
          ))}
        </div>
        {/* Grille d'articles */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-12 animate-fade-in-up">Aucun article trouvé.</div>
          ) : (
            filteredArticles.map(article => (
              <Link
                key={article.id}
                href={`/ressources/blog/articles/${article.id}`}
                className="block group relative"
              >
                <div className="bg-white rounded-lg shadow-md p-0 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-orange-300 flex flex-col justify-between animate-fade-in-up">
                  <div className="h-36 w-full rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100">
                    <Image src={article.thumbnail} alt={article.title} width={400} height={144} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">{article.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>Publié le {format(new Date(article.publishedAt), 'dd/MM/yyyy')}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{article.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2 mb-2">
                      {article.tags && article.tags.map(tag => (
                        <span key={tag} className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
      <div className="mt-8 space-y-8">
        <Feedback />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
