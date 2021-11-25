import React, { useState, useEffect } from "react";
import { Box, Paper, IconButton, Drawer, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import Logo from "./Logo.js";
import Menu from "./Menu.js";
import MenuIcon from "@mui/icons-material/Menu";

// Content
import { tabs } from "../../content";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      padding: "0.75rem",
      display: "flex",
    },
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
    desktop: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    mobile: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

function debounce(fn, delay) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, delay);
  };
}

export default function Navbar({ theme }) {
  const classes = useStyles(theme);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    const handleResize = debounce(updateInnerWidth, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (isMenuOpen && innerWidth > 700) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, innerWidth]);

  return (
    <nav>
      <Paper square>
        <Box className={classes.content}>
          <Logo />

          {/* Desktop tabs */}
          <Box className={classes.desktop}>
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

          {/* Mobile tabs */}
          <Box className={classes.mobile}>
            <IconButton
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              variant="temporary"
              open={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            >
              <Menu />
            </Drawer>
          </Box>
        </Box>
      </Paper>
    </nav>
  );
}
