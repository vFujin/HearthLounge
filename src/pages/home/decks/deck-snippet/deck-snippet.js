import React, { Component } from 'react';
import { DeckSnippetHeader } from './deck-snippet-header';
import { DeckSnippetBody } from './deck-snippet-body';
export class DeckSnippet extends Component {
  render() {
    return (
      <div className="deck">
        <span className="background-icon hs-icon icon-warlock"></span>
        <DeckSnippetHeader/>
        <DeckSnippetBody/>
      </div>
    );
  }
}
