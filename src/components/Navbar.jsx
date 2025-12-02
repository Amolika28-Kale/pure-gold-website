import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const nav = [
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

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 2 }}>
        <Box
  sx={{
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #D4AF37, #B8860B)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mr: 1.2,
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": { transform: "scale(1.08)" },
  }}
>
  <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>
    G
  </Typography>
</Box>
            <Box sx={{ mr: 4 }}>
            <Typography component={RouterLink} to="/" sx={{ textDecoration: "none", color: "text.primary", fontWeight: 700 }}>
              PureGram
            </Typography>
          </Box>

          <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
            {nav.map((n) => (
              <Button
                key={n.to}
                component={RouterLink}
                to={n.to}
                color={pathname === n.to ? "primary" : "inherit"}
                sx={{
                  color: pathname === n.to ? "primary.main" : "text.secondary",
                }}
              >
                {n.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
            <Button variant="outlined" component={RouterLink} to="/contact">Login</Button>
            <Button variant="contained" component={RouterLink} to="/rewards" sx={{ background: "linear-gradient(90deg,#2746d1,#d3a84f)" }}>
              Start Saving
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
