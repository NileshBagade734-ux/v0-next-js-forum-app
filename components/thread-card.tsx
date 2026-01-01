import { MessageCircle, User } from "lucide-react"
import Link from "next/link"

interface ThreadCardProps {
  id: number
  title: string
  excerpt: string
  author: string
  replyCount: number
  views: number
  timestamp: string
}

export function ThreadCard({ id, title, excerpt, author, replyCount, views, timestamp }: ThreadCardProps) {
  return (
    <Link href={`/thread/${id}`}>
      <div className="p-4 border border-border rounded-lg bg-card hover:bg-secondary/30 transition-colors cursor-pointer">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{excerpt}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
            <MessageCircle className="w-4 h-4" />
            <span>{replyCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border gap-2 text-xs text-muted-foreground flex-wrap">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{views} views</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
