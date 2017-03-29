import React from 'react';
import _ from 'lodash';
const ChoosenCards = props => {
  const {deck, countCards} = props;
console.log(props.params);
  const gradient = params => {
    return {
      'background': '-moz-linear-gradient(left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
      'background': '-webkit-linear-gradient(left, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
      'background': 'linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
      'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1)",
    }
  };

  const listCards = () => {
    return _.uniqBy(_.sortBy(deck, ['cost', 'name'])).map((card, i) =>
        <tr key={i} className={gradient(props.params)}>
          <td><span className={`hs-icon icon-${_.kebabCase(card.cardSet)}`}></span></td>
          <td>{card.name}</td>
          <td>{countCards(card)}</td>
          <td><span className={`hs-icon icon-mana-${card.cost}`}></span></td>
        </tr>
    );
  };


  return (
      <table className="cards-list">
        <tbody>
        <tr>
          <th>Set</th>
          <th>Card</th>
          <th>Amount</th>
          <th>Cost</th>
        </tr>
        {listCards()}
        </tbody>
      </table>
  );
};


export default ChoosenCards;