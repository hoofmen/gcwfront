import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    
  },
  name: {
    color: 'white',
    fontFamily: 'Helvetica'
  },
  username: {
    color: 'white',
    fontFamily: 'Courier',
    marginBottom: '10px'
  },
  row: {
    display: 'flex',    
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function MenuHeader(props) {
  const { classes, user  } = props;
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Avatar
          alt={user.username}
          src={require('../img/' + user.img)}
          className={classes.avatar}
        />
      </div>
      <div className={classes.row}>
        <Typography variant="headline" component="h2" className={classes.name}>
          {user.details.name} {user.details.lastname}
        </Typography>
      </div>
      <div className={classes.row}>
        <Typography component="p" className={classes.username}>
          @{user.username}
        </Typography>
      </div>
    </div>
  );
}

MenuHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuHeader);
