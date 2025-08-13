import React from 'react';
import { Service } from '@/types/services.types';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceExpertsProps {
  service: Service;
}

const ServiceExperts: React.FC<ServiceExpertsProps> = ({ service }) => {
  if (!service.experts || service.experts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre équipe d'experts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Rencontrez les experts dédiés à votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {service.experts.map((expert) => (
            <Card key={expert.id} className="overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-64 w-full">
                {expert.avatar ? (
                  <Image
                    src={expert.avatar}
                    alt={`${expert.name}, ${expert.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback>
                        {expert.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </div>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{expert.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{expert.role}</p>
                {expert.bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                    {expert.bio}
                  </p>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap justify-center gap-2">
                  {expert.skills?.map((skill, idx) => (
                    <Badge key={idx} className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {expert.linkedinUrl && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href={expert.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Profil LinkedIn de ${expert.name}`}
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExperts;
