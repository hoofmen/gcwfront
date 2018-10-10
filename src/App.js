import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import GCardList from './components/GCardList'
import Home from './components/Home';
import AddCard from './components/AddCard';
import Settings from './components/Settings';
import AddCardButton from './components/AddCardButton'
import Menu from './components/Menu';

class App extends Component {

  constructor (props){ 
    super(props);
    this.state = {
      drawerMenuOpen: false      
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ drawerMenuOpen: !this.state.drawerMenuOpen});
  }

  render() {    
    return (
      <BrowserRouter>
        <div>
          <Header toggleMenu={this.toggleMenu}/>
          <Menu openMenu={this.state.drawerMenuOpen} toggleMenu={this.toggleMenu}/>
            <Route path="/" component={Home} exact />
            <Route path="/show_cards" component={GCardList} />
            <Route path="/add_card" component={AddCard} />
            <Route path="/settings" component={Settings} />
          <AddCardButton/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
