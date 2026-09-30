import { motion, useReducedMotion } from "motion/react"
import { profile } from "../data"
import { ease } from "../motion"
import { FadeUp, Rise } from "./Rise"

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.x },
]

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <h2 className="max-w-xl text-5xl leading-[0.95] font-extrabold tracking-[-0.045em] sm:text-7xl">
          <Rise>Let's build something meaningful together.</Rise>
        </h2>
        <FadeUp>
          <p className="text-sm font-semibold">Let's Connect</p>
          <ul className="mt-6 space-y-4 text-lg">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                github.com/SiamShekh
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
          <ul className="mt-8 flex gap-5 text-sm font-semibold">
            {socials.map((item) => (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={{ duration: 0.25, ease }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  )
}
