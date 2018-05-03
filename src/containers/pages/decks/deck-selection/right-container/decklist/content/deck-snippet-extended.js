import React from 'react';
import {Link} from 'react-router-dom'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Title from './title';
import _ from 'lodash';
import ManaCurve from "../../../../../../../components/mana-curve/mana-curve";
import Icon from "../../../../../../../components/icon";

export const DeckSnippetExtended = ({handleDeckSnippetClick, deckObj}) => {
  const {playerClass, deckId, title, votes, author, deck, mode, created, views, comments} = deckObj;
  const deckUrl = `/decks/${deckId}/${_.snakeCase(title)}`;

  return (
    <li id={deckId} key={deckId} className={`decks__decklist--snippet ${playerClass} table-row`} onClick={handleDeckSnippetClick}>
      <Link to={deckUrl}>
        <Title playerClass={playerClass} title={title} author={author} />

        <div className="decks__decklist--snippet-votes decks__decklist--snippet-hasIcon">
          <Icon name="circle-up" />
          <p>{votes}</p>
        </div>
        <div className="decks__decklist--snippet-mana">
          <ManaCurve deck={deck.cards} max={deck.max} barSpacing="3px" barWidth="5px" barColor={playerClass} showIcons={false} showCount={false}/>
        </div>
        <div className="decks__decklist--snippet-views decks__decklist--snippet-hasIcon">
          <Icon name="views" />
          <p>{views}</p>
        </div>
        <div className="decks__decklist--snippet-mode"><Icon name={mode} type="mode"/></div>
        <div className="decks__decklist--snippet-comments decks__decklist--snippet-hasIcon">
          <Icon name="bubbles2" />
          <p>{comments}</p>
        </div>
        <div className="decks__decklist--snippet-created">
          <p>{distanceInWordsToNow(created, {addSuffix: true})}</p>
        </div>
      </Link>
    </li>
  );
};

export default DeckSnippetExtended;