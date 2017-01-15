import React, { Component } from 'react';

export class ChoosenDeckTopbar extends Component {
  render() {
    return (
      <div className="choosen-deck-topbar">
        <div className="rating">42</div>
        <div className="mode">
          <span className="hs-icon icon-kraken"></span>
          <p>Standard</p>
        </div>
        <div className="cards">
          <div className="minions">18 stronników</div>
          <div className="spells">6 zaklęć</div>
          <div className="weapons">6 broni</div>
        </div>
        <div className="type">Karczemna Bójka</div>
        <div className="archetype">Dragon Rogue</div>
        <div className="dust-cost">
          <span className="hs-icon icon-dust"></span>
          <p>6900</p>
        </div>
      </div>
    );
  }
}