"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, X } from "lucide-react"

interface SummaryPanelProps {
  threadId: number
  threadTitle: string
  postCount: number
}

export function SummaryPanel({ threadId, threadTitle, postCount }: SummaryPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateSummary = async () => {
    setIsLoading(true)
    try {
      // Simulated API call - replace with actual AI service
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSummary(
        `This thread discusses "${threadTitle}" with ${postCount} community responses. Key points include best practices, implementation strategies, and troubleshooting tips shared by experienced developers. The consensus suggests a multi-layered approach focusing on performance and maintainability.`,
      )
    } catch (error) {
      console.error("Failed to generate summary:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button
        onClick={generateSummary}
        disabled={isLoading}
        className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <Sparkles className="w-4 h-4" />
        {isLoading ? "Generating..." : "AI TL;DR"}
      </Button>

      {summary && (
        <div className="p-4 border border-border rounded-lg bg-accent/5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm text-foreground">Summary</span>
            </div>
            <button
              onClick={() => setSummary(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  )
}
