import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ py: { xs: 6, md: 9 } }}>Footer Content </Box>
        <Divider/>
        <Box sx={{py:3,}}>
          <Typography variant="body2" color="text.secondary">
            © 2026 NEXORA. All rights reserved to @Aseel Abdalahalim
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
