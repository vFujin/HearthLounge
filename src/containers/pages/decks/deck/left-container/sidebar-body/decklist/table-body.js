import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from './table-row-card';

const TableBody = ({fetchedDeckCards, deckEditView, handleCardRemovalClick}) => {
  const listCards = () =>{
    let cardNames = Object.keys(fetchedDeckCards);

    return _.map(fetchedDeckCards).map((card, i) =>
        <Card key={i}
              index={i}
              card={card}
              cardNames={cardNames}
              deckEditView={deckEditView}
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
  deckEditView: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
};