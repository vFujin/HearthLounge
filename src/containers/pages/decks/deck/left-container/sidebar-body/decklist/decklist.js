import React from 'react';
import PropTypes from 'prop-types';
import TableBody from "./table-body";
import TableHead from "./table-head";

const Decklist = ({allCards, cards, deckEditView, handleCardRemovalClick}) => {
  return (
      <div className="list cards-list">
        <div className="table-scroll">
          <table>
            <TableHead deckEditView={deckEditView}/>
            <TableBody cards={cards}
                       allCards={allCards}
                       deckEditView={deckEditView}
                       handleCardRemovalClick={handleCardRemovalClick}/>
          </table>
        </div>
      </div>
  )
};

export default Decklist;

Decklist.propTypes = {
  deckEditView: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  cards: PropTypes.object
};