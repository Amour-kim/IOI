import { cn } from '@/lib/utils';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import type { ArticleSection as ArticleSectionType } from '@/types/article.types';

interface ArticleSectionProps {
  section: ArticleSectionType;
  className?: string;
}

export function ArticleSection({ section, className }: ArticleSectionProps) {
  const hasImages = section.images && section.images.length > 0;
  const imagePosition = section.imagePosition || 'right';

  return (
    <section 
      id={section.id}
      className={cn('mb-12 scroll-mt-20', className)}
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
        {section.title}
      </h2>
      
      <div 
        className={cn(
          'flex flex-col gap-8',
          hasImages ? 'md:flex-row' : '',
          imagePosition === 'left' ? 'md:flex-row-reverse' : ''
        )}
      >
        <div 
          className={cn(
            'prose max-w-none dark:prose-invert',
            hasImages ? 'md:flex-1' : 'w-full'
          )}
        >
          <div 
            className="prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-1"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
        
        {hasImages && section.images && (
          <div className="md:w-1/2">
            <ImageCarousel 
              images={section.images.filter(img => img?.src)} 
            />
          </div>
        )}
      </div>
    </section>
  );
}
