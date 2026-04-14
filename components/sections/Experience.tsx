import { experiences } from "@/data/experience"
import TimelineItem from "@/components/ui/timeline-item"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Work Experience
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-orange-500 transform -translate-x-1/2"></div>

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
