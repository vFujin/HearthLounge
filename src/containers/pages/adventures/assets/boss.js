import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import BossBlock from "../right-container/content/boss-block";

const Boss = ({allCards, adventure, wing, boss, decks}) => {

  let filteredDecks = _.filter(decks, deck => deck.boss === boss.url);
  return (
      <ul className="container__boss">
        <BossBlock blockName="overview" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="strategy" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="rewards" adventure={adventure} wing={wing} boss={boss} allCards={allCards}/>
        <BossBlock blockName="wing bosses" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="decks" adventure={adventure} wing={wing} boss={boss} decks={filteredDecks}/>
      </ul>
  )
};

Boss.propTypes = {
  adventure: PropTypes.object,
  wing: PropTypes.object,
  boss: PropTypes.object,
  allCards: PropTypes.array,
  decks: PropTypes.array
};

export default Boss;