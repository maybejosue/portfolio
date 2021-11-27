import React from "react";
import { Paper } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "1rem",
    },
  })
);

export default function Section({ children }) {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.container}>
      {children}
    </Paper>
  );
}
