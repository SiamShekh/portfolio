import { process } from "../data"
import { Rise, Stagger, StaggerItem } from "./Rise"

export default function Process() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          <Rise>My Process</Rise>
        </h2>
        <Stagger className="mt-14 divide-y divide-line border-t border-line">
          {process.map((item) => (
            <StaggerItem
              key={item.step}
              className="grid gap-2 py-7 sm:grid-cols-[5rem_14rem_1fr] sm:items-baseline sm:gap-8"
            >
              <p className="text-sm font-medium text-muted">{item.step}</p>
              <h3 className="text-2xl font-extrabold tracking-[-0.03em]">{item.title}</h3>
              <p className="text-muted">{item.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
