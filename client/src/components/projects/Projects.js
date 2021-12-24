import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { projects } from "../../content";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles, createStyles } from "@mui/styles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    carousel: {
      marginBottom: "3rem",
    },
    slider: {
      "& .slick-next": {
        right: "3% !important",
        zIndex: 5,
        "&:before": {
          color: theme.palette.primary.main,
        },
      },
      "& .slick-prev": {
        left: "3% !important",
        zIndex: 5,
        "&:before": {
          color: theme.palette.primary.main,
        },
      },
      "& .slick-dots li button:before": {
        color: theme.palette.primary.main,
      },
    },
  })
);

export default function Projects() {
  const classes = useStyles();

  const settings = {
    className: classes.slider,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <section id="projects">
      <Box className={classes.carousel}>
        <Slider {...settings}>
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </Slider>
      </Box>
    </section>
  );
}
