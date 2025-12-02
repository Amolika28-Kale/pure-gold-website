import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, TextField, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";

export default function SalesPartner() {
  const commissionExamples = [
    { deposit: "₹1,00,000", earnings: "₹10,000" },
    { deposit: "₹5,00,000", earnings: "₹50,000" },
    { deposit: "₹10,00,000", earnings: "₹1,00,000" },
  ];

  const whyPartner = [
    "10% Direct Commission",
    "Instant Payouts",
    "No Earning Limits",
    "Easy Customer Acquisition",
    "Transparent Structure",
    "Flexible Work Hours",
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
        image="/assets/partner-hero.jpg"
        buttonText="Join Now"
      />

      {/* Attractive Commission */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, backgroundColor: "#fff8e1" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{
            p: { xs: 6, md: 10 },
            display: "inline-block",
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg,#f9c846,#ffd700)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 0 25px rgba(255,223,0,0.3)",
            "&:hover": { transform: "scale(1.05)", boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 0 35px rgba(255,223,0,0.5)" },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}>
            <Typography variant="h3" fontWeight={800} mb={2} sx={{ color: "#111", textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
              10%
            </Typography>
            <Typography variant="h6" fontWeight={700}>Instant Commission</Typography>
          </Card>
        </motion.div>

        {/* Commission Table */}
        <Grid container spacing={4} justifyContent="center" mt={6}>
          {commissionExamples.map((row, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{
                  p: 6,
                  textAlign: "center",
                  borderRadius: 4,
                  background: "linear-gradient(145deg,#fff9c4,#ffe066)",
                  boxShadow: "0 15px 35px rgba(255,215,0,0.2), 0 0 25px rgba(255,223,0,0.15)",
                  "&:hover": { transform: "scale(1.05)" },
                  transition: "transform 0.3s ease",
                }}>
                  <Typography variant="h5" fontWeight={700}>{row.deposit}</Typography>
                  <Typography fontWeight={600}>Your Commission</Typography>
                  <Typography variant="h6" color="primary" mt={1}>{row.earnings}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Why Partner */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">Why Partner with PureGram?</Typography>
        <Grid container spacing={4} justifyContent="center">
          {whyPartner.map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  backgroundColor: "#fffbe6",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" },
                  transition: "0.3s"
                }}>
                  <Typography variant="h6" fontWeight={700} color="primary">{feature}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Dedicated Support */}
      <SectionWrapper sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h4" fontWeight={700} mb={4}>Full Support for Partners</Typography>
        <Grid container spacing={2} justifyContent="center">
          {supportItems.map((item, i) => (
            <Grid item key={i}>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i*0.1 }}>
                <Chip label={item} color="secondary" sx={{ fontWeight: 600, p: 2, fontSize: "0.9rem" }} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Registration Form */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, backgroundColor: "#fff8e1" }}>
        <Typography variant="h4" fontWeight={700} mb={6}>Register as a Sales Partner</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card sx={{ p: 6, borderRadius: 4, boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}><TextField fullWidth label="Full Name" /></Grid>
                  <Grid item xs={12} md={6}><TextField fullWidth label="Email" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Phone Number" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="City" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Tell us about yourself & motivation" multiline rows={3} /></Grid>
                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="secondary" sx={{ mt: 3, px: 6, py: 1.5, fontWeight: 700 }}>Submit Application</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" display="block" mt={2} textAlign="center">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, background: "linear-gradient(90deg,#f9c846,#ffd700)" }}>
        <Typography variant="h4" fontWeight={700} mb={3} color="#111">Start Earning Unlimited Commission Today</Typography>
        <Typography mb={4} color="#333">Join thousands of partners building wealth with PureGram.</Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ px: 6, py: 1.5, fontWeight: 700 }}>Claim Your Spot Now</Button>
      </SectionWrapper>
    </>
  );
}
