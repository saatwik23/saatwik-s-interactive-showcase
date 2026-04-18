import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.3c0-2.3-1.23-3.37-2.87-3.37a2.48 2.48 0 0 0-2.25 1.24v-1.07h-2.67c.04.75 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.48.09-.65.2-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.2h2.67z"/>
  </svg>
);
const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);

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
