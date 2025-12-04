import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button, Box, useTheme, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaLock, FaUsers, FaLightbulb, FaChartLine, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { GiPriceTag, GiCrown, GiMoneyStack } from "react-icons/gi";

const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const BLUE_HERO_BG = "#1e37a3";

const itemUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const containerVariants = { initial: {}, animate: { transition: { staggerChildren: 0.12 } } };

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

export default function About() {
  const theme = useTheme();

  const coreValuesData = [
    { title: "Trust & Transparency", desc: "Complete transparency in pricing, storage, and operations.", icon: <GiPriceTag size={32} color={GOLD_COLOR} /> },
    { title: "Customer First", desc: "Every decision we make puts our customers at the center.", icon: <FaUsers size={32} color={GOLD_COLOR} /> },
    { title: "Innovation", desc: "Leveraging technology to make gold savings simple and rewarding.", icon: <FaLightbulb size={32} color={GOLD_COLOR} /> },
    { title: "Wealth Creation", desc: "Helping every Indian build sustainable wealth.", icon: <FaChartLine size={32} color={GOLD_COLOR} /> },
    { title: "Inclusivity", desc: "Gold investment for everyone, regardless of income level.", icon: <FaGlobe size={32} color={GOLD_COLOR} /> },
    { title: "Security", desc: "Bank-grade security with insured vaults.", icon: <FaShieldAlt size={32} color={GOLD_COLOR} /> },
  ];

  const trustFeaturesData = [
    { title: "Real-Time Gold Pricing", desc: "Live rates synced with international gold markets", icon: <GiPriceTag size={28} /> },
    { title: "Certified Purity", desc: "99.99% pure gold with third-party verification", icon: <GiCrown size={28} /> },
    { title: "Insured Storage", desc: "Your gold is fully insured in certified vaults", icon: <FaLock size={28} /> },
    { title: "Instant Withdrawals", desc: "Convert to cash or physical gold anytime", icon: <GiMoneyStack size={28} /> },
  ];

  return (
    <>
      {/* Hero Section with Sparkles */}
      <Box sx={{ position: "relative" }}>
        <HeroSection
          title="About PureGram: Securing India's Financial Future"
          subtitle="Democratizing 24K gold investment, making it accessible to all, starting from just ₹100."
        />
        {/* Sparkles */}
        {Array.from({ length: 19 }).map((_, i) => (
          <Sparkle key={i} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} size={4 + Math.random() * 6} delay={Math.random() * 2} />
        ))}
      </Box>

{/* Mission Section: Image with overlapping content */}
<SectionWrapper sx={{ py: 12, position: "relative" }}>
  <Container maxWidth="lg">
    <Grid container spacing={0} alignItems="center" sx={{ position: "relative" }}>
      
      {/* LEFT COLUMN: Image */}
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            component="img"
            src="/assets/coins.avif"
            alt="Gold representation"
            sx={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 4,
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              display: "block",
            }}
          />
        </motion.div>
      </Grid>

      {/* RIGHT COLUMN: Mission Content overlapping image */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{
          position: { md: "absolute" },
          top: { md: "50%" },
          left: { md: "50%" },
          transform: { md: "translate(-20%, -50%)" }, // adjust left/right placement
          zIndex: 2,
          px: 3,
        }}
      >
        <motion.div initial="initial" whileInView="animate" variants={containerVariants} viewport={{ once: true }}>
          <motion.div variants={itemUp}>
            <Typography variant="h4" fontWeight={700} mb={3} sx={{ color: DARK_BG }}>
              Our Mission
            </Typography>
          </motion.div>
          <motion.div variants={itemUp}>
            <Typography variant="body1" color={DARK_BG} mb={3}>
              At PureGram, every Indian deserves safe, simple, and rewarding wealth creation. We're building the most trusted digital gold platform combining gold's timeless value with modern tech.
            </Typography>
          </motion.div>
          <motion.div variants={itemUp}>
            <Button
              variant="contained"
              sx={{
                background: GOLD_GRADIENT,
                color: DARK_BG,
                px: 6,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 3,
                mt: 2,
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </Grid>

    </Grid>
  </Container>
</SectionWrapper>



      {/* Challenge vs Solution */}
      <SectionWrapper sx={{ py: 10, background: LIGHT_BG }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Why India Needs PureGram
        </Typography>
        <Grid container spacing={12} justifyContent="center">
          {[
            { title: "The Savings Challenge", desc: ["Inflation eats away cash", "Lack of saving habits", "High entry barriers", "No motivation", "Difficulty building wealth"], bg: "#ffe6e6" },
            { title: "The PureGram Solution", desc: ["Gold as inflation hedge", "Micro-savings model", "Start with ₹100", "Earn bonus gold", "Track your wealth"], bg: "#e6ffe6" },
          ].map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.15 }} viewport={{ once: true }}>
                <Card sx={{ p: 4, backgroundColor: item.bg, borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                  <Typography variant="h5" fontWeight={700} mb={3}>{item.title}</Typography>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    {item.desc.map((d, j) => <li key={j} style={{ marginBottom: 6 }}>{d}</li>)}
                  </ul>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {coreValuesData.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card sx={{ p: 4, textAlign: "center", borderRadius: 4, border: `1px solid #f5f5f5`, "&:hover": { transform: "translateY(-4px)", boxShadow: `0 8px 25px rgba(184,134,11,0.2)` } }}>
                  <Box sx={{ mb: 2 }}>{val.icon}</Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>{val.title}</Typography>
                  <Typography color="text.secondary">{val.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Built on Trust */}
      <SectionWrapper sx={{ py: 10, background: LIGHT_BG }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Built on Trust & Transparency
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {trustFeaturesData.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                <Card sx={{ p: 4, textAlign: "center", borderRadius: 4, borderBottom: `4px solid ${GOLD_COLOR}` }}>
                  <Box sx={{ color: GOLD_COLOR, mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>{item.title}</Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff", position: "relative" }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Typography variant="h4" fontWeight={800} mb={3} sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
              Ready to Start Your Gold Journey?
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }} mb={4}>
              Join thousands of smart savers building wealth with PureGram today.
            </Typography>
            <Button variant="contained" size="large" sx={{ px: 6, py: 2, fontWeight: 700, fontSize: "1.1rem", background: GOLD_GRADIENT, color: DARK_BG, borderRadius: 10, "&:hover": { transform: "scale(1.05)" } }}>
              Start Saving Gold Today
            </Button>
          </motion.div>
        </Container>
        {/* Sparkles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Sparkle key={i} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} size={3 + Math.random() * 5} delay={Math.random() * 2} />
        ))}
      </SectionWrapper>
    </>
  );
}