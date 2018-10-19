import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  row: {
    textAlign: 'center',
  },
  grow: {
    flexGrow: 1,
    fontFamily: 'Pacifico',
    fontSize: 30,
  },
};

function AddCard(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Typography variant="title" color="inherit" className={classes.grow}>
        Add a new Card
      </Typography>
    </div>
  );
}

export default withStyles(styles)(AddCard);