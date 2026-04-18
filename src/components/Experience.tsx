import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const exp = [
  {
    company: "BrainMint, Chennai",
    role: "Frontend Developer Intern",
    date: "Oct 2025 – Mar 2026",
    points: [
      "Built scalable UI using HTML, CSS, JS and React",
      "Developed reusable component library",
      "Owned responsive design across devices",
      "Collaborated with cross-functional team",
    ],
  },
  {
    company: "Curious Wings",
    role: "Project Developer Intern",
    date: "Feb 2026 – Mar 2026",
    points: ["Frontend development for client modules", "UI implementation from Figma specs"],
  },
  {
    company: "Muskurahat Foundation",
    role: "Crowdfunding Intern",
    date: "Jun 2025 – Jul 2025",
    points: ["Ran fundraising campaigns", "Outreach planning & donor engagement"],
  },
  {
    company: "Placvfs / SRM Placement Team",
    role: "Volunteer",
    date: "Sep 2025 – Present",
    points: ["Communication & coordination", "Event support and logistics"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <SectionHeader eyebrow="Experience" title="A timeline of building & learning." />

      <div className="relative mt-12 grid gap-6 md:grid-cols-2">
        {exp.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="floating-card relative overflow-hidden p-6"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-soft opacity-40 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {e.date}
                </span>
                <span className="h-2 w-2 rounded-full bg-violet-gradient" />
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight">{e.company}</h3>
              <div className="text-sm text-muted-foreground">{e.role}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
