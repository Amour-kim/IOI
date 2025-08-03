"use client";

import React, { useState, useMemo } from 'react';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { BookOpen, FileText, Search, Download, HelpCircle, Layers, Users, FolderOpen } from 'lucide-react';
import ContactUs from "@/components/ui/contact_us";

const LOGO_URL = "/logo.png";
const PROJECT_URL = "https://support-ioi.fr";

const documents = [
  { title: "Guide de démarrage Web IOI", category: "Guides d'utilisation", url: "/docs/guide-web.pdf" },
  { title: "Notice API IOI", category: "Notices techniques", url: "/docs/notice-api.pdf" },
  { title: "FAQ Mobile IOI", category: "FAQ & Astuces", url: "/docs/faq-mobile.pdf" },
  { title: "Tutoriel prise en main Desktop", category: "Tutoriels pas à pas", url: "/docs/tuto-desktop.pdf" },
  { title: "Kit de formation équipe", category: "Documents collaboratifs", url: "/docs/kit-formation.pdf" },
];

const categoryIcons: Record<string, JSX.Element> = {
  "Guides d'utilisation": <BookOpen className="w-7 h-7 text-blue-500" />,
  "Tutoriels pas à pas": <FileText className="w-7 h-7 text-amber-500" />,
  "FAQ & Astuces": <HelpCircle className="w-7 h-7 text-pink-500" />,
  "Notices techniques": <Layers className="w-7 h-7 text-green-500" />,
  "Documents collaboratifs": <Users className="w-7 h-7 text-purple-500" />,
};

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Catégories dynamiques extraites des documents
  const categories = useMemo(() => {
    const cats = Array.from(new Set(documents.map(doc => doc.category)));
    return cats;
  }, []);

  // Documents filtrés selon recherche et catégorie
  const filteredDocs = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch =
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? doc.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-down">Support & Documentation IOI</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">Accédez à tous nos guides, tutoriels, notices et ressources pour tirer le meilleur de nos produits.</p>
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-white/90 text-blue-700 font-bold text-lg shadow-lg hover:bg-white transition animate-bounce border-2 border-blue-500 mb-4 mt-2">
            Accéder au portail support
          </a>
          <span className="inline-block px-6 py-2 rounded-full bg-white/90 text-blue-700 font-bold text-lg shadow-lg animate-pulse">Ressources utiles</span>
        </div>
      </section>
      {/* Section catégories dynamiques */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-6 text-center">Catégories de documents</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              className={`flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-all animate-float min-w-[160px] ${selectedCategory === null ? 'ring-2 ring-blue-400' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              <FolderOpen className="w-7 h-7 text-blue-400" />
              <span className="font-bold text-blue-700 mt-2 text-center">Toutes</span>
            </button>
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-all animate-float min-w-[160px] ${selectedCategory === cat ? 'ring-2 ring-blue-400' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {categoryIcons[cat as string] || <FolderOpen className="w-7 h-7 text-blue-400" />}
                <span className="font-bold text-blue-700 mt-2 text-center">{cat}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Recherche/filtrage dynamique */}
        <div className="mb-10 flex flex-col items-center">
          <div className="flex items-center gap-2 w-full max-w-md">
            <Search className="w-6 h-6 text-blue-400" />
            <input
              type="text"
              placeholder="Rechercher un document, une catégorie..."
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        {/* Liste des documents filtrés */}
        <div className="mb-16">
          <h3 className="text-lg md:text-xl font-bold text-cyan-600 mb-4">Documents à télécharger</h3>
          {filteredDocs.length === 0 ? (
            <div className="text-center text-slate-400">Aucun document trouvé.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc, i) => (
                <div key={i} className="flex items-center bg-white/80 rounded-xl shadow p-4 border border-blue-100 hover:scale-105 transition-all animate-float">
                  <FolderOpen className="w-8 h-8 text-blue-500 mr-4" />
                  <div className="flex-1">
                    <div className="font-bold text-blue-700">{doc.title}</div>
                    <div className="text-xs text-slate-500 mb-1">{doc.category}</div>
                  </div>
                  <a href={doc.url} download className="ml-4 px-4 py-2 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-cyan-500 transition flex items-center gap-2">
                    <Download className="w-5 h-5" /> Télécharger
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Call to action */}
        <div className="flex flex-col items-center mt-12">
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-cyan-500 transition relative overflow-hidden group/button text-lg mb-2">
            <span className="relative z-10">Voir plus de ressources sur support-ioi.fr</span>
            <span className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-300 blur-lg" />
          </a>
          <span className="text-xs text-slate-400 mt-2">Support humain & documentation à jour</span>
        </div>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
} 