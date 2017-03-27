import React from 'react';
import _ from 'lodash';
const ChoosenCards = props => {
  const {deck} = props;

  const listCards = () => {
    return _.uniqBy(_.sortBy(deck, ['cost', 'name'])).map((card, i) =>
        <tr key={i}>
          <td><span className={`hs-icon icon-${_.kebabCase(card.cardSet)}`}></span></td>
          <td>{card.name}</td>
          <td>{props.countCards(card)}</td>
          <td><span className={`hs-icon icon-mana-${card.cost}`}></span></td>
        </tr>
    );
  };


  return (
      <table className="cards-list">
        <tbody>
        <tr>
          <th>Set</th>
          <th>Cards</th>
          <th>Amount</th>
          <th>Cost</th>
        </tr>
        {listCards()}
        </tbody>
      </table>
  );
};


export default ChoosenCards;