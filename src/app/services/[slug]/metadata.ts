import { Metadata } from 'next';
import { servicesData } from '@/data/services/services.data';
import { Service } from '@/types/services.types';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData] as Service;
  
  if (!service) {
    return {
      title: 'Service non trouvé',
      description: 'Le service demandé est introuvable.'
    };
  }

  return {
    title: service.seo?.metaTitle || service.title,
    description: service.seo?.metaDescription || service.shortDescription,
    keywords: service.seo?.metaKeywords || [service.title, ...(service.tags || [])],
    openGraph: {
      title: service.seo?.ogTitle || service.title,
      description: service.seo?.ogDescription || service.shortDescription,
      images: [
        {
          url: service.seo?.ogImage || (typeof service.image === 'object' ? service.image.src : '/images/og/default.jpg'),
          width: 1200,
          height: 630,
          alt: typeof service.image === 'object' ? service.image.alt || service.title : service.title,
        },
      ],
      type: 'website',
      url: `https://www.ioi-digital.com/services/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  // Récupération des slugs de tous les services
  const slugs = Object.values(servicesData).map(service => ({
    slug: service.slug,
  }));
  
  return slugs;
}
