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
      [theme.breakpoints.down("md")]: {
        margin: "0 auto",
      },
      [theme.breakpoints.down("sm")]: {
        width: 320,
      },
    },
    imgContainer: {
      overflow: "hidden",
      height: 250,
    },
    cardMedia: {
      height: 250,
      width: 370,
      objectPosition: "center top",
    },
    headline: {
      display: "flex",
      marginBottom: "1.5rem",
    },
    title: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    desc: {
      color: theme.palette.text.secondary,
      lineHeight: 1.5,
    },
    techStack: {
      color: theme.palette.text.secondary,
    },
    techContainer: {
      marginTop: "1rem !important",
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
      <Box className={classes.imgContainer}>
        <CardMedia
          component="img"
          image={img}
          className={classes.cardMedia}
          alt={`Live snapshot of ${title}`}
        />
      </Box>

      <CardContent>
        <Box className={classes.headline}>
          <Typography variant="subtitle1" className={classes.title}>
            {title}
          </Typography>

          <Box>
            {github && (
              <IconButton
                href={github}
                target="_blank"
                aria-label="github icon"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            )}
            {deployed && (
              <IconButton
                href={deployed}
                target="_blank"
                aria-label={`deployed version of ${title}`}
                rel="noopener noreferrer"
              >
                <OpenInNewIcon />
              </IconButton>
            )}
          </Box>
        </Box>

        <ResponsiveEllipsis
          className={classes.desc}
          text={description}
          maxLine="4"
          component="p"
          basedOn="letters"
        />

        <Box className={classes.techStack}>
          <Divider variant="middle" />
          <Typography noWrap className={classes.techContainer}>
            {tech.map((name) => (
              <Box component="span" key={name}>
                {name}
              </Box>
            ))}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
