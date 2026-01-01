import { User, ThumbsUp } from "lucide-react"

interface PostCardProps {
  id: number
  author: string
  content: string
  timestamp: string
  likes: number
  isOriginalPost?: boolean
}

export function PostCard({ id, author, content, timestamp, likes, isOriginalPost = false }: PostCardProps) {
  return (
    <div
      className={`p-4 border border-border rounded-lg ${isOriginalPost ? "bg-primary/5 border-primary/20" : "bg-card"}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{author}</p>
            {isOriginalPost && <span className="text-xs text-primary font-medium">Original Post</span>}
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>

      <p className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">{content}</p>

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
        <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  )
}
