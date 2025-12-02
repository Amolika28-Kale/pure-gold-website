// src/components/Footer.jsx
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography, Grid, IconButton } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ background: "#0d0d0d", color: "#fff", py: 6, mt: 6 }}>
      <Grid container spacing={4} px={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight={700}>
            PureGram
          </Typography>
          <Typography mt={2} sx={{ opacity: 0.8 }}>
            India’s most trusted digital gold savings platform.
            Secure, transparent, and rewarding.
          </Typography>
          <Box>
        {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
          <IconButton key={i} sx={{ color: "#fff", mx: 1 }}><Icon /></IconButton>
        ))}
      </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={700}>
            Quick Links
          </Typography>
          {[
            "Home",
            "How It Works",
            "Rewards",
            "Sales Partner",
            "Business Model",
            "Roadmap",
            "Contact",
            "FAQ",
          ].map((item) => (
            <Typography key={item} mt={1} sx={{ opacity: 0.8 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={700}>
            Contact
          </Typography>
          <Typography mt={1} sx={{ opacity: 0.8 }}>
            support@puregram.in
          </Typography>
          <Typography mt={1} sx={{ opacity: 0.8 }}>
            +91 98765 43210
          </Typography>
          <Typography mt={1} sx={{ opacity: 0.8 }}>
            Bandra-Kurla Complex, Mumbai
          </Typography>
        </Grid>
      </Grid>

      <Typography
        textAlign="center"
        mt={4}
        sx={{ opacity: 0.6, fontSize: "14px" }}
      >
        © {new Date().getFullYear()} PureGram. All Rights Reserved.
      </Typography>
    </Box>
  );
}
