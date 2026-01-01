"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { ThreadCard } from "@/components/thread-card"
import { ThemeProvider } from "@/components/theme-provider"

// Mock data
const MOCK_THREADS = [
  {
    id: 1,
    title: "Best practices for React Server Components in Next.js 16",
    excerpt:
      "I've been exploring React Server Components and wondering about the best practices for integrating them with client-side state management. What patterns are you all using?",
    author: "alex_dev",
    replyCount: 24,
    views: 487,
    timestamp: "2h ago",
  },
  {
    id: 2,
    title: "TypeScript strict mode migration guide",
    excerpt:
      "Recently enabled strict mode in our TypeScript project and it's been quite a journey. Here's what we learned and how we approached the migration...",
    author: "sarah_ts",
    replyCount: 18,
    views: 342,
    timestamp: "4h ago",
  },
  {
    id: 3,
    title: "Optimizing database queries with indexes",
    excerpt:
      "Having performance issues with our PostgreSQL queries. Any tips on identifying which columns need indexes? We're using Prisma ORM.",
    author: "db_optimizer",
    replyCount: 31,
    views: 621,
    timestamp: "6h ago",
  },
  {
    id: 4,
    title: "Tailwind CSS v4 migration experience",
    excerpt:
      "Migrated our entire codebase from Tailwind v3 to v4 last week. The new features are amazing, but here are some gotchas we encountered...",
    author: "frontend_pro",
    replyCount: 12,
    views: 289,
    timestamp: "1d ago",
  },
  {
    id: 5,
    title: "API rate limiting strategies",
    excerpt:
      "What are your preferred approaches for implementing rate limiting? Redis-based, database-backed, or middleware solutions? Pros and cons?",
    author: "api_builder",
    replyCount: 27,
    views: 503,
    timestamp: "1d ago",
  },
  {
    id: 6,
    title: "Testing async code with Jest and React Testing Library",
    excerpt:
      "Struggling with testing async operations. Should I use waitFor, findBy queries, or act? Trying to understand best practices...",
    author: "test_master",
    replyCount: 15,
    views: 410,
    timestamp: "2d ago",
  },
]

function ThreadListContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredThreads = useMemo(() => {
    if (!searchQuery.trim()) return MOCK_THREADS

    const query = searchQuery.toLowerCase()
    return MOCK_THREADS.filter(
      (thread) =>
        thread.title.toLowerCase().includes(query) ||
        thread.excerpt.toLowerCase().includes(query) ||
        thread.author.toLowerCase().includes(query),
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Recent Discussions</h2>
          <p className="text-muted-foreground">Join the conversation with developers building the web</p>
        </div>

        {filteredThreads.length > 0 ? (
          <div className="space-y-4">
            {filteredThreads.map((thread) => (
              <ThreadCard key={thread.id} {...thread} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No discussions found matching "{searchQuery}"</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <ThreadListContent />
    </ThemeProvider>
  )
}
