import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Star, Cpu, Atom } from "lucide-react";

export function Hero() {
  return (
    <section className="relative mx-auto mt-6 w-[min(1200px,94%)] overflow-hidden rounded-[2rem] bg-hero-gradient p-6 sm:p-10 md:p-14 shadow-card">
      {/* Soft purple frame edge */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/40" />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: Heading */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] tracking-tight"
          >
            Build Smarter
            <br />
            Workflows With
            <br />
            <span className="bg-gradient-to-r from-[oklch(0.55_0.25_285)] to-[oklch(0.4_0.22_295)] bg-clip-text text-transparent">
              Saatwik
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Hi, I'm <span className="font-semibold text-foreground">Saatwik Shrivastava</span> —
            Frontend Developer, AI Enthusiast & Builder. I craft fast, accessible interfaces and
            ship real-world products from one focused workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Floating cards */}
        <div className="relative min-h-[420px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="floating-card animate-float-slow absolute right-0 top-2 flex items-center gap-3 px-4 py-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">Personalized Workflow</div>
              <div className="text-xs text-muted-foreground">Crafts pixel-perfect UI</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="floating-card animate-float-slower absolute right-4 top-[160px] flex items-center gap-3 px-4 py-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">Smart AI Tools</div>
              <div className="text-xs text-muted-foreground">Automating everyday work</div>
            </div>
          </motion.div>

          {/* Trust card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="floating-card absolute bottom-0 right-0 w-[260px] p-5"
          >
            <div className="flex items-center gap-2 text-emerald-600">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold">Trusted Builder</span>
            </div>
            <div className="mt-1 flex gap-0.5 text-emerald-600">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
              Projects shipped
            </div>
            <div className="font-display text-3xl">10+</div>
            <div className="mt-2 flex -space-x-2">
              {["#a78bfa", "#60a5fa", "#f472b6", "#34d399", "#fbbf24"].map((c, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-card"
                  style={{ background: c }}
                />
              ))}
            </div>
          </motion.div>

          {/* Tiny floating tech icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="floating-card animate-float-slow absolute left-2 top-[60px] grid h-12 w-12 place-items-center"
          >
            <Atom className="h-5 w-5 text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="floating-card animate-float-slower absolute left-10 top-[280px] grid h-12 w-12 place-items-center"
          >
            <Cpu className="h-5 w-5 text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
