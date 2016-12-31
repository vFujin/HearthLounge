import React, { Component } from 'react';
import { Link } from 'react-router'
export class CreateDeckBlock extends Component {
  render() {
    return (
        <li className={'home__block create-deck block-width-1'}>
          <Link to={'/stworz-talie-kart'}>
            <div>Stwórz talię</div>
          </Link>
        </li>
    );
  }
}