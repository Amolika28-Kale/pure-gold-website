import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Typography, Grid, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaGlobe, FaChartLine, FaCheckCircle, FaStar, FaRupeeSign, FaBullseye, FaUsers } from "react-icons/fa";

// --- Colors matching Sales Partner page ---
const GOLD_COLOR = "#b8860b";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700)";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0";
const HERO_BG = "linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)"; // soft gradient

const getQuarterIcon = (quarter) => {
  switch (quarter) {
    case "Q1 2026": return <FaRocket size={40} />;
    case "Q2 2026": return <FaHandshake size={40} />;
    case "Q3 2026": return <FaGlobe size={40} />;
    case "Q4 2026": return <FaChartLine size={40} />;
    default: return <FaBullseye size={40} />;
  }
};

export default function Roadmap() {
  const roadmap = [
    {
      quarter: "Q1 2026",
      title: "Product Polishing & Launch",
      target: "1,500 Customers",
      savings: "₹15 Crore",
      milestones: ["Platform beta testing", "Security audits complete", "KYC integration", "Payment gateway setup"],
      focus: ["User experience optimization", "Marketing campaign launch", "Early adopter program", "Customer feedback loop"],
    },
    {
      quarter: "Q2 2026",
      title: "Scale & Partnerships",
      target: "5,000 Customers",
      savings: "₹40 Crore",
      milestones: ["Referral program launch", "Sales partner expansion", "Strategic brand partnerships", "Influencer collaborations"],
      focus: ["Mobile app launch (iOS & Android)", "Auto-save features", "Gold gift cards", "Enhanced analytics dashboard"],
    },
    {
      quarter: "Q3 2026",
      title: "Market Expansion",
      target: "8,000 Customers",
      savings: "₹70 Crore",
      milestones: ["Tier-2 & Tier-3 city penetration", "Regional language support", "Corporate employee programs", "Educational institution tie-ups"],
      focus: ["Gold SIP (systematic investment)", "Family saving accounts", "Physical gold delivery", "Gold loan integration"],
    },
    {
      quarter: "Q4 2026",
      title: "Scale & Profitability",
      target: "10,000 Customers",
      savings: "₹100 Crore",
      milestones: ["Achieve profitability", "Optimize unit economics", "Series A fundraising", "Team expansion"],
      focus: ["AI-powered savings advisor", "Gamification features", "Community challenges", "Advanced analytics"],
    },
  ];

  const vision = [
    { label: "Active Users", value: "1 Million", icon: <FaUsers size={30} /> },
    { label: "Total Savings", value: "₹5,000 Cr", icon: <FaRupeeSign size={30} /> },
    { label: "Sales Partners", value: "50,000+", icon: <FaHandshake size={30} /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{
        background: HERO_BG,
        py: { xs: 8, md: 12 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
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
              animation: "gradientShift 3s infinite alternate",
            }}
          >
            Our Roadmap to Success
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
            Follow PureGram’s journey as we build India’s leading digital gold platform with scalable growth and customer-first strategy.
          </Typography>
        </motion.div>
        {/* Sparkle animation over hero */}
        <Box sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0], opacity: [0, 1, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: i * 0.2 }}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: GOLD_COLOR,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Roadmap Timeline */}
      <SectionWrapper sx={{ background: LIGHT_BG }}>
        <Grid container spacing={4} justifyContent="center">
          {roadmap.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card sx={{
                  p: 4,
                  border: `2px solid ${GOLD_COLOR}`,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  backgroundColor: LIGHT_GOLD_BG,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  "&:hover": { transform: "translateY(-5px)", boxShadow: `0 15px 40px rgba(184, 134, 11, 0.2)` },
                  position: 'relative',
                }}>
                  {/* Quarter Icon with sparkle */}
                  <Box sx={{ color: GOLD_COLOR, mb: 2, position: 'relative' }}>
                    {getQuarterIcon(item.quarter)}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: [0, 360], scale: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, delay: i * 0.2 }}
                        style={{
                          position: 'absolute',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: GOLD_COLOR,
                          top: `${Math.random() * 60}%`,
                          left: `${Math.random() * 60}%`,
                        }}
                      />
                    ))}
                  </Box>

                  <Typography variant="h6" fontWeight={800} sx={{ color: GOLD_COLOR }}>{item.quarter}</Typography>
                  <Typography mt={1} fontWeight={700} sx={{ color: "#333" }}>{item.title}</Typography>

                  <Box sx={{ p: 1, my: 2, background: "#fff", borderRadius: 2, border: `1px dashed ${GOLD_COLOR}` }}>
                    <Typography variant="subtitle1" fontWeight={700} color="#333">
                      <FaBullseye size={14} style={{ marginRight: '8px' }} /> Target: {item.target}
                    </Typography>
                    <Typography fontWeight={700} sx={{ background: GOLD_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      <FaRupeeSign size={14} style={{ marginRight: '8px' }} /> Savings: {item.savings}
                    </Typography>
                  </Box>

                  <Typography mt={2} fontWeight={700} color="#333">Key Milestones</Typography>
                  <ul style={{ textAlign: "left", paddingLeft: "20px", color: '#555' }}>
                    {item.milestones.map((m, i) => (
                      <li key={i} style={{ fontSize: "0.85rem", marginBottom: '4px' }}>
                        <FaCheckCircle size={12} color={GOLD_COLOR} style={{ marginRight: '8px' }} />{m}
                      </li>
                    ))}
                  </ul>

                  <Typography mt={2} fontWeight={700} color="#333">Focus Areas</Typography>
                  <ul style={{ textAlign: "left", paddingLeft: "20px", color: '#555' }}>
                    {item.focus.map((f, i) => (
                      <li key={i} style={{ fontSize: "0.85rem", marginBottom: '4px' }}>
                        <FaStar size={12} color={GOLD_COLOR} style={{ marginRight: '8px' }} />{f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper sx={{ background: LIGHT_GOLD_BG }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: GOLD_COLOR }}>
          Our Vision for 2027 and Beyond
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {vision.map((v, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{
                  p: 6,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  border: `2px solid ${GOLD_COLOR}`,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: 'transform 0.3s ease-in-out',
                  "&:hover": { transform: "translateY(-5px)", boxShadow: `0 15px 40px rgba(184, 134, 11, 0.2)` },
                  position: 'relative',
                }}>
                  <Box sx={{ color: GOLD_COLOR, mb: 1, position: 'relative' }}>
                    {v.icon}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: [0, 360], scale: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, delay: i * 0.2 }}
                        style={{
                          position: 'absolute',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: GOLD_COLOR,
                          top: `${Math.random() * 60}%`,
                          left: `${Math.random() * 60}%`,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="h3" fontWeight={800} sx={{ background: GOLD_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {v.value}
                  </Typography>
                  <Typography mt={1} fontSize="1.1rem" fontWeight={600} color="#333">{v.label}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  );
}
