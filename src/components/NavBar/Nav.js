import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box } from "@mui/system";

const Nav = () => {
  const [anchorEl,setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }


  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* logo */}
          <Box>
            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          {/* links */}
          <Box sx={{ cursor: "pointer" }}>
            <Typography variant="p" sx={{ marginRight: "1rem" }}>
              Home
            </Typography>
            <Typography variant="p" sx={{ marginRight: "1rem" }}>
              Brand
            </Typography>
            <Typography 
              variant="p" 
              sx={{ marginRight: "1rem" }}
              // auto props
              aria-controls = "basic-menu"
              aria-haspopup = "true"
              aria-expanded = {openMenu ? "true" : undefined}
              onClick = {handleClick}
            >
              Categories
            </Typography>
            {/* drop-down-items */}
            <Menu id="basic-menu" anchorEl ={anchorEl}  open={openMenu} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accessories</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Typography variant="p" sx={{ marginRight: "1rem" }}>
              Home
            </Typography>
            <Typography variant="p" sx={{ marginRight: "1rem" }}>
              Men
            </Typography>
            <Typography variant="p" sx={{ marginRight: "1rem" }}>
              Woman
            </Typography>
          </Box>
          {/* button */}
          <Box>
            <Button
              variant="outlined"
              color="success"
              disableElevation
              sx={{ marginRight: "1rem" }}
            >
              Login
            </Button>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
