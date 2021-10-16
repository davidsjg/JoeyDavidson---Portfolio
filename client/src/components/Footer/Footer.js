import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: "lightgrey" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2019 Gistia
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
