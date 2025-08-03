import type { ArticleCardType } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface TextCardProps {
  text: ArticleCardType
}

export function TextCard({ text }: TextCardProps) {
  return (
    <Link href={`/ressources/blog/articles/${text.id}`} className="block group h-full">
      <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
        {text.thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            <Image src={text.thumbnail} alt={text.title} fill className="object-cover" />
          </div>
        )}
        <CardHeader className="flex-1">
          <CardTitle className="text-lg font-semibold line-clamp-2 mb-1 group-hover:text-orange-700">{text.title}</CardTitle>
          {text.description && (
            <CardDescription className="text-sm line-clamp-2 mb-2">{text.description}</CardDescription>
          )}
          {text.tags && text.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {text.tags.map((tag, i) => (
                <span key={i} className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="text-xs text-gray-400 mt-1">
            {text.author} &middot; {text.date}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <span className="mt-auto text-orange-600 hover:underline text-sm font-semibold">Lire l'article</span>
        </CardContent>
      </Card>
    </Link>
  )
}
