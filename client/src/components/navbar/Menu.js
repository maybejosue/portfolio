import React from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

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

export default function Menu({ theme, setIsMenuOpen, isMenuOpen }) {
  const classes = useStyles(theme);
  return (
    <React.Fragment>
      <IconButton onClick={() => setIsMenuOpen((prevState) => !prevState)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        variant="temporary"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
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
      </Drawer>
    </React.Fragment>
  );
}
