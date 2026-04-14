
import React from "react";


type Skill = {
  name: string
  icon: React.ReactNode
}

export default function MarqueeRow({ items, direction, speed }: { items: Skill[], direction: "left" | "right", speed: number }) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="marquee-row-wrapper group relative flex overflow-hidden py-4">
      {/* Edge Fading — uses theme-aware token */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[15%] bg-gradient-to-r from-[var(--marquee-fade)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[15%] bg-gradient-to-l from-[var(--marquee-fade)] to-transparent" />

      <div
        className="marquee-container flex shrink-0 items-center gap-10 whitespace-nowrap px-10"
        style={{ 
          animation: `${animationName} ${speed}s linear infinite` 
        }}
      >
        {/* Render 4 times for a truly infinite loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="skill-card-transition group/card flex items-center gap-5 bg-[var(--marquee-card-bg)] px-8 py-5 rounded-2xl border border-[var(--marquee-card-border)] shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] hover:-translate-y-1 hover:border-[var(--accent-primary)]/40 active:scale-95 transition-all duration-300"
          >
            <div className="text-4xl flex items-center justify-center transition-transform group-hover/card:scale-110 duration-500">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[var(--marquee-card-text)] leading-none tracking-tight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}