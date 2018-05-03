import React from 'react';
import Loader from '../../../../../../components/loaders/loader';
import DeckSnippetExtended from './content/deck-snippet-extended';
import Topbar from "./topbar/topbar";
import './decklist-styles.css';

const DeckList = ({decks, handleDeckSnippetClick}) => {
  const mapDecks = () => decks.all.map(deckObj  =>
    <DeckSnippetExtended handleDeckSnippetClick={handleDeckSnippetClick} deckObj={deckObj}/>
  );

  return (
  <div className="decks__decklist">
    <Topbar/>
    <ul className="decks__decklist--content">
      {
        decks.loading
          ? <Loader/>
          : mapDecks()
      }
    </ul>
  </div>
  )
};

export default DeckList;