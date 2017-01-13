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
            <div className="dust-needed">
              <span className="hs-icon icon-dust"></span>
              <p>8910</p>
            </div>
          </div>
          <div className="body-body">
            <div className="minions">10 minionów</div>
            <div className="spells">14 zaklęć</div>
            <div className="weapons">6 broni</div>
          </div>
          <div className="body-footer">
            <div className="views">
              <span className="hs-icon icon-views"></span>
              <p>10tyś.</p>
            </div>
            <div className="comments">14 komentarzy</div>
            <div className="votes">↑ 14</div>
          </div>
        </div>
    );
  }
}