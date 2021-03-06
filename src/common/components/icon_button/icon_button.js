import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 70
  },
  icon: {
    backgroundColor: "#7AF0B9",
    marginBottom: 10
  }
}));

const IconButtonCmp = ({ title, icon: Icon, onClick = () => {} }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton className={classes.icon} onClick={onClick}>
        <Icon />
      </IconButton>
      <Typography>{title}</Typography>
    </div>
  );
};

export default IconButtonCmp;
