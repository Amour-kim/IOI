import Image from "next/image"
import type { ArticleImage } from "@/types/article"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ImageCardProps {
  image: ArticleImage & {
    title?: string;
    imageUrl?: string;
    altText: string;
  }
}

export function ImageCard({ image }: ImageCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image src={image.imageUrl || "/placeholder.svg"} alt={image.altText} fill className="object-cover" />
        </div>
      </CardContent>
      {image.title && (
        <CardHeader className="p-4 pt-2">
          <CardTitle className="text-sm font-medium line-clamp-2">{image.title}</CardTitle>
        </CardHeader>
      )}
    </Card>
  )
}
