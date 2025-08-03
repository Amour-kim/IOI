import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { CommentType } from "@/lib/data"

interface CommentsSectionProps {
  comments: CommentType[]
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <div className="grid gap-6">
      <h2 className="font-semibold text-xl">{comments.length} Comments</h2>
      {comments.length === 0 && <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>}
      {comments.map((comment) => (
        <div key={comment.id} className="text-sm flex items-start gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.user} />
            <AvatarFallback>{comment.user.charAt(1)}</AvatarFallback> {/* @user -> U */}
          </Avatar>
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{comment.user}</div>
              <div className="text-muted-foreground text-xs">{comment.time}</div>
            </div>
            <div>{comment.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
