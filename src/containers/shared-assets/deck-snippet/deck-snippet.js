import React, {Component} from 'react';
import DeckSnippetHeader from './deck-snippet-header';
import DeckSnippetBody from './deck-snippet-body';
export class DeckSnippet extends Component {
  render() {
    let prefix='deck-snippet';
    return (
      <div className={prefix}>
        <span className="background-icon hs-icon icon-warlock"></span>
        <DeckSnippetHeader prefix={prefix}/>
        <DeckSnippetBody prefix={prefix}/>
      </div>
    );
  }
}
