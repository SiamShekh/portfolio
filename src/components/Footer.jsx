import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Services" },
  { href: "#work", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const word = useRef(null);

  useEffect(() => {
    const el = word.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <h2 className="max-w-sm text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] sm:text-5xl">
            Imagining,
            <br />
            coding,
            <br />
            and building.
          </h2>

          <div>
            <p className="text-sm font-medium">/ Quick links</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">/ Contact</p>
            <a
              href="mailto:Mejed@Templyo.io"
              className="mt-4 block text-sm font-medium text-white/90 hover:text-white"
            >
              Mejed@Templyo.io
            </a>

            <div className="mt-6">
              <p className="text-sm font-semibold">Let's Connect</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/SiamShekh"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    github.com/SiamShekh
                  </a>
                </li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 overflow-hidden ">
        <p
          ref={word}
          className="px-5 pb-6 text-[clamp(4.5rem,22vw,16rem)] leading-none font-extrabold text-center tracking-[-0.06em] text-white/6 sm:px-8 blur"
        >
          SIAM
        </p>
      </div>
    </footer>
  );
}
