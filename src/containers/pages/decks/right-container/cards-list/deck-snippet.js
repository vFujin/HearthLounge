import React from 'react';
import {Link} from 'react-router-dom'
import {deckSnippetCells} from '../../../../../globals/decks-snippet-cells';
import TitleCell from './deck-snippet-cells/title-cell';

import {timeDifference} from '../../../../../utils/unix-to-date';
import _ from 'lodash';
import ManaCurve from "../../../../../components/mana-curve/mana-curve";

export const DeckSnippet = (props) => {
  const {playerClass, deckId, title, votes, author, deck, created, handleDeckSnippetClick} = props;
  const deckUrl = `/decks/${deckId}/${_.snakeCase(title)}`;
  const cells = (el) =>{
    switch(el) {
      case 'title': return <TitleCell deckUrl={`${deckUrl}`} playerClass={playerClass} title={title} author={author}/>;
      case 'mana-curve': return <ManaCurve deck={deck.cards} max={deck.max} barSpacing="2px" barWidth="4px" showIcons={false} showCount={false}/>;
      case 'created': return <Link to={deckUrl}>{timeDifference(created)}</Link>;
      case 'votes': return <Link to={deckUrl}>{_.trimStart(votes, '0')}</Link>;
      default: return <Link to={deckUrl}>{_.startCase(props[el])}</Link>;
    }
  };

  const mapCells = () =>{
    return deckSnippetCells.map(el=>{
      return <td className={el} key={el}>{cells(el)}</td>
    })
  };
  return (
      <tr id={deckId} key={deckId} className={`deck-snippet ${playerClass} table-row`} onClick={handleDeckSnippetClick}>
        {mapCells()}
      </tr>
  );
};

export default DeckSnippet;