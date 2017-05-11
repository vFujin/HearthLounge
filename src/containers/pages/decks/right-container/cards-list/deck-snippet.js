import React from 'react';
import {Link} from 'react-router'
import {deckSnippetCells} from '../../../../../data/decks-snippet-cells';
import TitleCell from './deck-snippet-cells/title-cell';
import ManaCurve from './deck-snippet-cells/mana-curve-cell';
import _ from 'lodash';

export const DeckSnippet = (props, {handleTableRowClick} ) => {
  const {hsClass, title, author, deck, cards} = props;

  const deckUrl = `/decks/${hsClass}/123`;
  const cells = (el) =>{
    switch(el) {
      case 'title': return <TitleCell deckUrl={deckUrl} hsClass={hsClass} title={title} author={author}/>;
      case 'mana-curve': return <ManaCurve deck={deck} cards={props.cards} hsClass={hsClass}/>;
      default: return <Link to={deckUrl}>{_.startCase(props[el])}</Link>;
    }
  };

  const mapCells = () =>{
    return deckSnippetCells.map(el=>{
      return <td className={el} key={el}>{cells(el)}</td>
    })
  };
  return (
      <tr key={props.created} className={`deck-snippet ${hsClass} table-row`} onClick={handleTableRowClick}>
        {mapCells()}
      </tr>

  );
};

export default DeckSnippet;