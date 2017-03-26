import React from 'react';
import _ from 'lodash';
const ChoosenCards = props => {
  const listCards = () => {
    return Object.values(props.deck).map(function (obj, i) {

      return (
          <tr key={i}>
            <td><span className={`hs-icon icon-${_.kebabCase(obj.card.cardSet)}`}></span></td>
            <td>{obj.card.name}</td>
            <td>{obj.count}</td>
            <td><span className={`hs-icon icon-mana-${obj.card.cost}`}></span></td>
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