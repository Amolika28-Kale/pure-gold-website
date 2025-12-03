import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Rewards() {
  const rewardTiers = [
    { tier: "Bronze", goal: "₹25,000", bonusGold: "0.45g", worth: "₹6,000", popular: false },
    { tier: "Silver", goal: "₹50,000", bonusGold: "0.9g", worth: "₹12,000", popular: true },
    { tier: "Gold", goal: "₹1,00,000", bonusGold: "1.8g", worth: "₹24,000", popular: false },
  ];

  const steps = [
    "Save Regularly",
    "Track Your Progress",
    "Complete the Goal",
    "Receive Bonus Gold",
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="PureGram Rewards Program"
        subtitle="India's most generous digital gold rewards. Save consistently and earn FREE gold worth thousands!"
        image="/assets/rewards-hero.jpg"
        buttonText="Start Earning Bonus Gold"
      />

      {/* Limited Time Offer Highlight */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, backgroundColor: "#fff8e1" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{
            p: { xs: 6, md: 10 },
            display: "inline-block",
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg,#f9c846,#ffd700)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 0 25px rgba(255,223,0,0.3)",
            "&:hover": { transform: "scale(1.05)", boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 0 35px rgba(255,223,0,0.5)" },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}>
            <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: "#111", textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
              Save ₹1,00,000 in 3 months starting from when you have created account to earn 1.8g FREE Gold
            </Typography>
            <Typography variant="h6" sx={{ color: "#333", opacity: 0.95, lineHeight: 1.5 }}>
              Bonus Gold worth ~₹24,000 automatically added to your portfolio.
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Grid item>
                <Card sx={{ p: 3, backgroundColor: "#fff3cd", borderRadius: 2 }}>
                  <Typography variant="h5" fontWeight={700} color="#111">24%</Typography>
                  <Typography>Bonus Returns</Typography>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ p: 3, backgroundColor: "#fff3cd", borderRadius: 2 }}>
                  <Typography variant="h5" fontWeight={700} color="#111">180 Days</Typography>
                  <Typography>Saving Period</Typography>
                </Card>
              </Grid>
            </Grid>
            <Button variant="contained" color="secondary" sx={{ mt: 4, px: 6, py: 1.5, fontWeight: 700 }}>
              Start Earning Bonus Gold
            </Button>
            <Typography variant="caption" display="block" mt={2}>
              *Based on current gold rates. Actual value may vary with market prices.
            </Typography>
          </Card>
        </motion.div>
      </SectionWrapper>

      {/* Why This Offer is Unique */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Why This Offer is Unique in India
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "First in India", desc: "No other platform offers 24% bonus on gold savings" },
            { title: "Instant Motivation", desc: "See your bonus gold accumulate in real-time" },
            { title: "Secure & Guaranteed", desc: "Your bonus gold is guaranteed and fully insured" },
            { title: "Maximum Value", desc: "Better than any FD or savings account returns" },
          ].map((feature, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 4, textAlign: "center", borderRadius: 3, backgroundColor: "#fff8e1", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }, transition: "0.3s" }}>
                  <Typography variant="h6" fontWeight={700} mb={1} color="primary">{feature.title}</Typography>
                  <Typography color="text.secondary">{feature.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* How Rewards Work */}
      <SectionWrapper sx={{ backgroundColor: "#fffbe6", py: 10 }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          How the Rewards Work
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 4, textAlign: "center", borderRadius: 3, background: "linear-gradient(145deg,#fff6b3,#ffe066)", boxShadow: "0 15px 35px rgba(255,215,0,0.2), 0 0 25px rgba(255,223,0,0.15)" }}>
                  <Typography variant="h6" fontWeight={700}>{i + 1}. {step}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Reward Tiers */}
      <SectionWrapper sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4" fontWeight={700} mb={4}>Multiple Reward Tiers</Typography>
        <Grid container spacing={4} justifyContent="center">
          {rewardTiers.map((tier, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{
                  p: 6,
                  textAlign: "center",
                  borderRadius: 4,
                  background: tier.popular ? "linear-gradient(135deg,#f9c846,#ffd700)" : "#fffbe6",
                  boxShadow: tier.popular ? "0 20px 50px rgba(0,0,0,0.2), 0 0 25px rgba(255,223,0,0.3)" : "0 8px 25px rgba(0,0,0,0.1)",
                  transform: "scale(1)",
                  "&:hover": { transform: "scale(1.05)" },
                }}>
                  <Typography variant="h5" fontWeight={700} mb={2}>{tier.tier}</Typography>
                  <Typography variant="h6" mb={1}>Savings Goal: {tier.goal}</Typography>
                  <Typography variant="h6" mb={1}>Bonus Gold: {tier.bonusGold}</Typography>
                  <Typography variant="subtitle1" mb={2}>Worth ~{tier.worth}</Typography>
                  <Button variant="contained" color={tier.popular ? "secondary" : "primary"}>Choose {tier.tier}</Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, background: "linear-gradient(90deg,#f9c846,#ffd700)" }}>
        <Typography variant="h4" fontWeight={700} mb={3} color="#111">Start Earning Bonus Gold Today</Typography>
        <Typography mb={4} color="#333">Join thousands already building wealth with PureGram's generous rewards</Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ px: 6, py: 1.5 }}>Claim Your Bonus Gold</Button>
      </SectionWrapper>
    </>
  );
}
