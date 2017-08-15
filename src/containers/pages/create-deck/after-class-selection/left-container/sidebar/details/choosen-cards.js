import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {cardRarityBackground} from "../../../../../../../utils/deck/card-rarity-background"
import Icon from "../../../../../../../components/icon";

const ChoosenCards = ({countCards, deck}) => {

  const removeApostrophe = (string) =>{
    return _.replace(string.toLowerCase(), "'", "");
  };

  const listCards = () => {
    return _.uniqBy(_.sortBy(deck, ['cost', 'name'])).map((card, i) =>
        <tr key={i} className={cardRarityBackground(card.rarity)}>
          <td><Icon name={removeApostrophe(_.kebabCase(card.cardSet))} type="set"/></td>
          <td>{card.name}</td>
          <td>{countCards(card)}</td>
          <td><Icon name={card.cost} type="mana"/></td>
        </tr>
    );
  };

  return (
      <div className="list cards-list">
        <div className="table-scroll">
        <table>
          <thead>
          <tr>
            <th>Set</th>
            <th>Card</th>
            <th>Amount</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
          {listCards()}
          </tbody>
        </table>
      </div>
      </div>
  );
};

ChoosenCards.propTypes = {
  countCards: PropTypes.func,
  deck: PropTypes.array,
  deckDetails: PropTypes.bool
};

export default ChoosenCards;