import React, { Component } from 'react';

import {boss_details} from '../../../../data/boss-details';
import {DeckSnippet} from '../../../shared-assets/deck-snippet/deck-snippet';
export class AdventureBoss extends Component {

  render() {
    function ifHasImg(index, boss, rewards){
      if(index===0){
        return <img src={boss} alt={boss}/>;
      }
      if(index===2){
        return <img src={rewards} alt={`${rewards}'s illustration`}/>;
      }
    }
    return (
        <div className={`boss inner-container ${this.props.details === 'boss' && 'active'}-view`}>
          <div className="boss-guide-header">
            <p className="boss-details-nav-el">{this.props.boss}</p>
            <ul>
              {boss_details.slice(0,4).map((element, index)=>
                  <li className="block" key={index}>
                    <div className="block-content">
                      <p className="boss-details-nav-el">{element.title}</p>
                      {ifHasImg(index, this.props.boss, 'x')}
                      <p>{element.content}</p>
                    </div>
                  </li>
              )}
              {boss_details.slice(4,5).map((element, index)=>
                  <li className="block" key={index}>
                    <div className="block-content">
                      <p className="boss-details-nav-el">{element.title}</p>
                      <div className="top-boss-decks">
                        <DeckSnippet />
                        <DeckSnippet />
                        <DeckSnippet />
                      </div>
                    </div>
                  </li>
              )}
            </ul>
          </div>
        </div>
    );
  }
}