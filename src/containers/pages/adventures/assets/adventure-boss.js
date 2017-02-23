import React, { Component } from 'react';

import {boss_details} from '../../../../data/boss-details';
import {adventure_details} from '../../../../data/adventure-details';
import {DeckSnippet} from '../../../shared-assets/deck-snippet/deck-snippet';
export class AdventureBoss extends Component {

    blocks(index, adventure, wing, bossName, bossUrl){
      switch(index){
        /**
           * Case:
           * 0 - Overview
           * 1 - Strategy
           * 2 - Rewards
           * 3 - List of rest bosses in a wing
           */
        case 0:
          return (
            <div>
              <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${bossUrl}.jpg`} alt={bossName}/>
              <p>{bossName} is a (#) boss in {wing}</p>
            </div>
        );
        case 1:
          return (
            <div>
              <p>Strategy list</p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>Card reward</p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>List of rest bosses in a wing</p>
            </div>
          );
      }
    }

    firstRow(bossName, wingName){
     return boss_details.slice(0,4).map((boss, index)=>
          <li className="block" key={index}>
            <div className="block-content">
              <p className="boss-details-nav-el">{boss.name}</p>
              {this.blocks(index, this.props.adventure, wingName, bossName, this.props.boss)}
            </div>
          </li>)
    }

    secondRow(){
      return boss_details.slice(4,5).map((boss, index)=>
          <li className="block" key={index}>
            <div className="block-content">
              <p className="boss-details-nav-el">{boss.boss}</p>
              <div className="top-boss-decks">
                <DeckSnippet />
                <DeckSnippet />
                <DeckSnippet />
              </div>
            </div>
          </li>
      )
    }

  getBossDetailsFromUrl(){
    let boss = adventure_details.map(x=>x.bosses.details.filter(x=>x.url===this.props.details)[0]).filter(x=>x)[0].bosses.filter(x=>x.url===this.props.boss)[0].boss;
    console.log(boss);
    return boss;
  }

  getWingDetailsFromUrl(){
    let wing = adventure_details.map(x=>x.bosses.details.filter(x=>x.url===this.props.details)[0]).filter(x=>x)[0].wing_title;
    console.log(wing);
    return wing;
  }

  render() {
    let bossName = this.getBossDetailsFromUrl();
    let wing = this.getWingDetailsFromUrl();
    return (
        <div className={`boss inner-container ${this.props.details && 'active'}-view`}>
          {adventure_details.slice(0,1).map((adventure, i)=>
            <div key={i} className="boss-guide-header">
              <p className="boss-details-nav-el">{bossName}</p>
              <ul>
                {this.firstRow(bossName, wing)}
                {this.secondRow()}
              </ul>
            </div>
          )}
        </div>
    );
  }
}