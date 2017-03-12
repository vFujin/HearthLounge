import React, { Component } from 'react';
import {adventure_details, boss_details} from '../../../../data/adventure-details';
import DeckSnippet from '../../../shared-assets/deck-snippet/deck-snippet';
import NotFound from '../../../shared-assets/not-found';

export class AdventureBoss extends Component {

  blocks(index, adventure, wing, wingUrl, bossName, bossUrl, bossReward) {
    switch (index) {
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
              <img src={`https://raw.githubusercontent.com/xNehel/HearthLounge/master/src/images/adventures/${adventure}/${wingUrl}/${bossUrl}.jpg`}
                   alt={bossName}/>
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
      default:
        return null;
    }
  }

  firstRow(bossName, wingName, bossReward) {
    let adventure = this.props.adventure;
    let wingUrl = this.props.details;
    let bossUrl = this.props.boss;
    return boss_details.slice(0, 4).map((boss, index) =>
        <li className="block" key={index}>
          <div className="block-content">
            <p className="boss-details-nav-el">{boss.name}</p>
            {this.blocks(index, adventure, wingName, wingUrl, bossName, bossUrl, bossReward)}
          </div>
        </li>)
  }

  secondRow() {
    return boss_details.slice(4, 5).map((boss, index) =>
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

  getBossDetailsFromUrl(detail, wing, boss) {
    let detailsArr = adventure_details.map(x => x.bosses.details.filter(x => x.url === wing)[0]).filter(x => x)[0],
        bossArr    = detailsArr.bosses.filter(x => x.url === boss)[0];

    switch (detail) {
      case 'boss':   return bossArr.boss;
      case 'wing':   return detailsArr.wing_title;
      case 'reward': return bossArr.reward;
      default: return null;
    }
  }

  validateUrl() {
    const {adventure, details, boss} = this.props;
    let wing_boss = adventure_details.filter(x => x.adventure === adventure).map(x => x.bosses.details)[0].filter(x => x.url === details)[0].bosses.map(x => x.url).includes(boss);

    if (wing_boss !== true) {
      return <NotFound page="boss" url="adventures/curse-of-naxxramas/bosses"/>;
    }
    else {
      let boss_name = this.getBossDetailsFromUrl('boss', details, boss),
          wing = this.getBossDetailsFromUrl('wing', details, boss),
          reward = this.getBossDetailsFromUrl('reward', details, boss);

      return (
          <div className={`boss inner-container ${this.props.details && 'active'}-view`}>
            {adventure_details.slice(0, 1).map((adventure, i) =>
                <div key={i} className="boss-guide-header">
                  <p className="boss-details-nav-el">{boss_name}</p>
                  <ul>
                    {this.firstRow(boss_name, wing, reward)}
                    {this.secondRow()}
                  </ul>
                </div>
            )}
          </div>
      );
    }
  }

  render() {
    return this.validateUrl();
  }
}