import React, { Component } from 'react';
import { ManaCurve } from './mana-curve';
export class DeckSnippetBody extends Component {
  render() {
    return (
        <div className="body">
          <div className="body-header">
            <div className="mode"><span className="hs-icon icon-kraken"></span></div>
            <ManaCurve/>
            <div className="deck-type">Renohunter</div>
            <div className="dust-needed">8910</div>
          </div>
          <div className="body-body">
            <div className="minions">10 minionów</div>
            <div className="spells">14 zaklęć</div>
            <div className="weapons">6 broni</div>
          </div>
          <div className="body-footer">
            <div className="views">10tyś.</div>
            <div className="comments">14 komentarzy</div>
            <div className="votes">↑ 14</div>
          </div>
        </div>
    );
  }
}