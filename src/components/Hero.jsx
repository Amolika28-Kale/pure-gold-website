import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      className="hero"
      role="banner"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1rem",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Premium Digital Gold Savings —{" "}
          <span style={{ color: "#B8860B" }}>Pure Gold</span>
        </h1>

        <p
          style={{
            marginTop: 16,
            fontSize: "1.1rem",
            maxWidth: 600,
            margin: "16px auto 0",
            color: "#334155",
          }}
        >
          Secure and flexible way to invest in gold — instant signup, simple
          deposits, and easy redemption.
        </p>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#get-started"
            className="btn-primary"
          >
            Get Started
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            href="#how-it-works"
            className="btn-ghost"
          >
            How it works
          </motion.a>
        </div>
      </motion.div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 10% 20%, rgba(255,215,0,0.08), transparent 10%), radial-gradient(circle at 90% 80%, rgba(99,102,241,0.06), transparent 15%)",
        }}
      />
    </header>
  );
}
