
import React from "react";


type Skill = {
  name: string
  icon: React.ReactNode
}

export default function MarqueeRow({ items, direction, speed }: { items: Skill[], direction: "left" | "right", speed: number }) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="marquee-row-wrapper group relative flex overflow-hidden py-4">
      {/* Edge Fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[15%] bg-linear-to-r from-[#FAFAFB] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[15%] bg-linear-to-l from-[#FAFAFB] to-transparent" />

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
            className="skill-card-transition group/card flex items-center gap-5 bg-white px-8 py-5 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-400/40 active:scale-95"
          >
            <div className="text-4xl flex items-center justify-center transition-transform group-hover/card:scale-110 duration-500">
              {item.icon}
            </div>
            <div className="flex flex-col">
              {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                Skill
              </span> */}
              <span className="text-lg font-bold text-slate-800 leading-none tracking-tight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}