"use client"

import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services/services.data';
import { Service } from '@/types/services.types';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ModernNavbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SocialSidebar from '@/components/ui/social-sidebar';
import ServiceHeader from '@/components/services/ServiceHeader';
import ServicePresentation from '@/components/services/ServicePresentation';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceApproaches from '@/components/services/ServiceApproaches';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import ServiceUseCases from '@/components/services/ServiceUseCases';
import ServiceExperts from '@/components/services/ServiceExperts';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTechnologies from '@/components/services/ServiceTechnologies';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function ServicePage() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadService() {
      try {
        setLoading(true);
        
        // Simulation d'un délai de chargement
        await new Promise((resolve) => setTimeout(resolve, 100));
        
        if (params.slug) {
          const serviceData = await getServiceBySlug(params.slug as string);
          
          if (serviceData) {
            setService(serviceData);
          } else {
            setError("Service non trouvé");
            notFound();
          }
        }
      } catch (err) {
        setError("Erreur lors du chargement du service");
        console.error("Error fetching service:", err);
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      loadService();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p>{error || "Service non trouvé"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ModernNavbar />
      <SocialSidebar />
      
      <main className="flex-grow">
        {service && (
          <>
            <ServiceHeader service={service} />
            <ServicePresentation service={service} />
            <ServiceFeatures service={service} />
            <ServiceUseCases service={service} />
            <ServiceApproaches service={service} />
            <ServiceTechnologies service={service} />
            <ServicePricing service={service} />
            <ServiceTestimonials service={service} />
            <ServiceFAQs service={service} />
            <ServiceExperts service={service} />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
                