// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme, Container, IconButton } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaGem } from 'react-icons/fa';

// --- Premium Style Constants ---
const GOLD_COLOR = "#b8860b";
const DARK_TEXT = "#1a1a1a";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const WHITE_BG = "#fff";
const BLUE_ACCENT = "#1e37a3"; // Used for the "Start Saving" button background in Figma/Screenshots

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Rewards", to: "/rewards" },
    { label: "Sales Partner", to: "/sales-partner" },
    { label: "Business Model", to: "/business-model" },
    { label: "Roadmap", to: "/roadmap" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
];

// Custom Nav Link Component matching the Figma card/pill look
const NavLinkCard = ({ item, pathname }) => {
    const isActive = pathname === item.to;
    return (
        <Button
            key={item.to}
            component={RouterLink}
            to={item.to}
            sx={{
                py: 0.8,
                px: 1.5,
                borderRadius: 2,
                margin: 0,
                // Background changes if active (like 'Business Model' in image_1b3e22.png)
                backgroundColor: isActive ? 'rgba(184, 134, 11, 0.1)' : 'transparent', 
                color: DARK_TEXT,
                fontWeight: isActive ? 700 : 500,
                textTransform: 'none',
                transition: '0.2s ease',
                '&:hover': {
                    backgroundColor: 'rgba(184, 134, 11, 0.05)',
                    color: GOLD_COLOR,
                },
                boxShadow: isActive ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
            }}
        >
            {item.label}
        </Button>
    );
};


export default function Navbar() {
    const { pathname } = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    // Removed mobile drawer logic for brevity, focusing on primary desktop UI match

    return (
        <AppBar 
            component="nav" 
            position="sticky" 
            sx={{ 
                backgroundColor: WHITE_BG, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minHeight: 70 
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ py: 1.5, minHeight: 70, justifyContent: 'space-between' }}>
                    
                    {/* Logo Area */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                width: 42, height: 42, borderRadius: "50%",
                                background: GOLD_GRADIENT,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                mr: 1.2, boxShadow: "0 4px 10px rgba(184, 134, 11, 0.3)",
                                transition: "0.3s", "&:hover": { transform: "scale(1.08)" },
                                textDecoration: 'none'
                            }}
                        >
                            <FaGem color={DARK_TEXT} size={20} />
                        </Box>
                        <Typography 
                            component={RouterLink} 
                            to="/" 
                            sx={{ 
                                textDecoration: "none", 
                                color: DARK_TEXT, 
                                fontWeight: 700, 
                                fontSize: '1.2rem' 
                            }}
                        >
                            Pure<Box component="span" sx={{ color: GOLD_COLOR }}>Gram</Box>
                        </Typography>
                    </Box>

                    {/* Desktop Navigation Links */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 0.5, mx: 2 }}>
                            {navItems.map((n) => (
                                <NavLinkCard key={n.to} item={n} pathname={pathname} />
                            ))}
                        </Box>
                    )}

                    {/* CTA Buttons */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button 
                            variant="outlined" 
                            component={RouterLink} 
                            to="/login"
                            sx={{
                                borderColor: DARK_TEXT, color: DARK_TEXT, fontWeight: 700, borderRadius: 8,
                                '&:hover': { borderColor: DARK_TEXT, backgroundColor: 'rgba(0, 0, 0, 0.05)' },
                                py: 1, px: 2
                            }}
                        >
                            Login
                        </Button>
                        <Button 
                            variant="contained" 
                            component={RouterLink} 
                            to="/rewards" 
                            sx={{ 
                                background: BLUE_ACCENT, // Blue background matches Figma CTA
                                color: WHITE_BG, fontWeight: 700, borderRadius: 8,
                                boxShadow: '0 4px 10px rgba(30, 55, 163, 0.5)',
                                '&:hover': { opacity: 0.9, background: BLUE_ACCENT }
                            }}
                        >
                            Start Saving
                        </Button>
                    </Box>

                    {/* Mobile Menu Button (Optional - assuming mobile functionality is handled outside this component) */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            // onClick={handleDrawerToggle} // Placeholder toggle
                            sx={{ color: DARK_TEXT, ml: 'auto' }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}