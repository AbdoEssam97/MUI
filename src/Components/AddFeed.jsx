import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useState } from "react";

const ModelStyled = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

export default function AddFeed() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "20px" },
        }}
        title="Add"
        arrow
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <ModelStyled
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          height={300}
          p={3}
          borderRadius={6}
        >
          <Typography
            color={"gray"}
            textAlign={"center"}
            variant="h6"
            component="h2"
            mb={2}
          >
            Create Post
          </Typography>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ bgcolor: deepPurple[500], width: 35, height: 35 }}>
              AE
            </Avatar>
            <Typography variant="span">Abdo Essam</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            label="What's on your mind"
            multiline
            rows={1}
            variant="standard"
          />
          <Stack direction={"row"} gap={2} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Add Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </ModelStyled>
    </div>
  );
}
