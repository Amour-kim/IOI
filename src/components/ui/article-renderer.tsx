import Image from "next/image"
import type { Article, ArticleSection } from "@/types/article"

interface ArticleRendererProps {
  article: Article
}

interface SectionRendererProps {
  section: ArticleSection
}

function SectionRenderer({ section }: SectionRendererProps) {
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="text-[#333333] text-sm leading-relaxed text-justify mb-4 last:mb-0">
        {paragraph}
      </p>
    ))
  }

  switch (section.type) {
    case "text":
      return <div className="mb-12">{renderContent(section.content || "")}</div>

    case "image-text":
      return (
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {section.image && (
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="w-full h-auto rounded-sm"
                />
              )}
            </div>
            <div>
              {section.title && (
                <h2 className="text-[#000000] text-xl font-serif mb-4 tracking-wide">{section.title}</h2>
              )}
              {section.content && renderContent(section.content)}
            </div>
          </div>
        </div>
      )

    case "text-image":
      return (
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {section.title && (
                <h2 className="text-[#000000] text-xl font-serif mb-4 tracking-wide">{section.title}</h2>
              )}
              {section.content && renderContent(section.content)}
            </div>
            <div>
              {section.image && (
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="w-full h-auto rounded-sm"
                />
              )}
            </div>
          </div>
        </div>
      )

    case "quote":
      return (
        <div className="mb-16 text-center">
          <blockquote className="text-[#000000] text-xl md:text-2xl font-serif leading-tight">
            "{section.content}"
          </blockquote>
        </div>
      )

    case "sidebar":
      return (
        <div className="mb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">{section.content && renderContent(section.content)}</div>
            <div className="lg:col-span-1">
              {section.sidebarContent && (
                <div className="bg-[#d9d9d9] p-4 text-xs text-[#333333] leading-relaxed">
                  {section.sidebarContent.split("\n\n").map((paragraph, index) => (
                    <div key={index} className="mb-2 last:mb-0">
                      {paragraph.split("\n").map((line, lineIndex) => (
                        <div key={lineIndex}>
                          {line.startsWith("Note importante:") ? <strong>{line}</strong> : line}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )

    case "image-full":
      return (
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-2xl">
            {section.image && (
              <Image
                src={section.image.src || "/placeholder.svg"}
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Date */}
        <div className="text-center mb-8">
          <p className="text-[#333333] text-sm tracking-wider">{article.date}</p>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-[#000000] text-2xl md:text-3xl font-serif leading-tight tracking-wide">
            {article.title}
          </h1>

          {/* Decorative line */}
          <div className="flex justify-center mt-6">
            <div className="w-64 h-px bg-[#d9d9d9]"></div>
          </div>
        </div>

        {/* Dynamic Sections */}
        {article.sections && article.sections.length > 0 ? (
          article.sections.map((section) => (
            <SectionRenderer key={section.id || section.title} section={section} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>Aucune section à afficher pour le moment.</p>
          </div>
        )}

        {/* Closing section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-px bg-[#d9d9d9]"></div>
          </div>
          <p className="text-[#333333] text-xs tracking-wider">FIN DE L'ARTICLE</p>
        </div>
      </div>
    </div>
  )
}
