import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { workGroups } from "../data"
import { ease } from "../motion"

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const tones = [
  { bg: "#111111", fg: "#faf7f3" },
  { bg: "#efe8df", fg: "#111111" },
  { bg: "#231f1c", fg: "#faf7f3" },
  { bg: "#e4ddd4", fg: "#111111" },
]

function ProjectCard({ project, index, reduce }) {
  const tone = tones[index % tones.length]
  const href = project.live || project.repo
  const caption = project.type || project.stack.slice(0, 3).join(" · ")

  return (
    <motion.article className="group flex flex-col gap-2.5" variants={reduce ? undefined : item}>
      <a href={href} target="_blank" rel="noreferrer" className="flex flex-col gap-2.5">
        <div className="overflow-hidden rounded-[20px]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              style={{ objectPosition: project.imagePosition || "top" }}
            />
          ) : (
            <div
              className="flex aspect-[3/2] w-full flex-col justify-between p-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              style={{ background: tone.bg, color: tone.fg }}
            >
              <p className="text-sm">{caption}</p>
              <p className="max-w-[12ch] text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl">{project.name}</p>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-[1.75rem] leading-tight font-medium tracking-[-0.02em]">{project.name}</h3>
          <p className="mt-1 text-base leading-snug">{project.summary}</p>
        </div>
      </a>
      {project.live && project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm font-medium underline underline-offset-4">
          Source
        </a>
      )}
    </motion.article>
  )
}

function Pill({ active, onClick, children, layoutId }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative rounded-full border px-4 py-2 text-sm font-semibold ${active ? "border-transparent" : "border-line"}`}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-full bg-ink"
          transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
        />
      )}
      <span className={`relative ${active ? "text-cream" : ""}`}>{children}</span>
    </button>
  )
}

export default function Projects() {
  const [groupId, setGroupId] = useState("startups")
  const [clientType, setClientType] = useState("Telegram Mini App")
  const reduce = useReducedMotion()

  const group = workGroups.find((entry) => entry.id === groupId) ?? workGroups[0]
  const visible = useMemo(() => {
    if (group.id !== "clients") return group.projects
    return group.projects.filter((project) => project.type === clientType)
  }, [group, clientType])

  const listKey = group.id === "clients" ? `${group.id}-${clientType}` : group.id

  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28">
        <h2 className="text-center text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          Selected Work
        </h2>
        {/* <p className="mt-4 max-w-xl text-lg text-muted">
          Everything is grouped, so one list stays on screen at a time.
        </p> */}

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Work groups">
          {workGroups.map((entry) => {
            const count = entry.projects.length
            return (
              <Pill
                key={entry.id}
                layoutId="work-group"
                active={entry.id === group.id}
                onClick={() => setGroupId(entry.id)}
              >
                {entry.label}
                {count > 0 ? ` ${count}` : ""}
              </Pill>
            )
          })}
        </div>

        {group.id === "clients" && (
          <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Client work types">
            {group.types.map((type) => {
              const count = group.projects.filter((project) => project.type === type).length
              return (
                <Pill
                  key={type}
                  layoutId="client-type"
                  active={type === clientType}
                  onClick={() => setClientType(type)}
                >
                  {type} {count}
                </Pill>
              )
            })}
          </div>
        )}

        <p className="mt-8 text-sm font-medium">{group.detail}</p>

        {visible.length === 0 ? (
          <p className="mt-6 max-w-lg text-lg text-muted">
            Farewell Foundation has its own place here. The project titles for that work are not public yet.
          </p>
        ) : (
          <motion.div
            key={listKey}
            className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={list}
          >
            {visible.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} reduce={reduce} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
