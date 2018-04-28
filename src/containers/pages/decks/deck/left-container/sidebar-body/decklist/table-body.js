import React from 'react';
import _ from 'lodash';
import Card from './table-row-card';

const TableBody = ({fetchedDeckCards}) => {
  const listCards = () =>{
    let cardNames = Object.keys(fetchedDeckCards);

    return _.map(fetchedDeckCards).map((card, i) =>
        <Card key={i}
              index={i}
              card={card}
              cardNames={cardNames}/>
    )
  };

  return (
      <tbody>
        {listCards()}
      </tbody>
  )
};

export default TableBody;