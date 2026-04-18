import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-hero-gradient p-10 text-center sm:p-16 shadow-card"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/40" />
        <div className="relative">
          <span className="pill">
            <span className="h-2 w-2 rounded-full bg-violet-gradient" /> Let's connect
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1]">
            Got a project? <br />
            <span className="bg-gradient-to-r from-[oklch(0.55_0.25_285)] to-[oklch(0.4_0.22_295)] bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Reach me on the platforms below or grab my resume — I'll get back fast.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <SocialButton href="#" icon={Linkedin} label="LinkedIn" />
            <SocialButton href="#" icon={Github} label="GitHub" />
            <SocialButton href="#" icon={FileDown} label="Resume" primary />
          </div>
        </div>
      </motion.div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 pb-10 text-sm text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Saatwik Shrivastava</div>
        <div>Built with React, Framer Motion & GSAP.</div>
      </footer>
    </section>
  );
}

function SocialButton({
  href,
  icon: Icon,
  label,
  primary,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-105 ${
        primary
          ? "bg-violet-gradient text-white shadow-soft"
          : "border border-border bg-card hover:bg-secondary"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </a>
  );
}
