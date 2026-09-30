import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../motion"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export default function Footer() {
  const word = useRef(null)

  useEffect(() => {
    const el = word.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tween = gsap.fromTo(
      el,
      { yPercent: 35 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 70%",
          scrub: 0.6,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)
    return () => window.removeEventListener("load", refresh)
  }, [])

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <p className="max-w-sm text-3xl leading-tight font-extrabold tracking-[-0.04em] sm:text-4xl">
          Software Engineer & Full-Stack Developer
        </p>
        <div>
          <p className="text-sm font-medium">/ Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">/ Contact</p>
          <a href="https://github.com/SiamShekh" target="_blank" rel="noreferrer" className="mt-4 block text-sm underline underline-offset-4">
            github.com/SiamShekh
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <p
          ref={word}
          className="px-5 pb-4 text-[clamp(4.5rem,22vw,16rem)] leading-none font-extrabold tracking-[-0.06em] sm:px-8"
        >
          SIAM
        </p>
      </div>
      <p className="px-5 pb-8 text-center text-sm text-muted sm:px-8">© 2026 Md. Siam Sheikh. All rights reserved.</p>
    </footer>
  )
}
