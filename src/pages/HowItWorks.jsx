import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaUserPlus, FaPiggyBank, FaGift, FaLock, FaCalendarAlt, FaMoneyBillWave, FaRupeeSign } from "react-icons/fa";

// --- Premium Style Constants ---
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fff8e1";
const BLUE_HERO_BG = "#1e37a3";

// Framer Motion Variants
const itemVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

export default function HowItWorks() {
    const steps = [
        {
            step: "Step 1",
            title: "Sign Up & KYC",
            desc: [
                "Quick registration with mobile OTP",
                "Simple KYC verification",
                "No minimum deposit required to start",
                "Instant account activation"
            ],
            icon: <FaUserPlus size={40} />,
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
            icon: <FaPiggyBank size={40} />,
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
            icon: <FaGift size={40} />,
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
            icon: <FaLock size={40} />,
        },
    ];

    const flexiblePlans = [
        { title: "Auto-Save Daily", desc: "Set it and forget it. Automatically save a small amount every day.", icon: <FaCalendarAlt size={30} /> },
        { title: "Monthly SIP", desc: "Build discipline with systematic monthly investments in gold.", icon: <FaRupeeSign size={30} /> },
        { title: "One-Time Deposits", desc: "Have extra cash? Add it to your gold savings anytime.", icon: <FaMoneyBillWave size={30} /> },
    ];

    return (
        <>
            {/* Hero Section */}
                  <Box sx={{ position: "relative" }}>
            
            <HeroSection
                title="Your Digital Gold Journey: Simple, Secure, and Rewarding"
                subtitle="Start your digital gold journey in 4 easy steps."
                image="/assets/how-hero.jpg"
            />
               {/* Sparkles */}
        {Array.from({ length: 19 }).map((_, i) => (
          <Sparkle key={i} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} size={4 + Math.random() * 6} delay={Math.random() * 2} />
        ))}
      </Box>

            {/* Steps Section */}
            <SectionWrapper sx={{ py: 12, position: "relative", overflow: "hidden" }}>
                {/* Floating Gold Particles */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                >
                    {[...Array(25)].map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "absolute",
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                backgroundColor: "#FFD700",
                                borderRadius: "50%",
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.6 + 0.3,
                                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </Box>

                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" zIndex={1}>
                    How PureGram Works
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ position: "relative", zIndex: 1 }}>
                    {steps.map((item, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    height: '100%',
                                    backgroundColor: LIGHT_GOLD_BG,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.02)", boxShadow: `0 15px 40px rgba(184, 134, 11, 0.2)` },
                                    position: "relative",
                                    zIndex: 2
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{item.icon}</Box>
                                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: GOLD_COLOR }} mb={1}>{item.step}</Typography>
                                    <Typography variant="h5" fontWeight={800} mb={2} sx={{ color: DARK_BG }}>{item.title}</Typography>
                                    <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8, textAlign: 'left', margin: '0 0 1rem 0' }}>
                                        {item.desc.map((d, j) => <li key={j} style={{ color: '#555' }}>• {d}</li>)}
                                    </ul>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <style>
                    {`
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                            100% { transform: translateY(0px); }
                        }
                    `}
                </style>
            </SectionWrapper>

            {/* Flexible Saving Options Section */}
            <SectionWrapper sx={{ background: LIGHT_BG, py: 12, position: "relative", overflow: "hidden" }}>
                 {/* Floating Gold Particles */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                >
                    {[...Array(25)].map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "absolute",
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                backgroundColor: "#FFD700",
                                borderRadius: "50%",
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.6 + 0.3,
                                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </Box>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" zIndex={1}>
                    Flexible Saving Options
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ position: "relative", zIndex: 1 }}>
                    {flexiblePlans.map((plan, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: 4,
                                    height: '100%',
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                                    borderBottom: `4px solid ${GOLD_COLOR}`,
                                    background: "rgba(255,250,240,0.95)",
                                    "&:hover": { transform: "translateY(-5px) scale(1.02)", boxShadow: `0 10px 30px rgba(184, 134, 11, 0.2)` },
                                    transition: "0.3s",
                                    position: "relative",
                                    zIndex: 2
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{plan.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: DARK_BG }}>{plan.title}</Typography>
                                    <Typography color="text.secondary">{plan.desc}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                  <style>
                    {`
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                            100% { transform: translateY(0px); }
                        }
                    `}
                </style>
            </SectionWrapper>

            {/* Highlight Reward Section */}
            <SectionWrapper sx={{ textAlign: "center", py: 12, position: "relative" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card sx={{
                        p: { xs: 6, md: 10 },
                        display: "inline-block",
                        textAlign: "center",
                        borderRadius: 4,
                        background: GOLD_GRADIENT,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 0 25px rgba(255,223,0,0.3)",
                        maxWidth: 900,
                        "&:hover": { transform: "scale(1.02)", boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 0 35px rgba(255,223,0,0.5)" },
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}>
                        <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: DARK_BG, textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                            Save ₹1,00,000 in 6 months to earn 1.8g FREE Gold
                        </Typography>
                        <Typography variant="h6" sx={{ color: DARK_BG, opacity: 0.95, lineHeight: 1.5 }}>
                            Bonus Gold worth ~₹24,000 automatically added to your portfolio.
                        </Typography>
                    </Card>
                </motion.div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <Typography variant="h4" fontWeight={800} mb={3} sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
                        Ready to Get Started?
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }} mb={4}>
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
                            background: GOLD_GRADIENT,
                            color: DARK_BG,
                            boxShadow: "0 10px 30px rgba(184, 134, 11, 0.5)",
                            borderRadius: 10,
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 15px 40px rgba(184, 134, 11, 0.7)",
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
