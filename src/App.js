import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Feeds from "./Components/Feeds";
import Navbar from "./Components/Navbar";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/material";
import Rightbar from "./Components/Rightbar";
import AddFeed from "./Components/AddFeed";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Sidebar mode={mode} setMode={setMode} />
            <Feeds />
            <Rightbar />
          </Stack>
          <AddFeed />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
