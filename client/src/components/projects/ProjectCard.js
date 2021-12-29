import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { makeStyles, createStyles } from "@mui/styles";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      width: 370,
      maxHeight: 500,
      position: "relative",
      boxShadow: "none !important",
      background: `${theme.palette.background.paper} !important`,
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        width: "85%",
        display: "flex",
        background: "transparent !important",
      },
      [theme.breakpoints.down("sm")]: {
        width: 320,
      },
    },
    cardMedia: {
      height: 250,
      width: 370,
      objectPosition: "center top",
      [theme.breakpoints.up("md")]: {
        maxWidth: 300,
        height: 400,
      },
    },
    cardContent: {
      [theme.breakpoints.up("md")]: {
        margin: "auto",
      },
    },
    links: {
      display: "flex",
      marginBottom: "0.5rem",
    },
    title: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    desc: {
      lineHeight: 1.5,
    },
    techContainer: {
      marginTop: "1rem !important",
      color: theme.palette.text.secondary,
      "& span": {
        marginRight: "1rem",
      },
    },
  })
);

export default function ProjectCard({ project, theme }) {
  const classes = useStyles(theme);
  const { title, img, description, github, deployed, tech } = project;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={img}
        className={classes.cardMedia}
        alt={`Live snapshot of ${title}`}
      />

      <CardContent className={classes.cardContent}>
        <Box className={classes.links}>
          <Typography variant="subtitle1" className={classes.title}>
            {title}
          </Typography>

          {github && (
            <IconButton
              href={github}
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          )}
          {deployed && (
            <IconButton
              href={deployed}
              target="_blank"
              aria-label="Open in new tab"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon />
            </IconButton>
          )}
        </Box>

        <ResponsiveEllipsis
          className={classes.desc}
          text={description}
          maxLine="4"
          component="p"
          basedOn="letters"
        />

        <Divider variant="middle" />

        <Typography noWrap className={classes.techContainer}>
          {tech.map((name, i) => (
            <Box component="span" key={i}>
              {name}
            </Box>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
