import React from "react";
import { Box, Fab } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBackground: {
      backgroundColor: theme.palette.background.default,
      paddingBottom: "8rem",
    },
    content: {
      margin: "0 auto",
      maxWidth: "850px",
    },
    fab: {
      position: "fixed !important",
      bottom: 25,
      right: 25,
    },
  })
);

export default function Layout({ theme, mode, setMode }) {
  const classes = useStyles(theme);

  const updateMode = () => {
    setMode((prevMode) => {
      if (prevMode === "dark") {
        localStorage.removeItem("mode");
        return "light";
      }
      localStorage.setItem("mode", "dark");
      return "dark";
    });
  };

  return (
    <Box className={classes.appBackground}>
      <Navbar />
      <Box className={classes.content}>
        <Outlet />
      </Box>
      <Fab
        size="medium"
        className={classes.fab}
        onClick={updateMode}
        aria-label="theme-icon"
      >
        {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </Fab>
    </Box>
  );
}
