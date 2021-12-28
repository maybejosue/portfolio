import React from "react";
import Section from "../helpers/Section";
import AccomplishmentCard from "./AccomplishmentCard.js";
import { Typography } from "@mui/material";
import { accomplishments } from "../../content";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginBottom: "1rem !important",
    },
  })
);

export default function Accomplishments() {
  const classes = useStyles();
  return (
    <Section sectionName={"accomplishments"}>
      <Typography className={classes.title}>Accomplishments</Typography>
      {accomplishments.map((accomplishment, i) => (
        <AccomplishmentCard accomplishment={accomplishment} key={i} />
      ))}
    </Section>
  );
}
