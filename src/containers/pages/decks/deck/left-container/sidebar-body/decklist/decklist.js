import React from 'react';
import PropTypes from 'prop-types';
import TableBody from "./table-body";
import TableHead from "./table-head";

const Decklist = ({allCards, cards, deckEditing, handleCardRemovalClick}) => {
  return (
      <div className="list cards-list">
        <div className="table-scroll">
          <table>
            <TableHead deckEditing={deckEditing}/>
            <TableBody cards={cards}
                       allCards={allCards}
                       deckEditing={deckEditing}
                       handleCardRemovalClick={handleCardRemovalClick}/>
          </table>
        </div>
      </div>
  )
};

export default Decklist;

Decklist.propTypes = {
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  cards: PropTypes.object
};