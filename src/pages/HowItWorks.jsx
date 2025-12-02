import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Sign Up",
      desc: [
        "Quick registration with mobile OTP",
        "Simple KYC verification",
        "No minimum deposit required to start",
        "Instant account activation"
      ],
      buttonText: "Sign Up"
    },
    {
      step: "Step 2",
      title: "Save Any Amount",
      desc: [
        "Save as low as ₹100",
        "Set up daily, weekly, or monthly auto-deposits",
        "One-time deposits anytime",
        "Flexible saving plans to match your budget"
      ],
      buttonText: "Start Saving"
    },
    {
      step: "Step 3",
      title: "Earn Bonus Gold",
      desc: [
        "Save ₹1,00,000 in 6 months → 1.8g FREE Gold (~₹24,000)",
        "Up to 24% bonus on your savings",
        "Automatically credited to your account",
        "No hidden conditions or fine print",
        "Track your bonus gold in real-time"
      ],
      buttonText: "Earn Bonus"
    },
    {
      step: "Step 4",
      title: "Secure Storage",
      desc: [
        "99.99% pure gold guaranteed",
        "Stored in insured, certified vaults",
        "Convert to cash instantly",
        "Get physical gold delivered to your doorstep"
      ],
      buttonText: "Secure Gold"
    },
  ];

  const flexiblePlans = [
    { title: "Auto-Save Daily", desc: "Set it and forget it. Automatically save a small amount every day." },
    { title: "Monthly SIP", desc: "Build discipline with systematic monthly investments in gold." },
    { title: "One-Time Deposits", desc: "Have extra cash? Add it to your gold savings anytime." },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Your Digital Gold Journey: Simple, Secure, and Rewarding"
        subtitle="Start your digital gold journey in 4 easy steps."
        image="/assets/how-hero.jpg"
      />

      {/* Steps */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          How PureGram Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Card sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background: "linear-gradient(145deg, #fff9c4, #ffe066)",
                  boxShadow: "0 10px 30px rgba(255,223,0,0.15)",
                  "&:hover": { transform: "scale(1.03)", boxShadow: "0 20px 50px rgba(255,223,0,0.3)" },
                  transition: "0.3s"
                }}>
                  <Typography variant="subtitle1" color="primary" mb={1}>{item.step}</Typography>
                  <Typography variant="h6" fontWeight={700} mb={2}>{item.title}</Typography>
                  <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
                    {item.desc.map((d, j) => <li key={j}>• {d}</li>)}
                  </ul>
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>{item.buttonText}</Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Flexible Saving Options */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Flexible Saving Options
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {flexiblePlans.map((plan, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Card sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  backgroundColor: "#fffde7",
                  boxShadow: "0 8px 25px rgba(255,223,0,0.1)",
                  "&:hover": { transform: "scale(1.03)", boxShadow: "0 15px 35px rgba(255,223,0,0.2)" },
                  transition: "0.3s"
                }}>
                  <Typography variant="h6" fontWeight={700} mb={1}>{plan.title}</Typography>
                  <Typography color="text.secondary">{plan.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Highlight Reward */}
      <SectionWrapper sx={{ textAlign: "center", backgroundColor: "#fff8e1", py: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{
            p: { xs: 6, md: 10 },
            display: "inline-block",
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg, #f9c846, #ffd700)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 0 25px rgba(255,223,0,0.3)",
            "&:hover": { transform: "scale(1.05)", boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 0 35px rgba(255,223,0,0.5)" },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}>
            <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: "#111", textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
              Save ₹1,00,000 in 6 months to earn 1.8g FREE Gold
            </Typography>
            <Typography variant="h6" sx={{ color: "#333", opacity: 0.95, lineHeight: 1.5 }}>
              Bonus Gold worth ~₹24,000 automatically added to your portfolio.
            </Typography>
          </Card>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper sx={{ textAlign: "center", py: 10 }}>
        <Button variant="contained" color="secondary" size="large" sx={{ px: 6, py: 2, fontWeight: 700 }}>
          Start Saving Gold Today
        </Button>
      </SectionWrapper>
    </>
  );
}
