import React from 'react';
import _ from 'lodash';
const ChoosenCards = props => {
  const listCards = () =>{
    return props.deck.map(card=>
      <tr key={card.cardId}>
        <td><span className={`hs-icon icon-${_.kebabCase(card.cardSet)}`}></span></td>
        <td>{card.name}</td>
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
          <th>Cost</th>
        </tr>
        {listCards()}
        </tbody>
      </table>
  );
};


export default ChoosenCards;