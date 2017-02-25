import React, { Component } from 'react';

export class DeckTopbar extends Component {
  render() {
    return (
      <ul className='choosen-deck-topbar'>
        <li className="rating hunter active">&#x21E7; 42</li>
        <li className="mode">
          <span className="hs-icon icon-kraken"></span>
          <p>Standard</p>
        </li>
        <li className="cards">
          <ul>
            <li className="minions">18 stronników</li>
            <li className="spells">6 zaklęć</li>
            <li className="weapons">6 broni</li>
          </ul>
        </li>
        <li className="type">Karczemna Bójka</li>
        <li className="archetype">Dragon Rogue</li>
        <li className="dust-cost mage active">
          <span className="hs-icon icon-dust"></span>
          <p>6900</p>
        </li>
      </ul>
    );
  }
}