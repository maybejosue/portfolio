import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

// Content
import { tabs } from "../../content";

const useStyles = makeStyles((theme) =>
  createStyles({
    tabContainer: {
      padding: "3rem",
      display: "grid",
    },
    tab: {
      margin: "0.2rem !important",
    },
    formatText: {
      textTransform: "capitalize !important",
    },
    specialBtn: {
      backgroundColor: `${theme.palette.secondary.main} !important`,
      color: "#E6E5E8 !important",
    },
  })
);

export default function Menu({ theme }) {
  const classes = useStyles(theme);
  return (
    <Box className={classes.tabContainer}>
      {tabs.map(({ name, link }, i, arr) =>
        i === arr.length - 1 ? (
          <Button
            variant="contained"
            key={i}
            className={`${classes.tab} ${classes.formatText} ${classes.specialBtn}`}
            href={link}
          >
            {name}
          </Button>
        ) : (
          <Button
            className={`${classes.tab} ${classes.formatText}`}
            key={i}
            href={link}
          >
            {name}
          </Button>
        )
      )}
    </Box>
  );
}
