import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Rightbar() {
  return (
    <Box
      flex={3}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        border: "1px solid #E5EAF2",
      }}
    >
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=iR5dFOMjGdWpetb_4ZNk2dsUe7eb6CplFP4GZ069az4="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/id/1371940128/photo/multiracial-friends-taking-big-group-selfie-shot-smiling-at-camera-laughing-young-people.jpg?b=1&s=612x612&w=0&k=20&c=V9TcFJpBAhtyw_I9Kq4h_A1VVqQqDK5i-8iEnQQDsb4="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Last Photos
        </Typography>
        <ImageList sx={{ width: 300 }} cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2881010/pexels-photo-2881010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/14400612/pexels-photo-14400612.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
