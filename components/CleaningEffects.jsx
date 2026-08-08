import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles } from "lucide-react";

const BUBBLES = [
  { left: "8%", size: 12, delay: 0, duration: 7 },
  { left: "22%", size: 7, delay: 2.4, duration: 6 },
  { left: "44%", size: 15, delay: 1.1, duration: 8 },
  { left: "68%", size: 9, delay: 3.2, duration: 6.5 },
  { left: "86%", size: 13, delay: 0.8, duration: 7.5 },
];

export default function CleaningEffects({ light = false }) {
  const color = light ? "rgba(255,255,255,.55)" : "rgba(59,130,246,.3)";

  return (
    <div className="cleaning-effects" aria-hidden="true">
      {BUBBLES.map((bubble, index) => (
        <motion.span
          className="cleaning-bubble"
          key={index}
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            borderColor: color,
          }}
          animate={{ y: [30, -180], opacity: [0, 0.7, 0], scale: [0.7, 1.1, 0.9] }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.span
        className="cleaning-spark cleaning-spark-one"
        animate={{ rotate: [0, 20, 0], scale: [0.7, 1.15, 0.7], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={24} color={color} />
      </motion.span>
      <motion.span
        className="cleaning-spark cleaning-spark-two"
        animate={{ y: [0, -8, 0], opacity: [0.25, 0.75, 0.25] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <Droplets size={20} color={color} />
      </motion.span>
    </div>
  );
}
