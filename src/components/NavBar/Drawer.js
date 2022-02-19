import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

const DrawerComponent = ({ opendrawer, setOpendrawer }) => {
  return (
    <Drawer anchor="left" open={opendrawer}>
      <List>
        <ListItem divider button onClick={()=>setOpendrawer(false)}>
          <ListItemIcon>Men</ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={()=>setOpendrawer(false)}>
          <ListItemIcon>Women</ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={()=>setOpendrawer(false)}>
          <ListItemIcon>Category</ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={()=>setOpendrawer(false)}>
          <ListItemIcon>Other</ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
