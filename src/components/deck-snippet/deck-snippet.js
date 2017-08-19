import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import _ from "lodash";
import Icon from "../icon";
import DeckSnippetHeader from "./header/deck-snippet-header";
import DeckSnippetBody from "./body/deck-snippet-body";

const DeckSnippet = ({d, handleDeckClick}) => {
  const {adventure, archetype, comments, created, deck, deckId, playerClass, title, type, username, views, votes} = d;


  return (
      <Link to={`decks/${playerClass}/${deckId}/${_.kebabCase(title)}`}
            onClick={handleDeckClick}
            id={deckId}
            className={`deckSnippet ${playerClass} active-on-hover`}>
        <Icon name={type === 'adventures' ? _.kebabCase(adventure) : type}
              className="background-icon"
              type="set" />
        <DeckSnippetHeader title={title}
                           username={username}
                           playerClass={playerClass}
                           created={created}/>
        <DeckSnippetBody comments={comments}
                         playerClass={playerClass}
                         archetype={archetype}
                         deck={deck}
                         views={views}
                         votes={votes}/>
      </Link>
  );
};

export default DeckSnippet;

DeckSnippet.propTypes = {
  handleDeckClick: PropTypes.func.isRequired,
  d: PropTypes.shape({
  adventure: PropTypes.string,
  archetype: PropTypes.string,
  comments: PropTypes.number,
  created: PropTypes.number,
  deck: PropTypes.object,
  deckId: PropTypes.string,
  playerClass: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  username: PropTypes.string,
  views: PropTypes.number,
  votes: PropTypes.number
  })
};


