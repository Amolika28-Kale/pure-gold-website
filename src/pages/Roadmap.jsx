import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Typography, Grid, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaGlobe, FaChartLine, FaCheckCircle, FaStar, FaRupeeSign, FaBullseye, FaUsers } from "react-icons/fa";

// --- Premium Style Constants (Matching other components) ---
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700)";

// Function to get icon based on quarter
const getQuarterIcon = (quarter) => {
    switch (quarter) {
        case "Q1 2026":
            return <FaRocket size={40} />;
        case "Q2 2026":
            return <FaHandshake size={40} />;
        case "Q3 2026":
            return <FaGlobe size={40} />;
        case "Q4 2026":
            return <FaChartLine size={40} />;
        default:
            return <FaBullseye size={40} />;
    }
};

export default function Roadmap() {
    const roadmap = [
        {
            quarter: "Q1 2026",
            title: "Product Polishing & Launch",
            target: "1,500 Customers",
            savings: "₹15 Crore",
            milestones: [
                "Platform beta testing",
                "Security audits complete",
                "KYC integration",
                "Payment gateway setup",
            ],
            focus: [
                "User experience optimization",
                "Marketing campaign launch",
                "Early adopter program",
                "Customer feedback loop",
            ],
        },
        {
            quarter: "Q2 2026",
            title: "Scale & Partnerships",
            target: "5,000 Customers",
            savings: "₹40 Crore",
            milestones: [
                "Referral program launch",
                "Sales partner expansion",
                "Strategic brand partnerships",
                "Influencer collaborations",
            ],
            focus: [
                "Mobile app launch (iOS & Android)",
                "Auto-save features",
                "Gold gift cards",
                "Enhanced analytics dashboard",
            ],
        },
        {
            quarter: "Q3 2026",
            title: "Market Expansion",
            target: "8,000 Customers",
            savings: "₹70 Crore",
            milestones: [
                "Tier-2 & Tier-3 city penetration",
                "Regional language support",
                "Corporate employee programs",
                "Educational institution tie-ups",
            ],
            focus: [
                "Gold SIP (systematic investment)",
                "Family saving accounts",
                "Physical gold delivery",
                "Gold loan integration",
            ],
        },
        {
            quarter: "Q4 2026",
            title: "Scale & Profitability",
            target: "10,000 Customers",
            savings: "₹100 Crore",
            milestones: [
                "Achieve profitability",
                "Optimize unit economics",
                "Series A fundraising",
                "Team expansion",
            ],
            focus: [
                "AI-powered savings advisor",
                "Gamification features",
                "Community challenges",
                "Advanced analytics",
            ],
        },
    ];

    const vision = [
        { label: "Active Users", value: "1 Million", icon: <FaUsers size={30} /> },
        { label: "Total Savings", value: "₹5,000 Cr", icon: <FaRupeeSign size={30} /> },
        { label: "Sales Partners", value: "50,000+", icon: <FaHandshake size={30} /> },
    ];

    return (
        <>
            <SectionWrapper sx={{ background: LIGHT_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_BG }}>
                    PureGram Roadmap: Our Journey to Becoming India's #1 Digital Gold Platform
                </Typography>

                {/* Horizontal Timeline */}
                <Box sx={{ position: "relative", mb: 8, pt: 4, px: { xs: 0, md: 4 } }}>
                    {/* Timeline Line (for desktop) */}
                    <Box
                        sx={{
                            position: { xs: "absolute", md: "relative" },
                            top: { xs: 0, md: "auto" },
                            left: { xs: "25px", md: 0 },
                            width: { xs: "4px", md: "100%" },
                            height: { xs: "100%", md: "4px" },
                            backgroundColor: GOLD_COLOR,
                            transform: { xs: "none", md: "translateY(-50%)" },
                            mx: { md: 0 },
                            zIndex: 0,
                            mb: { md: -4 } // Offset for the nodes
                        }}
                    />

                    <Grid container spacing={4} justifyContent="space-between">
                        {roadmap.map((item, index) => (
                            <Grid item xs={12} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    style={{ position: "relative", zIndex: 2 }}
                                >
                                    <Card
                                        sx={{
                                            p: 3,
                                            border: `2px solid ${GOLD_COLOR}`,
                                            borderRadius: "16px",
                                            textAlign: "center",
                                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                            backgroundColor: LIGHT_GOLD_BG,
                                            height: '100%',
                                            transition: 'transform 0.3s ease-in-out',
                                            "&:hover": { transform: "translateY(-5px)", boxShadow: `0 15px 40px rgba(184, 134, 11, 0.3)` },
                                            // Mobile/Vertical Timeline Dot
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: { xs: '30px', md: '-14px' },
                                                left: { xs: '-30px', md: '50%' },
                                                transform: { xs: 'none', md: 'translateX(-50%)' },
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '50%',
                                                bgcolor: GOLD_COLOR,
                                                zIndex: 1
                                            }
                                        }}
                                    >
                                        <Box sx={{ color: GOLD_COLOR, mb: 1, pt: 1 }}>
                                            {getQuarterIcon(item.quarter)}
                                        </Box>
                                        
                                        <Typography variant="h6" fontWeight={800} sx={{ color: DARK_BG }}>
                                            {item.quarter}
                                        </Typography>

                                        <Typography mt={1} fontWeight={700} sx={{ color: GOLD_COLOR }}>
                                            {item.title}
                                        </Typography>

                                        <Box sx={{ p: 1, my: 2, background: '#fff', borderRadius: 2, border: '1px dashed #ccc' }}>
                                            <Typography variant="subtitle1" fontWeight={700} color={DARK_BG}>
                                                <FaBullseye size={14} style={{ marginRight: '8px' }} /> Target: {item.target}
                                            </Typography>
                                            <Typography fontWeight={700} sx={{ color: GOLD_COLOR }}>
                                                <FaRupeeSign size={14} style={{ marginRight: '8px' }} /> Savings: {item.savings}
                                            </Typography>
                                        </Box>

                                        <Typography mt={2} fontWeight={700} color={DARK_BG}>
                                            Key Milestones
                                        </Typography>
                                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: '#555' }}>
                                            {item.milestones.map((m, i) => (
                                                <li key={i} style={{ fontSize: "0.85rem", listStyleType: 'none', position: 'relative', marginLeft: '-10px' }}>
                                                    <FaCheckCircle size={10} color={GOLD_COLOR} style={{ marginRight: '8px' }} />{m}
                                                </li>
                                            ))}
                                        </ul>

                                        <Typography mt={2} fontWeight={700} color={DARK_BG}>
                                            Focus Areas
                                        </Typography>
                                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: '#555' }}>
                                            {item.focus.map((f, i) => (
                                                <li key={i} style={{ fontSize: "0.85rem", listStyleType: 'none', position: 'relative', marginLeft: '-10px' }}>
                                                    <FaStar size={10} color={GOLD_COLOR} style={{ marginRight: '8px' }} />{f}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </SectionWrapper>

            {/* Vision for 2027 and Beyond */}
            <SectionWrapper sx={{ background: DARK_BG, color: "#fff" }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: GOLD_COLOR }}>
                    Our Vision for 2027 and Beyond 🚀
                </Typography>

                <Card
                    sx={{
                        p: 6,
                        maxWidth: 1000,
                        margin: "0 auto",
                        textAlign: "center",
                        // Use a subtle dark background for the card on a darker background
                        background: "#2a2a2a",
                        color: "#fff",
                        borderRadius: "16px",
                        border: `2px solid ${GOLD_COLOR}`,
                        boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    <Grid container spacing={4} justifyContent="center">
                        {vision.map((v, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Box sx={{ color: GOLD_COLOR, mb: 1 }}>{v.icon}</Box>
                                    <Typography variant="h3" fontWeight={800} sx={{ color: GOLD_COLOR }}>
                                        {v.value}
                                    </Typography>
                                    <Typography mt={1} fontSize="1.1rem" fontWeight={600}>
                                        {v.label}
                                    </Typography>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </SectionWrapper>
        </>
    );
}