import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About PureGram: Securing India's Financial Future"
        subtitle="Democratizing 24K gold investment, making it accessible to all, starting from just ₹100."
        image="/assets/about-hero.jpg"
      />

      {/* Mission */}
      <SectionWrapper sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          Our Mission
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={6}>
          At PureGram, we believe every Indian deserves access to safe, simple, and rewarding wealth creation tools. 
          We're building India's most trusted digital gold platform that combines the time-tested value of gold with modern technology and rewarding incentives.
        </Typography>
      </SectionWrapper>

      {/* Challenge vs Solution */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
          Why India Needs PureGram
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "The Savings Challenge",
              desc: [
                "Inflation eating away at cash savings",
                "Lack of disciplined saving habits",
                "Complex investment products with high entry barriers",
                "No motivation or rewards for consistent saving",
                "Difficulty in building long-term wealth"
              ],
              bg: "#fddede"
            },
            {
              title: "The PureGram Solution",
              desc: [
                "Gold as an inflation hedge with historical value preservation",
                "Micro-savings model encourages regular deposits",
                "Start with just ₹100 - no minimum balance",
                "Earn up to 24% bonus gold rewards on savings",
                "Build tangible wealth you can see growing"
              ],
              bg: "#dff7e4"
            }
          ].map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i*0.3 }}
              >
                <Card sx={{ p: 4, backgroundColor: item.bg, textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={700} mb={2}>{item.title}</Typography>
                  <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
                    {item.desc.map((d, j) => (
                      <li key={j}>• {d}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            "Trust & Transparency",
            "Customer First",
            "Innovation",
            "Wealth Creation",
            "Inclusivity",
            "Security",
          ].map((val, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i*0.2 }}
              >
                <Card sx={{ p: 3, textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={700} mb={1}>{val}</Typography>
                  <Typography color="text.secondary">
                    {val === "Trust & Transparency" && "Complete transparency in pricing, storage, and operations. Your trust is our foundation."}
                    {val === "Customer First" && "Every decision we make puts our customers at the center. Your success is our success."}
                    {val === "Innovation" && "Leveraging technology to make gold savings simple, accessible, and rewarding for all."}
                    {val === "Wealth Creation" && "Committed to helping every Indian build sustainable wealth through disciplined savings."}
                    {val === "Inclusivity" && "Gold investment for everyone, regardless of income level or financial knowledge."}
                    {val === "Security" && "Bank-grade security with insured vaults and 99.99% pure gold guarantee."}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Built on Trust */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, backgroundColor: "#fff8e1" }}>
        <Typography variant="h4" fontWeight={700} mb={6}>
          Built on Trust & Transparency
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Real-Time Gold Pricing", desc: "Live rates synced with international gold markets" },
            { title: "Certified Purity", desc: "99.99% pure gold with third-party verification" },
            { title: "Insured Storage", desc: "Your gold is fully insured in certified vaults" },
            { title: "Instant Withdrawals", desc: "Convert to cash or physical gold anytime" },
          ].map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 4, textAlign: "center", borderRadius: 3, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}>
                  <Typography variant="h6" fontWeight={700} mb={2}>{item.title}</Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, backgroundColor: "#ffd700" }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: "#111", textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
            Ready to Start Your Gold Journey?
          </Typography>
          <Typography variant="h6" color="#333" mb={4}>
            Join thousands of smart savers building wealth with PureGram today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontWeight: 700,
              fontSize: "1.1rem",
              background: "linear-gradient(135deg, #f9c846, #ffd700)",
              color: "#111",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
              }
            }}
          >
            Start Saving Gold Today
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
