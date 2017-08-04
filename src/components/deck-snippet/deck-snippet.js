import React  from 'react';
import {Link} from 'react-router';
import _ from "lodash";
import Icon from "../icons/icon";
import DeckSnippetBody from "./body/deck-snippet-body";
import DeckSnippetHeader from "./header/deck-snippet-header";

const DeckSnippet = ({d, handleDeckClick}) => {
  const {adventure, archetype, comments, created, deck, deckId, hsClass, title, type, username, views, votes} = d;

  return (
      <Link to={`decks/${hsClass}/${deckId}/${_.kebabCase(title)}`}
            onClick={handleDeckClick}
            id={deckId}
            className={`deckSnippet component ${hsClass} active-on-hover`}>
        <Icon name={type === 'adventures' ? _.kebabCase(adventure) : type} className="background-icon" type="set" />
        <DeckSnippetHeader title={title}
                           username={username}
                           hsClass={hsClass}
                           created={created}/>
        <DeckSnippetBody comments={comments}
                         hsClass={hsClass}
                         archetype={archetype}
                         deck={deck}
                         views={views}
                         votes={votes}/>
      </Link>
  );
};

export default DeckSnippet;


