import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
    },
    firstName: {
      fontWeight: "600",
    },
  })
);

export default function Logo() {
  const classes = useStyles();
  return (
    <Typography color="primary" variant="subtitle1" className={classes.logo}>
      <Box component="span" className={classes.firstName}>
        Josue
      </Box>
      Rodriguez
    </Typography>
  );
}
