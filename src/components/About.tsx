import { motion } from "framer-motion";
import { MapPin, Heart, Brain, Users } from "lucide-react";

const traits = [
  { icon: Heart, title: "Passion-driven", body: "I love building real-world frontend products that ship." },
  { icon: Brain, title: "AI + Web", body: "Curious about AI, automation and the future of web." },
  { icon: Users, title: "Leadership", body: "Strong communication and team collaboration skills." },
  { icon: MapPin, title: "Based in India", body: "Building globally from anywhere with great wifi." },
];

export function About() {
  return (
    <section id="about" className="mx-auto mt-24 w-[min(1200px,94%)]">
      <SectionHeader eyebrow="About" title="A frontend developer who actually ships." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {traits.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="floating-card p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-gradient text-white">
              <t.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display text-lg">{t.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <span className="pill">
        <span className="h-2 w-2 rounded-full bg-violet-gradient" /> {eyebrow}
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
