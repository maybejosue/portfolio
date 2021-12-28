import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import { makeStyles, createStyles } from "@mui/styles";

import {
  Typography,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  TableHead,
} from "@mui/material";

const useStyles = makeStyles(() =>
  createStyles({
    preview: {
      display: "flex",
      alignItems: "center",
    },
    heading: {
      display: "flex",
      flex: 1,
      alignItems: "center",
    },
    title: {
      textTransform: "capitalize",
      display: "flex",
      alignItems: "center",
    },
    achievementsLength: {
      fontSize: "xxx-large",
      marginRight: "1rem",
    },
    category: {
      textTransform: "capitalize",
    },
    tableRow: {
      "&:last-child td, &:last-child th": { border: 0 },
    },
  })
);

export default function AccomplishmentCard({ accomplishment }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { title, categories, achievements } = accomplishment;

  return (
    <Box>
      <Box className={classes.preview}>
        <Box className={classes.heading}>
          <Typography className={classes.title}>
            <Box component="span" className={classes.achievementsLength}>
              {achievements.length}{" "}
            </Box>
            {title}
          </Typography>
        </Box>

        {achievements.length && (
          <Box>
            {open ? (
              <IconButton onClick={() => setOpen(false)}>
                <KeyboardArrowUpIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => setOpen(true)}>
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>

      <Collapse in={open}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {categories.map((category, i) => (
                  <TableCell key={i} className={classes.category}>
                    {category}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {achievements.map((achievement, i) => (
                <TableRow key={i} className={classes.tableRow}>
                  {categories.map((category, j) => (
                    <TableCell key={j}>
                      {(() => {
                        if (category === "link") {
                          return (
                            <IconButton
                              size="small"
                              href={achievement[category]}
                              target="_blank"
                              rel="noopener noreferrer"
                              disabled={!achievement[category]}
                            >
                              {achievement[category] ? (
                                <OpenInNewIcon fontSize="small" />
                              ) : (
                                <OpenInNewOffIcon fontSize="small" />
                              )}
                            </IconButton>
                          );
                        }
                        return achievement[category];
                      })()}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Box>
  );
}
