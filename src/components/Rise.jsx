import { motion, useReducedMotion } from "motion/react"
import { ease } from "../motion"

export function Rise({ children, delay = 0, className = "", play = "view" }) {
  const reduce = useReducedMotion()
  const motionProps =
    play === "load"
      ? { initial: reduce ? false : { y: "115%" }, animate: { y: "0%" } }
      : {
          initial: reduce ? false : { y: "115%" },
          whileInView: { y: "0%" },
          viewport: { once: true, amount: 0.4 },
        }

  return (
    <span className="block overflow-hidden py-[0.08em] -my-[0.08em]">
      <motion.span className={`block ${className}`} {...motionProps} transition={{ duration: 0.9, ease, delay }}>
        {children}
      </motion.span>
    </span>
  )
}

export function FadeUp({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export function Stagger({ children, className = "" }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8% 0px" }} variants={list}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
