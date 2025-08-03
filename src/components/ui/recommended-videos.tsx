import Image from "next/image"
import Link from "next/link"
import type { VideoCardType } from "@/lib/data"

interface RecommendedVideosProps {
  videos: VideoCardType[]
  currentVideoId: number
  currentTags?: string[]
}

export default function RecommendedVideos({ videos, currentVideoId, currentTags = [] }: RecommendedVideosProps) {
  // Filtrer les vidéos avec au moins un tag en commun
  let filtered = videos.filter(
    (video) =>
      video.type === "video" &&
      video.id !== currentVideoId &&
      video.tags &&
      video.tags.some((tag) => currentTags.includes(tag))
  )
  // Si moins de 5, compléter avec d'autres vidéos (hors doublons)
  if (filtered.length < 5) {
    const others = videos.filter(
      (video) =>
        video.type === "video" &&
        video.id !== currentVideoId &&
        (!video.tags || !video.tags.some((tag) => currentTags.includes(tag))) &&
        !filtered.includes(video)
    )
    filtered = [...filtered, ...others].slice(0, 5)
  } else {
    filtered = filtered.slice(0, 5)
  }

  return (
    <div className="flex flex-col gap-3">
      {filtered.map((video) => (
        <Link
          key={video.id}
          href={`/ressources/blog/videos/${video.id}`}
          className="flex gap-3 items-start group rounded-lg hover:bg-gray-100/80 transition p-1 relative"
        >
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            width={168}
            height={94}
            className="aspect-video rounded-lg object-cover flex-shrink-0 w-40 h-24"
          />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm line-clamp-2 group-hover:text-orange-600 transition-colors">{video.title}</div>
            <div className="text-xs text-gray-500 line-clamp-1">{video.channel}</div>
            <div className="text-xs text-gray-400 line-clamp-1">
              {video.views} vues &middot; {video.time}
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {video.tags && video.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
