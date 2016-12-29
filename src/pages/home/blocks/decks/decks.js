import React, { Component } from 'react';
import { Link } from 'react-router'
import { hs_class } from '../../../../data/cards.filters';
export class DecksBlock extends Component {
  render() {
    return (
      <li className={'home__block decks block-width-3'}>
        <ul className="class-selection">
          {hs_class.map( (element, index) =>
            <li key={index}><span className={"hs-icon icon-"+element.en}></span></li>
          )}
        </ul>
        <ul className="mode-selection">
          <li>Standard</li>
          <li>Dzicz</li>
          <li>Karczemna Bójka</li>
          <li>Przygoda</li>
        </ul>
        <div className="hot-decks">

        </div>
      </li>
    );
  }
}