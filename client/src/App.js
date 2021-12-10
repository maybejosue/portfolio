import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./components";
import Resume from "./components/resume/Resume.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
      sm: 600,
      md: 800,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#061834",
          },
          secondary: {
            main: "#0046FF",
          },
          background: {
            default: "#F4F5FC",
          },
        }
      : {
          // palette values for dark mode
          mode: "dark",
          primary: {
            main: "#E6E5E8",
          },
          secondary: {
            main: "#0046FF",
          },
          background: {
            paper: "#1E293D",
            default: "#141221",
          },
        }),
  },
  components: {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          ":before": {
            content: "none",
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") === "dark" ? "dark" : "light"
  );

  const theme = createTheme(getDesignTokens(mode), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
