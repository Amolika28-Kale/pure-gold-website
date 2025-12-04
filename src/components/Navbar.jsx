// src/components/Navbar.jsx
import React, { useState } from "react"; // 1. Import useState
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Box, 
    useMediaQuery, 
    useTheme, 
    Container, 
    IconButton,
    Drawer, // 2. Import Drawer
    List, // 3. Import List for mobile links
    ListItem, // 4. Import ListItem
    ListItemButton,
    ListItemText 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // 5. Import Menu Icon
import CloseIcon from "@mui/icons-material/Close"; // 6. Optional: Import Close Icon for the drawer
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaGem } from 'react-icons/fa';

// --- Premium Style Constants ---
const GOLD_COLOR = "#b8860b";
const DARK_TEXT = "#1a1a1a";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)";
const WHITE_BG = "#fff";
const BLUE_ACCENT = "#1e37a3";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Rewards", to: "/rewards" },
    { label: "Sales Partner", to: "/sales-partner" },
    { label: "Business Model", to: "/business-model" },
    { label: "Roadmap", "to": "/roadmap" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
];

const NavLinkCard = ({ item, pathname }) => {
    const isActive = pathname === item.to;
    return (
        <Button
            key={item.to}
            component={RouterLink}
            to={item.to}
            variant="navbar"
            sx={{
                backgroundColor: isActive ? 'rgba(184, 134, 11, 0.12)' : 'transparent', 
                color: DARK_TEXT,
                fontWeight: isActive ? 700 : 500,
                textTransform: 'none',
                px: 2, py: 1,
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: 'rgba(184, 134, 11, 0.08)',
                },
            }}
        >
            {item.label}
        </Button>
    );
};


export default function Navbar() {
    const { pathname } = useLocation();
    const theme = useTheme();
    // Use 'md' or 'sm' for mobile breakpoint if 'lg' is too big
    const isMobile = useMediaQuery(theme.breakpoints.down('lg')); 

    // Mobile state management
    const [mobileOpen, setMobileOpen] = useState(false); // 7. Mobile Open State

    const handleDrawerToggle = () => { // 8. Toggle Function
        setMobileOpen(!mobileOpen);
    };

    // 9. Mobile Drawer Content
    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ 
                textAlign: 'center', 
                backgroundColor: WHITE_BG, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Drawer Header/Close Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon sx={{ color: DARK_TEXT }} />
                </IconButton>
            </Box>

            {/* Logo in Drawer */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    py: 2 
                }}
            >
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        width: 42, height: 42, borderRadius: "50%",
                        background: GOLD_GRADIENT,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        mr: 1.2, boxShadow: "0 4px 10px rgba(184, 134, 11, 0.3)",
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

            {/* Mobile Nav Links */}
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.to} disablePadding>
                        <ListItemButton 
                            component={RouterLink} 
                            to={item.to}
                            sx={{ 
                                textAlign: 'center', 
                                backgroundColor: pathname === item.to ? 'rgba(184, 134, 11, 0.1)' : 'transparent',
                                '&:hover': { backgroundColor: 'rgba(184, 134, 11, 0.05)' }
                            }}
                        >
                            <ListItemText 
                                primary={item.label} 
                                sx={{ 
                                    color: DARK_TEXT, 
                                    fontWeight: pathname === item.to ? 700 : 500 
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            
            {/* Mobile CTA Buttons */}
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                 <Button 
                    variant="outlined" 
                    component={RouterLink} 
                    to="/login"
                   
                >
                    Login
                </Button>
                <Button 
                    variant="contained" 
                    component={RouterLink} 
                    to="/rewards" 
                    sx={{ 
                        background: BLUE_ACCENT,
                        color: WHITE_BG, fontWeight: 700, borderRadius: 8,
                        boxShadow: '0 4px 10px rgba(30, 55, 163, 0.5)',
                        '&:hover': { opacity: 0.9, background: BLUE_ACCENT }
                    }}
                >
                    Start Saving
                </Button>
            </Box>
        </Box>
    );


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

                    {/* Desktop Navigation Links (Hidden on mobile) */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 0.5, mx: 2 }}>
                            {navItems.map((n) => (
                                <NavLinkCard key={n.to} item={n} pathname={pathname} />
                            ))}
                        </Box>
                    )}

                    {/* CTA Buttons (Hidden on mobile when hamburger is visible, but kept on desktop) */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button 
                                variant="outlined" 
                                component={RouterLink} 
                                to="/login"
                             
                            >
                                Login
                            </Button>
                            <Button 
                                variant="contained" 
                                component={RouterLink} 
                                to="/rewards" 
                                sx={{ 
                                    background: BLUE_ACCENT,
                                    color: WHITE_BG, fontWeight: 700, borderRadius: 8,
                                    boxShadow: '0 4px 10px rgba(30, 55, 163, 0.5)',
                                    '&:hover': { opacity: 0.9, background: BLUE_ACCENT }
                                }}
                            >
                                Start Saving
                            </Button>
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        // Replace 'ml: auto' with a separate Box for consistent spacing if needed, 
                        // but 'ml: auto' works fine to push it to the right
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end" // Align to the end of the Toolbar
                            onClick={handleDrawerToggle} // 10. Attach toggle function
                            sx={{ color: DARK_TEXT }}
                        >
                            <MenuIcon /> {/* 11. Use the MenuIcon */}
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            {/* 12. The Mobile Navigation Drawer Component */}
            <nav>
                <Drawer
                    // Use 'temporary' for a slide-in effect
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better performance on mobile
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' }, // Only show on mobile breakpoints
                        '& .MuiDrawer-paper': { 
                            boxSizing: 'border-box', 
                            width: 240, 
                            // Add extra padding/min-width for better look if needed
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </AppBar>
    );
}