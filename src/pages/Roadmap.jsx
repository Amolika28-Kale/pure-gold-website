import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Typography, Grid, Card, Box } from "@mui/material";
import { motion } from "framer-motion";

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
    { label: "Active Users", value: "1 Million" },
    { label: "Total Savings", value: "₹5,000 Cr" },
    { label: "Sales Partners", value: "50,000+" },
  ];

  return (
    <>
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          PureGram Roadmap: Our Journey to Becoming India's #1 Digital Gold Platform
        </Typography>

        {/* Horizontal Timeline */}
        <Box sx={{ position: "relative", mb: 8 }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "4px",
              backgroundColor: "#d3a84f",
              transform: "translateY(-50%)",
            }}
          />

          <Grid container spacing={6} justifyContent="space-between">
            {roadmap.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  {/* Node Circle */}
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#d3a84f",
                      borderRadius: "50%",
                      mx: "auto",
                      mb: 2,
                    }}
                  />

                  <Card
                    sx={{
                      p: 3,
                      border: "2px solid #d3a84f",
                      borderRadius: "16px",
                      textAlign: "center",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Typography variant="h6" color="primary" fontWeight={700}>
                      {item.quarter}
                    </Typography>

                    <Typography mt={1} fontWeight={700}>
                      {item.title}
                    </Typography>

                    <Typography mt={1} color="text.secondary">
                      Target: {item.target}
                    </Typography>

                    <Typography mt={1} fontWeight={600}>
                      Savings Target: {item.savings}
                    </Typography>

                    <Typography mt={2} fontWeight={600} color="primary">
                      Key Milestones
                    </Typography>
                    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                      {item.milestones.map((m, i) => (
                        <li key={i} style={{ fontSize: "0.85rem" }}>
                          {m}
                        </li>
                      ))}
                    </ul>

                    <Typography mt={2} fontWeight={600} color="primary">
                      Focus Areas
                    </Typography>
                    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                      {item.focus.map((f, i) => (
                        <li key={i} style={{ fontSize: "0.85rem" }}>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Vision for 2027 and Beyond */}
        <SectionWrapper>
          <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
            Our Vision for 2027 and Beyond
          </Typography>

          <Card
            sx={{
              p: 6,
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              background: "linear-gradient(135deg, #1e37a3, #162a7a)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {vision.map((v, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <Typography variant="h5" fontWeight={700}>
                      {v.value}
                    </Typography>
                    <Typography mt={1} fontSize="1.1rem">
                      {v.label}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Card>
        </SectionWrapper>
      </SectionWrapper>
    </>
  );
}
