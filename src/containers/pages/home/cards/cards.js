import React, { Component } from 'react';
import { Link } from 'react-router'
export class CardsBlock extends Component {
  render() {
    return (
        <li className={'home__block cards block-width-1'}>
          <Link to={'/karty'}>
            <div className="header">Karty</div>
            <div className="icon">
              <span className="hs-icon icon-card"></span>
            </div>
          </Link>

        </li>
    );
  }
}