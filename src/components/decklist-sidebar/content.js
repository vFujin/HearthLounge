import React from 'react';
import _ from 'lodash';
import Card from './card';

const Content = ({fetchedDeckCards}) => {
  const listCards = () =>{
    let cardNames = Object.keys(fetchedDeckCards);

    return _.sortBy(fetchedDeckCards, "cost").map((card, i) =>
        <Card key={i}
              index={i}
              card={card}
              cardNames={cardNames}/>
    )
  };

  return (
      <ul className="decklistSidebar__content">
        {listCards()}
      </ul>
  )
};

export default Content;