import React from 'react';
import {foo} from "../../../../../firebase/decks/read/adventure";
import Loader from "../../../../../components/loader";
import DeckSnippet from "../../../../../components/deck-snippet/deck-snippet";

const Decklist = ({adventure, decks}) => {
 const a = () => console.log('foo')

  const mapDecks = () =>{
    if(!decks){

      return <Loader />
    } else {
      return decks.map(deck => <DeckSnippet key={deck.deckId} d={deck} handleDeckClick={a}/>)
    }
  };

  return (
      <ul className="container__boss--block-content deckSnippet-wrapper">
        {mapDecks()}
      </ul>
  )
};

export default Decklist;