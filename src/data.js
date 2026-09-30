export const profile = {
  name: "Md. Siam Sheikh",
  shortName: "Siam Sheikh",
  role: "Full-stack developer",
  location: "Bangladesh",
  bangla: "ফুল-স্ট্যাক ডেভেলপার",
  email: "",
  github: "https://github.com/SiamShekh",
  linkedin: "https://www.linkedin.com/in/siamshekh",
  x: "https://x.com/siiiiam_dev",
  repos: 94,
}

export const workGroups = [
  {
    id: "foundation",
    label: "Foundation",
    detail: "Farewell Foundation",
    projects: [],
  },
  {
    id: "agency",
    label: "Agency",
    detail: "Syntax Lab, and product work around it.",
    projects: [
      {
        name: "Syntax",
        summary: "Frontend for Syntax Lab, where client web apps get built and maintained.",
        stack: ["TypeScript", "Next.js"],
        repo: "https://github.com/SiamShekh/syntax-frontend",
        live: "",
      },
      {
        name: "Dragg",
        summary: "Website for the Dragg product.",
        stack: ["Web"],
        repo: "https://github.com/dragg-app/website",
        live: "",
      },
    ],
  },
  {
    id: "startups",
    label: "Zero-dollar startups",
    detail: "Personal products, built without a budget.",
    projects: [
      {
        name: "PriceScope",
        summary:
          "A price finder that asks more than ten shops at once and brings the better options back in about half a second.",
        stack: ["TypeScript", "React", "Node.js"],
        repo: "https://github.com/SiamShekh/PriceScope",
        live: "https://price-scrope.vercel.app/",
        image: "/work/pricescope.png",
      },
      {
        name: "Do Dua",
        summary:
          "An offline Android reader for daily duas and dhikr — Arabic, transliteration, Bangla meaning, sources, and a tap counter.",
        stack: ["Java", "Android"],
        repo: "https://github.com/SiamShekh/do-dua",
        live: "",
      },
      {
        name: "Discipline Tracker",
        summary:
          "A study desk for board exams: daily tasks, a discipline score, reflections, streaks, and cookie-based login.",
        stack: ["Next.js", "MongoDB", "JWT", "Tailwind"],
        repo: "https://github.com/SiamShekh/discipline-tracker",
        live: "https://discipline-tracker-five.vercel.app",
        image: "/work/discipline.png",
        imagePosition: "center",
      },
      {
        name: "Mera",
        summary:
          "A Solana devnet portfolio you steer in plain English. A sentence becomes rules, and a keeper can enforce them on-chain with mock assets.",
        stack: ["React", "TypeScript", "Anchor", "Solana"],
        repo: "https://github.com/SiamShekh/mera",
        live: "",
      },
      {
        name: "Pora Ghor",
        summary: "A cross-platform mobile app built with React Native and TypeScript.",
        stack: ["React Native", "TypeScript"],
        repo: "https://github.com/PoraGhor/pora-ghor-mobile",
        live: "",
      },
      {
        name: "Board Exam Result API",
        summary:
          "A small REST API for Bangladesh board results. Exam, year, and board are validated, then returned as clean JSON.",
        stack: ["JavaScript", "REST", "Yup"],
        repo: "https://github.com/SiamShekh/board-exam-result-api",
        live: "",
      },
    ],
  },
  {
    id: "clients",
    label: "Clients",
    detail: "Client work, split by the kind of product.",
    types: ["Telegram Mini App", "Website", "Marketplace"],
    projects: [
      {
        name: "Atom",
        type: "Telegram Mini App",
        summary: "Source for a Telegram mini app.",
        stack: ["TypeScript"],
        repo: "https://github.com/SiamShekh/atom",
        live: "",
      },
      {
        name: "Key Mini App",
        type: "Telegram Mini App",
        summary: "A Telegram mini app.",
        stack: ["TypeScript"],
        repo: "https://github.com/SiamShekh/Key-Mini-App",
        live: "",
      },
      {
        name: "Coiin",
        type: "Telegram Mini App",
        summary: "A Telegram mini app with login, and tools that stay behind that login.",
        stack: ["TypeScript"],
        repo: "https://github.com/SiamShekh/Coiin-mini",
        live: "",
      },
      {
        name: "Grammy on Vercel",
        type: "Telegram Mini App",
        summary:
          "A starter for Telegram bots: Grammy.js, MongoDB, and a Vercel webhook, so a bot can go live without a server that stays on.",
        stack: ["TypeScript", "Grammy.js", "MongoDB", "Vercel"],
        repo: "https://github.com/SiamShekh/Grammy-Vercel-Mongodb",
        live: "",
      },
      {
        name: "Fitness Club",
        type: "Website",
        summary: "A fitness club site built for a client.",
        stack: ["TypeScript"],
        repo: "https://github.com/SiamShekh/fitness-club-client",
        live: "https://client-orcin-five.vercel.app/",
      },
      {
        name: "Aadvanture",
        type: "Website",
        summary: "A landing page for adventure packages.",
        stack: ["JavaScript"],
        repo: "https://github.com/SiamShekh/Aadvanture.vercel.app",
        live: "",
      },
      {
        name: "Carwisho",
        type: "Website",
        summary: "A site for a car cleaning company, with user and admin dashboards.",
        stack: ["TypeScript"],
        repo: "https://github.com/SiamShekh/Carwisho-Ltd",
        live: "",
      },
      {
        name: "COF Miners",
        type: "Website",
        summary: "A landing site for COF Miners.",
        stack: ["TypeScript", "React"],
        repo: "https://github.com/SiamShekh/cof-website",
        live: "",
      },
      {
        name: "Quran Kareem",
        type: "Website",
        summary: "Public site for Quran Kareem, alongside the admin tools.",
        stack: ["Web"],
        repo: "https://github.com/Quran-Kareem/Website",
        live: "",
      },
      {
        name: "Talim Sonchoy",
        type: "Website",
        summary: "A website for Talim Sonchoy.",
        stack: ["React", "Vite"],
        repo: "https://github.com/Quran-Kareem/Talim-Sonchoy-Website",
        live: "",
      },
      {
        name: "Bodol",
        type: "Marketplace",
        summary: "A marketplace for buying and selling Facebook pages, YouTube channels, and Telegram groups.",
        stack: ["HTML", "Tailwind", "JavaScript"],
        repo: "https://github.com/bodolbd/landing",
        live: "https://bodolbd.com",
        image: "/work/bodol.png",
      },
      {
        name: "Book Store",
        type: "Marketplace",
        summary: "An online bookstore: a catalog, and payment by cash on delivery or online.",
        stack: ["React", "TypeScript"],
        repo: "https://github.com/SiamShekh/Book-store-clients",
        live: "",
      },
    ],
  },
]

export const stackGroups = [
  {
    label: "Interface",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Systems",
    items: ["Node.js", "Java", "REST", "JWT"],
  },
  {
    label: "Data & devices",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Android"],
  },
]

export const loopItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Java",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Android",
  "Grammy.js",
  "Solana",
  "Vite",
]

export const experience = [
  {
    when: "Now",
    title: "Full-stack developer",
    place: "Syntax Lab",
    detail: "Client web apps, and support for junior developers on the team.",
    icon: "briefcase",
  },
  {
    when: "Ongoing",
    title: "Freelance developer",
    place: "Independent",
    detail: "Web products, Android apps, bots, and APIs for real briefs.",
    icon: "rocket",
  },
  {
    when: "Since 14",
    title: "Open source",
    place: "GitHub",
    detail: "Public experiments, templates, and tools across the stack.",
    icon: "code",
  },
]

export const traits = [
  "Problem solver",
  "Detail oriented",
  "Full stack",
  "Always learning",
  "Client work",
  "Open source",
]

export const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Git & GitHub", icon: "git" },
  { name: "Java", icon: "java" },
  { name: "Android", icon: "android" },
  { name: "PostgreSQL", icon: "db" },
  { name: "MySQL", icon: "db" },
]

export const process = [
  { step: "01", title: "Discover", detail: "Understand the problem before writing a line.", icon: "search" },
  { step: "02", title: "Design", detail: "Shape a simple interface people can use.", icon: "pencil" },
  { step: "03", title: "Develop", detail: "Build the screen and the system behind it.", icon: "code" },
  { step: "04", title: "Deploy", detail: "Ship it, then check that it actually works.", icon: "rocket" },
  { step: "05", title: "Improve", detail: "Watch real use and tighten what is rough.", icon: "chart" },
]
