import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box, Avatar, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    tabPanel: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "80%",
      },
    },
    companyContainer: {
      display: "flex",
      alignItems: "center",
      marginLeft: "0.5rem",
    },
    companyName: {
      marginLeft: "1rem !important",
      alignItems: "center",
    },
    formerName: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        fontStyle: "italic",
        fontSize: "1rem",
        display: "block",
      },
    },

    positionContainer: {
      marginBottom: "1rem",
    },
    timeframe: {
      color: theme.palette.text.secondary,
    },
    highlightContainer: {
      marginBottom: "1rem",
    },
    highlight: {
      display: "flex",
      marginBottom: "0.5rem",
    },
  })
);

export default function TabPanel({ workHistory, theme }) {
  const classes = useStyles(theme);
  const { companyName, formerName, positions, avatar, link } = workHistory;

  return (
    <div role="tabpanel" className={classes.tabPanel}>
      <Box className={classes.companyContainer}>
        <Avatar src={avatar} alt={`${companyName} logo`} />

        <Typography variant="h6" className={classes.companyName}>
          {companyName}
        </Typography>

        {formerName && (
          <Typography component="span" className={classes.formerName}>
            {`(formerly ${formerName})`}
          </Typography>
        )}

        {link && (
          <IconButton
            size="small"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
      <Timeline>
        {positions.map(
          (
            {
              positionName,
              location: { isRemote, city, state },
              startDate: { month: startMonth, year: startYear },
              endDate: { isPresent, month: endMonth, year: endYear },
              highlights,
            },
            i,
            arr
          ) => (
            <TimelineItem key={i}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {arr.length - 1 !== i && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box className={classes.positionContainer}>
                  <Typography variant="subtitle1">{positionName}</Typography>

                  <Typography variant="subtitle2" className={classes.timeframe}>
                    {startMonth} {startYear} -{" "}
                    {isPresent ? "Present" : `${endMonth} ${endYear}`} •{" "}
                    {isRemote ? "Remote" : `${city}, ${state}`}
                  </Typography>
                </Box>

                <Box className={classes.highlightContainer}>
                  {highlights.map((highlight, i) => (
                    <Box className={classes.highlight} key={i}>
                      <ArrowForwardIosIcon fontSize="small" color="secondary" />
                      <Typography> {highlight}</Typography>
                    </Box>
                  ))}
                </Box>
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Timeline>
    </div>
  );
}
