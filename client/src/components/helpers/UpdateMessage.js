import React, { useState } from "react";
import { Collapse, Alert } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  alert: {
    marginBottom: "1rem",
  },
});

export default function UpdateMessage({ message, icon, severity, color }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        className={classes.alert}
        severity={severity ? severity : "success"}
        color={color ? color : "info"}
        onClose={() => setOpen(false)}
        icon={icon ? icon : <UpdateIcon />}
      >
        {message ? message : "No updates available"}
      </Alert>
    </Collapse>
  );
}
