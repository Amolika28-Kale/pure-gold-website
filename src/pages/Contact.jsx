import React from "react";
import { Grid, Typography, Card, TextField, Button, Box, IconButton } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function ContactUs() {
  return (
    <>
      <SectionWrapper>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Connect with Our Dedicated Support Team
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card sx={{ p: 4, textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight={700} mb={2}>Email</Typography>
                <Typography color="text.secondary">support@puregram.com</Typography>

                <Typography variant="h6" fontWeight={700} mt={3} mb={2}>Phone</Typography>
                <Typography color="text.secondary">+91 98765 43210</Typography>

                <Typography variant="h6" fontWeight={700} mt={3} mb={2}>Address</Typography>
                <Typography color="text.secondary">Bandra-Kurla Complex, Mumbai, India</Typography>

                <Typography variant="h6" fontWeight={700} mt={3} mb={2}>Hours</Typography>
                <Typography color="text.secondary">Mon-Fri: 9 AM - 6 PM</Typography>
              </Card>
            </motion.div>
          </Grid>

          {/* Inquiry Form */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card sx={{ p: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <Button variant="contained" color="primary" sx={{ mt: 2, px: 5, py: 1.5 }}>Send Message</Button>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map */}
        <SectionWrapper sx={{ mt: 8 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Card sx={{ height: 400, overflow: "hidden" }}>
              <iframe
                title="Mumbai Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.723137419789!2d72.876354!3d19.061846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63e8f0bfffd%3A0xcef2c61e6d2e7b9b!2sBandra%20Kurla%20Complex%2C%20Mumbai%2C%20Maharashtra%20400051!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Social Links */}
        <SectionWrapper sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" fontWeight={700} mb={3}>Stay Connected & Informed</Typography>
          <Box>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Facebook />
            </IconButton>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Twitter />
            </IconButton>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Instagram />
            </IconButton>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </SectionWrapper>
      </SectionWrapper>
    </>
  );
}
