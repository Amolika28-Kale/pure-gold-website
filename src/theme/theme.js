// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2746d1",
      dark: "#1e37a3",
      light: "#5c73ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d3a84f",
      dark: "#b48a34",
      light: "#e6c779",
      contrastText: "#000",
    },
    background: {
      default: "#F5F7FF",
      paper: "#fff",
    },
  },

  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", sans-serif',
    h2: { fontWeight: 800, letterSpacing: "-1px", textAlign: "center" },
    h3: { fontWeight: 700, letterSpacing: "-0.5px", textAlign: "center" },
    h4: { fontWeight: 700, textAlign: "center" },
    h5: { fontWeight: 700, textAlign: "center" },
    body1: { fontSize: "1.05rem", textAlign: "center" },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          boxShadow: "0px 3px 12px rgba(0,0,0,0.15)",
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "16px",
          transition: "0.4s ease",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.08)",
          "&:hover": {
            transform: "translateY(-7px)",
            boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "0.3s",
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
