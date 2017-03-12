import React, { Component } from 'react';
import 'whatwg-fetch';

export class ServiceCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount()  {

    fetch(`https://api.hearthstonejson.com/v1/15590/enUS/cards.collectible.json`)
    .then(r => r.json())
    .then(data => {
          console.log(data);
          this.setState({
            cards: data
          });
        });
  }

  render() {
    return (
        <ul className="cards-container">

          {this.state.cards.slice(1, 9).map(x=>x).filter(x=>x.artist).map(card=>
            <li key={card.id}>
              <img src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${card.id}.png`} alt="random" />
            </li>
          )}
        </ul>
    );
  }
}