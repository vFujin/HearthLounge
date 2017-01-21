import React, { Component } from 'react';
export class ServiceCards extends Component {
  render() {
    return (
        <ul className="cards-container">
          {this.props.cards.map((card, i)=>
            <li key={i}>
              <img src={card.img} alt={`${card.name}`}/>
            </li>
          )}
        </ul>
    );
  }
}