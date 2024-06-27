import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Switch,
  Box,
  List,
} from "@mui/material";
import {
  AccountBalance,
  Home,
  Pages,
  Settings,
  StorefrontSharp,
  ModeNight,
  Group,
  AccountCircle,
} from "@mui/icons-material";

export default function Sidebar(props) {
  console.log(props);
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, border: "1px solid #E5EAF2" }}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary=" Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StorefrontSharp />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onClick={() =>
                  props.setMode(props.mode === "light" ? "dark" : "light")
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
