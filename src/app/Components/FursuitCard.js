import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChipBar from "./ChipBar";



const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: 20,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class FursuitCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.fursuitName}
          subheader="February 15, 2018"
        />
        <CardMedia
          className={classes.media}
          image="https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d"
          title="Haskell"
        />
        <CardContent>
          <Typography component="p">
            Haskell is a concept collab between Syber (@MadeFurYou) and
            YellowFreaks.
          </Typography>
        </CardContent>
        <CardContent component="p">
          <ChipBar />
        </CardContent>
      </Card>
    );
  }
}

FursuitCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FursuitCard);
