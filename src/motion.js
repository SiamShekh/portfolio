import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const ease = [0.22, 1, 0.36, 1]

export { gsap, ScrollTrigger }
