import React from "react";
import Navbar from "./navbar/Navbar.js";
import { Box } from "@mui/material";

import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBackground: {
      backgroundColor: theme.palette.background.default,
      height: "100vh",
    },
  })
);

export default function Home({ theme }) {
  const classes = useStyles(theme);
  return (
    <Box className={classes.appBackground}>
      <Navbar />
      Home content
    </Box>
  );
}
