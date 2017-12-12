import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Icon from "../../../../icon";

const OptionCards = ({card}) => {
  const {dbfId, rarity, name, cost, cardSet} = card;
  return (
    <li key={dbfId} className={`${_.toLower(rarity)} gradient-full`}>
      <Icon name={cardSet} type="set"/>
      <p>{name}</p>
     <Icon name={cost} type="mana"/>
    </li>
  )
};

export default OptionCards;

OptionCards.propTypes = {
  card: PropTypes.object
};