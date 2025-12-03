import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Button, Box, useTheme, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaLock, FaUsers, FaLightbulb, FaChartLine, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { GiPriceTag, GiCrown, GiGoldBar, GiMoneyStack } from "react-icons/gi";

// --- Premium Style Constants (Matching Home.js) ---
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0"; // For subtle background accents
const BLUE_HERO_BG = "#1e37a3"; // Consistent blue accent color

// Framer Motion Variants (DEFINED HERE TO FIX 'is not defined' ERROR)
const itemVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6 } } };


export default function About() {
    const theme = useTheme();

    // Map Core Values to Icons and Descriptions
    const coreValuesData = [
        {
            title: "Trust & Transparency",
            desc: "Complete transparency in pricing, storage, and operations. Your trust is our foundation.",
            icon: <GiPriceTag size={32} color={GOLD_COLOR} />
        },
        {
            title: "Customer First",
            desc: "Every decision we make puts our customers at the center. Your success is our success.",
            icon: <FaUsers size={32} color={GOLD_COLOR} />
        },
        {
            title: "Innovation",
            desc: "Leveraging technology to make gold savings simple, accessible, and rewarding for all.",
            icon: <FaLightbulb size={32} color={GOLD_COLOR} />
        },
        {
            title: "Wealth Creation",
            desc: "Committed to helping every Indian build sustainable wealth through disciplined savings.",
            icon: <FaChartLine size={32} color={GOLD_COLOR} />
        },
        {
            title: "Inclusivity",
            desc: "Gold investment for everyone, regardless of income level or financial knowledge.",
            icon: <FaGlobe size={32} color={GOLD_COLOR} />
        },
        {
            title: "Security",
            desc: "Bank-grade security with insured vaults and 99.99% pure gold guarantee.",
            icon: <FaShieldAlt size={32} color={GOLD_COLOR} />
        },
    ];

    // Map Trust Features to Icons
    const trustFeaturesData = [
        { title: "Real-Time Gold Pricing", desc: "Live rates synced with international gold markets", icon: <GiPriceTag size={28} /> },
        { title: "Certified Purity", desc: "99.99% pure gold with third-party verification", icon: <GiCrown size={28} /> },
        { title: "Insured Storage", desc: "Your gold is fully insured in certified vaults", icon: <FaLock size={28} /> },
        { title: "Instant Withdrawals", desc: "Convert to cash or physical gold anytime", icon: <GiMoneyStack size={28} /> },
    ];


    return (
        <>
            {/* Hero Section (using standard HeroSection for visual consistency) */}
            <HeroSection
                title="About PureGram: Securing India's Financial Future"
                subtitle="Democratizing 24K gold investment, making it accessible to all, starting from just ₹100."
                
            />

            {/* Mission Section (Mission Text Left, Image Right) */}
            <SectionWrapper sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center" justifyContent="center">
                        
                        {/* LEFT COLUMN: Content (Mission Text) */}
                        <Grid item xs={12} md={6}>
                            <motion.div initial="initial" whileInView="animate" variants={containerVariants} viewport={{ once: true }}>
                                <motion.div variants={itemUp}>
                                    <Typography 
                                        variant="h4" 
                                        fontWeight={700} 
                                        mb={3} 
                                        sx={{ textAlign: { xs: 'center', md: 'left' } }} // Align title left on desktop
                                    >
                                        Our Mission
                                    </Typography>
                                </motion.div>
                                
                                <motion.div variants={itemUp}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: DARK_BG, 
                                            fontWeight: 500, 
                                            textAlign: { xs: 'center', md: 'left' }, // Align text left on desktop
                                            mb: 3
                                        }}
                                    >
                                        At PureGram, we believe every Indian deserves access to safe, simple, and rewarding wealth creation tools. 
                                        We're building India's most trusted digital gold platform that combines the time-tested value of gold with modern technology and rewarding incentives.
                                    </Typography>
                                </motion.div>
                                
                              

                            </motion.div>
                        </Grid>

                        {/* RIGHT COLUMN: Image */}
                        <Grid item xs={12} md={6}>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                                <Box
                                    component="img"
                src="/assets/coins.avif" // Use the public relative path
                                    alt="Gold Dust representing digital savings"
                                    sx={{ 
                                        width: "100%", 
                                        maxWidth: { xs: '100%', md: 450 },
                                        aspectRatio: '16/10',
                                        objectFit: 'cover',
                                        borderRadius: 4, 
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </motion.div>
                        </Grid>
                        
                    </Grid>
                </Container>
            </SectionWrapper>

            {/* Challenge vs Solution (FORCED HORIZONTAL LAYOUT) */}
<SectionWrapper sx={{ background: LIGHT_BG }}>
    <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
        Why India Needs PureGram
    </Typography>
    <Grid container spacing={4} justifyContent="center">
        {/*
            Changed xs={12} to xs={6} for both items. 
            This forces a 50/50 horizontal split even on the smallest phones.
        */}
        {[
            {
                title: "The Savings Challenge ",
                desc: [
                    "Inflation eating away at cash savings",
                    "Lack of disciplined saving habits",
                    "Complex investment products with high entry barriers",
                    "No motivation or rewards for consistent saving",
                    "Difficulty in building long-term wealth"
                ],
                bg: "#f0e4e4" // Subtle red/problem color
            },
            {
                title: "The PureGram Solution ",
                desc: [
                    "Gold as an inflation hedge with historical value preservation",
                    "Micro-savings model encourages regular deposits",
                    "Start with just ₹100 - no minimum balance",
                    "Earn up to 24% bonus gold rewards on savings",
                    "Build tangible wealth you can see growing"
                ],
                bg: "#e4f0e9" // Subtle green/solution color
            }
        ].map((item, i) => (
            <Grid item xs={6} md={6} key={i}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card sx={{ 
                        p: 4, 
                        backgroundColor: item.bg, 
                        height: '100%', 
                        borderRadius: 4, 
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                        // Added style optimization for the dense list text on narrow horizontal view
                        fontSize: { xs: '0.6rem', sm: '0.8rem' }
                    }}>
                        <Typography variant="h5" fontWeight={700} mb={3} color={DARK_BG} sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>
                            {item.title}
                        </Typography>
                        <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8, textAlign: 'left' }}>
                            {item.desc.map((d, j) => (
                                <Typography component="li" key={j} color="text.primary" sx={{ fontSize: { xs: '0.7rem', sm: '1.05rem' } }}>
                                    {item.title.includes("Challenge") ? '' : ''} {d}
                                </Typography>
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
                    {coreValuesData.map((val, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{ 
                                    p: 3, 
                                    textAlign: "center", 
                                    borderRadius: 4,
                                    border: `1px solid ${LIGHT_BG}`,
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                                    "&:hover": {
                                        boxShadow: `0 8px 25px rgba(184, 134, 11, 0.2)`,
                                        transform: 'translateY(-3px)'
                                    }
                                }}>
                                    <Box sx={{ mb: 1 }}>{val.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: DARK_BG }}>{val.title}</Typography>
                                    <Typography color="text.secondary">{val.desc}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Built on Trust */}
            <SectionWrapper sx={{ textAlign: "center", py: 10, background: LIGHT_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
                    Built on Trust & Transparency
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {trustFeaturesData.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{ 
                                    p: 4, 
                                    textAlign: "center", 
                                    borderRadius: 4, 
                                    height: '100%',
                                    // Use gold border or accent on a light card
                                    borderBottom: `4px solid ${GOLD_COLOR}`
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{item.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: DARK_BG }}>{item.title}</Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* CTA Section (High Contrast Premium) */}
       <SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
            <Container maxWidth="lg">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <Typography 
                        variant="h4" 
                        fontWeight={800} 
                        mb={3} 
                        sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                    >
                        Ready to Start Your Gold Journey?
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
                            // Use rich gold gradient on the button
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
            </Container>
        </SectionWrapper>
        </>
    );
}