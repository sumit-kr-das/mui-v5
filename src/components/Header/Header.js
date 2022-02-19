import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

// const img =
  // "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail-2.png&w=750&q=100";

const Header = () => {
  return (
    <Container maxWidth="xl" sx={{ background: "#CEE7DB", display: "flex",overflow: "hidden", flexDirection: {xs:"column", lg:"row", justifyContent:"center", alignItems:"center"} }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: "1rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Dont miss this opportunity at a special discount just for this week.
        </Typography>
        <Typography sx={{ marginTop: "1rem" }}>
          Make your online shop easier with our mobile app
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src="/img/header-img.png" alt="header-img" sx={{objectFit: "contain"}} />
      </Box>
    </Container>
  );
};

export default Header;
