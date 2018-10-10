import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const AddCardButton = (props) => {
    const { classes } = props;
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} 
                component={Link} to="/add_card">
                <AddIcon />
            </Button>            
        </div>
    );
}

AddCardButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCardButton);