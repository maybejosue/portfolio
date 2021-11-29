import React from "react";
import Section from "../helpers/Section.js";
import { Box, Paper, Button, Typography, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chip from "@mui/material/Chip";
import { makeStyles, createStyles } from "@mui/styles";
import { userDetails } from "../../content";

const useStyles = makeStyles((theme) =>
  createStyles({
    userContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "2rem",
    },
    avatar: {
      width: "60px !important",
      height: "60px !important",
      [theme.breakpoints.up("md")]: {
        width: "70px !important",
        height: "70px !important",
      },
    },
    userInfo: {
      flexGrow: 1,
      marginLeft: "1rem",
    },
    location: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.secondary,
    },
    locationIcon: {
      marginLeft: "-5px",
    },
    chip: {
      backgroundColor: "#EFE9FF !important",
      color: "#7B73A6 !important",
    },
    contactContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    socialMedia: {
      display: "grid",
      gridAutoFlow: "column",
      gridColumnGap: "1rem",
    },
    btn: {
      minWidth: "0 !important",
      padding: "0.5rem !important",
      background: `${theme.palette.grey[100]} !important`,
      color: `${theme.palette.grey[800]} !important`,
      textTransform: "capitalize !important",
    },
  })
);

export default function About({ theme }) {
  const classes = useStyles(theme);

  const {
    name,
    profession,
    location: { city, state },
    description,
    socials,
    avatar,
    contact: { icon, link, headline },
  } = userDetails;

  return (
    <Section sectionName="about">
      <Box className={classes.userContainer}>
        <Paper elevation={8}>
          <Avatar
            variant="rounded"
            src={avatar}
            className={classes.avatar}
            alt={name}
          />
        </Paper>

        <Box className={classes.userInfo}>
          <Typography color="primary"> {name}</Typography>
          <Typography className={classes.location}>
            <LocationOnIcon className={classes.locationIcon} /> {city}, {state}
          </Typography>
        </Box>

        <Chip label={profession} className={classes.chip} />
      </Box>
      {description}
      <Box className={classes.contactContainer}>
        <Box className={classes.socialMedia}>
          {socials.map(({ icon, link }, i) => (
            <Button
              variant="contained"
              className={classes.btn}
              key={i}
              target="_black"
              href={link}
            >
              {icon}
            </Button>
          ))}
        </Box>

        <Button
          variant="contained"
          className={classes.btn}
          startIcon={icon}
          target="_black"
          href={link}
        >
          {headline}
        </Button>
      </Box>
    </Section>
  );
}
