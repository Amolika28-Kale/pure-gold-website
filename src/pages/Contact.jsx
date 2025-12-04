import React from "react";
import { Grid, Typography, Card, TextField, Button, Box, IconButton, Divider } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const GOLD_COLOR = "#b8860b";
const GOLD_GRADIENT = "linear-gradient(90deg, #b8860b, #ffd700)";
const LIGHT_BG = "#f5f5f5";
const LIGHT_GOLD_BG = "#fffaf0";
const DARK_TEXT = "#333";

export default function ContactUs() {
  const contactItems = [
    { icon: FaEnvelope, title: "Email Us", detail: "support@puregram.in", sub: "For general inquiries" },
    { icon: FaPhone, title: "Call Us", detail: "+91 98765 43210", sub: "Mon-Sat, 9 AM - 6 PM IST" },
    { icon: FaMapMarkerAlt, title: "Office Address", detail: "Bandra-Kurla Complex, Mumbai, India", sub: "HQ, by appointment only" },
    { icon: FaClock, title: "Business Hours", detail: "Mon-Fri: 9:00 AM - 6:00 PM IST", sub: "Sat: 10:00 AM - 4:00 PM | Sun: Closed" },
  ];

  const TextFieldStyle = {
    '& .MuiOutlinedInput-root': { 
      '& fieldset': { borderColor: GOLD_COLOR }, 
      '&:hover fieldset': { borderColor: GOLD_COLOR }, 
      '&.Mui-focused fieldset': { borderColor: GOLD_COLOR } 
    }, 
    input: { color: DARK_TEXT },
    textarea: { color: DARK_TEXT },
    '& .MuiInputLabel-root': { color: '#555' }
  };

  return (
    <>
      {/* Contact Section */}
      <SectionWrapper sx={{ background: LIGHT_BG, py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" sx={{ color: DARK_TEXT }}>
          Connect with Our Dedicated Support Team
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={700} mb={3} sx={{ color: DARK_TEXT }}>Reach Out Directly</Typography>
            <Card sx={{ p: 4, background: LIGHT_GOLD_BG, borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <Grid container spacing={3}>
                {contactItems.map((item, i) => (
                  <Grid item xs={12} key={i}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box component={item.icon} sx={{ color: GOLD_COLOR, fontSize: '1.5rem', mr: 2 }} />
                        <Box>
                          <Typography variant="h6" fontWeight={700} sx={{ color: DARK_TEXT }}>{item.title}</Typography>
                          <Typography color="text.secondary">{item.detail}</Typography>
                          <Typography variant="caption" color="text.primary" sx={{ opacity: 0.7 }}>{item.sub}</Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ borderStyle: 'dashed', borderColor: '#ccc' }} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* Inquiry Form */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={700} mb={3} sx={{ color: DARK_TEXT }}>Send us a Message</Typography>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card sx={{ p: 4, background: "#fff", borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" variant="outlined" sx={TextFieldStyle} /></Grid>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="Email" variant="outlined" sx={TextFieldStyle} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Subject" variant="outlined" sx={TextFieldStyle} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Message" variant="outlined" multiline rows={4} sx={TextFieldStyle} /></Grid>
                  <Grid item xs={12} textAlign="center">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2, px: 6, py: 1.5, fontWeight: 700,
                        background: GOLD_GRADIENT, color: DARK_TEXT,
                        borderRadius: 10,
                        boxShadow: "0 10px 30px rgba(184, 134, 11, 0.5)",
                        "&:hover": { transform: "scale(1.03)" }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Typography variant="caption" display="block" mt={2} textAlign="center" sx={{ color: '#555' }}>
                We'll get back to you within 24 business hours.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Office Map */}
      <SectionWrapper sx={{ pt: 8, pb: 8 }}>
        <Typography variant="h4" fontWeight={700} mb={3} textAlign="center" sx={{ color: DARK_TEXT }}>Visit Our Office</Typography>
        <Typography variant="h6" color="text.secondary" mb={4} textAlign="center">Bandra-Kurla Complex, Mumbai — We'd love to meet you!</Typography>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Card sx={{ height: 400, overflow: "hidden", borderRadius: 4, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
            <iframe
              title="Mumbai Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.60447038144!2d72.8687701149007!3d19.035316087103217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9927909383b%3A0xc07474457e5b61e0!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1620987654321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Card>
        </motion.div>
      </SectionWrapper>

      {/* Social Links */}
      <SectionWrapper sx={{ textAlign: "center", background: LIGHT_GOLD_BG, py: 6 }}>
        <Typography variant="h5" fontWeight={700} mb={3} sx={{ color: GOLD_COLOR }}>Connect With Us</Typography>
        <Box>
          {[
            { Icon: FaFacebookF, label: "Facebook" },
            { Icon: FaTwitter, label: "Twitter" },
            { Icon: FaInstagram, label: "Instagram" },
            { Icon: FaLinkedinIn, label: "LinkedIn" },
          ].map((social, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} style={{ display: 'inline-block', mx: 1 }}>
              <IconButton 
                sx={{ 
                  mx: 1, 
                  color: GOLD_COLOR, 
                  border: `2px solid ${GOLD_COLOR}`,
                  transition: '0.3s',
                  '&:hover': { color: "#fff", background: GOLD_COLOR } 
                }}
              >
                <social.Icon size={24} />
              </IconButton>
            </motion.div>
          ))}
        </Box>
      </SectionWrapper>
    </>
  );
}
