import React, { Component } from 'react';
import { Link } from 'react-router'
export class DecksBlock extends Component {
  render() {
    return (
      <li className={'decks block-width-3'}>
        <Link to={'/talie-kart'}>
          <div>Talie kart</div>
        </Link>
      </li>
    );
  }
}