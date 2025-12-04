import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { FaUserShield, FaGift, FaLock, FaCreditCard, FaUserTie, FaRegBuilding, FaChevronDown, FaEnvelope, FaPhone } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";

// --- Style Constants ---
const GOLD_COLOR = "#b8860b";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700)";
const LIGHT_BG = "#f5f5f5";
const HERO_BG = "#1e37a3"; // hero section with premium blue
const DARK_TEXT = "#333";

const categorizedFaqs = [
    {
        category: "Getting Started",
        icon: FaUserShield,
        questions: [
            { q: "How do I create a PureGram account?", a: "Sign up with your mobile and complete basic KYC. Account is activated instantly." },
            { q: "What is the minimum amount I can save?", a: "You can start with as little as ₹100." },
            { q: "Is PureGram safe and secure?", a: "Yes — bank-grade security, insured vaults and third-party audits." },
        ],
    },
    {
        category: "Gold & Rewards",
        icon: FaGift,
        questions: [
            { q: "How does the bonus gold reward work?", a: "Save regularly and meet the tier target to receive bonus gold automatically." },
            { q: "What is the purity of the gold?", a: "99.99% pure gold with third-party verification." },
            { q: "How is gold pricing determined?", a: "Live rates synced with international gold markets." },
            { q: "Can I buy physical gold?", a: "Yes — request physical delivery anytime for your savings." },
        ],
    },
    {
        category: "Storage & Security",
        icon: FaLock,
        questions: [
            { q: "Where is my gold stored?", a: "In insured, certified vaults." },
            { q: "Is my gold insured?", a: "Yes — fully insured against theft or loss." },
            { q: "Who owns the gold?", a: "Gold credited to your account is your asset, held securely on your behalf." },
        ],
    },
    {
        category: "Withdrawals & Transactions",
        icon: FaCreditCard,
        questions: [
            { q: "Can I withdraw my savings anytime?", a: "Yes — convert to cash or request physical delivery." },
            { q: "Are there any withdrawal charges?", a: "Fees depend on withdrawal type; check the pricing page for details." },
            { q: "How do I track my savings?", a: "Your dashboard shows real-time balances and bonus progress." },
            { q: "Can I pause or modify my auto-save?", a: "Yes — you can adjust or pause auto-deposits anytime easily." },
        ],
    },
    {
        category: "Sales Partners",
        icon: FaUserTie,
        questions: [
            { q: "How do I become a PureGram sales partner?", a: "Apply via the Sales Partner page; our team will contact you within 24 hours." },
            { q: "How much commission do sales partners earn?", a: "10% instant commission on customer deposits." },
            { q: "When do I receive my commission?", a: "Commission is credited instantly upon successful customer deposit." },
            { q: "Is there any joining fee for sales partners?", a: "No, becoming a sales partner with PureGram is completely free." },
        ],
    },
    {
        category: "Taxes & Regulations",
        icon: FaRegBuilding,
        questions: [
            { q: "Do I need to pay taxes on my gold savings?", a: "Taxation varies based on the duration of holding and current Indian tax laws; consult a tax professional." },
            { q: "Is PureGram regulated?", a: "We adhere to all applicable financial and compliance standards in India." },
            { q: "Will I receive tax documents?", a: "Yes, necessary transaction statements will be provided annually." },
        ],
    },
];

const PremiumAccordion = motion(Accordion);

export default function FAQ() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box component="main" sx={{ py: { xs: 6, md: 10 }, background: LIGHT_BG }}>
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 1, color: DARK_TEXT }}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h6" textAlign="center" sx={{ mb: 8, fontWeight: 500, color: DARK_TEXT }}>
                        Find answers to common questions about PureGram digital gold savings
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {categorizedFaqs.map((category, catIndex) => (
                        <Grid item xs={12} md={6} key={catIndex}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: catIndex * 0.1 }}
                            >
                                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', color: DARK_TEXT }}>
                                    <Box component={category.icon} sx={{ color: GOLD_COLOR, mr: 1.5, fontSize: '1.5rem' }} />
                                    <Typography variant="h5" fontWeight={700}>{category.category}</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                                    {category.questions.map((f, qIndex) => (
                                        <PremiumAccordion
                                            key={qIndex}
                                            expanded={expanded === `panel-${catIndex}-${qIndex}`}
                                            onChange={handleChange(`panel-${catIndex}-${qIndex}`)}
                                            sx={{
                                                bgcolor: "#fff",
                                                boxShadow: "0px 5px 15px rgba(0,0,0,0.05)",
                                                borderRadius: 3,
                                                border: expanded === `panel-${catIndex}-${qIndex}` ? `1px solid ${GOLD_COLOR}` : '1px solid transparent',
                                                transition: 'all 0.3s ease-in-out',
                                                "&:hover": { boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" },
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<FaChevronDown color={GOLD_COLOR} />}
                                                sx={{ px: 3, py: 1.5 }}
                                            >
                                                <Typography fontWeight={600} color={DARK_TEXT}>{f.q}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ px: 3, pb: 3, borderTop: `1px dashed ${GOLD_COLOR}` }}>
                                                <Typography color={DARK_TEXT}>{f.a}</Typography>
                                            </AccordionDetails>
                                        </PremiumAccordion>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Section */}
  <SectionWrapper sx={{ py: 12, textAlign: "center", background: HERO_BG, color: "#fff" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={800} mb={3} sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
                            Still Have Questions?
                        </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }} mb={4}>
                            Our customer support team is here to help you 24/7. Reach out directly.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 3 }}>
                            <Button
            variant="contained"
            size="large"
            sx={{
              px: 6, py: 2, fontWeight: 700, fontSize: "1.1rem",
              background: GOLD_GRADIENT, color: "#1a1a1a",
              borderRadius: 10, boxShadow: "0 10px 30px rgba(255,199,0,0.3)",
              "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 40px rgba(255,199,0,0.5)" }
            }}
          >
                                Email Us
                            </Button>
                            <Button
            variant="contained"
            size="large"
            sx={{
              px: 6, py: 2, fontWeight: 700, fontSize: "1.1rem",
              background: GOLD_GRADIENT, color: "#1a1a1a",
              borderRadius: 10, boxShadow: "0 10px 30px rgba(255,199,0,0.3)",
              "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 40px rgba(255,199,0,0.5)" }
            }}
          >
                                Call Us
                            </Button>
                        </Box>
                    </motion.div>
                </SectionWrapper>
            </Container>
        </Box>
    );
}
