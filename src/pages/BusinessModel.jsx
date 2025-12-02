import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Grid, Card, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function BusinessModel() {
  const marketData = [
    { label: "Users", value: "800M+" },
    { label: "Gold Imports", value: "₹3.5L Cr" },
    { label: "CAGR", value: "45%" },
    { label: "Target Age", value: "18-45" },
  ];

  const revenueStreams = [
    { label: "Gold Margin", value: "40%" },
    { label: "Breakage Revenue", value: "25%" },
    { label: "Interest on Wallet Balance", value: "20%" },
    { label: "Affiliate Products", value: "15%" },
  ];

  const competitiveAdv = [
    "Unique Rewards Model",
    "Micro-Savings Focus",
    "Sales Partner Network",
  ];

  const unitEconomics = [
    { label: "Average Customer LTV", value: "₹5,000 - ₹8,000" },
    { label: "Revenue per Customer", value: "₹7,000" },
    { label: "Cost per Customer", value: "₹1,000" },
    { label: "Net Profit per Customer", value: "₹6,000" },
    { label: "Profit Margin", value: "85%" },
  ];

  const quarterlyPlan = [
    {
      quarter: "Q1",
      title: "Foundation & Launch",
      target: "1,500 customers",
      savings: "₹15 Cr",
      focus: [
        "Product polishing and testing",
        "Marketing campaign launch",
        "Onboard first batch of sales partners",
        "Build brand awareness"
      ]
    },
    {
      quarter: "Q2",
      title: "Growth Acceleration",
      target: "5,000 customers",
      savings: "₹40 Cr",
      focus: [
        "Scale customer acquisition",
        "Expand sales partner network",
        "Launch referral program",
        "Strategic partnerships"
      ]
    },
    {
      quarter: "Q3",
      title: "Market Expansion",
      target: "8,000 customers",
      savings: "₹70 Cr",
      focus: [
        "Geographic expansion to tier-2 cities",
        "Product feature enhancements",
        "Corporate tie-ups",
        "Community building"
      ]
    },
    {
      quarter: "Q4",
      title: "Scale & Optimize",
      target: "10,000 customers",
      savings: "₹100 Cr",
      focus: [
        "Achieve profitability milestone",
        "Optimize operations",
        "Prepare for Series A",
        "Launch new product features"
      ]
    },
  ];

  return (
    <>
      {/* Market Opportunity */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Business Model: Sustainable Growth & Massive Market Penetration
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {marketData.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 4, textAlign: "center", boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}>
                  <Typography variant="h4" color="primary" fontWeight={700}>{item.value}</Typography>
                  <Typography>{item.label}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Revenue Sources */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Core Revenue Streams: Ensuring Long-Term Profitability
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {revenueStreams.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 3, textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={700}>{item.label}</Typography>
                  <Typography color="primary" fontWeight={700}>{item.value}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* First Year Business Plan Timeline */}
      <SectionWrapper sx={{ position: "relative" }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          First Year Business Plan Timeline
        </Typography>

        <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6, px: 2 }}>
          {/* Timeline Line */}
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "4px",
            bgcolor: "#d3a84f",
            transform: "translateY(-50%)",
            zIndex: 0
          }} />

          {quarterlyPlan.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }} style={{ zIndex: 1, width: "22%" }}>
              <Card sx={{ p: 3, textAlign: "center", border: "2px solid #d3a84f", position: "relative" }}>
                <Box sx={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  bgcolor: "#d3a84f"
                }} />
                <Typography variant="h6" fontWeight={700}>{q.quarter}</Typography>
                <Typography fontWeight={600} mb={1}>{q.title}</Typography>
                <Typography variant="body2"><strong>Target:</strong> {q.target}</Typography>
                <Typography variant="body2" mb={1}><strong>Savings:</strong> {q.savings}</Typography>
                <ul style={{ listStyle: "disc", paddingLeft: "18px", textAlign: "left" }}>
                  {q.focus.map((f, j) => <li key={j} style={{ fontSize: "0.85rem" }}>{f}</li>)}
                </ul>
              </Card>
            </motion.div>
          ))}
        </Box>
      </SectionWrapper>

      {/* Competitive Advantage */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Strategic Advantage: The PureGram Difference
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {competitiveAdv.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{ p: 3, textAlign: "center", border: "2px solid #d3a84f" }}>
                  <Typography variant="h6" fontWeight={700}>{item}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Unit Economics */}
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Positive Unit Economics at Scale
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {unitEconomics.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }}>
                <Card sx={{
                  p: 4,
                  textAlign: "center",
                  backgroundColor: i % 2 === 0 ? "#e0f7fa" : "#dcedc8"
                }}>
                  <Typography variant="h6" fontWeight={700}>{item.label}</Typography>
                  <Typography fontWeight={700}>{item.value}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  );
}
