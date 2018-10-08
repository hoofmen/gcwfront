import React, { Component } from 'react'
import Header from './components/Header'
import GCardList from './components/GCardList'
import AddCardButton from './components/AddCardButton'
import Menu from './components/Menu';

class App extends Component {

  constructor (props){ 
    super(props);
    this.state = {
      drawerMenuOpen: false,
      views: ['HOME', 'GIFT_CARDS_LIST', 'ADD_NEW_CARD', 'PROFILE', 'SETTINGS'],
      currentView: 'HOME',
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ drawerMenuOpen: !this.state.drawerMenuOpen});
  }

  render() {    
    return (
      <div>
        <Header toggleMenu={this.toggleMenu}/>
        <Menu openMenu={this.state.drawerMenuOpen} toggleMenu={this.toggleMenu}/>
        <GCardList/>
        <AddCardButton/>
      </div>
    );
  }
}

export default App;
