"use client";

import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import { useState } from 'react';
import Visite from '@/components/ui/visite';
import Question from '@/components/ui/question';
import Feedback from '@/components/ui/feedback';
import { docsItems } from '@/data/ressources/docs.data';
import { getUniqueDocVersions, getUniqueDocTypes, getUniqueDocAudiences, getUniqueDocDomains } from '@/lib/utils/resources-utils';

export default function DocumentationPage() {
  const [activeVersion, setActiveVersion] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDocType, setActiveDocType] = useState<string | null>(null);
  const [activeAudience, setActiveAudience] = useState<string | null>(null);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  // valeurs uniques pour filtres
  const versions = getUniqueDocVersions(docsItems);
  const docTypes = getUniqueDocTypes(docsItems);
  const audiences = getUniqueDocAudiences(docsItems);
  const domains = getUniqueDocDomains(docsItems);

  // counts globaux (simple, non conditionnels)
  const versionsCount = Object.fromEntries(versions.map(v => [v, docsItems.filter(d => d.version.includes(v)).length]));
  const typesCount = Object.fromEntries(docTypes.map(t => [t, docsItems.filter(d => d.docType === t).length]));
  const audiencesCount = Object.fromEntries(audiences.map(a => [a, docsItems.filter(d => d.audience.includes(a)).length]));
  const domainsCount = Object.fromEntries(domains.map(d => [d, docsItems.filter(x => x.domain === d).length]));

  // 2. Filtrage dynamique selon recherche + filtres avancés
  const filteredDocs = docsItems.filter(doc => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !activeCategory || doc.category === activeCategory;
    const matchesVersion = !activeVersion || doc.version.includes(activeVersion);
    const matchesDocType = !activeDocType || doc.docType === activeDocType;
    const matchesAudience = !activeAudience || doc.audience.includes(activeAudience);
    const matchesDomain = !activeDomain || doc.domain === activeDomain;
    return matchesSearch && matchesCategory && matchesVersion && matchesDocType && matchesAudience && matchesDomain;
  });

  // Fonction utilitaire pour l'icône du type de document
  function getDocTypeIcon(docType: string) {
    switch (docType) {
      case 'pdf':
        return <span className="text-red-500 text-xl mr-1" title="PDF">📄</span>;
      case 'docx':
        return <span className="text-blue-500 text-xl mr-1" title="Word">📝</span>;
      case 'ppt':
        return <span className="text-orange-500 text-xl mr-1" title="PowerPoint">📊</span>;
      default:
        return <span className="text-gray-400 text-xl mr-1" title="Document">📁</span>;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      <SocialSidebar />
      
      <main className="pt-0">
        {/* Hero Section with Background Video */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/p-api.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-blue-600/80"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Documentation
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Guides complets et documentation technique pour maîtriser nos solutions
            </p>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/25 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/15 rounded-full animate-float animation-delay-3000"></div>
          </div>
        </section>

        {/* Documentation Search */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Rechercher dans la Documentation</h2>
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un sujet, une API, un guide..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none text-lg transition-all duration-300 group-hover:border-indigo-400 shadow-lg hover:shadow-xl"
              />
              <button className="absolute right-2 top-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Rechercher
              </button>
            </div>
          </div>
        </section>

        {/* Filtres avancés */}
        <section className="py-6 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Affiner la recherche</h3>
              <button
                onClick={() => { setActiveVersion(''); setActiveDocType(null); setActiveAudience(null); setActiveDomain(null); }}
                className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                aria-label="Réinitialiser les filtres"
              >Réinitialiser</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Version */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Version</h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  <button onClick={() => setActiveVersion('')} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${!activeVersion?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                    <span>📚</span> Toutes
                  </button>
                  {versions.map(v => (
                    <button key={v} onClick={() => setActiveVersion(v)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${activeVersion===v?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                      <span>{v==='current'?'✅':v==='beta'?'🧪':'🕘'}</span> {v}
                      <span className={`ml-1 px-1.5 rounded-full ${activeVersion===v?'bg-white/20 text-white':'bg-gray-100 text-gray-700'}`}>{versionsCount[v]}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Type */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Type de fichier</h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  <button onClick={() => setActiveDocType(null)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${activeDocType===null?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                    <span>🗂️</span> Tous
                  </button>
                  {docTypes.map(t => (
                    <button key={t} onClick={() => setActiveDocType(t)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${activeDocType===t?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                      <span>{t==='pdf'?'📄':t==='docx'?'📝':t==='ppt'?'📊':'📁'}</span> {t.toUpperCase()}
                      <span className={`ml-1 px-1.5 rounded-full ${activeDocType===t?'bg-white/20 text-white':'bg-gray-100 text-gray-700'}`}>{typesCount[t]}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Audience */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Audience</h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  <button onClick={() => setActiveAudience(null)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border ${activeAudience===null?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>Tous</button>
                  {audiences.map(a => (
                    <button key={a} onClick={() => setActiveAudience(a)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border ${activeAudience===a?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                      {a}
                      <span className={`ml-1 px-1.5 rounded-full ${activeAudience===a?'bg-white/20 text-white':'bg-gray-100 text-gray-700'}`}>{audiencesCount[a]}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Domaine */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Domaine</h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  <button onClick={() => setActiveDomain(null)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border ${activeDomain===null?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>Tous</button>
                  {domains.map(d => (
                    <button key={d} onClick={() => setActiveDomain(d)} className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border ${activeDomain===d?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200'}`}>
                      {d}
                      <span className={`ml-1 px-1.5 rounded-full ${activeDomain===d?'bg-white/20 text-white':'bg-gray-100 text-gray-700'}`}>{domainsCount[d]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-12 animate-fade-in-up">Aucun document trouvé.</div>
              ) : (
                filteredDocs.map((doc, idx) => (
                  <div
                    key={doc.id}
                    className="bg-white rounded-lg shadow-md p-0 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-indigo-300 flex flex-col justify-between animate-fade-in-up"
                  >
                    {/* Cover image */}
                    <div className="h-36 w-full rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100">
                      {doc.cover ? (
                        <img src={doc.cover} alt={doc.title} className="object-cover w-full h-full" />
                      ) : (
                        <div className="text-gray-300 text-5xl">📁</div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {getDocTypeIcon(doc.docType)}
                          <span className="text-xs text-gray-500">{doc.domain}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">{doc.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2 mb-2">
                          {doc.tags.map(tag => (
                            <span key={tag} className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded text-xs">#{tag}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {doc.audience.map(aud => (
                            <span key={aud} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs border border-gray-200">{aud}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${doc.type === 'gratuit' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{doc.type === 'gratuit' ? 'Gratuit' : 'Payant'}</span>
                        {doc.type === 'gratuit' ? (
                          <a
                            href={doc.fileUrl}
                            download
                            className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all"
                          >
                            Télécharger
                          </a>
                        ) : (
                          <a
                            href="/contacts"
                            className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-all"
                          >
                            Commander
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      {/* <Question /> */}
      <Feedback />
      <Visite />
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </div>
  );
} 

// 6. Ajouter le composant CodePlayground en bas du fichier
function CodePlayground() {
  const [code, setCode] = useState('console.log("Hello, world!")');
  const [output, setOutput] = useState('');
  function runCode() {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(String(result ?? ''));
    } catch (e) {
      setOutput('Erreur: ' + (e as Error).message);
    }
  }
  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-2 text-left">
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        rows={3}
        className="w-full font-mono text-sm rounded p-2 border border-gray-300 focus:border-indigo-400 focus:outline-none resize-y mb-2"
        aria-label="Zone de code"
      />
      <div className="flex gap-2">
        <button onClick={runCode} className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition-all text-sm">Exécuter</button>
        <button onClick={() => setCode('')} className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-all text-sm">Effacer</button>
      </div>
      <div className="mt-2 text-xs text-gray-700">
        <span className="font-semibold">Sortie :</span> {output}
      </div>
    </div>
  );
} 