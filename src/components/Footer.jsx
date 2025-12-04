// src/components/Footer.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGem,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

// --- Premium Style Constants ---
const GOLD_COLOR = "#b8860b";
const DARK_TEXT = "#1a1a1a";
const LIGHT_BG = "#fff";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Rewards Program", to: "/rewards" },
    { label: "Become a Partner", to: "/sales-partner" }
  ];

  const resources = [
    { label: "Business Model", to: "/business-model" },
    { label: "Roadmap", to: "/roadmap" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Box sx={{ background: LIGHT_BG, color: DARK_TEXT, py: { xs: 5, md: 8 }, borderTop: `1px solid #eee` }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* Column 1: Logo & Intro */}
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <FaGem color={GOLD_COLOR} size={30} style={{ marginRight: "10px" }} />
                <Typography variant="h5" fontWeight={800}>
                  Pure<Box component="span" sx={{ color: GOLD_COLOR }}>Gram</Box>
                </Typography>
              </Box>

              <Typography
                variant="body1"
                fontWeight={700}
                sx={{ color: GOLD_COLOR, mb: 1.5, textAlign: { xs: "left", md: "left" } }}
              >
                India's Smartest Digital Gold Savings Platform with Rewards
              </Typography>

              <Typography
                variant="body2"
                sx={{ opacity: 0.8, color: DARK_TEXT, maxWidth: 300, textAlign: "left" }}
              >
                India’s most trusted digital gold savings platform. Secure, transparent, and rewarding.
              </Typography>

              <Box mt={3} textAlign={{ xs: "left", sm: "left", md: "left" }}>
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: DARK_TEXT,
                      mx: 0.5,
                      transition: "0.3s",
                      "&:hover": { color: GOLD_COLOR }
                    }}
                  >
                    <Icon size={20} />
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              <List disablePadding>
                {quickLinks.map((item, i) => (
                  <ListItem key={i} disablePadding sx={{ py: 0.3 }}>
                    <ListItemText
                      component={RouterLink}
                      to={item.to}
                      primary={item.label}
                      sx={{
                        textDecoration: "none",
                        "& .MuiTypography-root": {
                          fontSize: "0.9rem",
                          color: DARK_TEXT,
                          opacity: 0.8,
                          "&:hover": { color: GOLD_COLOR }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Column 3: Resources */}
            <Grid item xs={6} sm={3} md={3}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Resources
              </Typography>
              <List disablePadding>
                {resources.map((item, i) => (
                  <ListItem key={i} disablePadding sx={{ py: 0.3 }}>
                    <ListItemText
                      component={RouterLink}
                      to={item.to}
                      primary={item.label}
                      sx={{
                        textDecoration: "none",
                        "& .MuiTypography-root": {
                          fontSize: "0.9rem",
                          color: DARK_TEXT,
                          opacity: 0.8,
                          "&:hover": { color: GOLD_COLOR }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Column 4: Contact Info */}
            <Grid item xs={12} sm={12} md={3}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Contact
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <FaEnvelope color={GOLD_COLOR} size={20} style={{ marginRight: "10px" }} />
                <Typography variant="body2">support@puregram.in</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <FaPhone color={GOLD_COLOR} size={20} style={{ marginRight: "10px" }} />
                <Typography variant="body2">+91 9876543210</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <FaMapMarkerAlt color={GOLD_COLOR} size={20} style={{ marginRight: "10px" }} />
                <Typography variant="body2">Mumbai, Maharashtra, India</Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "#ccc" }} />

          {/* Bottom Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              textAlign: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 2
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} PureGram. All rights reserved.
            </Typography>

            <Box>
              <Typography
                component={RouterLink}
                to="/privacy-policy"
                sx={{
                  color: DARK_TEXT,
                  opacity: 0.7,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  mx: 1,
                  "&:hover": { color: GOLD_COLOR }
                }}
              >
                Privacy Policy
              </Typography>

              <Typography
                component={RouterLink}
                to="/terms-of-service"
                sx={{
                  color: DARK_TEXT,
                  opacity: 0.7,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  mx: 1,
                  "&:hover": { color: GOLD_COLOR }
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
