import React from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqs = [
  { q: "How do I create a PureGram account?", a: "Sign up with your mobile and complete basic KYC. Account is activated instantly." },
  { q: "What is the minimum amount I can save?", a: "You can start with as little as ₹100." },
  { q: "Is PureGram safe and secure?", a: "Yes — bank-grade security, insured vaults and third-party audits." },
  { q: "How does the bonus gold reward work?", a: "Save regularly and meet the tier target to receive bonus gold automatically." },
  { q: "What is the purity of the gold?", a: "99.99% pure gold with third-party verification." },
  { q: "How is gold pricing determined?", a: "Live rates synced with international gold markets." },
  { q: "Can I buy physical gold?", a: "Yes — request physical delivery anytime for your savings." },
  { q: "Where is my gold stored?", a: "In insured, certified vaults." },
  { q: "Is my gold insured?", a: "Yes — fully insured against theft or loss." },
  { q: "Who owns the gold?", a: "Gold credited to your account is your asset." },
  { q: "Can I withdraw anytime?", a: "Yes — convert to cash or request physical delivery." },
  { q: "Are there any withdrawal charges?", a: "Fees depend on withdrawal type; check pricing page." },
  { q: "How do I track my savings?", a: "Dashboard shows real-time balances and bonus progress." },
  { q: "Can I pause or modify my auto-save?", a: "Yes — you can adjust or pause auto-deposits anytime." },
  { q: "How do I become a sales partner?", a: "Apply via the Sales Partner page; our team will contact you." },
  { q: "How much commission do partners earn?", a: "10% instant commission on customer deposits." },
  { q: "Is there any joining fee for partners?", a: "No joining fee." },
  { q: "Do I need to pay taxes on my gold savings?", a: "Taxation varies; consult a tax professional." },
  { q: "Is PureGram regulated?", a: "We adhere to applicable regulations and compliance standards." },
];

export default function FAQ() {
  return (
    <Box component="main" sx={{ py: 10, background: "#F5F7FF" }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 1 }}>Frequently Asked Questions</Typography>
          <Typography variant="subtitle1" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Find answers to common questions about PureGram digital gold savings
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Accordion
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.05)",
                  borderRadius: 3,
                  "&:hover": { boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 2 }}>
                  <Typography fontWeight={700}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 2 }}>
                  <Typography color="text.secondary">{f.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>Still Have Questions?</Typography>
            <Typography color="text.secondary">Our customer support team is here to help 24/7 — Email or call us.</Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
