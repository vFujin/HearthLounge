import React from 'react';
import {Link} from 'react-router'
import {deckSnippetCells} from '../../../../../data/decks-snippet-cells';
import TitleCell from './deck-snippet-cells/title-cell';
import ManaCurve from './deck-snippet-cells/mana-curve-cell';
import _ from 'lodash';

export const DeckSnippet = (props) => {
  const {hsClass, deckId, title, author, deck, handleDeckSnippetClick} = props;
  const deckUrl = `/decks/${hsClass}/${deckId}/${_.snakeCase(title)}`;
  const cells = (el) =>{
    switch(el) {
      case 'title': return <TitleCell deckUrl={`${deckUrl}`} hsClass={hsClass} title={title} author={author}/>;
      case 'mana-curve': return <ManaCurve deck={deck} deckUrl={deckUrl} hsClass={hsClass}/>;
      default: return <Link to={deckUrl}>{_.startCase(props[el])}</Link>;
    }
  };

  const mapCells = () =>{
    return deckSnippetCells.map(el=>{
      return <td className={el} key={el}>{cells(el)}</td>
    })
  };
  return (
      <tr id={deckId} key={deckId} className={`deck-snippet ${hsClass} table-row`} onClick={handleDeckSnippetClick}>
        {mapCells()}
      </tr>

  );
};

export default DeckSnippet;