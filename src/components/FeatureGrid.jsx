// src/components/FeatureGrid.jsx (Revised)
import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// --- Style Constants ---
const GOLD_COLOR = "#b8860b"; // Darker, more luxurious gold
const LIGHT_BG = "#f5f5f5";

// Framer Motion Variants for Staggered Animation
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation
    },
  },
};


export default function FeatureGrid({ features }) {
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((f, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <motion.div variants={cardVariants}>
              <Card 
                sx={{ 
                  textAlign: "center", 
                  p: 3, 
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease-in-out',
                  border: `2px solid ${LIGHT_BG}`,
                  "&:hover": {
                    boxShadow: `0 10px 30px rgba(184, 134, 11, 0.3)`,
                    borderColor: GOLD_COLOR,
                  }
                }}
              >
                {/* 1. Icon Slot - Displays the icon passed in the feature object */}
                {f.icon && (
                  <Box sx={{ color: GOLD_COLOR, fontSize: "2.5rem", mb: 2 }}>
                    {f.icon}
                  </Box>
                )}
                
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>{f.title}</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: '0.95rem' }}>{f.desc}</Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}