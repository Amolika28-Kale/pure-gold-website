import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaTrophy, FaEye, FaShieldAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";

// --- Premium Style Constants (Matching other components) ---
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0"; // Use a slightly less aggressive light background
const BLUE_HERO_BG = "#1e37a3";
// Framer Motion Variants
const itemVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Rewards() {
    const rewardTiers = [
        { tier: "Bronze", goal: "₹25,000", bonusGold: "0.45g", worth: "₹6,000", popular: false, buttonText: "Choose Bronze" },
        { tier: "Silver", goal: "₹50,000", bonusGold: "0.9g", worth: "₹12,000", popular: true, buttonText: "Choose Silver" },
        { tier: "Gold", goal: "₹1,00,000", bonusGold: "1.8g", worth: "₹24,000", popular: false, buttonText: "Choose Gold" },
    ];

    const whyUniqueFeatures = [
        { title: "First in India", desc: "No other platform offers 24% bonus on gold savings", icon: <FaTrophy size={30} /> },
        { title: "Instant Motivation", desc: "See your bonus gold accumulate in real-time", icon: <FaEye size={30} /> },
        { title: "Secure & Guaranteed", desc: "Your bonus gold is guaranteed and fully insured", icon: <FaShieldAlt size={30} /> },
        { title: "Maximum Value", desc: "Better than any FD or savings account returns", icon: <FaChartLine size={30} /> },
    ];

    const steps = [
        { title: "Save Regularly", desc: "Make deposits towards your ₹1 lakh goal. Save daily, weekly, or monthly - your choice!" },
        { title: "Track Your Progress", desc: "Watch your savings and bonus gold grow in real-time on your dashboard." },
        { title: "Complete the Goal", desc: "Reach ₹1,00,000 within 6 months to unlock your full bonus gold." },
        { title: "Receive Bonus Gold", desc: "1.8g of pure gold automatically credited to your account - yours to keep forever!" },
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title="PureGram Rewards Program: Gold Wealth Accelerated"
                subtitle="India's most generous digital gold rewards. Save consistently and earn FREE gold worth thousands!"
                // Image prop removed as HeroSection is now purely gradient/text based on the revised component
                buttonText="Start Earning Bonus Gold"
            />

            {/* Limited Time Offer Highlight (High Contrast Gold Card) */}
            <SectionWrapper sx={{ textAlign: "center", py: 10, background: LIGHT_BG }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card sx={{
                        p: { xs: 5, md: 8 },
                        display: "inline-block",
                        textAlign: "center",
                        borderRadius: 4,
                        // Use the main GOLD_GRADIENT for maximum punch
                        background: GOLD_GRADIENT,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 0 25px rgba(255,223,0,0.5)",
                        maxWidth: 900,
                        color: DARK_BG,
                        border: `2px solid ${DARK_BG}`,
                    }}>
                        <Typography variant="overline" display="block" sx={{ fontWeight: 800, color: DARK_BG, opacity: 0.7, mb: 1 }}>LIMITED TIME OFFER</Typography>
                        <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: DARK_BG, textShadow: "1px 1px 4px rgba(0,0,0,0.1)" }}>
                            When you save **₹1,00,000** in 6 months, You get **1.8g FREE Gold**
                        </Typography>
                        <Typography variant="h5" fontWeight={600} sx={{ color: DARK_BG, opacity: 0.9 }}>
                            Worth approximately **₹24,000\***
                        </Typography>
                        
                        {/* Stats Grid */}
                        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                            <Grid item xs={6} md={3}>
                                <Typography variant="h4" fontWeight={800} color={DARK_BG}>24%</Typography>
                                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>Bonus Returns</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography variant="h4" fontWeight={800} color={DARK_BG}>180 Days</Typography>
                                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>Saving Period</Typography>
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 5, px: 6, py: 1.5, fontWeight: 700,
                                background: DARK_BG, color: "#fff",
                                "&:hover": { background: GOLD_COLOR, color: DARK_BG }
                            }}
                        >
                            Start Earning Bonus Gold
                        </Button>
                        <Typography variant="caption" display="block" mt={2} sx={{ color: DARK_BG, opacity: 0.8 }}>
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
                    {whyUniqueFeatures.map((feature, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4, textAlign: "center", borderRadius: 4, height: '100%',
                                    backgroundColor: LIGHT_GOLD_BG, 
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                                    borderBottom: `4px solid ${GOLD_COLOR}`, // Accent line
                                    "&:hover": { transform: "translateY(-3px)", boxShadow: `0 15px 35px rgba(184, 134, 11, 0.2)` },
                                    transition: "0.3s"
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{feature.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} mb={1} color={DARK_BG}>{feature.title}</Typography>
                                    <Typography color="text.secondary">{feature.desc}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* How Rewards Work */}
<SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
    <Typography 
        variant="h4" 
        fontWeight={800} 
        mb={3} 
        sx={{ 
            fontSize: { xs: "2rem", md: "2.5rem" }, 
            color: '#fff' // Ensure title color is white/light against the blue background
        }}
    >
        How the Rewards Work
    </Typography>
    <Grid container spacing={4} justifyContent="center">
        {/* Assuming 'steps' data array is defined outside this snippet */}
        {/*
        steps = [
            { title: "Save Regularly", desc: "Make deposits towards your goal." },
            { title: "Track Your Progress", desc: "Watch your savings grow." },
            { title: "Complete the Goal", desc: "Reach the target to unlock bonus." },
            { title: "Receive Bonus Gold", desc: "Gold automatically credited to your account." }
        ]
        */}
        {steps.map((step, i) => (
            <Grid item xs={3} key={i}> 
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                    <Card sx={{
                        p: 4, 
                        textAlign: "left", 
                        borderRadius: 4, 
                        height: '100%',
                        background: DARK_BG, // Dark card background for contrast
                        color: '#fff', // White text on the card
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                        borderLeft: `5px solid ${GOLD_COLOR}`, // Gold accent strip
                        transition: '0.3s ease',
                        "&:hover": { transform: 'translateY(-3px)' }
                    }}>
                        <Typography 
                            variant="h4" 
                            fontWeight={800} 
                            mb={1} 
                            sx={{ color: GOLD_COLOR, fontSize: { xs: '1.5rem', sm: '2rem' } }}
                        >
                            {i + 1}.
                        </Typography>
                        <Typography variant="h6" fontWeight={700} mb={1} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            {step.title}
                        </Typography>
                        <Typography color="#bbb" sx={{ fontSize: { xs: '0.7rem', sm: '0.85rem' } }}>
                            {step.desc}
                        </Typography>
                    </Card>
                </motion.div>
            </Grid>
        ))}
    </Grid>
</SectionWrapper>
            {/* Reward Tiers (Pricing Table Style) */}
            <SectionWrapper sx={{ textAlign: "center", py: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={6}>Multiple Reward Tiers</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {rewardTiers.map((tier, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 6, textAlign: "center", borderRadius: 4, height: '100%',
                                    background: tier.popular ? GOLD_GRADIENT : LIGHT_GOLD_BG,
                                    color: tier.popular ? DARK_BG : DARK_BG,
                                    boxShadow: tier.popular ? "0 20px 50px rgba(0,0,0,0.2)" : "0 8px 25px rgba(0,0,0,0.1)",
                                    border: tier.popular ? `3px solid ${DARK_BG}` : `2px solid ${GOLD_COLOR}`,
                                    transform: tier.popular ? "scale(1.05)" : "scale(1)",
                                    transition: "0.3s",
                                }}>
                                    {tier.popular && (
                                        <Box sx={{ mb: 2, p: 1, backgroundColor: DARK_BG, color: '#fff', borderRadius: 1 }}>
                                            <Typography variant="subtitle2" fontWeight={700}>MOST POPULAR</Typography>
                                        </Box>
                                    )}
                                    <Typography variant="h3" fontWeight={800} mb={1} sx={{ color: tier.popular ? DARK_BG : GOLD_COLOR }}>
                                        {tier.tier}
                                    </Typography>
                                    <Typography variant="h6" mb={1} fontWeight={600}>Goal: {tier.goal}</Typography>
                                    <Typography variant="h5" fontWeight={700} mb={2}>Bonus Gold: {tier.bonusGold}</Typography>
                                    <Typography variant="subtitle1" mb={3} color={tier.popular ? DARK_BG : 'text.secondary'}>Worth ~{tier.worth}</Typography>

                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            background: tier.popular ? DARK_BG : GOLD_GRADIENT,
                                            color: tier.popular ? '#fff' : DARK_BG,
                                            px: 4, py: 1.5, fontWeight: 700, borderRadius: 10
                                        }}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Final CTA (Dark Background) */}
<SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: GOLD_COLOR }}>Start Earning Bonus Gold Today</Typography>
                    <Typography mb={4} sx={{ opacity: 0.9 }}>Join thousands already building wealth with PureGram's generous rewards</Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 6, py: 1.5, fontWeight: 700,
                            background: GOLD_GRADIENT, color: DARK_BG,
                            borderRadius: 10,
                            boxShadow: "0 10px 30px rgba(184, 134, 11, 0.5)",
                            "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 40px rgba(184, 134, 11, 0.7)" }
                        }}
                    >
                        Claim Your Bonus Gold
                    </Button>
                </motion.div>
            </SectionWrapper>
        </>
    );
}