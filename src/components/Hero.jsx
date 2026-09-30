import { motion, useReducedMotion } from "motion/react"
import { profile } from "../data"
import { ease } from "../motion"
import { Rise } from "./Rise"

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:flex-row lg:gap-12">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-2xl font-medium sm:text-3xl">
        <Rise play="load" delay={0.08}>
          Hi, I'm
        </Rise>
      </p>
      <h1 className="mt-2 flex flex-wrap gap-2 text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.86] font-extrabold tracking-[-0.045em]">
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
      </div>

      <motion.img
        src="/siam-hero-picture.webp"
        alt="Siam Sheikh"
        className="hidden w-full max-w-md rounded-2xl object-cover sm:max-w-lg lg:block lg:w-1/2 lg:max-w-xl"
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      />
    </section>
  )
}
