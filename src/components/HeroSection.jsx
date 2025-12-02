import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection({
  title,
  subtitle,
  buttonText = "Get Started",
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
        background: "linear-gradient(135deg, #fff8e1, #f9c846)", // light gold gradient
        color: "#111", // dark text
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
            textShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            color: "#222",
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              fontSize: "18px",
              opacity: 0.9,
              mb: 4,
              textShadow: "1px 1px 4px rgba(0,0,0,0.08)",
              color: "#444",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {!hideButton && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 700,
                fontSize: "16px",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                background: "linear-gradient(90deg,#f9c846,#ffd700)", // gold button
                color: "#111",
              }}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
}
