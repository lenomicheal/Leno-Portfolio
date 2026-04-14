import { experiences } from "@/data/experience"
import TimelineItem from "@/components/ui/timeline-item"

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 bg-[var(--bg-primary)]">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 space-y-2">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] font-mono">
            Career journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Work Experience
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* CENTER LINE — gradient from indigo to violet */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 transform -translate-x-1/2 bg-gradient-to-b from-[var(--accent-gradient-start)] via-[var(--accent-gradient-end)] to-[var(--accent-gradient-start)]/20"></div>

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <TimelineItem
                key={item.id}
                {...item}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
