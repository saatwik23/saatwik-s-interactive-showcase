import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { SectionHeader } from "./About";

const certs = [
  "Oracle Cloud Infrastructure 2025 — Certified Generative AI Professional",
  "Job Readiness & Professional Development Program",
  "Certificate of Appreciation — StudAI One",
  "Ultron 9.0 — Futurix SRMIST",
];

const learning = [
  "Advanced React",
  "Flask APIs",
  "Machine Learning Basics",
  "AI Automation Systems",
  "Cloud Deployment",
];

export function Certifications() {
  return (
    <section className="mx-auto mt-28 w-[min(1200px,94%)] grid gap-10 lg:grid-cols-2">
      <div>
        <SectionHeader eyebrow="Certifications" title="Verified milestones." />
        <div className="mt-8 space-y-3">
          {certs.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="floating-card flex items-center gap-4 p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-gradient text-white">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium">{c}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="Currently Learning" title="Always leveling up." />
        <div className="mt-8 floating-card p-6">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">In Progress</span>
          </div>
          <div className="mt-4 space-y-4">
            {learning.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-gradient" />
                  <span>{l}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
