import React, { Component } from 'react';

import {boss_details} from '../../../../data/boss-details';
import {adventure_details} from '../../../../data/adventure-details';
import {DeckSnippet} from '../../../shared-assets/deck-snippet/deck-snippet';
export class AdventureBoss extends Component {

    blocks(index, adventure, wing, wingUrl, bossName, bossUrl, bossReward){
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
              {console.log(wingUrl)}
              <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${wingUrl}/${bossUrl}.jpg`} alt={bossName}/>
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
              <p>{bossReward}</p>
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

    firstRow(bossName, wingName, bossReward){
      let adventure = this.props.adventure;
      let wingUrl = this.props.details;
      let bossUrl = this.props.boss;
     return boss_details.slice(0,4).map((boss, index)=>
          <li className="block" key={index}>
            <div className="block-content">
              <p className="boss-details-nav-el">{boss.name}</p>
              {this.blocks(index, adventure, wingName, wingUrl, bossName, bossUrl, bossReward)}
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

    getDetailsFromUrl(detail){
      let detailsArr = adventure_details.map(x=>x.bosses.details.filter(x=>x.url===this.props.details)[0]).filter(x=>x)[0];
      let bossArr = detailsArr.bosses.filter(x=>x.url===this.props.boss)[0];
      switch(detail){
        case 'boss':
          return bossArr.boss;
        case 'wing':
          return detailsArr.wing_title;
        case 'reward':
          return bossArr.reward
      }
    }

  render() {
    let boss = this.getDetailsFromUrl('boss');
    let wing = this.getDetailsFromUrl('wing');
    let reward = this.getDetailsFromUrl('reward');

    return (
      <div className={`boss inner-container ${this.props.details && 'active'}-view`}>
        {adventure_details.slice(0,1).map((adventure, i)=>
          <div key={i} className="boss-guide-header">
            <p className="boss-details-nav-el">{boss}</p>
            <ul>
              {this.firstRow(boss, wing, reward)}
              {this.secondRow()}
            </ul>
          </div>
        )}
      </div>
    );
  }
}