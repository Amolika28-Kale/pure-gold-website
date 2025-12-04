import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaTrophy, FaEye, FaShieldAlt, FaChartLine } from "react-icons/fa";

// --- Updated Premium Colors ---
const GOLD_GRADIENT = "linear-gradient(90deg, #FFD97D, #FFC700, #FFD97D)";
const GOLD_COLOR = "#FFC700";
const DARK_BG = "#1f1f2e"; // Dark navy/gray instead of black
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fff9f0";
const BLUE_HERO_BG = "#2a2d8f"; // Softer hero blue

// Animated sparkles
const Sparkle = ({ x, y, size, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5], y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 2 + Math.random(), delay }}
    style={{
      position: "absolute",
      top: y,
      left: x,
      width: size,
      height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle, #ffd700 0%, #b8860b 100%)",
      pointerEvents: "none",
    }}
  />
);

export default function Rewards() {
  const rewardTiers = [
    { tier: "Bronze", goal: "₹25,000", bonusGold: "0.45g", worth: "₹6,000", popular: false },
    { tier: "Silver", goal: "₹50,000", bonusGold: "0.9g", worth: "₹12,000", popular: true },
    { tier: "Gold", goal: "₹1,00,000", bonusGold: "1.8g", worth: "₹24,000", popular: false },
  ];

  const whyUniqueFeatures = [
    { title: "First in India", desc: "No other platform offers 24% bonus on gold savings", icon: <FaTrophy size={30} /> },
    { title: "Instant Motivation", desc: "See your bonus gold accumulate in real-time", icon: <FaEye size={30} /> },
    { title: "Secure & Guaranteed", desc: "Your bonus gold is guaranteed and fully insured", icon: <FaShieldAlt size={30} /> },
    { title: "Maximum Value", desc: "Better than any FD or savings account returns", icon: <FaChartLine size={30} /> },
  ];

  const steps = [
    { title: "Save Regularly", desc: "Make deposits towards your goal. Save daily, weekly, or monthly!" },
    { title: "Track Your Progress", desc: "Watch your savings and bonus gold grow in real-time." },
    { title: "Complete the Goal", desc: "Reach your target within 6 months to unlock your bonus gold." },
    { title: "Receive Bonus Gold", desc: "1.8g of pure gold automatically credited to your account." },
  ];

  // Motion variants for subtle animations
  const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }, viewport: { once: true } };

  return (
    <>
      {/* Hero Section */}
            <Box sx={{ position: "relative" }}>

      <HeroSection
        title="PureGram Rewards Program: Gold Wealth Accelerated"
        subtitle="India's most generous digital gold rewards. Save consistently and earn FREE gold worth thousands!"
        buttonText="Start Earning Bonus Gold"
      />

         {/* Sparkles */}
        {Array.from({ length: 19 }).map((_, i) => (
          <Sparkle key={i} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} size={4 + Math.random() * 6} delay={Math.random() * 2} />
        ))}
      </Box>

      {/* Highlight Offer Card */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, background: LIGHT_BG }}>
        <motion.div {...fadeUp}>
          <Card sx={{
            p: { xs: 5, md: 8 },
            display: "inline-block",
            borderRadius: 1,
            background: GOLD_GRADIENT,
            boxShadow: "0 25px 60px rgba(255,199,0,0.3)",
            maxWidth: 1000,
            color: DARK_BG,
            "&:hover": { transform: "scale(1.03)", boxShadow: "0 30px 70px rgba(255,199,0,0.5)", transition: "0.3s" }
          }}>
            <Typography variant="overline" display="block" sx={{ fontWeight: 800, color: DARK_BG, opacity: 0.7, mb: 1 }}>
              LIMITED TIME OFFER
            </Typography>
            <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: DARK_BG }}>
              Save ₹1,00,000 in 3 months starting from when you have created account and earn 1.8g FREE Gold
            </Typography>
            <Typography variant="h6" fontWeight={600} sx={{ color: DARK_BG, opacity: 0.9 }}>
              Worth approximately ₹24,000*
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
              <Grid item xs={6} sm={3}>
                <Typography variant="h4" fontWeight={800} color={DARK_BG}>24%</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>Bonus Returns</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h4" fontWeight={800} color={DARK_BG}>180 Days</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>Saving Period</Typography>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 5, px: 6, py: 1.5, fontWeight: 700, background: DARK_BG, color: "#fff", "&:hover": { background: GOLD_COLOR, color: DARK_BG, transform: "scale(1.05)" } }}
            >
              Start Earning Bonus Gold
            </Button>
            <Typography variant="caption" display="block" mt={2} sx={{ color: DARK_BG, opacity: 0.8 }}>
              *Based on current gold rates. Actual value may vary.
            </Typography>
          </Card>
        </motion.div>
      </SectionWrapper>

      {/* Why Unique Features */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">Why This Offer is Unique in India</Typography>
        <Grid container spacing={4} justifyContent="center">
          {whyUniqueFeatures.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div {...fadeUp}>
                <Card sx={{
                  p: 4, textAlign: "center", borderRadius: 4, height: "100%",
                  backgroundColor: LIGHT_GOLD_BG,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  borderBottom: `4px solid ${GOLD_COLOR}`,
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 35px rgba(255,199,0,0.2)", transition: "0.3s" }
                }}>
                  <Box sx={{ color: GOLD_COLOR, mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>{feature.title}</Typography>
                  <Typography color="text.secondary">{feature.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* How Rewards Work */}
      <SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
        <Typography variant="h4" fontWeight={800} mb={6} sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
          How the Rewards Work
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div {...fadeUp}>
                <Card sx={{
                  p: 4, textAlign: "left", borderRadius: 4, height: "100%",
                  background: DARK_BG, color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  borderLeft: `5px solid ${GOLD_COLOR}`,
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 40px rgba(255,199,0,0.2)", transition: "0.3s" }
                }}>
                  <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: GOLD_COLOR }}>{i + 1}</Typography>
                  <Typography variant="h6" fontWeight={700} mb={1}>{step.title}</Typography>
                  <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" }, color: "#ccc" }}>{step.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Reward Tiers */}
      <SectionWrapper sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4" fontWeight={700} mb={6}>Multiple Reward Tiers</Typography>
        <Grid container spacing={4} justifyContent="center">
          {rewardTiers.map((tier, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div {...fadeUp}>
                <Card sx={{
                  p: 6, textAlign: "center", borderRadius: 4, height: "100%",
                  background: tier.popular ? GOLD_GRADIENT : LIGHT_GOLD_BG,
                  color: DARK_BG, boxShadow: tier.popular ? "0 25px 60px rgba(255,199,0,0.3)" : "0 8px 25px rgba(0, 0, 0, 0)",
                  border: tier.popular ? `3px solid ${DARK_BG}` : `2px solid ${GOLD_COLOR}`,
                  transform: tier.popular ? "scale(1.05)" : "scale(1)",
                  "&:hover": { transform: "scale(1.06)", boxShadow: "0 30px 70px rgba(255,199,0,0.4)", transition: "0.3s" }
                }}>
                  {tier.popular && (
                    <Box sx={{ mb: 2, p: 1, backgroundColor: DARK_BG, color: "#fff", borderRadius: 1 }}>
                      <Typography variant="subtitle2" fontWeight={700}>MOST POPULAR</Typography>
                    </Box>
                  )}
                  <Typography variant="h3" fontWeight={800} mb={1}>{tier.tier}</Typography>
                  <Typography variant="h6" mb={1} fontWeight={600}>Goal: {tier.goal}</Typography>
                  <Typography variant="h5" fontWeight={700} mb={2}>Bonus Gold: {tier.bonusGold}</Typography>
                  <Typography variant="subtitle1" mb={3}>Worth ~{tier.worth}</Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: tier.popular ? DARK_BG : GOLD_GRADIENT,
                      color: tier.popular ? "#fff" : DARK_BG,
                      px: 4, py: 1.5, fontWeight: 700, borderRadius: 10,
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  >
                    Choose
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
        <motion.div {...fadeUp}>
          <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: GOLD_COLOR }}>Start Earning Bonus Gold Today</Typography>
          <Typography mb={4} sx={{ opacity: 0.9 }}>Join thousands already building wealth with PureGram's generous rewards</Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6, py: 1.5, fontWeight: 700,
              background: GOLD_GRADIENT, color: DARK_BG,
              borderRadius: 10, boxShadow: "0 10px 30px rgba(255,199,0,0.4)",
              "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 40px rgba(255,199,0,0.6)" }
            }}
          >
            Claim Your Bonus Gold
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
