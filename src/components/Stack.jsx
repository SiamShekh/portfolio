import { stackGroups } from "../data"
import { Stagger, StaggerItem } from "./Rise"

const groups = stackGroups.map((group) => {
  if (group.label === "Interface") return { ...group, items: ["JavaScript", ...group.items] }
  if (group.label === "Systems") return { ...group, items: [...group.items, "Git & GitHub"] }
  return group
})

export default function Stack() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          Skills & Technologies
        </h2>
        <Stagger className="mt-14 w-full divide-y divide-line border-y border-line text-left">
          {groups.map((group) => (
            <StaggerItem key={group.label} className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <h3 className="text-3xl font-medium tracking-[-0.03em]">{group.label}</h3>
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base">
                {group.items.map((skill, index) => (
                  <li key={skill} className="flex items-center gap-3">
                    {index > 0 && <span className="size-1 rounded-full bg-ink" aria-hidden="true" />}
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
