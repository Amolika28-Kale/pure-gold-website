import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaMobileAlt, FaChartLine, FaUsers, FaPercent, FaMoneyBillWave, FaCoins, FaWallet, FaHandshake, FaTrophy, FaChartArea, FaUserShield } from "react-icons/fa";

// --- Updated UI Colors ---
const GOLD_GRADIENT = "linear-gradient(90deg, #FFD97D, #FFC700, #FFD97D)";
const GOLD_COLOR = "#FFC700";
const PRIMARY_BG = "#f9faff"; // light pastel background
const LIGHT_ACCENT = "#fffaf0"; // light gold background for sections
const CARD_BG = "#fff"; // white card background
const HERO_COLOR = "#1e37a3"; // hero text accent
// Gold gradient for numbers and buttons
const HERO_BG = "linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)"; // soft pastel gradient

// Motion variants
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }, viewport: { once: true } };

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

            <Box
      sx={{
        background: HERO_BG,
        py: { xs: 8, md: 14 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sparkle Animation */}
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "spin 10s linear infinite",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 8px rgba(255,215,0,0.3)",
            }}
          >
            Massive Market Penetration
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.25rem" },
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Discover how PureGram’s unique business model enables sustainable growth, 
            high profitability, and rapid adoption across India.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              background: GOLD_GRADIENT,
              color: "#1a1a1a",
              borderRadius: 10,
              boxShadow: "0 10px 30px rgba(255,215,0,0.4)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 15px 40px rgba(255,215,0,0.6)",
              },
            }}
          >
            Explore Business Model
          </Button>
        </motion.div>
      </Container>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>

            {/* Market Opportunity with Sparkle */}
            <SectionWrapper sx={{ background: PRIMARY_BG, py: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: HERO_COLOR }}>
                    Business Model: Sustainable Growth & Massive Market Penetration
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {marketData.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: 4, textAlign: "center", height: '100%', borderRadius: 6,
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                                    border: `2px solid ${GOLD_COLOR}`,
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: "-50%",
                                        left: "-50%",
                                        width: "200%",
                                        height: "200%",
                                        background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
                                        animation: "spin 6s linear infinite",
                                        borderRadius: "50%"
                                    }
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1.5 }}>{item.icon}</Box>
                                    <Typography variant="h3" fontWeight={800} sx={{
                                        background: GOLD_GRADIENT,
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                        textShadow: "0 2px 8px rgba(255,215,0,0.3)"
                                    }}>{item.value}</Typography>
                                    <Typography variant="subtitle1" fontWeight={600} color="#333">{item.label}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Revenue Streams */}
            <SectionWrapper sx={{ background: LIGHT_ACCENT, py: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: HERO_COLOR }}>
                    Core Revenue Streams
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {revenueStreams.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <motion.div {...fadeUp}>
                                <Card sx={{
                                    p: 4, textAlign: "center", height: '100%', borderRadius: 6,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    border: `2px solid ${GOLD_COLOR}`,
                                    "&:hover": { transform: "translateY(-5px)", transition: "0.3s" }
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 1 }}>{item.icon}</Box>
                                    <Typography variant="h4" fontWeight={800} sx={{ color: GOLD_COLOR }}>{item.value}</Typography>
                                    <Typography variant="h6" fontWeight={700} color="#333">{item.label}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Unit Economics */}
            <SectionWrapper sx={{ background: PRIMARY_BG, py: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: HERO_COLOR }}>
                    Positive Unit Economics at Scale
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {unitEconomics.map((item, i) => (
                        <Grid item xs={12} sm={6} md={2} key={i}>
                            <motion.div {...fadeUp}>
                                <Card sx={{
                                    p: 3, textAlign: "center", borderRadius: 6,
                                    background: item.type === 'profit' ? GOLD_GRADIENT : CARD_BG,
                                    color: item.type === 'profit' ? "#1a1a1a" : "#333",
                                    border: item.type === 'cost' ? '2px dashed #f44336' : `2px solid ${GOLD_COLOR}`,
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                                }}>
                                    <Typography variant="caption" display="block" fontWeight={600} mb={1} sx={{
                                        color: item.type === 'cost' ? '#f44336' : (item.type === 'profit' ? "#1a1a1a" : GOLD_COLOR)
                                    }}>{item.label}</Typography>
                                    <Typography variant="h5" fontWeight={800} sx={{
                                        color: item.type === 'cost' ? '#f44336' : (item.type === 'profit' ? "#1a1a1a" : "#333")
                                    }}>{item.value}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper sx={{ py: 10, background: LIGHT_ACCENT }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: HERO_COLOR }}>
                    First Year Business Plan Timeline
                </Typography>
                <Grid container spacing={16} justifyContent="center">
                    {quarterlyPlan.map((q, i) => (
                        <Grid item xs={12} md={3} key={i}>
                            <motion.div {...fadeUp}>
                                <Card sx={{
                                    p: 4, textAlign: "center", borderRadius: 6,
                                    height: '100%', boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    border: `2px solid ${GOLD_COLOR}`,
                                    "&:hover": { boxShadow: `0 15px 40px rgba(255,215,0,0.2)` }
                                }}>
                                    <Typography variant="h5" fontWeight={800} sx={{ color: GOLD_COLOR }}>{q.quarter}</Typography>
                                    <Typography fontWeight={700} mb={1} color="#333">{q.title}</Typography>
                                    <Typography variant="body1"><Box fontWeight={700}>Target:</Box> {q.target}</Typography>
                                    <Typography variant="body1" mb={1}><Box fontWeight={700}>Savings:</Box> {q.savings}</Typography>
                                    <Typography variant="subtitle2" mt={2} mb={1} fontWeight={700}>Key Focus Areas:</Typography>
                                    <ul style={{ listStyle: "disc", paddingLeft: "20px", textAlign: "left", color: "#555" }}>
                                        {q.focus.map((f, j) => <li key={j} style={{ fontSize: "0.85rem", marginBottom: '4px' }}>{f}</li>)}
                                    </ul>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Competitive Advantage */}
            <SectionWrapper sx={{ background: PRIMARY_BG, py: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: HERO_COLOR }}>
                    Strategic Advantage: The PureGram Difference
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {competitiveAdv.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div {...fadeUp}>
                                <Card sx={{
                                    p: 4, textAlign: "center", borderRadius: 6,
                                    height: '100%', boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    border: `2px solid ${GOLD_COLOR}`,
                                    "&:hover": { boxShadow: `0 15px 40px rgba(255,215,0,0.2)` }
                                }}>
                                    <Box sx={{ color: GOLD_COLOR, mb: 2 }}>{item.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: "#333" }}>{item.title}</Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}
