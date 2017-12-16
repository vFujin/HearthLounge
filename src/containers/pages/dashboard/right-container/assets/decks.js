import React from 'react';
import Loader from "../../../../../components/loaders/loader";
import DeckSnippet from "../../../../../components/deck-snippet/deck-snippet";

const Decks = ({activeUserDecks}) =>{
  const {loading, all} = activeUserDecks;

  const decks = () => all.map(deck => <li key={deck.deckId}><DeckSnippet d={deck} handleDeckClick={() => console.log(deck.deckId)}/></li>);

  return (
    <div className="decks">
      {
        loading
          ? <Loader/>
          : (all && all.length > 0) ? <ul>Your decks: <br/> {decks()}</ul> : <p>You don't have any decks. Create one!</p>
      }
    </div>
  )
};

export default Decks;