import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

// --- Premium Style Constants (Matching other components) ---
const RICH_GOLD_GRADIENT = "linear-gradient(135deg, #b8860b, #ffd700)";
const DEEP_BLUE_BG = "#1e37a3"; // The deep blue color from the website
const DARK_BG = "#1a1a1a";
const GOLD_ACCENT = "#ffd700"; // Brighter gold for better visibility on blue

export default function HeroSection({
    title,
    subtitle,
    buttonText = "Start Saving Gold", // Changed default text to match the product
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
                
                // --- MODIFIED STYLES ---
                background: DEEP_BLUE_BG, // Use deep blue background
                color: "#fff", // Change text color to white
                // ------------------------
                
                position: "relative",
                overflow: "hidden",
                // Removed borderBottom style as it conflicts with the full blue screen
                // borderBottom: `2px solid ${RICH_GOLD_GRADIENT.split(',')[1]}`,
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
                        // Stronger shadow for depth (subtle on dark background)
                        textShadow: "0px 3px 10px rgba(0,0,0,0.15)",
                        color: "#fff", // Ensure title is white
                        fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
                    }}
                >
                    {title}
                </Typography>

                {subtitle && (
                    <Typography
                        variant="h6" // Use h6 variant for strong subtitle
                        sx={{
                            opacity: 0.9,
                            mb: 4,
                            textShadow: "1px 1px 4px rgba(0,0,0,0.08)",
                            color: "rgba(255, 255, 255, 0.9)", // Light grey/white for subtitle
                            fontWeight: 500,
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}

                {!hideButton && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="contained"
                            // Using the explicit dark color on the button for strong text contrast
                            sx={{
                                px: 6,
                                py: 1.7,
                                fontWeight: 700,
                                fontSize: "1.1rem",
                                borderRadius: 10, // Highly rounded button
                                // Rich gold gradient for the main CTA
                                background: RICH_GOLD_GRADIENT,
                                color: DARK_BG,
                                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)", // Deep shadow
                                transition: 'all 0.3s ease-in-out',
                                "&:hover": {
                                    boxShadow: "0px 15px 40px rgba(0,0,0,0.4)",
                                    opacity: 0.95
                                }
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