import React, { Component } from 'react';
export class DeckSnippetHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="hs-class"><span className="hs-icon icon-warlock"></span></div>
        <div className="about">
          <div className="title">Yada yada legend 1</div>
          <div className="author">zrobiony przez (authorname)</div>
          <div className="created">1 dzień temu</div>
        </div>
      </div>
    );
  }
}
