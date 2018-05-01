import React from 'react';
import _ from 'lodash';
import Card from './card/card';
import DeckCreationCard from "./card/deck-creation-card";

const Content = ({deck, inDeckCreation}) => {
  const listCards = () =>{
    let mergedDeckEntries = Object.entries(deck).map(c => Object.assign(c[1], {name: c[0]}));

    return _.sortBy(mergedDeckEntries, ["cost", "name"]).map(card =>
        <Card key={card.cardId} card={card}/>
    )
  };

  const listDeckCreationCards = () => (
    _.uniqBy(_.sortBy(deck, ['cost', 'name'])).map(card =>
      <DeckCreationCard key={card.cardId} deck={deck} card={card} inDeckCreation={inDeckCreation} />
    )
  );

  return (
      <ul className="decklistSidebar__content">
        {inDeckCreation ? listDeckCreationCards() : listCards()}
      </ul>
  )
};

export default Content;