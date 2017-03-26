import React from 'react';
import _ from 'lodash';
const ChoosenCards = props => {
  function countCards(){
    console.log(props.deck)
  }
  const listCards = () => {
    return _.uniqBy(props.deck).map(function (card, i) {

      return (
          <tr key={i}>
            <td><span className={`hs-icon icon-${_.kebabCase(card.cardSet)}`}></span></td>
            <td>{card.name}</td>
            <td>{countCards()}</td>
            <td><span className={`hs-icon icon-mana-${card.cost}`}></span></td>
          </tr>
      );
    });
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