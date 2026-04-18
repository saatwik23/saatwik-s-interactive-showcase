import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";
import { SectionHeader } from "./About";

export function Projects() {
  return (
    <section id="projects" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <SectionHeader eyebrow="Projects" title="Real products. Real impact." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden rounded-[2rem] bg-purple-frame p-1 shadow-card"
      >
        <div className="rounded-[calc(2rem-4px)] bg-card p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="pill"><Shield className="h-4 w-4" /> Featured</div>
              <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1]">
                SafeNest
              </h3>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Women Safety SOS Web Platform
              </div>
              <p className="mt-5 max-w-lg text-muted-foreground">
                An emergency SOS-enabled web platform that sends instant alerts to trusted
                contacts, notifies nearby users and connects victims with emergency support —
                all wrapped in a fully responsive, accessible interface.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Sends Alerts", "Nearby Notifications", "Emergency Support", "Responsive"].map(
                  (t) => (
                    <span key={t} className="pill text-xs">{t}</span>
                  ),
                )}
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "oklch(0.12 0.02 270)" }}
              >
                View case study <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mock browser preview */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 bg-hero-gradient p-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-gradient text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="font-display text-2xl">SOS Active</div>
                  <div className="text-xs text-muted-foreground">Sharing live location...</div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 rounded-xl bg-card shadow-soft" />
                    ))}
                  </div>
                  <button className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-white" style={{ backgroundColor: "oklch(0.12 0.02 270)" }}>
                    Trigger Emergency
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
