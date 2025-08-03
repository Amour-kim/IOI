import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { Globe, Sparkles, Shield, Users, CheckCircle, Star, TrendingUp, Info } from 'lucide-react';
import ContactUs from "@/components/ui/contact_us";

const LOGO_URL = "/logo.png";
const PROJECT_URL = "https://web-ioi.fr";

const useCases = [
  {
    icon: <Globe className="w-8 h-8 text-green-500 mb-2 animate-pulse" />,
    title: "Sites institutionnels",
    desc: "Des sites web modernes, accessibles et administrables pour établissements, collectivités et associations."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500 mb-2 animate-bounce" />,
    title: "Portails collaboratifs",
    desc: "Favorisez la communication et le travail d'équipe avec des espaces sécurisés et personnalisés."
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-500 mb-2 animate-spin-slow" />,
    title: "Sécurité & conformité",
    desc: "Hébergement en France, RGPD, anti-spam, sauvegardes automatiques et accès multi-profils."
  },
];

const avantages = [
  "Design responsive et sur-mesure",
  "Administration simple et intuitive",
  "Référencement optimisé (SEO)",
  "Intégration de modules (blog, agenda, newsletter, etc.)",
  "Maintenance et support inclus",
];

const abonnements = [
  {
    name: "Starter Web",
    price: "990€",
    features: [
      "Site vitrine responsive",
      "Hébergement inclus 1 an",
      "Nom de domaine offert",
      "Support email",
      "SEO de base",
    ],
    badge: "Idéal PME",
    highlight: false,
  },
  {
    name: "Business Web",
    price: "1490€",
    features: [
      "Toutes les fonctionnalités Starter",
      "Pages illimitées",
      "Modules avancés (blog, agenda, newsletter)",
      "Support prioritaire",
      "Optimisation SEO avancée",
    ],
    badge: "Le plus populaire",
    highlight: true,
  },
  {
    name: "Web Sur-Mesure",
    price: "Sur devis",
    features: [
      "Toutes les fonctionnalités Business",
      "Développement spécifique",
      "Intégration API tierces",
      "Design personnalisé",
      "Accompagnement dédié",
    ],
    badge: "Sur-mesure",
    highlight: false,
  },
];

const objectifs = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />,
    title: "Visibilité accrue",
    desc: "Augmentez votre présence en ligne et touchez de nouveaux clients grâce à un site performant."
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500 animate-pulse" />,
    title: "Image professionnelle",
    desc: "Valorisez votre marque avec un design moderne, cohérent et impactant."
  },
  {
    icon: <Info className="w-8 h-8 text-blue-500 animate-spin-slow" />,
    title: "Expérience utilisateur optimale",
    desc: "Navigation fluide, accessibilité et rapidité pour tous vos visiteurs."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />,
    title: "Évolutivité",
    desc: "Ajoutez de nouvelles fonctionnalités à tout moment selon vos besoins."
  },
];

const modesUtilisation = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500 animate-spin-slow" />,
    title: "Communication institutionnelle",
    desc: "Présentez votre activité, vos valeurs et vos services à vos publics cibles."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500 animate-pulse" />,
    title: "Espace collaboratif",
    desc: "Partagez des documents, actualités et événements avec vos équipes ou membres."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />,
    title: "Acquisition de clients",
    desc: "Générez des contacts et des prospects grâce à des formulaires et des appels à l'action efficaces."
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-500 animate-bounce" />,
    title: "Sécurité & conformité",
    desc: "Protégez vos données et celles de vos utilisateurs avec des solutions robustes."
  },
];

export default function WebPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-white pt-16 sm:pt-20 lg:pt-[100px] relative overflow-hidden">
      <ModernNavbar />
      <SocialSidebar />
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-amber-500/90 to-orange-500/90 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={LOGO_URL}
            alt="Logo IOI"
            className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
            style={{ animationDuration: "22s" }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-down">Applications Web IOI</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">Des sites et portails web performants, sécurisés et évolutifs pour tous vos besoins professionnels.</p>
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-white/90 text-amber-700 font-bold text-lg shadow-lg hover:bg-white transition animate-bounce border-2 border-amber-500 mb-4 mt-2">
            Découvrir le site du projet
          </a>
          <span className="inline-block px-6 py-2 rounded-full bg-white/90 text-amber-700 font-bold text-lg shadow-lg animate-pulse">Best Seller</span>
        </div>
      </section>
      {/* Présentation détaillée */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-amber-400/30 to-orange-400/30 rounded-full blur-2xl opacity-60 animate-float" />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">Des solutions web sur-mesure et évolutives</h2>
              <p className="text-slate-700 mb-4">Nous concevons des applications web robustes, ergonomiques et évolutives, adaptées à vos enjeux métiers et à vos utilisateurs. Notre équipe vous accompagne de la conception à la mise en ligne, puis au-delà.</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                {avantages.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Sparkles className="w-20 h-20 text-blue-400 animate-pulse mb-4" />
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-white font-bold shadow animate-pulse">à partir de 1490€</span>
              <span className="block text-xs text-slate-400 mt-2">Devis personnalisé</span>
            </div>
          </div>
        </div>
        {/* Grille interactive des tarifs */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Nos offres Web</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {abonnements.map((ab, i) => (
              <div key={i} className={`relative bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 ${ab.highlight ? 'border-amber-500 scale-105 z-10' : 'border-amber-100'} hover:scale-105 transition-all animate-float`}> 
                {ab.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow animate-pulse">{ab.badge}</span>
                )}
                {!ab.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold shadow">{ab.badge}</span>
                )}
                <h4 className="text-2xl font-bold text-amber-700 mb-2">{ab.name}</h4>
                <span className="text-3xl font-extrabold text-orange-600 mb-4">{ab.price}</span>
                <ul className="mb-6 space-y-2">
                  {ab.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> {f}</li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-2 rounded-full font-bold shadow ${ab.highlight ? 'bg-amber-500 text-white hover:bg-orange-500' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'} transition`}>Choisir</button>
              </div>
            ))}
          </div>
        </div>
        {/* Objectifs & modes d'utilisation */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Objectifs des solutions Web IOI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {objectifs.map((o, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-amber-100 hover:scale-105 transition-all animate-float">
                {o.icon}
                <span className="font-bold text-amber-700 mb-2">{o.title}</span>
                <span className="text-slate-600 text-sm">{o.desc}</span>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Modes d'utilisation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modesUtilisation.map((m, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-amber-100 hover:scale-105 transition-all animate-float">
                {m.icon}
                <span className="font-bold text-amber-700 mb-2">{m.title}</span>
                <span className="text-slate-600 text-sm">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Cas d'usage */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Cas d'usage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-amber-100 hover:scale-105 transition-all animate-float">
                {uc.icon}
                <span className="font-bold text-amber-700 mb-2">{uc.title}</span>
                <span className="text-slate-600 text-sm">{uc.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Call to action */}
        <div className="flex flex-col items-center mt-12">
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition relative overflow-hidden group/button text-lg mb-2">
            <span className="relative z-10">En savoir plus sur web-ioi.fr</span>
            <span className="absolute inset-0 rounded-full bg-amber-400/30 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-300 blur-lg" />
          </a>
          <span className="text-xs text-slate-400 mt-2">Support humain 24/7 & accompagnement personnalisé</span>
        </div>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
} 