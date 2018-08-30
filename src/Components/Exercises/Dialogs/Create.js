import React, { Component, Fragment } from "react";
import { Button, Dialog, DialogActions } from "material-ui";
import {
  DialogContentText,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";
import { Add } from "material-ui-icons";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button>
          <Add
            variant="fab"
            color="secondary"
            onClick={this.handleToggle}
            mini
          />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create A New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Content</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
