import { useEffect, useRef } from "react"
import { ScrollTrigger } from "../motion"

const dim = "rgba(17, 17, 17, 0.14)"
const lit = "#111111"

export default function ScrollWords({ text, className = "" }) {
  const ref = useRef(null)
  const words = text.split(" ")

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const nodes = [...root.querySelectorAll("[data-word]")]
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const paint = (progress) => {
      const count = reduce ? nodes.length : Math.ceil(progress * nodes.length)
      nodes.forEach((node, index) => {
        node.style.color = index < count ? lit : dim
      })
    }

    if (reduce) {
      paint(1)
      return
    }

    paint(0)
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top 78%",
      end: "bottom 40%",
      onUpdate: (self) => paint(self.progress),
      onRefresh: (self) => paint(self.progress),
    })
    paint(trigger.progress)

    return () => trigger.kill()
  }, [text])

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} data-word className="word-ink">
          {word}{" "}
        </span>
      ))}
    </p>
  )
}
