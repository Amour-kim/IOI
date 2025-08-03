import Link from "next/link"
import Image from "next/image"
import type { VideoCardData } from "@/lib/data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface VideoGridCardProps {
  video: VideoCardData
}

export function VideoGridCard({ video }: VideoGridCardProps) {
  return (
    <Link href={`/ressources/blog/videos/${video.id}`} className="group block">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs text-white">{video.duration}</div>
      </div>
      <div className="mt-2 flex gap-2">
        <Avatar className="h-8 w-8 border">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Channel Avatar" />
          <AvatarFallback>{video.channel.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary">{video.title}</h4>
          {video.description && (
            <p className="mt-1 text-xs text-gray-500 line-clamp-2">{video.description}</p>
          )}
          {video.tags && video.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 mb-1">
              {video.tags.map((tag, i) => (
                <span key={i} className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            {video.channel} • {video.views} vues • {video.time}
          </p>
        </div>
      </div>
    </Link>
  )
}
