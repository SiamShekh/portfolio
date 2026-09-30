import { traits } from "../data"
import ScrollWords from "./ScrollWords"
import { FadeUp, Rise, Stagger, StaggerItem } from "./Rise"

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
        <h2 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          <Rise>About Me</Rise>
        </h2>
        <div>
          <ScrollWords
            className="text-2xl leading-snug font-medium tracking-[-0.03em] sm:text-3xl sm:leading-snug"
            text="I like turning a rough idea into something people can actually use. Most of the work is React or Next.js on the front, with Node, Java, or a database on the other side — web apps, Android, and small APIs."
          />
          <FadeUp className="mt-5" delay={0.08}>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              I started coding at 14. These days that means client work at Syntax Lab, plus my own products
              when an idea will not leave me alone.
            </p>
          </FadeUp>
          <Stagger className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {traits.map((trait) => (
              <StaggerItem key={trait}>
                <span>{trait}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
