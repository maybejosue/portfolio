import { Typography, Box, Button, Paper } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React from "react";
import tabs from "../../content";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      padding: "1rem",
      display: "flex",
    },
    firstName: {
      fontWeight: "600",
    },
    logo: {
      flexGrow: 1,
    },
    tabs: {
      margin: "0 0.1rem !important",
      border: "solid 1px red !important",
    },
    formatText: {
      textTransform: "capitalize !important",
    },
  })
);

export default function NavigationBar({ theme }) {
  const classes = useStyles(theme);
  const N = tabs.length;

  return (
    <Paper square>
      <Box className={classes.content}>
        <Typography variant="h6" className={classes.logo}>
          <Box component="span" className={classes.firstName}>
            Josue
          </Box>
          Rodriguez
        </Typography>

        {tabs.map((tab, index) =>
          index === N - 1 ? (
            <Button
              color="secondary"
              variant="contained"
              key={index}
              className={classes.formatText}
              href={tab.link}
            >
              {tab.name}
            </Button>
          ) : (
            <Button
              className={`${classes.tab} ${classes.formatText}`}
              key={index}
              href={tab.link}
            >
              {tab.name}
            </Button>
          )
        )}
      </Box>
    </Paper>
  );
}
