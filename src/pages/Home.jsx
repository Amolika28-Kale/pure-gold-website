import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import FeatureGrid from "../components/FeatureGrid";
import { Typography, Box, Grid, Card, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Secure Your Legacy. Amplify Your Wealth with Digital Gold."
        subtitle="India's premier digital savings platform, offering institutional-grade security and the nation's most rewarding Bonus Gold Program."
        image="/assets/home-hero.jpg"
        buttonText="Start Your Portfolio Today"
      />

      {/* Trust Metrics */}
      <SectionWrapper>
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          {[
            { value: "10K+", label: "Active Savers" },
            { value: "₹100 Cr", label: "Annual Savings Goal" },
            { value: "18,000+ g", label: "Bonus Gold Secured" },
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Typography variant="h3" color="primary" fontWeight={800}>{item.value}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{item.label}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} mb={4}>
          The PureGram Advantage: Three Simple Steps to Wealth
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Sign Up", desc: "Create account in 2 minutes, quick KYC, no minimum deposit" },
            { title: "Save Any Amount", desc: "Start from ₹100, daily/weekly/monthly auto-save, flexible" },
            { title: "Earn Bonus Gold", desc: "Up to 24% bonus gold, track progress live" },
          ].map((step, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} mb={2}>{step.title}</Typography>
                <Typography color="text.secondary">{step.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Why Choose PureGram */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={4}>
          Elevating Digital Savings. Why PureGram is the Preferred Choice
        </Typography>
        <FeatureGrid features={[
          { title: "Trusted Platform", desc: "Institutional-grade security & insured gold" },
          { title: "Flexible Plans", desc: "Save any amount, anytime" },
          { title: "High Rewards", desc: "Earn up to 24% bonus gold" },
          { title: "Customer Centric", desc: "24/7 support & transparent policies" },
        ]}/>
      </SectionWrapper>

      {/* Final CTA */}
      <Box sx={{ py: 10, textAlign: "center", background: "linear-gradient(90deg, #2746d1, #5c73ff)", color: "#fff" }}>
        <Typography variant="h4" fontWeight={700} mb={2}>Ready to Transform Your Savings?</Typography>
        <Typography mb={4}>Your secure journey starts with as little as ₹100.</Typography>
        <Button variant="contained" color="secondary" size="large">Start Now</Button>
      </Box>
    </>
  );
}
