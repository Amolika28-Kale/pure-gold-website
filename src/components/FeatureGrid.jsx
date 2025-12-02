// src/components/FeatureGrid.jsx
import { Grid, Card, Typography } from "@mui/material";

export default function FeatureGrid({ features }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {features.map((f, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card sx={{ textAlign: "center", p: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>{f.title}</Typography>
            <Typography sx={{ color: "text.secondary" }}>{f.desc}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
