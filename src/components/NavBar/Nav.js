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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import DrawerComponent from "./Drawer";

const logo = "https://borobazar.vercel.app/assets/images/logo.svg";

const Nav = () => {
  // categort list
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // drawer state
  const theme = useTheme(); // useTheme instance
  const [opendrawer, setOpendrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(theme.breakpoints.down("sm"));
  // console.log(matches);

  return (
    <>
      <AppBar elevation={0} color="transparent" position="relative">
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
              <img src={logo} alt="logo" />
            </Box>
            {/* links */}
            {matches ? (
              <DrawerComponent
                opendrawer={opendrawer}
                setOpendrawer={setOpendrawer}
              />
            ) : (
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="p" sx={{ marginRight: "1rem" }}>
                  Home
                </Typography>
                <Typography variant="p" sx={{ marginRight: "1rem" }}>
                  Brand
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginRight: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  // auto props
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  Categories
                  <KeyboardArrowDownIcon />
                </Typography>
                {/* drop-down-items */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
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
            )}
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
              {matches && (
                <IconButton onClick={() => setOpendrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
