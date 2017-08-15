import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../components/icon";
import Block from "../block";
import Overview from "./class-challenge-blocks/overview";
import Rewards from "../shared-blocks/rewards";
import Strategy from "../shared-blocks/strategy";

const ClassChallenge = ({cards, challenge, playerClass}) => {
  const {reward} = challenge;
  const overview = <Overview />;
  const rewards = <Rewards allCards={cards.allCards} bossReward={reward}/>;
  const strategy = <Strategy />;
  return (
      <ul className="classChallenges__content container__blocks">
        <Block page="class-challenge" title="overview" element={overview}/>
        <Block page="class-challenge" title="rewards" element={rewards}/>
        <Block page="class-challenge" title="strategy" element={strategy}/>
        <Block page="class-challenge" title="your deck" element="deck"/>
        <li className="container__blocks--block class-challenge">
          <Icon name={playerClass}/>
        </li>
      </ul>
  );
};

export default ClassChallenge;

ClassChallenge.propTypes = {
  cards: PropTypes.array.isRequired,
  challenge: PropTypes.object.isRequired,
  playerClass: PropTypes.string.isRequired
};