import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../icon";
import Block from "../../../../extension-blocks/extension-block";
import {Overview, Rewards, Strategy} from "./blocks";

const ClassChallenge = ({cards, cardsLoading, challenge, playerClass}) => {
  const {reward} = challenge;
  const overview = <Overview />;
  const rewards = <Rewards extensionCards={cards} cardsLoading={cardsLoading} bossReward={reward}/>;
  const strategy = <Strategy />;

  return (
      <ul className="container__classChallenges--content container__blocks">
        <Block page="class-challenge" title="overview" element={overview}/>
        <Block page="class-challenge" title="rewards" element={rewards}/>
        <Block page="class-challenge" title="strategy" element={strategy}/>
        <Block page="class-challenge" title="your deck" element="deck"/>
        <li className="container__blocks--block block-width-4 class-challenge">
          <Icon name={playerClass}/>
        </li>
      </ul>
  );
};

export default ClassChallenge;

ClassChallenge.propTypes = {
  cardsLoading: PropTypes.bool.isRequired,
  challenge: PropTypes.object.isRequired,
  playerClass: PropTypes.string.isRequired,
  cards: PropTypes.array
};