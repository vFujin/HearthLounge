import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from './table-row-card';

const TableBody = ({cards, deckEditing, handleCardRemovalClick}) => {
  const listCards = () =>{
    let cardNames = Object.keys(cards);
    return _.map(cards).map((card, i) =>
        <Card key={i}
              index={i}
              card={card}
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