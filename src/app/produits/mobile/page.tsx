import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { Smartphone, Sparkles, Shield, Users, CheckCircle, Star, TrendingUp, Info, Wifi, Touchpad } from 'lucide-react';
import ContactUs from "@/components/ui/contact_us";

const LOGO_URL = "/logo.png";
const PROJECT_URL = "https://mobile-ioi.fr";

const useCases = [
  {
    icon: <Smartphone className="w-8 h-8 text-green-500 mb-2 animate-pulse" />,
    title: "Applications métiers",
    desc: "Des apps mobiles sur-mesure pour digitaliser vos processus et gagner en efficacité."
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-500 mb-2 animate-bounce" />,
    title: "Solutions connectées",
    desc: "Synchronisation temps réel, notifications push, accès hors-ligne, API intégrées."
  },
  {
    icon: <Touchpad className="w-8 h-8 text-amber-500 mb-2 animate-spin-slow" />,
    title: "Expérience utilisateur premium",
    desc: "Design natif, navigation fluide, accessibilité et animations modernes."
  },
];

const avantages = [
  "Développement natif ou cross-platform (iOS/Android)",
  "Sécurité et confidentialité des données",
  "Design ergonomique et moderne",
  "Maintenance et évolutivité garanties",
  "Intégration avec vos systèmes existants",
];

const abonnements = [
  {
    name: "Starter Mobile",
    price: "2990€",
    features: [
      "Application simple (1 plateforme)",
      "Publication sur store incluse",
      "Support email",
      "Design personnalisé",
      "Maintenance 6 mois",
    ],
    badge: "Idéal PME",
    highlight: false,
  },
  {
    name: "Business Mobile",
    price: "4990€",
    features: [
      "Toutes les fonctionnalités Starter",
      "Multi-plateforme (iOS & Android)",
      "Notifications push",
      "Synchronisation API",
      "Support prioritaire",
    ],
    badge: "Le plus populaire",
    highlight: true,
  },
  {
    name: "Mobile Sur-Mesure",
    price: "Sur devis",
    features: [
      "Toutes les fonctionnalités Business",
      "Développement spécifique avancé",
      "Intégration objets connectés",
      "Accompagnement UX/UI",
      "Maintenance évolutive",
    ],
    badge: "Sur-mesure",
    highlight: false,
  },
];

const objectifs = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />,
    title: "Mobilité totale",
    desc: "Accédez à vos outils et données partout, tout le temps, même hors connexion."
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500 animate-pulse" />,
    title: "Expérience utilisateur optimale",
    desc: "Des interfaces intuitives, rapides et agréables pour tous vos utilisateurs."
  },
  {
    icon: <Info className="w-8 h-8 text-blue-500 animate-spin-slow" />,
    title: "Transformation digitale",
    desc: "Digitalisez vos processus métiers et gagnez en productivité."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />,
    title: "Innovation",
    desc: "Profitez des dernières technologies mobiles pour vous démarquer."
  },
];

const modesUtilisation = [
  {
    icon: <Smartphone className="w-8 h-8 text-green-500 animate-spin-slow" />,
    title: "Application métier",
    desc: "Optimisez vos opérations avec des apps dédiées à vos besoins spécifiques."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500 animate-pulse" />,
    title: "Collaboration mobile",
    desc: "Travaillez en équipe, partagez des infos et restez connectés en mobilité."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />,
    title: "Relation client",
    desc: "Fidélisez vos clients avec des apps interactives et des notifications ciblées."
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-500 animate-bounce" />,
    title: "Sécurité avancée",
    desc: "Protégez vos données et celles de vos utilisateurs avec des solutions robustes."
  },
];

export default function MobilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16 sm:pt-20 lg:pt-[100px] relative overflow-hidden">
      <ModernNavbar />
      <SocialSidebar />
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-blue-500/90 to-cyan-500/90 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={LOGO_URL}
            alt="Logo IOI"
            className="w-[60vw] max-w-3xl opacity-10 blur-[2px] animate-spin-slow drop-shadow-2xl"
            style={{ animationDuration: "22s" }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-down">Applications Mobiles IOI</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">Des applications mobiles performantes, sécurisées et innovantes pour tous vos usages professionnels.</p>
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-white/90 text-blue-700 font-bold text-lg shadow-lg hover:bg-white transition animate-bounce border-2 border-blue-500 mb-4 mt-2">
            Découvrir le site du projet
          </a>
          <span className="inline-block px-6 py-2 rounded-full bg-white/90 text-blue-700 font-bold text-lg shadow-lg animate-pulse">Nouveau</span>
        </div>
      </section>
      {/* Présentation détaillée */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl opacity-60 animate-float" />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Des apps mobiles sur-mesure et évolutives</h2>
              <p className="text-slate-700 mb-4">Nous développons des applications mobiles robustes, ergonomiques et évolutives, adaptées à vos enjeux métiers et à vos utilisateurs. Notre équipe vous accompagne de la conception à la publication, puis au-delà.</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                {avantages.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Sparkles className="w-20 h-20 text-blue-400 animate-pulse mb-4" />
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold shadow animate-pulse">à partir de 2990€</span>
              <span className="block text-xs text-slate-400 mt-2">Devis personnalisé</span>
            </div>
          </div>
        </div>
        {/* Grille interactive des tarifs */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-600 mb-6 text-center">Nos offres Mobile</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {abonnements.map((ab, i) => (
              <div key={i} className={`relative bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 ${ab.highlight ? 'border-blue-500 scale-105 z-10' : 'border-blue-100'} hover:scale-105 transition-all animate-float`}> 
                {ab.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold shadow animate-pulse">{ab.badge}</span>
                )}
                {!ab.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shadow">{ab.badge}</span>
                )}
                <h4 className="text-2xl font-bold text-blue-700 mb-2">{ab.name}</h4>
                <span className="text-3xl font-extrabold text-cyan-600 mb-4">{ab.price}</span>
                <ul className="mb-6 space-y-2">
                  {ab.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> {f}</li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-2 rounded-full font-bold shadow ${ab.highlight ? 'bg-blue-500 text-white hover:bg-cyan-500' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition`}>Choisir</button>
              </div>
            ))}
          </div>
        </div>
        {/* Objectifs & modes d'utilisation */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-600 mb-6 text-center">Objectifs des solutions Mobile IOI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {objectifs.map((o, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-all animate-float">
                {o.icon}
                <span className="font-bold text-blue-700 mb-2">{o.title}</span>
                <span className="text-slate-600 text-sm">{o.desc}</span>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-cyan-600 mb-6 text-center">Modes d'utilisation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modesUtilisation.map((m, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-all animate-float">
                {m.icon}
                <span className="font-bold text-blue-700 mb-2">{m.title}</span>
                <span className="text-slate-600 text-sm">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Cas d'usage */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-600 mb-6 text-center">Cas d'usage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-all animate-float">
                {uc.icon}
                <span className="font-bold text-blue-700 mb-2">{uc.title}</span>
                <span className="text-slate-600 text-sm">{uc.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Call to action */}
        <div className="flex flex-col items-center mt-12">
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-cyan-500 transition relative overflow-hidden group/button text-lg mb-2">
            <span className="relative z-10">En savoir plus sur mobile-ioi.fr</span>
            <span className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-300 blur-lg" />
          </a>
          <span className="text-xs text-slate-400 mt-2">Support humain 24/7 & accompagnement personnalisé</span>
        </div>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
} 