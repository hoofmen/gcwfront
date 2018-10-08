import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const GCard = (props) => {
  return (
    <div>
      {props.card ? (
        <Card style={{ maxWidth: 345 }}>          
            <CardMedia style={{ height: 140 }}
              title={props.card.store.name}
              image={props.card.store.img}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2" align="left">
                {props.card.value}
              </Typography>
              <Typography component="p">
                {props.card.store.name}
              </Typography>
            </CardContent>
        </Card>
        ) : null}
      </div>
  )
}
export default GCard