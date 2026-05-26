"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "portfolio-first-load-complete"

export default function FirstVisitLoader({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      const skipTimer = window.setTimeout(() => setIsLoading(false), 0)
      return () => window.clearTimeout(skipTimer)
    }

    const timer = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, "true")
      setIsLoading(false)
    }, 4000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>

      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]">
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--glass-border)]" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[var(--accent-primary)]" />
              <div className="absolute inset-3 rounded-full bg-[var(--accent-surface)] shadow-[0_0_28px_var(--accent-glow)]" />
            </div>

            <div className="space-y-2 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
                Loading portfolio
              </p>
              <div className="flex gap-1.5">
                <span className="h-1.5 w-10 animate-pulse rounded-full bg-[var(--accent-primary)]" />
                <span className="h-1.5 w-10 animate-pulse rounded-full bg-[var(--accent-gradient-end)] delay-100" />
                <span className="h-1.5 w-10 animate-pulse rounded-full bg-[var(--success)] delay-200" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
