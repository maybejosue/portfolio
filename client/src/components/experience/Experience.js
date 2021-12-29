import React, { useState } from "react";
import Section from "../helpers/Section.js";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import TabPanel from "./TabPanel.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import UpdateMessage from "../helpers/UpdateMessage.js";
import { jobSearchStatus } from "../../content/";
import { workHistory } from "../../content/";

const useStyles = makeStyles((theme) =>
  createStyles({
    tabsContainer: {
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    tabs: {
      marginBottom: "2rem",
    },
    tab: {
      textTransform: "capitalize !important",
    },
  })
);

export default function Experience({ theme }) {
  const classes = useStyles(theme);
  const [value, setValue] = useState(0);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Section sectionName="experience">
      <Typography paragraph>Work History</Typography>
      {jobSearchStatus && <UpdateMessage message="Currently Job Searching!" />}

      <Box className={classes.tabsContainer}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={(e, v) => setValue(v)}
          variant={matches ? "scrollable" : "standard"}
          indicatorColor="secondary"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="work history tabs"
          orientation={matches ? "horizontal" : "vertical"}
        >
          {workHistory.map(({ companyName }, i) => (
            <Tab label={companyName} key={i} className={classes.tab} />
          ))}
        </Tabs>

        <TabPanel workHistory={workHistory[value]} />
      </Box>
    </Section>
  );
}
