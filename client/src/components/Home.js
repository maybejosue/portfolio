import React from "react";
import Navbar from "./navbar/Navbar.js";
import Greeting from "./greeting/Greeting.js";
import About from "./about/About.js";
import Experience from "./experience/Experience.js";
import { Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBackground: {
      backgroundColor: theme.palette.background.default,
      minWidth: theme.breakpoints.values["sm"],
      paddingBottom: "8rem",
    },
    content: {
      margin: "0 auto",
      maxWidth: "850px",
    },
  })
);

export default function Home({ theme }) {
  const classes = useStyles(theme);
  return (
    <Box className={classes.appBackground}>
      <Navbar />
      <Box className={classes.content}>
        <Greeting />
        <About />
        <Experience />
      </Box>
    </Box>
  );
}
