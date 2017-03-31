import React from 'react';
import _ from 'lodash';

const ChoosenCards = ({countCards, deck, deckDetails}) => {

  const listCards = () => {
    return _.uniqBy(_.sortBy(deck, ['cost', 'name'])).map((card, i) =>
        <tr key={i} className={`${_.toLower(card.rarity)} gradient`}>
          <td><span className={`hs-icon icon-${_.kebabCase(card.cardSet)}`}></span></td>
          <td>{card.name}</td>
          <td>{countCards(card)}</td>
          <td><span className={`hs-icon icon-mana-${card.cost}`}></span></td>
        </tr>
    );
  };

  return (
      <div className={`list cards-list ${deckDetails === true ? 'display-none' : ''} `}>
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
  countCards: React.PropTypes.func,
  deck: React.PropTypes.array,
  deckDetails: React.PropTypes.bool
};

export default ChoosenCards;