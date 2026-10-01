import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { ease } from "../motion"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  // { href: "#work", label: "Work" },
  // { href: "#experience", label: "Exper/ience" },
  // { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  function go(event, href) {
    event.preventDefault()
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.pushState(null, "", href)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-cream/90 backdrop-blur-md"
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={(event) => go(event, "#home")}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream"
        >
          Siam
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => go(event, link.href)} className="hover:opacity-60">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(event) => go(event, "#contact")} className="hover:opacity-60">
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 text-lg font-medium">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => go(event, link.href)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={(event) => go(event, "#contact")}>
              Let's Talk
            </a>
          </div>
        </nav>
      )}
    </motion.header>
  )
}
