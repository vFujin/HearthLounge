import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import Block from "../../extension-blocks/extension-block";
import Overview from "./boss-blocks/overview";
import Strategy from "../../../containers/pages/adventures/assets/shared-blocks/strategy";
import Rewards from "../../../containers/pages/adventures/assets/shared-blocks/rewards";
import WingBosses from "./boss-blocks/wing-bosses";
import Decklist from "./boss-blocks/decklist";

const Boss = ({extensionCards, adventure, wing, boss, decks, cardsLoading}) => {
  let filteredDecks = _.filter(decks, deck => deck.boss === boss.url);


  const bossOverview = <Overview adventure={adventure.url}
                                 wing={wing}
                                 boss={boss}/>;
  const bossStrategy = <Strategy />;
  const bossRewards = <Rewards extensionCards={extensionCards}
                               cardsLoading={cardsLoading}
                               bossReward={boss.reward}/>;
  const wingBosses = <WingBosses adventure={adventure.url}
                                 wing={wing.url}
                                 activeBoss={boss.url}
                                 wingBosses={wing.bosses}/>;
  const bossDecklist = <Decklist adventure={adventure.adventure}
                                 decks={filteredDecks}/>;

  return (
      <ul className="container__blocks">
        <Block page="boss" title="overview" element={bossOverview}/>
        <Block page="boss" title="strategy" element={bossStrategy}/>
        <Block page="boss" title="rewards" element={bossRewards}/>
        <Block page="boss" title="wing bosses" element={wingBosses}/>
        <Block page="boss" title="decks" element={bossDecklist}/>
      </ul>
  )
};

Boss.propTypes = {
  adventure: PropTypes.object,
  wing: PropTypes.object,
  boss: PropTypes.object,
  extensionCards: PropTypes.array,
  decks: PropTypes.array,
  cardsLoading: PropTypes.bool
};

export default Boss;