import React from "react";
import { Box, Typography } from "@mui/material";

export default function SectionHeading({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textShadow: "1px 1px 6px rgba(0,0,0,0.1)",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mt: 1, fontSize: { xs: "0.95rem", md: "1rem" } }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
