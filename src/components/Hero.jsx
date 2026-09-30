import { motion, useReducedMotion } from "motion/react"
import { profile } from "../data"
import { ease } from "../motion"
import { Rise } from "./Rise"

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <motion.div
        className="flex items-center justify-between text-sm font-medium tracking-wide"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <p>©2026</p>
        <p>/ Based in {profile.location}</p>
      </motion.div>

      <p className="mt-14 text-2xl font-medium sm:text-3xl">
        <Rise play="load" delay={0.08}>
          Hi, I'm
        </Rise>
      </p>
      <h1 className="mt-2 text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.86] font-extrabold tracking-[-0.045em]">
        <Rise play="load" delay={0.16}>
          Siam
        </Rise>
        <Rise play="load" delay={0.28}>
          Sheikh
        </Rise>
      </h1>
      <p className="mt-8 max-w-xl text-xl font-medium sm:text-2xl">
        <Rise play="load" delay={0.4}>
          Software Engineer & Full-Stack Developer
        </Rise>
      </p>
      <motion.p
        className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.55 }}
      >
        I build digital products that solve real problems — from the interface people tap to the API and
        database behind it. Based in {profile.location}.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.68 }}
      >
        <motion.a
          href="#work"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          View My Work
        </motion.a>
        <motion.a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink px-5 py-3 text-sm font-semibold"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          GitHub
        </motion.a>
      </motion.div>
    </section>
  )
}
