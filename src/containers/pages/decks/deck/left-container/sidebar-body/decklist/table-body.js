import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from './table-row-card';

const TableBody = ({allCards, cards, deckEditing, handleCardRemovalClick}) => {
  console.log(allCards);
  const listCards = () =>{
    let cardNames = Object.keys(cards);
    return _.map(cards).map((card, i) =>
        <Card key={i}
              index={i}
              card={card}
              allCards={allCards}
              cardNames={cardNames}
              deckEditing={deckEditing}
              handleCardRemovalClick={handleCardRemovalClick}/>
    )
  };

  return (
      <tbody>
        {listCards()}
      </tbody>
  )
};

export default TableBody;

TableBody.propTypes = {
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  cards: PropTypes.object
};