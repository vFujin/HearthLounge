import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Icon from "../../../../icon";

const OptionCards = ({card}) => {
  const {rarity, name, cost, cardSet} = card;
  console.log(_.kebabCase(_.toLower(cardSet)));
  return (
    <li className={`${_.toLower(rarity)} gradient-full`}>
      <Icon name={_.kebabCase(_.toLower(cardSet))} type="set"/>
      <p>{name}</p>
      <Icon name={cost} type="mana"/>
    </li>
  )
};

export default OptionCards;

OptionCards.propTypes = {
  card: PropTypes.object
};