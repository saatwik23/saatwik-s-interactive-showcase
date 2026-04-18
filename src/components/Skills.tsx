import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"] },
  { title: "Backend Knowledge", items: ["Flask", "Python"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { title: "Soft Skills", items: ["Leadership", "Communication", "Teamwork", "Problem Solving"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <SectionHeader eyebrow="Skills" title="The toolkit." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="floating-card p-6"
          >
            <div className="font-display text-lg">{g.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground">
          {[...Array(2)].flatMap((_, k) =>
            ["React", "JavaScript", "Tailwind", "Framer Motion", "GSAP", "Python", "Flask", "Git", "Figma", "AI"].map(
              (w) => (
                <span key={`${k}-${w}`} className="flex items-center gap-12">
                  {w}
                  <span className="h-2 w-2 rounded-full bg-violet-gradient" />
                </span>
              ),
            ),
          )}
        </div>
      </div>
    </section>
  );
}
