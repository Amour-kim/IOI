"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import type { VideoCardType } from "@/lib/data"

interface VideoDetailsProps {
  video: VideoCardType
}

export default function VideoDetails({ video }: VideoDetailsProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const descriptionLines = video.description.split("\n")
  const isDescriptionLong = descriptionLines.length > 3 || video.description.length > 200

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold line-clamp-2 md:text-3xl">{video.title}</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={video.channelAvatar || "/placeholder.svg"} alt={video.channel} />
            <AvatarFallback>{video.channel.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="font-semibold">{video.channel}</div>
            <div className="text-xs text-muted-foreground">70K subscribers</div> {/* Placeholder for subscribers */}
          </div>
          <Button variant="default" className="rounded-full px-4 py-2 ml-2">
            Subscribe
          </Button>
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <Button variant="ghost" className="flex items-center gap-1 rounded-full bg-muted hover:bg-muted/80 px-3">
            <ThumbsUp className="w-5 h-5" />
            <span>12K</span> {/* Placeholder for likes */}
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 rounded-full bg-muted hover:bg-muted/80 px-3">
            <ThumbsDown className="w-5 h-5" />
            <span>Dislike</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 rounded-full bg-muted hover:bg-muted/80 px-3">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full bg-muted hover:bg-muted/80">
            <MoreHorizontal className="w-5 h-5" />
            <span className="sr-only">More actions</span>
          </Button>
        </div>
      </div>
      <div className="bg-muted rounded-lg p-4 text-sm">
        <div className="flex items-center gap-2 font-semibold mb-2">
          <span>{video.views} views</span>
          <span>&bull;</span>
          <span>{video.time}</span>
        </div>
        <div className={`whitespace-pre-wrap ${!showFullDescription && isDescriptionLong ? "line-clamp-3" : ""}`}>
          {video.description}
        </div>
        {isDescriptionLong && (
          <Button
            variant="link"
            className="p-0 h-auto text-muted-foreground hover:no-underline"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {video.tags &&
          video.tags.map((tag, i) => (
            <span key={i} className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
              {tag}
            </span>
          ))}
      </div>
    </div>
  )
}
