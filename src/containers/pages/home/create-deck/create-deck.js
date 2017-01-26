import React, { Component } from 'react';
import { Link } from 'react-router'
export class CreateDeckBlock extends Component {
  render() {
    return (
        <li className={'home__block create-deck block-width-1'}>
          <Link to={'/stworz-talie-kart'}>
            <div className="header">Stwórz talię</div>
            <div className="icon">
              <span className="hs-icon icon-create-deck"></span>
            </div>
          </Link>

        </li>
    );
  }
}