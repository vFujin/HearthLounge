import React, { Component } from 'react';

import {boss_details} from '../../../../data/boss-details';
import {DeckSnippet} from '../../../shared-assets/deck-snippet/deck-snippet';
export class AdventureBoss extends Component {

  render() {
    function ifHasImg(index, adventure, boss, rewards){
      if(index===0){
        console.log(adventure, boss);
        if(adventure && boss !== undefined) return <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${boss}.jpg`} alt={boss}/>;
        if(adventure || boss === undefined) return;
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
                      {ifHasImg(index, this.props.adventure, this.props.boss, 'x')}
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