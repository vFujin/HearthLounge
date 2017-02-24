import React, { Component } from 'react';
import {Link} from 'react-router';
import {rarity} from '../../../../data/filters'
export class RarityFilter extends Component {
  render() {
    return (
        <div>
          <h3>Rarity</h3>
          <ul className="sidebar-icons rarity">
            {rarity.map((element, index) =>
              <li className={element.name.toLowerCase()} key={index}>
                <Link to={`cards?rarity=${element.name.toLowerCase()}`}>
                  <span className={`hs icon-rarity`}></span>
                  <div className="tooltip">
                    <div className="caret-up"></div>
                    <p>{element.name}</p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
  }
}