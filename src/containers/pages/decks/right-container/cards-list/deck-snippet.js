import React from 'react';
import {deckSnippetCells} from '../../../../../data/decks-snippet-cells';
import TitleCell from './deck-snippet-cells/title-cell';
import DefaultCell from './deck-snippet-cells/default-cell';
import ManaCurve from './deck-snippet-cells/mana-curve-cell';

export const DeckSnippet = (props, {handleTableRowClick} ) => {
  const {hsClass, title, author, deck} = props;
  const deckUrl = `/decks/${hsClass}/123`;

  const mapCells = () =>{
    return deckSnippetCells.map(el=>{
      switch(el){
        case 'title': return <TitleCell el={el} deckUrl={deckUrl} hsClass={hsClass} title={title} author={author} />;
        case 'mana-curve': return <ManaCurve el={el} deck={deck} hsClass={hsClass}/>;
        default: return <DefaultCell deckUrl={deckUrl} props={props} el={el}/>;
      }
    })
  };
  return (
      <tr className={`deck-snippet ${hsClass} table-row`} onClick={handleTableRowClick}>
        {mapCells()}
      </tr>

  );
};

export default DeckSnippet;