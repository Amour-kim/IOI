import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import RessourcesFeatured from '@/components/ui/ressources-featured';
import RessourcesBlog from '@/components/ui/ressources-blog';
import RessourcesTutoriels from '@/components/ui/ressources-tutoriels';
import Valeur from '@/components/ui/valeurs';

export default function RessourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialSidebar />
      <RessourcesFeatured />
      <RessourcesBlog />
      <RessourcesTutoriels />
      <Valeur />
      <Footer />
    </div>
  );
} 