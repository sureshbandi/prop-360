import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import "./Header.scss";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{bgcolor: "black"}} >
        <Toolbar>
          <div style={{display: "flex", cursor: "pointer"}} onClick={() => window.location.href = "/"}>
          <ReviewsRoundedIcon htmlColor="red" sx={{ display: { xs: "none", md: "flex", paddingTop: "5px"}, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              paddingLeft: "10px",
              alignSelf: "auto"
            }}
          >
          Property Reviews
          </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
