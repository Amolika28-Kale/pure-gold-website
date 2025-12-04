import React from "react";
import HeroSection from "../components/HeroSection";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, TextField, Button, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaDollarSign, FaBolt, FaInfinity, FaHandshake, FaCalendarAlt, FaStar, FaUserTie, FaGraduationCap, FaTools, FaHeadset, FaChartBar } from "react-icons/fa";

// --- Updated Premium UI Colors ---
const GOLD_GRADIENT = "linear-gradient(90deg, #FFD97D, #FFC700, #FFD97D)";
const GOLD_COLOR = "#FFC700";
const PRIMARY_BG = "#f9faff"; // light pastel background
const CARD_BG = "#ffffff"; // cards with soft white
const HERO_BG = "#1e37a3"; // hero section with premium blue
const LIGHT_ACCENT = "#fffaf0"; // light gold accent

// Motion Variants
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }, viewport: { once: true } };


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

  return (
    <>
      {/* Hero Section */}
            <Box sx={{ position: "relative" }}>

      <HeroSection
        title="Become a PureGram Sales Partner"
        subtitle="Earn unlimited income with India's fastest-growing digital gold platform. 10% instant commission on every customer deposit!"
        buttonText="Join Now"
        bgColor={HERO_BG}
        textColor="#fff"
      />

         {/* Sparkles */}
        {Array.from({ length: 19 }).map((_, i) => (
          <Sparkle key={i} x={`${Math.random() * 100}%`} y={`${Math.random() * 100}%`} size={4 + Math.random() * 6} delay={Math.random() * 2} />
        ))}
      </Box>

      {/* Attractive Commission */}
      <SectionWrapper sx={{ textAlign: "center", py: 10, background: PRIMARY_BG }}>
        <motion.div {...fadeUp}>
          <Typography variant="h4" fontWeight={700} mb={6} color="#333">
            Attractive Commission Structure
          </Typography>
          <Card sx={{
            p: { xs: 5, md: 8 },
            display: "inline-block",
            textAlign: "center",
            borderRadius: 1,
            background: GOLD_GRADIENT,
            boxShadow: "0 20px 50px rgba(255,199,0,0.3)",
            color: "#1a1a1a",
            "&:hover": { transform: "scale(1.03)", transition: "0.3s" }
          }}>
            <Typography variant="h2" fontWeight={800} mb={2}>
              10%
            </Typography>
            <Typography variant="h5" fontWeight={700}>Direct Instant Commission</Typography>
          </Card>

          {/* Commission Table */}
          <Grid container spacing={4} justifyContent="center" mt={6}>
            {commissionExamples.map((row, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                  <Card sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 6,
                    height: '100%',
                    background: CARD_BG,
                    color: "#333",
                    borderLeft: `5px solid ${GOLD_COLOR}`,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 35px rgba(255,199,0,0.15)" }
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
        </motion.div>
      </SectionWrapper>

      {/* Why Partner */}
      <SectionWrapper sx={{ py: 12, background: LIGHT_ACCENT }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" color="#333">Why Partner with PureGram?</Typography>
        <Grid container spacing={4} justifyContent="center">
          {whyPartner.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div {...fadeUp}>
                <Card sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 6,
                  height: '100%',
                  backgroundColor: "#fff",
                  border: `1px solid ${GOLD_COLOR}`,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: `0 15px 35px rgba(255,199,0,0.15)` }
                }}>
                  <Box sx={{ color: GOLD_COLOR, mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" fontWeight={700} mb={1} color="#333">{feature.title}</Typography>
                  <Typography color="text.secondary">{feature.desc}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Who Can Become a Partner */}
      <SectionWrapper sx={{ py: 10, textAlign: "center", background: PRIMARY_BG }}>
        <Typography variant="h4" fontWeight={700} mb={4} color="#333">Who Can Become a Partner?</Typography>
        <Grid container spacing={2} justifyContent="center">
          {partnerProfiles.map((item, i) => (
            <Grid item key={i}>
              <motion.div {...fadeUp}>
                <Chip
                  label={item.title}
                  icon={item.icon}
                  sx={{
                    fontWeight: 600, p: 2, fontSize: "1rem",
                    backgroundColor: GOLD_COLOR, color: "#1a1a1a",
                    "&:hover": { transform: "scale(1.05)", transition: "0.3s" }
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Registration Form */}
      <SectionWrapper sx={{ py: 12, background: LIGHT_ACCENT }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" color="#333">Register as a Sales Partner</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div {...fadeUp}>
              <Card sx={{ p: 6, borderRadius: 6, boxShadow: "0 15px 35px rgba(0,0,0,0.05)", background: "#fff" }}>
                <Grid container spacing={3}>
                  {["Full Name", "Email", "Phone Number", "City"].map((label, idx) => (
                    <Grid item xs={12} md={idx === 0 || idx === 1 ? 6 : 12} key={idx}>
                      <TextField fullWidth label={label} InputLabelProps={{ style: { color: '#555' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: GOLD_COLOR },
                            '&:hover fieldset': { borderColor: GOLD_COLOR },
                            '&.Mui-focused fieldset': { borderColor: GOLD_COLOR }
                          },
                          input: { color: '#333' }
                        }}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Tell us about yourself & motivation"
                      multiline rows={3}
                      InputLabelProps={{ style: { color: '#555' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: GOLD_COLOR },
                          '&:hover fieldset': { borderColor: GOLD_COLOR },
                          '&.Mui-focused fieldset': { borderColor: GOLD_COLOR }
                        },
                        textarea: { color: '#333' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 3, px: 6, py: 1.5, fontWeight: 700,
                        background: GOLD_GRADIENT, color: "#1a1a1a",
                        borderRadius: 10,
                        boxShadow: "0 10px 30px rgba(255,199,0,0.3)",
                        "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 40px rgba(255,199,0,0.5)" }
                      }}
                    >
                      Submit Application
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" display="block" mt={2} textAlign="center" color="#555">
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
      <SectionWrapper sx={{ py: 12, textAlign: "center", background: HERO_BG, color: "#fff" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={800} mb={3} sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Start Earning Unlimited Commission Today
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }} mb={4}>
            Join thousands of partners building wealth with PureGram.
          </Typography>
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
            Claim Your Spot Now
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
