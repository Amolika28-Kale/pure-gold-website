// src/components/Sparkle.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sparkle({
  size = 6,
  color = "#FFD700",
  duration = 1,
  x = 0,
  y = 0,
}) {
  const [sparkle, setSparkle] = useState({
    x: x,
    y: y,
    opacity: 0,
    scale: 1,
    rotate: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkle({
        x: x + Math.random() * 20 - 10,
        y: y + Math.random() * 20 - 10,
        opacity: Math.random(),
        scale: 0.5 + Math.random() * 1.5,
        rotate: Math.random() * 360,
      });
    }, (duration * 1000) / 2); // faster update for more sparkle

    return () => clearInterval(interval);
  }, [x, y, duration]);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        pointerEvents: "none",
        boxShadow: `0 0 ${size}px ${color}`,
      }}
      animate={{
        x: sparkle.x,
        y: sparkle.y,
        opacity: sparkle.opacity,
        scale: sparkle.scale,
        rotate: sparkle.rotate,
      }}
      transition={{ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    >
      {/* Optional small star spike inside the circle */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: size / 2,
          height: size / 2,
          background: color,
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: sparkle.rotate }}
        transition={{ duration: duration * 1.5, repeat: Infinity, repeatType: "mirror" }}
      />
    </motion.div>
  );
}
