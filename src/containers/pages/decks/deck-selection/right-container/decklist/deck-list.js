import React from 'react';
import { connect } from "react-redux";
import Loader from '../../../../../../components/loaders/diamond/loader';
import DeckSnippetExtended from './content/deck-snippet-extended';
import Topbar from "./topbar/topbar";
import DeckSnippet from "../../../../../../components/deck-snippet/deck-snippet";
import './styles/decklist-styles.css';
import './styles/decklist-mobile-styles.css';

const DeckList = ({decks, windowWidth, handleDeckSnippetClick}) => {
  const mapDecks = () => decks.all.map(deckObj  => {
      if (windowWidth <= 815) {
        return <li className="deckSnippet__wrapper"><DeckSnippet d={deckObj} handleDeckClick={handleDeckSnippetClick}/></li>
      } else {
        return <DeckSnippetExtended handleDeckSnippetClick={handleDeckSnippetClick} deckObj={deckObj}/>
      }
    }
  );

  return (
  <div className={`decks__decklist ${windowWidth <= 815 ? "decks__decklist--mobile" : undefined}`}>
    {windowWidth > 815 && <Topbar/>}
    <ul className="decks__decklist--content">
      {decks.loading && <Loader />}
      {!decks.loading && decks.all.length > 0 && mapDecks()}
      {!decks.loading && !decks.all && <div>There are no decks to show.</div>}
    </ul>
  </div>
  )
};

const mapStateToProps = state => {
  const { windowWidth } = state.app.windowSize;
  const { decks } = state.decks;
  return { windowWidth, decks };
};

export default connect(mapStateToProps)(DeckList);