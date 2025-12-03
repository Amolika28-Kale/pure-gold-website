import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaMobileAlt, FaChartLine, FaUsers, FaPercent, FaMoneyBillWave, FaCoins, FaWallet, FaHandshake, FaTrophy, FaChartArea, FaUserShield } from "react-icons/fa";

// --- Premium Style Constants (Matching other components) ---
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700)";


export default function BusinessModel() {
    const marketData = [
        { label: "Potential Users", value: "800M+", icon: <FaMobileAlt size={30} /> },
        { label: "Annual Gold Imports", value: "₹3.5L Cr", icon: <FaCoins size={30} /> },
        { label: "Market Growth (CAGR)", value: "45%", icon: <FaChartLine size={30} /> },
        { label: "Target Age Group", value: "18-45", icon: <FaUsers size={30} /> },
    ];

    const revenueStreams = [
        { label: "Gold Margin (2-3% markup)", value: "40%", icon: <FaPercent size={30} /> },
        { label: "Breakage Revenue", value: "25%", icon: <FaWallet size={30} /> },
        { label: "Interest on Wallet Balance", value: "20%", icon: <FaMoneyBillWave size={30} /> },
        { label: "Affiliate Products", value: "15%", icon: <FaHandshake size={30} /> },
    ];

    const competitiveAdv = [
        { title: "Unique Rewards Model", desc: "Only platform offering 24% bonus gold - drives customer stickiness", icon: <FaTrophy size={30} /> },
        { title: "Micro-Savings Focus", desc: "Target underserved segment with ₹100 minimum deposit", icon: <FaChartArea size={30} /> },
        { title: "Sales Partner Network", desc: "Cost-effective distribution through incentivized partners", icon: <FaUserShield size={30} /> },
    ];

    const unitEconomics = [
        { label: "Avg. Customer LTV", value: "₹7,000", type: "revenue" },
        { label: "Revenue per Customer", value: "₹7,000", type: "revenue" },
        { label: "Cost per Customer (CAC, Ops, Tech)", value: "₹1,000", type: "cost" },
        { label: "Net Profit per Customer", value: "₹6,000", type: "profit" },
        { label: "Profit Margin", value: "85%", type: "profit" },
    ];

    const quarterlyPlan = [
        {
            quarter: "Q1",
            title: "Foundation & Launch",
            target: "1,500 customers",
            savings: "₹15 Cr",
            focus: ["Product polishing and testing", "Marketing campaign launch", "Onboard first batch of sales partners", "Build brand awareness"]
        },
        {
            quarter: "Q2",
            title: "Growth Acceleration",
            target: "5,000 customers",
            savings: "₹40 Cr",
            focus: ["Scale customer acquisition", "Expand sales partner network", "Launch referral program", "Strategic partnerships"]
        },
        {
            quarter: "Q3",
            title: "Market Expansion",
            target: "8,000 customers",
            savings: "₹70 Cr",
            focus: ["Geographic expansion to tier-2 cities", "Product feature enhancements", "Corporate tie-ups", "Community building"]
        },
        {
            quarter: "Q4",
            title: "Scale & Optimize",
            target: "10,000 customers",
            savings: "₹100 Cr",
            focus: ["Achieve profitability milestone", "Optimize operations", "Prepare for Series A", "Launch new product features"]
        },
    ];

    return (
        <>
            {/* Market Opportunity */}
            <SectionWrapper sx={{ background: LIGHT_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_BG }}>
                    Business Model: Sustainable Growth & Massive Market Penetration
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {marketData.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4, textAlign: "center", height: '100%', borderRadius: 4,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                    borderBottom: `4px solid ${GOLD_COLOR}`
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{item.icon}</Box>
                                    <Typography variant="h3" sx={{
                                        fontWeight: 800,
                                        background: GOLD_GRADIENT,
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}>{item.value}</Typography>
                                    <Typography variant="subtitle1" fontWeight={600} color={DARK_BG}>{item.label}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Revenue Sources */}
            <SectionWrapper sx={{ background: DARK_BG, color: "#fff" }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: GOLD_COLOR }}>
                    Core Revenue Streams: Ensuring Long-Term Profitability
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {revenueStreams.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4, textAlign: "center", height: '100%', borderRadius: 4,
                                    background: "#2a2a2a", // Dark card on dark background
                                    border: `2px solid ${GOLD_COLOR}`,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                    "&:hover": { transform: "translateY(-5px)" }
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1 }}>{item.icon}</Box>
                                    <Typography variant="h3" fontWeight={800} sx={{ color: GOLD_COLOR }}>{item.value}</Typography>
                                    <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: "#fff" }}>{item.label}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Unit Economics */}
            <SectionWrapper sx={{ background: LIGHT_GOLD_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_BG }}>
                    Positive Unit Economics at Scale
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {unitEconomics.map((item, i) => (
                        <Grid item xs={12} sm={6} md={2} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                                <Card sx={{
                                    p: 3, textAlign: "center", height: '100%', borderRadius: 4,
                                    // Highlight profit section with a darker gold background
                                    background: item.type === 'profit' ? GOLD_GRADIENT : '#fff',
                                    color: item.type === 'profit' ? DARK_BG : DARK_BG,
                                    border: item.type === 'cost' ? '2px dashed #f44336' : `2px solid ${GOLD_COLOR}`,
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                }}>
                                    <Typography variant="caption" display="block" fontWeight={600} mb={1} sx={{ color: item.type === 'cost' ? '#f44336' : (item.type === 'profit' ? DARK_BG : GOLD_COLOR) }}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="h5" fontWeight={800} sx={{ color: item.type === 'cost' ? '#f44336' : (item.type === 'profit' ? DARK_BG : DARK_BG) }}>
                                        {item.value}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* First Year Business Plan Timeline */}
            <SectionWrapper sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_BG }}>
                    First Year Business Plan Timeline
                </Typography>

                <Box sx={{ position: "relative", px: { xs: 0, md: 4 } }}>
                    {/* Timeline Line */}
                    <Box sx={{
                        position: { xs: "absolute", md: "relative" },
                        top: 0,
                        left: { xs: "20px", md: "0" },
                        width: { xs: "4px", md: "100%" },
                        height: { xs: "100%", md: "4px" },
                        bgcolor: GOLD_COLOR,
                        mx: { md: 0 },
                        zIndex: 0
                    }} />

                    <Grid container spacing={4}>
                        {quarterlyPlan.map((q, i) => (
                            <Grid item xs={12} md={3} key={i}>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }}>
                                    <Card sx={{
                                        p: 3, textAlign: "center", borderRadius: 4, height: '100%',
                                        border: `2px solid ${GOLD_COLOR}`, position: "relative",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                        "&:hover": { boxShadow: `0 15px 40px rgba(184, 134, 11, 0.2)` },
                                        // Mobile/Vertical Timeline Dot
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: { xs: '20px', md: '-14px' },
                                            left: { xs: '-10px', md: '50%' },
                                            transform: { xs: 'none', md: 'translateX(-50%)' },
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            bgcolor: GOLD_COLOR,
                                            zIndex: 1
                                        }
                                    }}>
                                        <Typography variant="h5" fontWeight={800} sx={{ color: GOLD_COLOR }}>{q.quarter}</Typography>
                                        <Typography fontWeight={700} mb={1} sx={{ color: DARK_BG }}>{q.title}</Typography>
                                        <Typography variant="body1">
                                            <Box component="span" fontWeight={700}>Target:</Box> {q.target}
                                        </Typography>
                                        <Typography variant="body1" mb={1}>
                                            <Box component="span" fontWeight={700}>Savings:</Box> {q.savings}
                                        </Typography>
                                        <Typography variant="subtitle2" mt={2} mb={1} fontWeight={700}>Key Focus Areas:</Typography>
                                        <ul style={{ listStyle: "disc", paddingLeft: "20px", textAlign: "left", color: "#555" }}>
                                            {q.focus.map((f, j) => <li key={j} style={{ fontSize: "0.8rem", marginBottom: '4px' }}>{f}</li>)}
                                        </ul>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </SectionWrapper>

            {/* Competitive Advantage */}
            <SectionWrapper sx={{ background: LIGHT_GOLD_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_BG }}>
                    Strategic Advantage: The PureGram Difference
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {competitiveAdv.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4, textAlign: "center", height: '100%', borderRadius: 4,
                                    border: `2px solid ${DARK_BG}`,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                    "&:hover": { boxShadow: `0 15px 40px rgba(184, 134, 11, 0.2)` },
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
        </>
    );
}