import Image from "next/image"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  role: string
  company: string
  location: string
  duration: string
  durationShort: string
  logo: string
  points: string[]
  tech: string[]
  isLeft: boolean
}

export default function TimelineItemZigzag({
  role,
  company,
  location,
  duration,
  durationShort,
  logo,
  points,
  tech,
  isLeft,
}: Props) {
  const contentBlock = (
    <div className="space-y-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] p-5 glow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">{role}</h3>
          <p className="text-[var(--text-muted)]">
            {company} — {location}
          </p>
        </div>
        <ChevronUp size={16} className="mt-1 shrink-0 text-[var(--text-muted)]" />
      </div>

      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full bg-[var(--tag-bg)] px-3 py-1 text-xs font-medium text-[var(--tag-text)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )

  const durationBlock = (
    <div className={cn("", isLeft ? "text-left" : "text-right")}>
      <p className="text-xl font-semibold text-[var(--text-primary)]">{duration}</p>
      <p className="text-sm text-[var(--text-muted)]">{durationShort}</p>
    </div>
  )

  return (
    <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-6 gap-y-4 md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] md:gap-x-10">
      <div className="relative row-span-2 flex h-10 w-10 items-start justify-center md:col-start-2 md:row-span-1 md:mx-auto">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-secondary)] shadow-[0_0_14px_var(--accent-glow)]">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-contain p-1"
          />
        </div>
      </div>

      <div
        className={cn(
          "col-start-2",
          isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"
        )}
      >
        {contentBlock}
      </div>

      <div
        className={cn(
          "col-start-2",
          isLeft
            ? "md:col-start-3 md:row-start-1 md:self-start"
            : "md:col-start-1 md:row-start-1 md:self-start"
        )}
      >
        {durationBlock}
      </div>
    </div>
  )
}
