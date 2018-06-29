import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Icon from "../../../../icon";
import Block from "../../../extension-block";
import {Overview, Rewards, Strategy} from "./blocks";
import {blockSize} from "../../../../../utils/block-size";

const ClassChallenge = ({cards, cardsLoading, challenge, playerClass, windowWidth}) => {
  const {reward} = challenge;

  const overview = <Overview />;
  const rewards = <Rewards extensionCards={cards} cardsLoading={cardsLoading} bossReward={reward}/>;
  const strategy = <Strategy />;

  return (
      <ul className="container__classChallenges--content container__blocks">
        <Block page="class-challenge" title="overview" blockWidth={blockSize(1, windowWidth)} element={overview}/>
        <Block page="class-challenge" title="rewards" blockWidth={blockSize(1, windowWidth)} element={rewards}/>
        <Block page="class-challenge" title="strategy" blockWidth={blockSize(1, windowWidth)} element={strategy}/>
        <Block page="class-challenge" title="your deck" blockWidth={blockSize(1, windowWidth)} element="deck"/>
        <li className="container__blocks--block class-challenge block-width-4">
          <Icon name={playerClass}/>
        </li>
      </ul>
  );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(ClassChallenge);

ClassChallenge.propTypes = {
  cardsLoading: PropTypes.bool.isRequired,
  challenge: PropTypes.object.isRequired,
  playerClass: PropTypes.string.isRequired,
  cards: PropTypes.array
};
