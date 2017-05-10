import React from 'react';
import  _ from 'lodash';
import Loader from '../../../../../utils/loader';
import DeckSnippet from '../../right-container/cards-list/deck-snippet';

const DeckList = ({decks, handleTableRowClick, cards}) => {

  const mapDecks = () =>{

    if(decks && decks.length<1){
      return <tr><td><Loader/></td></tr>
    }
    else {
      return _.map(decks).map(deck => {

        return <DeckSnippet handleTableRowClick={handleTableRowClick}
                            hsClass={deck.hsClass}
                            title={deck.title}
                            votes={deck.upvotes - deck.downvotes}
                            deck={deck.deck}
                            created={deck.created}
                            archetype={deck.archetype}
                            author={deck.author}
                            type={deck.type}
                            views={deck.views}
                            cards={cards}/>
      })
    }
  };
  return (
      <table className="shared-table">
        <tbody>
        <tr>
          <td className="name">Name</td>
          <td className="class">Class</td>
          <td className="rating">Rating</td>
          <td className="views">Views</td>
          <td className="mana-curve">Mana</td>
          <td className="type">Type</td>
          <td className="created">Created</td>
        </tr>
        {mapDecks()}
        </tbody>
      </table>
  )
};

export default DeckList;