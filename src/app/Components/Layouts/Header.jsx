import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import Create from '../Exercises/Dialogs/Create';

export default props => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Sunny Valley Creations
      </Typography>
      <Create />
    </Toolbar>
  </AppBar>
);
