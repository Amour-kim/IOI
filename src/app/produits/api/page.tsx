import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { Zap, Shield, Globe, Database, Users, CheckCircle, Star, TrendingUp, Info } from 'lucide-react';
import ContactUs from "@/components/ui/contact_us";

const LOGO_URL = "/logo.png";
const PROJECT_URL = "https://api-ioi.fr";

const useCases = [
  {
    icon: <Database className="w-8 h-8 text-amber-500 mb-2 animate-pulse" />,
    title: "Connexion à vos données métier",
    desc: "Exploitez et synchronisez vos données (RH, clients, ventes, production, etc.) en temps réel dans tous vos outils."
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500 mb-2 animate-bounce" />,
    title: "Sécurité & conformité RGPD",
    desc: "Toutes les API sont sécurisées, chiffrées et conformes aux normes européennes de protection des données."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500 mb-2 animate-spin-slow" />,
    title: "Interopérabilité universelle",
    desc: "Intégrez facilement nos API à vos systèmes existants (Web, Mobile, ERP, CRM, IoT, etc.)."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500 mb-2 animate-pulse" />,
    title: "Automatisation & collaboration",
    desc: "Automatisez vos processus, connectez vos équipes et offrez de nouveaux services à vos clients ou collaborateurs."
  },
];

const avantages = [
  "Documentation claire, interactive et multilingue",
  "Support technique réactif et humain",
  "Mises à jour automatiques et sans interruption",
  "Tarification transparente et adaptée à tous les profils",
  "Accès en sandbox pour vos tests et prototypages",
  "Scalabilité pour startups, PME, grandes entreprises et indépendants",
];

const abonnements = [
  {
    name: "Essentiel",
    price: "29€/mois",
    features: [
      "Accès à toutes les API standards",
      "Limite : 50 000 requêtes/mois",
      "Support par email",
      "Documentation interactive",
      "Sandbox de test",
    ],
    badge: "Idéal pour démarrer",
    highlight: false,
  },
  {
    name: "Pro",
    price: "99€/mois",
    features: [
      "Toutes les fonctionnalités Essentiel",
      "Limite : 500 000 requêtes/mois",
      "Support prioritaire (email + chat)",
      "Webhooks & intégrations avancées",
      "SLA 99,9% garantie",
    ],
    badge: "Le plus populaire",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    features: [
      "Toutes les fonctionnalités Pro",
      "Requêtes illimitées",
      "Support dédié 24/7",
      "Personnalisation & onboarding",
      "Accès API premium & analytics avancés",
    ],
    badge: "Sur-mesure",
    highlight: false,
  },
];

const objectifs = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />,
    title: "Accélérer la transformation digitale",
    desc: "Modernisez vos processus, gagnez en agilité et boostez la productivité de votre organisation grâce à l'automatisation et la centralisation des données."
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500 animate-pulse" />,
    title: "Créer de nouveaux services",
    desc: "Développez rapidement des applications, portails ou outils connectés pour vos clients, partenaires ou collaborateurs."
  },
  {
    icon: <Info className="w-8 h-8 text-blue-500 animate-spin-slow" />,
    title: "Sécuriser et fiabiliser les échanges",
    desc: "Garantissez la sécurité, la conformité et la traçabilité de vos flux de données, quel que soit votre secteur d'activité."
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500 animate-bounce" />,
    title: "Innover et personnaliser",
    desc: "Prototypage rapide, intégration sur-mesure, personnalisation des flux et adaptation à vos besoins spécifiques."
  },
];

const modesUtilisation = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500 animate-spin-slow" />,
    title: "Intégration continue",
    desc: "Connectez vos API à vos applications web, mobiles, ERP, CRM, IoT, etc. pour une synchronisation en temps réel."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500 animate-pulse" />,
    title: "Automatisation des workflows",
    desc: "Automatisez les tâches répétitives, les notifications, la génération de rapports et la gestion documentaire."
  },
  {
    icon: <Database className="w-8 h-8 text-amber-500 animate-pulse" />,
    title: "Prototypage & tests",
    desc: "Utilisez la sandbox pour tester, expérimenter et valider vos idées avant le déploiement en production."
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500 animate-bounce" />,
    title: "Sécurisation avancée",
    desc: "Chiffrement, gestion des accès, audit des logs et conformité RGPD intégrés à toutes les APIs."
  },
];

export default function ApiPage() {
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-down">APIs Dynamiques IOI</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">Connectez, automatisez et faites évoluer votre organisation grâce à des APIs puissantes, sécurisées et prêtes pour tous les usages professionnels ou personnels.</p>
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-white/90 text-amber-700 font-bold text-lg shadow-lg hover:bg-white transition animate-bounce border-2 border-amber-500 mb-4 mt-2">
            Découvrir le site du projet
          </a>
          <span className="inline-block px-6 py-2 rounded-full bg-white/90 text-amber-700 font-bold text-lg shadow-lg animate-pulse">Nouveau&nbsp;: APIs pour tous les secteurs</span>
        </div>
      </section>
      {/* Présentation détaillée */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-amber-400/30 to-orange-400/30 rounded-full blur-2xl opacity-60 animate-float" />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">Des APIs pour toutes les entreprises, organisations et créateurs</h2>
              <p className="text-slate-700 mb-4">Nos APIs dynamiques s'adaptent à tous les secteurs : éducation, santé, industrie, commerce, services, collectivités, startups, freelances et même particuliers. Accélérez votre transformation digitale, automatisez vos tâches, connectez vos outils et ouvrez de nouveaux horizons à votre activité.</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                {avantages.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Zap className="w-20 h-20 text-yellow-400 animate-bounce mb-4" />
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-white font-bold shadow animate-pulse">à partir de 99€/mois</span>
              <span className="block text-xs text-slate-400 mt-2">Essai gratuit 14 jours</span>
            </div>
          </div>
        </div>
        {/* Grille interactive des tarifs */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Nos abonnements</h3>
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
        {/* Cas d'usage */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Cas d'usage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-amber-100 hover:scale-105 transition-all animate-float">
                {uc.icon}
                <span className="font-bold text-amber-700 mb-2">{uc.title}</span>
                <span className="text-slate-600 text-sm">{uc.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Objectifs & modes d'utilisation */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6 text-center">Objectifs des APIs IOI</h3>
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
        {/* Call to action */}
        <div className="flex flex-col items-center mt-12">
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold shadow hover:bg-orange-500 transition relative overflow-hidden group/button text-lg mb-2">
            <span className="relative z-10">En savoir plus sur api-ioi.fr</span>
            <span className="absolute inset-0 rounded-full bg-amber-400/30 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-300 blur-lg" />
          </a>
          <span className="text-xs text-slate-400 mt-2">Support humain 24/7 & documentation interactive</span>
        </div>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
} 