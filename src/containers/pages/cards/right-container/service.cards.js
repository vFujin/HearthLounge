import React, { Component } from 'react';

export class ServiceCards extends Component {
  render() {
    return (
        <ul className="cards-container">

          {this.props.cards.slice(1, 9).map(x=>x).filter(x=>x.artist).map(card=>
            <li key={card.id}>
              <img src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${card.id}.png`} alt="random" />
            </li>
          )}
        </ul>
    );
  }
}