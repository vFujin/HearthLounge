import React  from 'react';
import {Link} from 'react-router';
import DeckSnippetHeader from './deck-snippet-header';
import DeckSnippetBody from './deck-snippet-body';
import _ from "lodash";

const DeckSnippet = ({d, handleDeckClick}) => {
  const {adventure, archetype, comments, created, deck, deckId, hsClass, title, type, username, views, votes} = d;
  let prefix = 'deck-snippet';
  return (
      <Link to={`decks/${hsClass}/${deckId}/${_.kebabCase(title)}`}
            onClick={handleDeckClick}
            id={deckId}
            className={`${prefix} component ${hsClass} active-on-hover`}>
        <span className={`background-icon hs-icon icon-${type === 'adventures' ? _.kebabCase(adventure) : type}`}></span>
        <DeckSnippetHeader prefix={prefix}
                           title={title}
                           username={username}
                           hsClass={hsClass}
                           created={created}/>
        <DeckSnippetBody prefix={prefix}
                         comments={comments}
                         hsClass={hsClass}
                         archetype={archetype}
                         deck={deck}
                         views={views}
                         votes={votes}/>
      </Link>
  );
};

export default DeckSnippet;
