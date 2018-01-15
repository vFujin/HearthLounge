import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'
import Block from "../../extension-blocks/extension-block";
import Overview from "./boss-blocks/overview";
import Strategy from "../class-challenges/challenges/class-challenge/blocks/strategy";
import Rewards from "../class-challenges/challenges/class-challenge/blocks/rewards";
import WingBosses from "./boss-blocks/wing-bosses";
import Decklist from "./boss-blocks/decklist";
import {blockSize} from "../../../utils/block-size";

const Boss = ({extensionCards, adventure, wing, boss, decks, cardsLoading, type, windowWidth}) => {
  const filteredDecks = _.filter(decks, deck => deck.boss === boss.url);
  const bossOverview = <Overview adventure={adventure.url}
                                 type={type}
                                 wing={wing}
                                 boss={boss}/>;
  const bossStrategy = <Strategy />;
  const bossRewards = <Rewards extensionCards={extensionCards}
                               cardsLoading={cardsLoading}
                               bossReward={boss.reward}/>;
  const wingBosses = <WingBosses adventure={adventure.url}
                                 wing={wing.url}
                                 type={type}
                                 activeBoss={boss.url}
                                 wingBosses={wing.bosses}/>;
  const bossDecklist = <Decklist adventure={adventure.name}
                                 decks={filteredDecks}/>;

  return (
      <ul className="container__blocks">
        <Block page="boss" title="overview" blockWidth={blockSize(1, windowWidth)} element={bossOverview}/>
        <Block page="boss" title="strategy" blockWidth={blockSize(1, windowWidth)} element={bossStrategy}/>
        <Block page="boss" title="rewards" blockWidth={blockSize(1, windowWidth)} element={bossRewards}/>
        <Block page="boss" title="wing bosses" blockWidth={blockSize(1, windowWidth)} element={wingBosses}/>
        <Block page="boss" title="decks" blockWidth={4} element={bossDecklist}/>
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

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Boss);