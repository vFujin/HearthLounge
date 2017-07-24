import React  from 'react';
import DeckSnippetHeader from './deck-snippet-header';
import DeckSnippetBody from './deck-snippet-body';

const DeckSnippet = () => {
  let prefix = 'deck-snippet';
  return (
      <div className={`${prefix} warlock active-on-hover`}>
        <span className="background-icon hs-icon icon-brawl"></span>
        <DeckSnippetHeader prefix={prefix}/>
        <DeckSnippetBody prefix={prefix}/>
      </div>
  );
};

export default DeckSnippet;
