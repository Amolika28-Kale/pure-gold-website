// src/pages/Home.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import FeatureGrid from "../components/FeatureGrid";
import {
  FaUserShield,
  FaRupeeSign,
  FaGift,
  FaMoneyBillWave,
  FaShieldAlt,
  FaTrophy,
  FaVest,
  FaChartLine,
} from "react-icons/fa";

/* --------------------
  Style constants
---------------------*/
const GOLD_GRADIENT = "linear-gradient(90deg,#b8860b,#ffd700,#b8860b)";
const BLUE_HERO_BG = "#1e37a3";
const LIGHT_SECTION_BG = "#F5F7FF";
const DARK_TEXT = "#1a1a1a";
const GOLD_COLOR = "#ffd700"; // Used for accents on dark blue

/* --------------------
  Motion variants
---------------------*/
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

/* --------------------
  Component
---------------------*/
export default function Home() {
  const theme = useTheme();

  return (
  <Box sx={{ backgroundColor: "#fff", color: DARK_TEXT }}>
      {/* HERO */}
         {/* HERO SECTION - MATCHING FIGMA IMAGE */}
<Box sx={{ background: BLUE_HERO_BG, color: "#fff", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
    <Container maxWidth="lg">
        {/* Removed stray backslash from original submission */}
        <Grid container spacing={4} alignItems="center"> 
            {/* Left: content */}
            <Grid item xs={12} md={6}>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div variants={itemUp}>
                        <Typography variant="subtitle2" fontWeight={800} sx={{ color: GOLD_COLOR, mb: 1 }}>
                            🇮🇳 India's Smartest Digital Gold Platform
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemUp}>
                        <Typography variant="h3" component="h1" fontWeight={900} sx={{ lineHeight: 1.12, mb: 2 }}>
                            Save Smart. <br />
                            Earn Gold. <br />
                            Build Wealth.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemUp}>
                        <Typography sx={{ mb: 4, opacity: 0.94, maxWidth: 680 }}>
                            India’s first digital gold savings platform with bonus rewards. Save any amount, earn bonus gold, and secure your financial future with insured storage.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemUp}>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.3,
                                    borderRadius: 3,
                                    background: GOLD_GRADIENT,
                                    color: theme.palette.primary.dark,
                                    fontWeight: 800,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                    "&:hover": { opacity: 0.95 },
                                }}
                            >
                                Start Saving Gold
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    px: 3.5,
                                    py: 1.3,
                                    borderRadius: 3,
                                    borderColor: "rgba(255,255,255,0.7)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    "&:hover": { background: "rgba(255,255,255,0.06)" },
                                }}
                            >
                                Become a Sales Partner
                            </Button>
                        </Box>
                    </motion.div>
                </motion.div>
            </Grid>

            {/* Right: hero image + floating card */}
           <Grid item xs={12} md={6}>
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <Box sx={{ position: "relative", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            {/* Hero image — CORRECTED SRC */}
            <Box
                // Use the standard 'src' prop, and tell MUI to render an <img> element
                component="img" 
                src="/assets/gold coin.avif" // Use the public relative path
                alt="Digital Gold Savings"
                sx={{ 
                    width: "100%", 
                    maxWidth: 400, 
                    aspectRatio: "1/1", 
                    objectFit: "cover", 
                    borderRadius: 4, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
                }}
            />
  
                        {/* Floating small card */}
                        <Card
                            sx={{
                                position: "absolute",
                                right: { xs: "6%", md: "-6%" },
                                top: { xs: "6%", md: "10%" },
                                minWidth: 180,
                                p: 2,
                                borderRadius: 3,
                                display: "flex",
                                gap: 1,
                                alignItems: "center",
                                transform: { xs: "translateY(0)", md: "translateY(-10%)" },
                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                            }}
                        >
                            <Box sx={{ color: "#2ecc71", mr: 1 }}>
                                <FaChartLine size={20} />
                            </Box>
                            <Box>
                                <Typography variant="body2" fontWeight={700} color={DARK_TEXT}>
                                    Monthly Returns
                                </Typography>
                                <Typography variant="h6" fontWeight={800} sx={{ background: GOLD_GRADIENT, WebkitBackgroundClip: "text", color: "transparent" }}>
                                    +24%
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </motion.div>
            </Grid>
        </Grid>

        {/* METRICS ROW */}
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={containerVariants}>
            <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mt: { xs: 6, md: 8 } }}>
                {[
                    { value: "10K+", label: "Active Savers" },
                    { value: "₹100 Cr+", label: "Annual Savings Goal" },
                    { value: "18K+ g", label: "Bonus Gold Secured" },
                ].map((m, i) => (
                    <Grid key={i} item xs={12} sm={4}>
                        <motion.div variants={itemUp}>
                            <Typography variant="h3" fontWeight={900} sx={{ background: GOLD_GRADIENT, WebkitBackgroundClip: "text", color: "transparent" }}>
                                {m.value}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 700 }}>
                                {m.label}
                            </Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </motion.div>
    </Container>
</Box>

     {/* HOW IT WORKS (light bg) */}
<SectionWrapper sx={{ textAlign: "center", background: LIGHT_SECTION_BG }}>
    <Container maxWidth="lg">
        <motion.div initial="initial" whileInView="animate" variants={containerVariants} viewport={{ once: true }}>
            <motion.div variants={itemUp}>
                <Typography variant="h4" fontWeight={800} mb={1}>
                    How PureGram Works
                </Typography>
            </motion.div>

            <motion.div variants={itemUp}>
                <Typography color="text.secondary" mb={5} sx={{ maxWidth: 820, mx: "auto" }}>
                    Simple, transparent, and rewarding. Start your digital gold savings journey in 4 easy steps.
                </Typography>
            </motion.div>

            {/* Steps grid — FORCED TO ONE LINE (4 items x xs=3 = 12) */}
            <Grid container spacing={2} justifyContent="center"> {/* Reduced spacing slightly for narrow screens */}
                {[
                    { num: "1", title: "Sign Up", desc: "Create your PureGram account in just 2 minutes. Mobile OTP + simple KYC.", icon: <FaUserShield size={24} /> },
                    { num: "2", title: "Save Any Amount", desc: "Start with as low as ₹100. Daily/weekly/monthly auto-deposits or one-time top-ups.", icon: <FaRupeeSign size={24} /> },
                    { num: "3", title: "Earn Bonus Gold", desc: "Save consistently and earn bonus gold (example: 1.8g on ₹1L in 6 months).", icon: <FaGift size={24} /> },
                    { num: "4", title: "Secure Storage", desc: "99.99% purity, stored in insured certified vaults. Convert to cash or request delivery.", icon: <FaShieldAlt size={24} /> },
                ].map((s, idx) => (
                    <Grid item xs={3} key={idx}> 
                        <motion.div variants={itemUp}>
                            <Card
                                sx={{
                                    p: { xs: 1.5, sm: 2.5 }, // Reduced padding for narrow view
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start", // Start content from top
                                    textAlign: 'left', // Aligned text left, matching the Figma step cards
                                    borderRadius: 3,
                                    boxShadow: "0 10px 30px rgba(18,18,18,0.04)",
                                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 20px 40px rgba(18,18,18,0.08)" },
                                }}
                            >
                                {/* Icon and Number Header */}
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
                                    <Box sx={{ 
                                        color: theme.palette.primary.contrastText, // Icon color inside background
                                        width: { xs: 35, sm: 40 }, 
                                        height: { xs: 35, sm: 40 }, 
                                        borderRadius: 1.5, 
                                        backgroundColor: BLUE_HERO_BG, // Solid color background for icon
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 10px rgba(30, 55, 163, 0.4)'
                                    }}>
                                        {s.icon}
                                    </Box>
                                    <Typography variant="h5" fontWeight={900} sx={{ 
                                        fontSize: { xs: '1.2rem', sm: '1.5rem' }, 
                                        color: BLUE_HERO_BG // Title color matches the blue accent
                                    }}>
                                        {s.num}
                                    </Typography>
                                </Box>

                                {/* Title and Description */}
                                <Typography variant="h6" fontWeight={700} sx={{ 
                                    fontSize: { xs: '0.8rem', sm: '1rem' }, 
                                    lineHeight: 1.2, 
                                    mb: 1 
                                }}>
                                    {s.title}
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.85rem' } }}>
                                    {s.desc}
                                </Typography>

                                {/* Removed the Learn More button to keep the card clean, matching the screenshot style */}
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </motion.div>
    </Container>
</SectionWrapper>

      {/* WHY PUREGRAM — feature grid */}
      <SectionWrapper>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={800} mb={4} textAlign="center">
            Why Choose PureGram?
          </Typography>

          <FeatureGrid
            features={[
              { title: "Digital Gold Accumulation", desc: "Build a gold portfolio with micro-savings from ₹100", icon: <FaMoneyBillWave /> },
              { title: "High Trust Ecosystem", desc: "Bank-grade security & transparent pricing", icon: <FaShieldAlt /> },
              { title: "Bonus Gold Rewards", desc: "Up to 24% bonus gold on consistent savings", icon: <FaTrophy /> },
              { title: "Insured Storage", desc: "Insured, certified vaults with instant conversion", icon: <FaVest /> },
            ]}
          />
        </Container>
      </SectionWrapper>

    {/* Youth / Image section — SWAPPED ORDER for Image on Left */}
<SectionWrapper>
  <Container maxWidth="lg">
    <Grid container spacing={4} alignItems="center">

      {/* LEFT — Image (New Order: 1 on Desktop) */}
      <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
        <motion.div
          // Swapped animation to come from the left
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box
            component="img"
            src="/assets/young-indians.jpg"
            alt="Young Indians saving gold"
            onError={(e) =>
              (e.currentTarget.src =
                "https://images.unsplash.com/photo-1720593446840-b2a993a2c005?auto=format&fit=crop&w=1080&q=80")
            }
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          />
        </motion.div>
      </Grid>

      {/* RIGHT — Content (New Order: 2 on Desktop) */}
      <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={itemUp}>
            <Typography
              variant="subtitle2"
              fontWeight={800}
              sx={{ color: "#d3a84f", mb: 1 }}
            >
               Perfect for Ages 18–45
            </Typography>
          </motion.div>

          <motion.div variants={itemUp}>
            <Typography variant="h4" fontWeight={800} mb={2}>
              Growing Demand Among India’s Youth
            </Typography>
          </motion.div>

          <motion.div variants={itemUp}>
            <Typography color="text.secondary" mb={3}>
              Millennials and Gen Z are leading India’s digital gold movement. 
              PureGram makes it effortless to save, earn rewards, and track gold growth in real time.
            </Typography>
          </motion.div>

          <motion.div variants={itemUp}>
            <Box component="ul" sx={{ color: "text.secondary", pl: 3 }}>
              <li>No investment knowledge required</li>
              <li>Automated savings for discipline</li>
              <li>Bonus gold rewards for consistency</li>
              <li>Track your portfolio 24×7</li>
            </Box>
          </motion.div>

          <motion.div variants={itemUp}>
            <Button
              variant="outlined"
              sx={{ mt: 3, borderRadius: 3, fontWeight: 800 }}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </Grid>

    </Grid>
  </Container>
</SectionWrapper>

      {/* Movement stats on dark background */}
       <Box sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Grid container spacing={3} textAlign="center" justifyContent="center">
                {[
                    { value: "10,000+", label: "Customer Target", sub: "Join the movement" },
                    { value: "₹100 Crore", label: "Yearly Savings Goal", sub: "Building India's wealth" },
                    { value: "18,000+ g", label: "Bonus Gold Planned", sub: "Worth crores in rewards" },
                ].map((s, i) => (
                    // Changed md={4} to xs={4} to force a single row layout on all screen sizes (12 / 3 items = 4 per item)
                    <Grid item xs={4} key={i}>
                        <motion.div variants={itemUp}>
                            <Typography variant="h4" fontWeight={900} sx={{ color: "#ffd700" }}>
                                {s.value}
                            </Typography>
                            <Typography fontWeight={700} sx={{ opacity: 0.95, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                                {s.label}
                            </Typography>
                            <Typography sx={{ mt: 0.5, color: "rgba(255,255,255,0.75)", fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                                {s.sub}
                            </Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </motion.div>
    </Container>
</Box>
      {/* Final CTA */}
<SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
    <Container maxWidth="lg">
        <motion.div initial="initial" whileInView="animate" variants={containerVariants} viewport={{ once: true }}>
            <Typography variant="h4" fontWeight={900} mb={1}>
              Ready to Start Your Gold Savings Journey?
            </Typography>
            <Typography sx={{ mb: 4, opacity: 0.95 }}>
              Join thousands of smart savers earning bonus gold rewards. Start with as little as ₹100 today.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  background: GOLD_GRADIENT,
                  color: "#111827",
                  fontWeight: 900,
                }}
              >
                Start Saving Now
              </Button>

              <Button variant="outlined" size="large" sx={{ px: 4, py: 1.2, borderRadius: 3, color: "#fff", borderColor: "rgba(255,255,255,0.7)", fontWeight: 800 }}>
                View Rewards Program
              </Button>
            </Box>
          </motion.div>
        </Container>
      </SectionWrapper>
    </Box>
  );
}