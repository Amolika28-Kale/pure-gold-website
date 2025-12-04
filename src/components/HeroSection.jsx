import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const RICH_GOLD_GRADIENT = "linear-gradient(135deg, #b8860b, #ffd700)";
const DARK_BG = "#1a1a1a";
const DEEP_BLUE_BG = "#1e37a3";

export default function HeroSection({
  title,
  subtitle,
  buttonText = "Start Saving Gold",
  onButtonClick,
  hideButton = false,
}) {
  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "75vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 3, md: 8 },
        background: DEEP_BLUE_BG,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            mb: 2,
            textShadow: "0px 3px 10px rgba(0,0,0,0.15)",
            color: "#fff",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              mb: 4,
              textShadow: "1px 1px 4px rgba(0,0,0,0.08)",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 500,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {!hideButton && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onButtonClick}
              sx={{
                px: 6,
                py: 1.7,
                fontWeight: 700,
                fontSize: "1.1rem",
                borderRadius: 10,
                background: RICH_GOLD_GRADIENT,
                color: DARK_BG,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.4)",
                  opacity: 0.95,
                },
              }}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
}
