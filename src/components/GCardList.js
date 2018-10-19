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
      this.setState({
        giftCards: [{ id: 1, user_id: 1, value: "25.000", code: { code: "1234 5678 9101 1213 1415", type: "BAR_CODE" }, store: { id: 1, name: "Google Play", img: "googleplay.png" } }, { id: 2, user_id: 1, value: "50.000", code: { code: "1233-5455-9101-000-1", type: "QR_CODE" }, store: { id: 2, name: "iTunes", img: "itunes.png" } }, { id: 3, user_id: 1, value: "15.000", code: { code: "5544 2344 9101 1213 2777", type: "BAR_CODE" }, store: { id: 3, name: "Gap", img: "gap.png" } }, { id: 4, user_id: 1, value: "5.000", code: { code: "5544 2344 9101 1213 2777", type: "BAR_CODE" }, store: { id: 3, name: "Groupon", img: "groupon.png" } }, { id: 5, user_id: 1, value: "20.000", code: { code: "5544 2344 9101 1213 2777", type: "BAR_CODE" }, store: { id: 5, name: "Facebook", img: "facebook.png" } }, { id: 6, user_id: 1, value: "8.000", code: { code: "5544 2344 9101 1213 2777", type: "BAR_CODE" }, store: { id: 6, name: "Nordstrom", img: "nordstrom.png" } }, { id: 7, user_id: 1, value: "10.000", code: { code: "5544 2344 9101 1213 2777", type: "BAR_CODE" }, store: { id: 7, name: "Nintendo", img: "nintendo.png" } }],
          cardsLoaded: true
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