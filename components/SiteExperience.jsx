import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check, Sparkles, SprayCan } from "lucide-react";
import { LOGO_SRC } from "../lib/logo";

export function CleaningSiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-cleaning-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            className="loader-clean-panel"
            initial={{ clipPath: "inset(0 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 1.25, delay: 0.65, ease: [0.65, 0, 0.35, 1] }}
          />

          <motion.div
            className="loader-squeegee"
            initial={{ x: "-58vw" }}
            animate={{ x: "58vw" }}
            transition={{ duration: 1.25, delay: 0.65, ease: [0.65, 0, 0.35, 1] }}
          >
            <span className="squeegee-handle" />
            <span className="squeegee-blade" />
          </motion.div>

          <motion.img
            src={LOGO_SRC}
            alt="Alliance Facility Group"
            className="loader-logo"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <motion.div
            className="loader-message"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <Sparkles size={18} />
            Preparing a spotless experience
          </motion.div>
          <motion.div
            className="loader-done"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.85, type: "spring", stiffness: 260 }}
          >
            <Check size={18} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollCleaningProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const left = useTransform(progress, [0, 1], ["2%", "96%"]);
  const rotate = useTransform(progress, [0, 1], [-12, 12]);

  return (
    <div className="scroll-cleaning-track" aria-hidden="true">
      <motion.div className="scroll-cleaning-fill" style={{ scaleX: progress }} />
      <motion.div className="scroll-cleaner" style={{ left, rotate }}>
        <SprayCan size={17} />
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.15, 0.6] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <Sparkles size={11} />
        </motion.span>
      </motion.div>
    </div>
  );
}
