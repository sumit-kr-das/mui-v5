import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const DesktopCategories = () => {
  return (
    <Grid container spacing={2} justify="space-between" alignItems="center" sx={{margin: "2rem 0"}}>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
      <Grid item md={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box component="img" src="/img/icon.svg" />
        <Typography>Best Offer In Suitable Price</Typography>
      </Grid>
    </Grid>
  );
};

export default DesktopCategories;
