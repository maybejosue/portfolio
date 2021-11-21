import { createTheme, ThemeProvider, Paper } from "@mui/material";
import { Home } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#061834",
    },
    secondary: {
      main: "#0046FF",
    },
    background: {
      default: "#F4F5FC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Home />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
