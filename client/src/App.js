import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./components";

const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
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
    <ThemeProvider theme={theme}>
      <Home mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default App;
