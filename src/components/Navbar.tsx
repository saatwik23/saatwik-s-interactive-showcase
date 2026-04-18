import { motion } from "framer-motion";

const items = [
  { label: "Features", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="sticky top-4 z-50 mx-auto w-[min(1200px,94%)]"
    >
      <div className="flex items-center justify-between rounded-full border border-border bg-card/85 px-5 py-3 backdrop-blur-md shadow-soft">
        <a href="#" className="flex items-center gap-2">
          <SLogo />
          <span className="font-display text-lg tracking-tight">Saatwik</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary sm:inline-block"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "oklch(0.12 0.02 270)" }}
          >
            See work →
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function SLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="navS" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.6 0.25 285)" />
          <stop offset="100%" stopColor="oklch(0.4 0.2 295)" />
        </linearGradient>
      </defs>
      <path
        d="M85 35 C 85 22, 70 18, 55 22 C 35 28, 30 50, 50 58 C 70 66, 85 70, 85 85 C 85 100, 60 105, 40 95"
        fill="none"
        stroke="url(#navS)"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}
