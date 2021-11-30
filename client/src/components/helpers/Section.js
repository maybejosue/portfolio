import React from "react";
import { Paper } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "1rem",
      marginBottom: "1rem",
    },
  })
);

export default function Section({ children, sectionName }) {
  const classes = useStyles();
  return (
    <section id={sectionName}>
      <Paper elevation={0} className={classes.container}>
        {children}
      </Paper>
    </section>
  );
}
