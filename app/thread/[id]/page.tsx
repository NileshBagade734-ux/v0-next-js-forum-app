"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { PostCard } from "@/components/post-card"
import { SummaryPanel } from "@/components/summary-panel"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Mock data
const MOCK_THREADS_DETAIL: Record<number, any> = {
  1: {
    id: 1,
    title: "Best practices for React Server Components in Next.js 16",
    author: "alex_dev",
    timestamp: "2h ago",
    posts: [
      {
        id: 1,
        author: "alex_dev",
        content:
          "I've been exploring React Server Components and wondering about the best practices for integrating them with client-side state management. What patterns are you all using?\n\nKey considerations:\n• When to use Server vs Client components\n• State management across boundaries\n• Data fetching patterns\n• Performance implications",
        timestamp: "2h ago",
        likes: 12,
        isOriginalPost: true,
      },
      {
        id: 2,
        author: "react_expert",
        content:
          "Great question! The key insight is understanding the server-client boundary. We use Server Components for:\n\n• Data fetching\n• Accessing secrets\n• Large dependencies\n\nAnd Client Components only where needed for interactivity. This keeps the bundle small.",
        timestamp: "1h 55m ago",
        likes: 8,
      },
      {
        id: 3,
        author: "next_dev",
        content:
          "Don't forget about Server Actions! They bridge the gap between Server and Client components beautifully. You can call server-side functions directly from client components without building API routes.",
        timestamp: "1h 40m ago",
        likes: 15,
      },
      {
        id: 4,
        author: "arch_thinker",
        content:
          "One pattern we've adopted is using Context at the server level for shared data, then selectively passing it to client components. Reduces re-renders and keeps things organized.",
        timestamp: "1h 20m ago",
        likes: 6,
      },
    ],
  },
  2: {
    id: 2,
    title: "TypeScript strict mode migration guide",
    author: "sarah_ts",
    timestamp: "4h ago",
    posts: [
      {
        id: 1,
        author: "sarah_ts",
        content:
          "Recently enabled strict mode in our TypeScript project and it's been quite a journey. Here's what we learned and how we approached the migration...\n\nWe started with:\n• Fixing type errors incrementally\n• Using type assertions where needed\n• Adding proper typing to external libs",
        timestamp: "4h ago",
        likes: 18,
        isOriginalPost: true,
      },
      {
        id: 2,
        author: "type_safe",
        content:
          "This is so helpful! Did you enable all strict flags at once or gradually? We're thinking of a gradual approach.",
        timestamp: "3h 50m ago",
        likes: 4,
      },
    ],
  },
}

function ThreadDetailContent() {
  const params = useParams()
  const router = useRouter()
  const id = Number.parseInt(params.id as string)

  const thread = MOCK_THREADS_DETAIL[id]

  if (!thread) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearch={() => {}} />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-muted-foreground">Thread not found</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link href="/">
          <Button variant="ghost" className="gap-2 mb-6 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4" />
            Back to discussions
          </Button>
        </Link>

        {/* Thread header */}
        <div className="mb-8 pb-8 border-b border-border">
          <h1 className="text-3xl font-bold text-foreground mb-4">{thread.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By {thread.author}</span>
            <span>{thread.timestamp}</span>
            <span>{thread.posts.length} replies</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-4">
            {thread.posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>

          {/* Sidebar with AI TL;DR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SummaryPanel threadId={thread.id} threadTitle={thread.title} postCount={thread.posts.length} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default function ThreadDetailPage() {
  return (
    <ThemeProvider>
      <ThreadDetailContent />
    </ThemeProvider>
  )
}
