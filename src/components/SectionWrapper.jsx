// src/components/SectionWrapper.jsx (Minor Refinement)
import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, sx = {} }) {
  return (
    // The Box is wrapped in motion.div to provide the scroll animation
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 }, py: 8, ...sx }}>
        {children}
      </Box>
    </motion.div>
  );
}