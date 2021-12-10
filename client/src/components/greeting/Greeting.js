import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { greeting } from "../../content";
import ParkIcon from "@mui/icons-material/Park";

const useStyles = makeStyles((theme) =>
  createStyles({
    greetingContainer: {
      padding: "7rem 1rem ",
    },
    name: {
      fontWeight: `${600} !important`,
    },
    secondaryText: {
      color: theme.palette.text.secondary,
    },
    btn: {
      background:
        "linear-gradient(95.12deg, rgba(236, 153, 0, 0.88) 2%, rgba(255, 37, 37, 0.78) 97.22%) !important",
      color: "#E6E5E8 !important",
    },
    status: {
      [theme.breakpoints.up("md")]: {
        width: "65%",
      },
    },
  })
);

export default function Greeting({ theme }) {
  const classes = useStyles(theme);
  const { headline, name, status, oneliner, link } = greeting;

  return (
    <section id="greeting">
      <Box className={classes.greetingContainer}>
        <Typography color="primary" gutterBottom variant="subtitle1">
          {headline}
        </Typography>
        <Typography
          color="primary"
          gutterBottom
          variant="h3"
          component="h1"
          className={classes.name}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.secondaryText}
        >
          {oneliner}
        </Typography>
        <Typography
          paragraph
          className={`${classes.secondaryText} ${classes.status}`}
        >
          {status}
        </Typography>
        <Button
          variant="contained"
          className={classes.btn}
          startIcon={<ParkIcon />}
          href={link}
          target="_blank"
        >
          LinkTree
        </Button>
      </Box>
    </section>
  );
}
