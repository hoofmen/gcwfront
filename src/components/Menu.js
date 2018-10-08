import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import GiftCardIcon from '@material-ui/icons/CardGiftcard';
import SendIcon from '@material-ui/icons/Send';
import FavIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuHeader from './MenuHeader';


const styles = {
  list: {
    width: 250,
  }
};

class Menu extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      user: {},
      dataLoaded: false
    }
  }

  componentDidMount() {
    if (!this.state.dataLoaded) {      
      this.setState({
            user: {
              username: 'johndoe',
              img: './static/img/user.png',
              details: {
                name: 'John',
                lastname: 'Doe',
                email: 'johndoe@gmail.com'
              }
            },
            dataLoaded: true
      })      
    }
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <div>
          <MenuHeader user={this.state.user}/>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </div>
          <div>
            <ListItem button>
              <ListItemIcon>
                <GiftCardIcon />
              </ListItemIcon>
              <ListItemText primary="Gift Cards" />
            </ListItem>
          </div>
          <div>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send" />
            </ListItem>
          </div>
          <div>
            <ListItem button>
              <ListItemIcon>
                <FavIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          </div>
          <div>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </div>
          
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.openMenu} onClose={this.props.toggleMenu}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleMenu}
            onKeyDown={this.props.toggleMenu}
          >
            {sideList}
          </div>
        </Drawer>        
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);