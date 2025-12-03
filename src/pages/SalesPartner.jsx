import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, TextField, Button, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaDollarSign, FaBolt, FaInfinity, FaHandshake, FaCalendarAlt, FaStar, FaUserTie, FaGraduationCap, FaTools, FaHeadset, FaChartBar } from "react-icons/fa";

// --- Premium Style Constants (Matching other components) ---
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const GOLD_COLOR = "#b8860b";
const DARK_BG = "#1a1a1a";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0";
const BLUE_HERO_BG = "#1e37a3";

// Framer Motion Variants
const itemVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SalesPartner() {
    const commissionExamples = [
        { deposit: "₹1,00,000", earnings: "₹10,000", note: "10 customers × ₹10k each" },
        { deposit: "₹5,00,000", earnings: "₹50,000", note: "50 customers × ₹10k each" },
        { deposit: "₹10,00,000", earnings: "₹1,00,000", note: "100 customers × ₹10k each" },
    ];

    const whyPartner = [
        { title: "10% Direct Commission", icon: <FaDollarSign size={24} />, desc: "Earn instant commission on every customer deposit - no delays, no limits" },
        { title: "Instant Payouts", icon: <FaBolt size={24} />, desc: "Your commission is credited immediately after customer deposit" },
        { title: "No Earning Limits", icon: <FaInfinity size={24} />, desc: "The more customers you bring, the more you earn - unlimited potential" },
        { title: "Easy Acquisition", icon: <FaHandshake size={24} />, desc: "Digital gold is in demand - easier to sell than traditional products" },
        { title: "Flexible Work Hours", icon: <FaCalendarAlt size={24} />, desc: "Work on your own schedule - full-time or part-time, your choice" },
        { title: "Transparent Structure", icon: <FaStar size={24} />, desc: "Simple commission model with no hidden clauses or fine print" },
    ];

    const partnerProfiles = [
        { title: "Sales Professionals", icon: <FaUserTie /> },
        { title: "Financial Advisors", icon: <FaChartBar /> },
        { title: "Real Estate Agents", icon: <FaTools /> },
        { title: "Freelancers & Entrepreneurs", icon: <FaHeadset /> },
        { title: "College Students", icon: <FaGraduationCap /> },
    ];

    const supportItems = [
        "Training Modules",
        "Marketing Collateral",
        "Dedicated Support",
        "Performance Dashboard",
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title="Become a PureGram Sales Partner"
                subtitle="Earn unlimited income with India's fastest-growing digital gold platform. 10% instant commission on every customer deposit!"
            />

            {/* Attractive Commission */}
            <SectionWrapper sx={{ textAlign: "center", py: 10, background: DARK_BG, color: "#fff" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h4" fontWeight={700} mb={6}>
                        Attractive Commission Structure
                    </Typography>
                    <Card sx={{
                        p: { xs: 6, md: 10 },
                        display: "inline-block",
                        textAlign: "center",
                        borderRadius: 4,
                        // High-contrast gold card on dark background
                        background: GOLD_GRADIENT,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 25px rgba(255,223,0,0.8)",
                        color: DARK_BG,
                    }}>
                        <Typography variant="h2" fontWeight={800} mb={2} sx={{ textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                            10%
                        </Typography>
                        <Typography variant="h5" fontWeight={700}>Direct Instant Commission</Typography>
                    </Card>
                </motion.div>

                {/* Commission Table */}
                <Grid container spacing={4} justifyContent="center" mt={6}>
                    {commissionExamples.map((row, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: 4,
                                    height: '100%',
                                    background: "#2a2a2a", // Dark card on dark background
                                    color: "#fff",
                                    borderBottom: `4px solid ${GOLD_COLOR}`,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": { transform: "translateY(-5px)" }
                                }}>
                                    <Typography variant="h5" fontWeight={700} color={GOLD_COLOR} mb={1}>{row.deposit}</Typography>
                                    <Typography fontWeight={600} mb={2}>Total Customer Deposits</Typography>
                                    <Typography variant="h4" fontWeight={800} sx={{ color: GOLD_COLOR }}>{row.earnings}</Typography>
                                    <Typography variant="subtitle1" fontWeight={600} mt={0.5}>Your Commission</Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Why Partner */}
            <SectionWrapper sx={{ background: LIGHT_BG }}>
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">Why Partner with PureGram?</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {whyPartner.map((feature, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                                <Card sx={{
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: 4,
                                    height: '100%',
                                    backgroundColor: LIGHT_GOLD_BG,
                                    border: `1px solid ${GOLD_COLOR}`,
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                                    transition: "0.3s",
                                    "&:hover": { transform: "translateY(-5px)", boxShadow: `0 15px 35px rgba(184, 134, 11, 0.2)` }
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

            {/* Who Can Become a Partner */}
            <SectionWrapper sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h4" fontWeight={700} mb={4}>Who Can Become a Partner?</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {partnerProfiles.map((item, i) => (
                        <Grid item key={i}>
                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <Chip
                                    label={item.title}
                                    icon={item.icon}
                                    sx={{
                                        fontWeight: 600, p: 2, fontSize: "1rem", backgroundColor: GOLD_COLOR, color: DARK_BG
                                    }}
                                />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>

            {/* Registration Form */}
            <SectionWrapper sx={{ textAlign: "center", py: 10, background: DARK_BG, color: "#fff" }}>
                <Typography variant="h4" fontWeight={700} mb={6} sx={{ color: GOLD_COLOR }}>Register as a Sales Partner</Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <Card sx={{ p: 6, borderRadius: 4, boxShadow: "0 15px 35px rgba(0,0,0,0.4)", background: "#2a2a2a" }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}><TextField fullWidth label="Full Name" InputLabelProps={{ style: { color: '#bbb' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: GOLD_COLOR }, '&:hover fieldset': { borderColor: GOLD_COLOR }, '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } }, input: { color: '#fff' } }} /></Grid>
                                    <Grid item xs={12} md={6}><TextField fullWidth label="Email" InputLabelProps={{ style: { color: '#bbb' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: GOLD_COLOR }, '&:hover fieldset': { borderColor: GOLD_COLOR }, '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } }, input: { color: '#fff' } }} /></Grid>
                                    <Grid item xs={12}><TextField fullWidth label="Phone Number" InputLabelProps={{ style: { color: '#bbb' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: GOLD_COLOR }, '&:hover fieldset': { borderColor: GOLD_COLOR }, '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } }, input: { color: '#fff' } }} /></Grid>
                                    <Grid item xs={12}><TextField fullWidth label="City" InputLabelProps={{ style: { color: '#bbb' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: GOLD_COLOR }, '&:hover fieldset': { borderColor: GOLD_COLOR }, '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } }, input: { color: '#fff' } }} /></Grid>
                                    <Grid item xs={12}><TextField fullWidth label="Tell us about yourself & motivation" multiline rows={3} InputLabelProps={{ style: { color: '#bbb' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: GOLD_COLOR }, '&:hover fieldset': { borderColor: GOLD_COLOR }, '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } }, textarea: { color: '#fff' } }} /></Grid>
                                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                mt: 3, px: 6, py: 1.5, fontWeight: 700,
                                                background: GOLD_GRADIENT, color: DARK_BG,
                                                borderRadius: 10,
                                                boxShadow: "0 10px 30px rgba(184, 134, 11, 0.5)",
                                                "&:hover": { transform: "scale(1.03)", boxShadow: "0 15px 40px rgba(184, 134, 11, 0.7)" }
                                            }}
                                        >
                                            Submit Application
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption" display="block" mt={2} textAlign="center" sx={{ color: '#aaa' }}>
                                            By submitting this form, you agree to our Terms of Service and Privacy Policy
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </SectionWrapper>

            {/* Final CTA (Light Gold Background) */}
<SectionWrapper sx={{ py: 12, textAlign: "center", background: BLUE_HERO_BG, color: "#fff" }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <Typography 
                        variant="h4" 
                        fontWeight={800} 
                        mb={3} 
                        sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                    >Start Earning Unlimited Commission Today</Typography>
                                        <Typography variant="h6" sx={{ opacity: 0.9 }} mb={4}>
Join thousands of partners building wealth with PureGram.</Typography>
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
                        Claim Your Spot Now
                    </Button>
                </motion.div>
            </SectionWrapper>
        </>
    );
}