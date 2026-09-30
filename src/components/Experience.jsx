import { experience } from "../data"
import { Rise, Stagger, StaggerItem } from "./Rise"

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          <Rise>Experience</Rise>
        </h2>
        <Stagger className="mt-14 divide-y divide-line border-t border-line">
          {experience.map((item) => (
            <StaggerItem
              key={item.title}
              className="grid gap-3 py-8 sm:grid-cols-[8rem_1fr_1.2fr] sm:items-baseline sm:gap-8"
            >
              <p className="text-sm font-medium">{item.when}</p>
              <div>
                <h3 className="text-3xl font-extrabold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-1 text-muted">{item.place}</p>
              </div>
              <p className="leading-relaxed text-muted">{item.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
