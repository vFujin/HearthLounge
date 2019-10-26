import React from 'react';
import Loader from '../../../loaders/diamond/loader';
import DeckSnippet from '../../../deck-snippet/deck-snippet';

const Decklist = ({ decks }) => {
  const a = () => null;

  const mapDecks = () => {
    if (!decks) {
      return <Loader />;
    } else {
      return decks.map(deck => (
        <DeckSnippet key={deck.deckId} d={deck} handleDeckClick={a} />
      ));
    }
  };

  return (
    <ul className="container__blocks--block-content deckSnippet-wrapper">
      {mapDecks()}
    </ul>
  );
};

export default Decklist;
