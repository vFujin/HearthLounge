import React from 'react';

const ChoosenCards = props => {
  const listCards = () =>{
    return props.deck.map(card=>
      <tr>
        <td>{card.name}</td>
        <td><span className={`hs-icon icon-mana-${card.cost}`}></span></td>
      </tr>
    );
  };
  return (
      <table className="cards-list">
        <tbody>
        <tr>
          <th>Cards</th>
          <th>Cost</th>
        </tr>
        {listCards()}
        </tbody>
      </table>
  );
};

export default ChoosenCards;