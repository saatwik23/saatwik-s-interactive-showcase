import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    const t2 = setTimeout(onDone, 2700);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          style={{ backgroundColor: "oklch(0.12 0.02 270)" }}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <defs>
                <linearGradient id="sgrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.75 0.2 285)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.25 295)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M85 35 C 85 22, 70 18, 55 22 C 35 28, 30 50, 50 58 C 70 66, 85 70, 85 85 C 85 100, 60 105, 40 95"
                fill="none"
                stroke="url(#sgrad)"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </motion.svg>
            <motion.div
              className="font-display text-2xl tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Saatwik
            </motion.div>
            <motion.div
              className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-violet-gradient"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
