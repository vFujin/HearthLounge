import React from 'react';
import {adventure_details, boss_details} from '../../../../data/adventure-details';
import DeckSnippet from '../../../shared-assets/deck-snippet/deck-snippet';

const Boss = ({adventure, details, boss}) => {


  const blocks = (index, adventure, wing, wingUrl, bossName, bossUrl, bossReward) => {
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
              <img
                  src={`https://raw.githubusercontent.com/xNehel/HearthLounge/master/src/images/adventures/${adventure}/${wingUrl}/${bossUrl}.jpg`}
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
  };

  const firstRow = (bossName, wingName, bossReward) => {
    return (
      boss_details.slice(0, 4).map((b, index) =>
        <li className="block" key={index}>
          <div className="block-content">
            <p className="boss-details-nav-el">{b.name}</p>
            {blocks(index, adventure, wingName, details, bossName, boss, bossReward)}
          </div>
        </li>
      )
    )
  };

  const secondRow = () => {
    return (
      boss_details.slice(4, 5).map((boss, index) =>
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
    )
  };

  const getBossDetailsFromUrl = (detail, wing, boss) => {
    let detailsArr = adventure_details.map(x => x.wings.details.filter(x => x.url === wing)[0]).filter(x => x)[0],
        bossArr    = detailsArr.bosses.filter(x => x.url === boss)[0];

    switch (detail) {
      case 'boss':   return bossArr.boss;
      case 'wing':   return detailsArr.wing_title;
      case 'reward': return bossArr.reward;
      default:       return null;
    }
  };

  const content = (details, boss, condition) => {
      let boss_name = getBossDetailsFromUrl('boss', details, boss),
          wing      = getBossDetailsFromUrl('wing', details, boss),
          reward    = getBossDetailsFromUrl('reward', details, boss);
      return (
          <div className="boss inner-container">
            {adventure_details.slice(0, 1).map((adventure, i) =>
                <div key={i} className="boss-guide-header">
                  <p className="boss-details-nav-el">{boss_name}</p>
                  <ul>
                    {firstRow(boss_name, wing, reward)}
                    {secondRow()}
                  </ul>
                </div>
            )}
          </div>
      )
  };

  const validateUrlProps = args => {
    let wing_boss = adventure_details
        .filter(x => x.adventure === adventure)
        .map(x => x.bosses.details)[0]
        .filter(x => x.url === details)[0].bosses.map(x => x.url).includes(boss);

    switch (args) {
      case 'condition': return wing_boss;
      case 'content':   return content(details, boss, wing_boss);
      default:          return null;
    }
  };

  return <div>{content(details, boss)}</div>
};

Boss.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired,
  boss: React.PropTypes.string.isRequired
};

export default Boss;