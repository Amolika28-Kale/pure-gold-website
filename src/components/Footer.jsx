// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Grid, IconButton, Container, List, ListItem, ListItemText, Divider } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGem, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

// --- Premium Style Constants ---
const GOLD_COLOR = "#b8860b";
const DARK_TEXT = "#1a1a1a"; // Changed from DARK_BG to represent the dark color used for text/accents
const LIGHT_BG = "#fff"; // White background to match Navbar

export default function Footer() {

    const quickLinks = [
        { label: "About Us", to: "/about" },
        { label: "How It Works", to: "/how-it-works" },
        { label: "Rewards Program", to: "/rewards" },
        { label: "Become a Partner", to: "/sales-partner" },
    ];

    const resources = [
        { label: "Business Model", to: "/business-model" },
        { label: "Roadmap", to: "/roadmap" },
        { label: "FAQ", to: "/faq" },
        { label: "Contact Us", to: "/contact" },
    ];

    return (
        <Box sx={{ background: LIGHT_BG, color: DARK_TEXT, py: 8, borderTop: `1px solid #eee` }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Column 1: Logo & Introduction */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <FaGem color={GOLD_COLOR} size={30} style={{ marginRight: '10px' }} />
                            <Typography variant="h5" fontWeight={800} sx={{ color: DARK_TEXT }}>
                                Pure<Box component="span" sx={{ color: GOLD_COLOR }}>Gram</Box>
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontWeight={700} sx={{ opacity: 1, color: GOLD_COLOR, mb: 1.5 }}>
                            India's Smartest Digital Gold Savings Platform with Rewards
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, color: DARK_TEXT }}>
                            India’s most trusted digital gold savings platform. Secure, transparent, and rewarding.
                        </Typography>
                        <Box mt={3}>
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <IconButton key={i} sx={{ 
                                    color: DARK_TEXT, // Dark icons on white background
                                    mx: 0.5,
                                    transition: 'color 0.3s',
                                    '&:hover': { color: GOLD_COLOR } 
                                }}>
                                    <Icon size={20} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 2: Quick Links */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: DARK_TEXT }}>
                            Quick Links
                        </Typography>
                        <List disablePadding>
                            {quickLinks.map((item, i) => (
                                <ListItem key={i} disablePadding sx={{ py: 0.2 }}>
                                    <ListItemText 
                                        component={RouterLink} 
                                        to={item.to} 
                                        primary={item.label} 
                                        sx={{ 
                                            textDecoration: 'none',
                                            '& .MuiTypography-root': { 
                                                fontSize: '0.9rem', 
                                                color: DARK_TEXT, // Dark link text
                                                opacity: 0.8,
                                                transition: 'color 0.2s',
                                                '&:hover': { color: GOLD_COLOR } // Gold hover accent
                                            }
                                        }} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    
                    {/* Column 3: Resources */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: DARK_TEXT }}>
                            Resources
                        </Typography>
                        <List disablePadding>
                            {resources.map((item, i) => (
                                <ListItem key={i} disablePadding sx={{ py: 0.2 }}>
                                    <ListItemText 
                                        component={RouterLink} 
                                        to={item.to} 
                                        primary={item.label} 
                                        sx={{ 
                                            textDecoration: 'none',
                                            '& .MuiTypography-root': { 
                                                fontSize: '0.9rem', 
                                                color: DARK_TEXT, // Dark link text
                                                opacity: 0.8,
                                                transition: 'color 0.2s',
                                                '&:hover': { color: GOLD_COLOR } 
                                            }
                                        }} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Column 4: Contact Info */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: DARK_TEXT }}>
                            Contact
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                            <FaEnvelope color={GOLD_COLOR} style={{ marginRight: '10px' }} size={20} />
                            <Typography variant="body2" sx={{ opacity: 0.9, color: DARK_TEXT }}>support@puregram.in</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                            <FaPhone color={GOLD_COLOR} style={{ marginRight: '10px' }} size={20} />
                            <Typography variant="body2" sx={{ opacity: 0.9, color: DARK_TEXT }}>+91 9876543210</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                            <FaMapMarkerAlt color={GOLD_COLOR} style={{ marginRight: '10px' }} size={20} />
                            <Typography variant="body2" sx={{ opacity: 0.9, color: DARK_TEXT }}>Mumbai, Maharashtra, India</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: '#ccc' }} />

                {/* Bottom Bar: Copyright & Legal Links */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    flexWrap: 'wrap',
                    pt: 1
                }}>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: { xs: 1, md: 0 }, color: DARK_TEXT }}>
                        © {new Date().getFullYear()} PureGram. All rights reserved.
                    </Typography>
                    <Box>
                        <Typography 
                            component={RouterLink} 
                            to="/privacy-policy" 
                            sx={{ color: DARK_TEXT, opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem', mx: 1, '&:hover': { color: GOLD_COLOR } }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography 
                            component={RouterLink} 
                            to="/terms-of-service" 
                            sx={{ color: DARK_TEXT, opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem', mx: 1, '&:hover': { color: GOLD_COLOR } }}
                        >
                            Terms of Service
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}