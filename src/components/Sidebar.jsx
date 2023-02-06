import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from "@mui/material";
import { Inbox, Home,Article,Groups,Group,Storefront,Settings,Person, ModeNight} from "@mui/icons-material";


const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <Box sx={{position:"fixed"}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Groups/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <Settings/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
      <ListItemButton component="Link" to="/">
        <ListItemIcon>
          <Person/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
    <ListItemButton component="a" href="/">
      <ListItemIcon>
        <ModeNight/>
      </ListItemIcon>
      <Switch  defaultChecked />
    </ListItemButton>
  </ListItem>

      
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
