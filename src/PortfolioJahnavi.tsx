import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Download, Github, Linkedin, Globe, ExternalLink, Code2, Cpu, Boxes, Server, Cloud, Shield, Sparkles, Sun, Moon, GraduationCap, Building2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";



// ————————————————————————————————————————————————————————————————
// Jahnavi • Portfolio — Inspired by sanjeevsriram.com (clean, airy, typographic)
// Tech: React + Tailwind + shadcn/ui + framer-motion + lucide-react
// Single-file for easy drop-in; swap placeholder links/images as needed.
// ————————————————————————————————————————————————————————————————

function useThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };
  return { theme, toggle };
}

const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

// experience removed per client instruction (handled elsewhere)
const experiences: never[] = [];

const projects = [
  {
    title: "Realtime Retail Events Platform",
    blurb: "High‑throughput Kafka pipelines + Spring Boot microservices powering low‑latency retail analytics.",
    tags: ["Kafka", "Spring Boot", "Kubernetes", "gRPC", "Redis"],
    link: "#",
  },
  {
    title: "FinServ Payments Reconciliation",
    blurb: "PCI/SOX‑aware microservices for payment reconciliation and risk analytics with Oracle/Postgres.",
    tags: ["Java", "PostgreSQL", "Oracle", "Jenkins", "Terraform"],
    link: "#",
  },
  {
    title: "Healthcare Results Exchange",
    blurb: "Secure REST/GraphQL APIs and Kafka event hub for HIPAA‑compliant lab notifications.",
    tags: ["Spring Security", "GraphQL", "Kafka", "ELK"],
    link: "#",
  },
];

const skills = [
  { icon: <Code2 className="h-5 w-5" />, title: "Languages", items: ["Java", "Go", "Python", "TypeScript", "JavaScript", ".NET"] },
  { icon: <Cpu className="h-5 w-5" />, title: "Frameworks/APIs", items: ["Spring Boot", "Spring Security", "Hibernate", "JAX‑RS", "gRPC"] },
  { icon: <Boxes className="h-5 w-5" />, title: "Frontend", items: ["React", "Responsive UI", "Bootstrap"] },
  { icon: <Server className="h-5 w-5" />, title: "Data", items: ["PostgreSQL", "Oracle", "MongoDB", "Redis", "DynamoDB", "Elasticsearch"] },
  { icon: <Cloud className="h-5 w-5" />, title: "Cloud/DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] },
  { icon: <Shield className="h-5 w-5" />, title: "Quality/Sec", items: ["JUnit", "Mockito", "SonarQube", "Veracode", "Cypress", "Playwright"] },
];

const contact = {
  email: "jahnavi.meesa@gmail.com",
  phone: "810‑610‑0633",
  location: "USA | Open to Relocation"
};

const LinkPill = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:shadow-sm dark:border-zinc-800">
    <Icon className="h-4 w-4" />
    <span>{label}</span>
    <ExternalLink className="h-3 w-3 opacity-70" />
  </a>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-zinc-500" />
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// —— Case Studies (UI/UX) ——
function CaseStudies() {
  const [open, setOpen] = useState<string | null>(null);
  const studies = [
    {
      id: "lab-ux",
      title: "Clinical Results Dashboard — UX Overhaul",
      role: "Lead Product Designer & Frontend Engineer",
      impact: [
        "+38% task completion, -27% time‑to‑insight after IA redesign",
        "AA contrast & WCAG‑compliant components, reduced cognitive load",
        "Design system tokens → implemented in React/Tailwind"
      ],
      problem: "Clinicians struggled to triage abnormal results across multiple panels; navigation was fragmented and actions were hidden.",
      approach: [
        "Mapped jobs‑to‑be‑done and ran 8 usability tests to locate friction",
        "Introduced triage board with severity, patient context and quick actions",
        "Built atomic components (AlertCard, TrendStrip, InlineFilters) with tokenized theming"
      ],
      gallery: ["/images/case-lab-1.png", "/images/case-lab-2.png", "/images/case-lab-3.png"],
      stack: ["UX Research", "Wireframes", "Figma", "Design Tokens", "React", "Tailwind", "A11y"],
    },
    {
      id: "cart-opt",
      title: "E‑commerce Cart — Checkout Conversion Lift",
      role: "Senior UX Designer",
      impact: [
        "+11.6% checkout conversion via simplified flow & trust patterns",
        "Reduced form fields 33% with progressive disclosure",
        "Introduced inline validation & wallet options"
      ],
      problem: "Users dropped at address/payment due to unclear errors and security anxiety.",
      approach: [
        "Heuristic eval + funnel analytics → prioritized error messaging & reassurance",
        "Designed single‑page checkout with anchored summary and edit-in-place",
        "A/B tested copy patterns; codified components into a reusable kit"
      ],
      gallery: ["/images/case-cart-1.png", "/images/case-cart-2.png"],
      stack: ["Figma", "Prototyping", "A/B Testing", "Copy UX", "React", "Form UX"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {studies.map(cs => (
          <Card key={cs.id} className="group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 text-base">{cs.title}<ExternalLink className="h-4 w-4 opacity-60 transition group-hover:opacity-100" /></CardTitle>
              <CardDescription>{cs.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {cs.impact.map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {cs.stack.map(t => <Badge key={t} variant="outline" className="px-2 py-0.5 text-[11px]">{t}</Badge>)}
              </div>
              <Button onClick={() => setOpen(cs.id)} className="w-full">View Case Study</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b p-4 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">{studies.find(s => s.id === open)?.title}</h3>
              <Button variant="outline" size="sm" onClick={() => setOpen(null)}>Close</Button>
            </div>
            <div className="grid gap-5 p-5">
              <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Problem</p>
                <p>{studies.find(s => s.id === open)?.problem}</p>
              </div>
              <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Approach</p>
                <ul className="list-disc space-y-1 pl-5">
                  {studies.find(s => s.id === open)?.approach.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {(studies.find(s => s.id === open)?.gallery || []).map(src => (
                  <div key={src} className="aspect-video overflow-hidden rounded-lg border dark:border-zinc-800">
                    <div className="grid h-full w-full place-items-center text-xs text-zinc-500">Image placeholder</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioJahnavi() {
  const { theme, toggle } = useThemeToggle();

  return (
    
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-zinc-900 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-sm font-bold text-white shadow-md">JM</div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest text-zinc-500">Senior Software Engineer</p>
              <h1 className="text-lg font-semibold">Jahnavi Meesala</h1>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b dark:border-zinc-900 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-950/60 dark:to-zinc-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold tracking-tight md:text-5xl">
              Designing data‑dense interfaces that feel effortless — and building the systems behind them.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-4 max-w-prose text-zinc-600 dark:text-zinc-300">
              5+ years crafting enterprise systems with Java/Spring Boot, Kafka, and cloud‑native stacks — and turning complex workflows into simple, elegant product experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-6 flex flex-wrap items-center gap-3">
              <LinkPill href="#" icon={Github} label="GitHub" />
              <LinkPill href="#" icon={Linkedin} label="LinkedIn" />
              <LinkPill href="#projects" icon={Globe} label="Featured Work" />
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "TypeScript", "Kafka", "AWS", "Kubernetes"].map((t) => (
                <Badge key={t} variant="secondary" className="px-3 py-1 text-xs">{t}</Badge>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border shadow-2xl dark:border-zinc-900">
              {/* Placeholder gradient portrait */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-rose-500/30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-zinc-900/80 text-3xl font-bold text-white dark:bg-black/70">
                  JM
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/50 to-transparent p-4 dark:from-zinc-950 dark:via-zinc-950/60" />
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Hi, I’m Jahnavi — I design for scale and for people.</CardTitle>
              <CardDescription>
                Pragmatic builder focused on reliable systems and clear, intuitive experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-600 dark:text-zinc-300">
              <p>
                I specialize in enterprise‑grade, distributed systems and resilient user experiences. My recent work spans
                microservices, event streaming, and cloud deployments — with a strong emphasis on developer experience,
                observability, and product quality.
              </p>
              <p>
                Outside of shipping features, I love simplifying complex requirements, mentoring teammates, and creating
                reusable component libraries that speed up product delivery.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Agile", "DevSecOps", "Observability", "Design systems", "Accessibility"].map((t) => (
                  <Badge key={t} variant="outline" className="border-zinc-300 dark:border-zinc-800">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap className="h-4 w-4" />Education</CardTitle>
              <CardDescription>University of Cincinnati</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="font-medium">M.S. in Information Technology</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Cincinnati, OH — Dec 2024</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Work / Case Studies */}
      <Section id="work" title="Selected Work (UI/UX)">
        <CaseStudies />
      </Section>

      {/* Projects (Engineering) */}
      <Section id="projects" title="Featured Engineering Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2 text-base">
                  {p.title}
                  <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
                </CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="px-2 py-0.5 text-[11px]">{t}</Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <a href={p.link} target="_blank" rel="noreferrer">View Repo / Case</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <Card key={s.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{s.icon}{s.title}</CardTitle>
                <CardDescription>Core tools I use daily</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-xs">{i}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume">
        <Card>
          <CardHeader>
            <CardTitle>Grab my resume</CardTitle>
            <CardDescription>One‑page summary, ATS‑ready, with project links.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="/Jahnavi.pdf" target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4"/>View PDF</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Jahnavi.docx" target="_blank" rel="noreferrer">Download DOCX</a>
            </Button>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Swap these links with your hosted files. For now, they’re placeholders.</p>
          </CardContent>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Let’s build something great.</CardTitle>
              <CardDescription>
                Open to Senior UI/UX & Full‑Stack roles • US (onsite/hybrid)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /><a href="mailto:jahnavi.meesa@gmail.com" className="underline-offset-2 hover:underline">{contact.email}</a></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /><a href="tel:+18106100633" className="underline-offset-2 hover:underline">{contact.phone}</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /><span>{contact.location}</span></div>
              <div className="flex flex-wrap gap-2 pt-2">
                <LinkPill href="#" icon={Github} label="GitHub" />
                <LinkPill href="#" icon={Linkedin} label="LinkedIn" />
                <LinkPill href="#projects" icon={Globe} label="Engineering Work" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Intro</CardTitle>
              <CardDescription>Drop a note — I respond quickly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <Input placeholder="Your name" required />
                <Input type="email" placeholder="Email" required />
                <Textarea placeholder="Message" rows={4} required />
                <Button type="submit" className="w-full">Send</Button>
              </form>
              <p className="mt-2 text-center text-xs text-zinc-500">This demo form is static. Replace with your form endpoint.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-zinc-500 dark:border-zinc-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="outline" className="bg-white/50 dark:bg-zinc-950/50">Java</Badge>
            <Badge variant="outline" className="bg-white/50 dark:bg-zinc-950/50">Spring Boot</Badge>
            <Badge variant="outline" className="bg-white/50 dark:bg-zinc-950/50">React</Badge>
            <Badge variant="outline" className="bg-white/50 dark:bg-zinc-950/50">Kafka</Badge>
            <Badge variant="outline" className="bg-white/50 dark:bg-zinc-950/50">AWS</Badge>
          </div>
          <p className="mt-6">© {new Date().getFullYear()} Jahnavi Meesala • Designed with care</p>
        </div>
      </footer>
    </div>
  );
}
