import React, { Component } from 'react';

import {boss_details} from '../../../../data/boss-details';
import {adventure_details} from '../../../../data/adventure-details';
import {DeckSnippet} from '../../../shared-assets/deck-snippet/deck-snippet';
export class AdventureBoss extends Component {

    ifHasImg(index, adventure, boss, rewards){
      if(index===0){
        if(adventure && boss !== undefined) return <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${boss}.jpg`} alt={boss}/>;
        if(adventure || boss === undefined) return;
      }
      if(index===2){
        return <img src={rewards} alt={`${rewards}'s illustration`}/>;
      }
    }

    boss(){
      let boss = adventure_details.map(x=>x.bosses.details.filter(x=>x.url===this.props.details)[0]).filter(x=>x)[0].bosses.filter(x=>x.url===this.props.boss)[0].boss;
      console.log(boss);
      return boss;
    }

  render() {
      let bossName = this.boss();
    return (
        <div className={`boss inner-container ${this.props.details && 'active'}-view`}>
          {adventure_details.slice(0,1).map((adventure, i)=>

          <div key={i} className="boss-guide-header">
            <p className="boss-details-nav-el">{bossName}</p>
            <ul>
              {boss_details.slice(0,4).map((boss, index)=>
                  <li className="block" key={index}>
                    <div className="block-content">
                      <p className="boss-details-nav-el">{boss.name}</p>
                      {this.ifHasImg(index, this.props.adventure, this.props.boss, 'x')}
                      <p>{bossName} is a (#) boss in (wing)</p>
                    </div>
                  </li>
              )}
              {boss_details.slice(4,5).map((boss, index)=>
                  <li className="block" key={index}>
                    <div className="block-content">
                      <p className="boss-details-nav-el">{boss.name}</p>
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
          )}
        </div>
    );
  }
}