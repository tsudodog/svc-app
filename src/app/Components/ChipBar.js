import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function handleDelete() {
  alert("You clicked the delete icon."); // eslint-disable-line no-alert
}

function handleClick() {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
}

function ChipBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {props.chips.map(({ label }) => (
        <Chip label={label} color="primary" className={classes.chip} />
      ))}

      <Chip label="Follow Me Eyes" color="primary" className={classes.chip} />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
      />
    </div>
  );
}

ChipBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipBar);
