// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2746d1",
      dark: "#1e37a3",
      light: "#5c73ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d3a84f", // gold
      dark: "#b48a34",
      light: "#e6c779",
      contrastText: "#000",
    },
    background: {
      default: "#F5F7FF",
      paper: "#ffffff",
    },
    gold: {
      main: "#f7d98a",
      gradient: "linear-gradient(90deg, #ffdd88, #e6c16a, #d3a84f)",
    },
  },

  // ★ PREMIUM TYPOGRAPHY
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", sans-serif',

    h1: {
      fontWeight: 800,
      fontSize: "3.2rem",
      letterSpacing: "-1.5px",
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },

    h2: {
      fontWeight: 800,
      fontSize: "2.6rem",
      letterSpacing: "-1px",
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },

    h3: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.5px",
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },

    h4: {
      fontWeight: 700,
      fontSize: "1.6rem",
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },

    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
      textAlign: "center",
    },

    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.65,
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },

  // ★ Rounded UI
  shape: {
    borderRadius: 16,
  },

  components: {

    // 🌟 CARD HOVER ANIMATION
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: "20px",
          transition: "0.4s ease",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.18)",
          },
        },
      },
    },

    // 🌟 PAPER SMOOTH HOVER
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          transition: "0.35s ease",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.08)",
          "&:hover": {
            boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },

  
});

export default theme;
