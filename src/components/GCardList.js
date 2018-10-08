import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import GCard from './GCard';

class GCardList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      giftCards: [],
      cardsLoaded: false
    }
  }

  componentDidMount() {
    if (!this.state.dataLoaded) {
      fetch('http://localhost:8080/gcw/api/giftcard/all')
        .then(res => res.json())
        .then(json => {
          this.setState({
            giftCards: json,
            cardsLoaded: true
          })
      });
    }
  }
  
  render() {
    return (
      <div>        
        <Grid container spacing={24} style={{ padding: 24 }}>
          {this.state.giftCards.map(currentCard => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <GCard card={currentCard} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default GCardList;