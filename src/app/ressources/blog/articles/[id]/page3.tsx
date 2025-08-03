import { allCards } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ModernNavbar from "@/components/ui/navbar";
import SocialSidebar from "@/components/ui/social-sidebar";
import Footer from "@/components/ui/footer";

// Faux réseaux sociaux pour l'auteur
const AUTHOR_SOCIALS = [
  { icon: "/facebook.svg", href: "#" },
  { icon: "/twitter.svg", href: "#" },
  { icon: "/linkedin.svg", href: "#" },
];

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = allCards.find(
    (c) => c.type === "article" && c.id === Number(params.id)
  );
  if (!article || article.type !== "article") return notFound();

  // Articles similaires (hors article courant)
  const related = allCards.filter(
    (c) => c.type === "article" && c.id !== article.id && c.tags && article.tags && c.tags.some(tag => article.tags!.includes(tag))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ModernNavbar />
      <main className="flex-1 w-full max-w-3xl mx-auto pt-24 pb-12 px-4">
        {/* HERO */}
        {article.thumbnail && (
          <div className="w-full aspect-[2.2/1] rounded-3xl overflow-hidden shadow-lg mb-8 relative">
            <Image src={article.thumbnail} alt={article.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {article.tags && article.tags.map((tag, i) => (
            <span key={i} className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm">{tag}</span>
          ))}
        </div>
        {/* Titre */}
        <h1 className="text-4xl font-extrabold text-center mb-4 leading-tight text-gray-900">{article.title}</h1>
        {/* Auteur, date, lecture */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <Image src={article.thumbnail} alt={article.author} width={40} height={40} className="rounded-full object-cover border-2 border-orange-200" />
            <span className="font-semibold text-gray-800 text-sm">{article.author}</span>
          </div>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-xs text-gray-500">{article.date}</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-xs text-gray-500">6 min read</span>
        </div>
        {/* Bloc auteur */}
        <div className="bg-white rounded-2xl shadow flex flex-col sm:flex-row items-center gap-4 p-6 mb-10 border border-gray-100">
          <Image src={article.thumbnail} alt={article.author} width={64} height={64} className="rounded-full object-cover border-2 border-orange-200" />
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-lg mb-1">{article.author}</div>
            <div className="text-gray-500 text-sm mb-2">Passionné(e) de tech, partageant des analyses et retours d'expérience sur l'innovation numérique.</div>
            <div className="flex gap-2">
              {AUTHOR_SOCIALS.map((s, i) => (
                <a key={i} href={s.href} className="inline-block hover:scale-110 transition-transform">
                  <Image src={s.icon} alt="social" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Contenu principal (exemple riche) */}
        <article className="prose prose-lg max-w-none text-gray-800 mb-12">
          <p>
            L'innovation numérique bouleverse nos usages et nos métiers. Cet article revient sur les moments forts de l'événement, les témoignages des acteurs et les perspectives d'avenir.
          </p>
          <blockquote>
            "L'important n'est pas la technologie, mais ce que l'on en fait pour transformer la société." — {article.author}
          </blockquote>
          <h2>Les temps forts</h2>
          <ul>
            <li>Conférences inspirantes sur l'IA et la cybersécurité</li>
            <li>Ateliers pratiques pour tous les niveaux</li>
            <li>Networking et échanges entre professionnels</li>
          </ul>
          <p>
            Les participants ont salué la qualité des intervenants et la diversité des sujets abordés. L'événement a permis de créer des synergies et d'initier de nouveaux projets collaboratifs.
          </p>
          <Image src={article.thumbnail} alt="illustration" width={800} height={400} className="rounded-xl my-6 mx-auto" />
          <h2>Perspectives</h2>
          <p>
            L'édition prochaine s'annonce déjà prometteuse, avec de nouveaux formats et une ouverture à l'international. Restez connectés pour ne rien manquer des prochaines actualités !
          </p>
        </article>
        {/* Articles similaires */}
        {related.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-orange-700">Articles similaires</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((art) => (
                <Link key={art.id} href={`/ressources/blog/articles/${art.id}`} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 hover:shadow-lg transition">
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-2">
                    <Image src={art.thumbnail} alt={art.title} fill className="object-cover" />
                  </div>
                  <div className="font-semibold text-gray-900 line-clamp-2">{art.title}</div>
                  <div className="text-xs text-gray-500">{art.author} • {art.date}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
        {/* Commentaires (fictifs) */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-orange-700">Commentaires</h3>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-6">
              <Image src={article.thumbnail} alt={article.author} width={40} height={40} className="rounded-full object-cover" />
              <input type="text" placeholder="Ajouter un commentaire..." className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold ml-2 hover:bg-orange-700 transition">Envoyer</button>
            </div>
            {/* Liste de commentaires fictifs */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Image src="/placeholder-user.jpg" alt="@user" width={36} height={36} className="rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm">@techfan</div>
                  <div className="text-xs text-gray-400 mb-1">il y a 2 jours</div>
                  <div className="text-gray-700 text-base">Article très instructif, merci pour ce partage !</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Image src="/placeholder-user.jpg" alt="@user" width={36} height={36} className="rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm">@dev42</div>
                  <div className="text-xs text-gray-400 mb-1">il y a 1 semaine</div>
                  <div className="text-gray-700 text-base">Bravo pour la clarté des explications et la richesse des exemples !</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="mt-8">
        <SocialSidebar />
        <Footer />
      </div>
    </div>
  );
} 