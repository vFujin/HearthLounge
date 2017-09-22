import React from 'react';
import  _ from 'lodash';
import Loader from '../../../../../components/loader';
import DeckSnippet from '../../right-container/cards-list/deck-snippet';

const DeckList = ({decks, handleDeckSnippetClick}) => {
  const mapDecks = () =>{
      return _.map(decks.all).map(d  => {
        const {deckId, playerClass, title, votes, deck, created, archetype, author, type, views} = d;
        return <DeckSnippet handleDeckSnippetClick={handleDeckSnippetClick}
                            key={deckId}
                            deckId={deckId}
                            playerClass={playerClass}
                            title={title}
                            votes={votes}
                            deck={deck}
                            created={created}
                            archetype={archetype}
                            author={author}
                            type={type}
                            views={views}/>
      })
  };



  return (
  <div className="table-scroll">
    <table className="shared-table">
      <thead>
      <tr>
        <td className="title"><p>Name</p></td>
        <td className="playerClass"><p>Class</p></td>
        <td className="votes"><p>Rating</p></td>
        <td className="views"><p>Views</p></td>
        <td className="mana-curve"><p>Mana</p></td>
        <td className="type"><p>Type</p></td>
        <td className="created"><p>Created</p></td>
      </tr>
      </thead>
      {
        decks.loading
          ? <Loader/>
          : <tbody>
            {mapDecks()}
            </tbody>
      }

    </table>
  </div>
  )
};

export default DeckList;