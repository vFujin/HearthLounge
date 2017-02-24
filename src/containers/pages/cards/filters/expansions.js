import React, { Component } from 'react';
import {expansions} from '../../../../data/filters';
import {Link} from 'react-router';

export class ExpansionFilter extends Component {
  render() {
    return (
        <div>
          <h3>Expansions</h3>
          <ul className="sidebar-icons">
          {expansions.map((element, index) =>
              <li value={element.url} key={index}>
                <Link to={`cards?expansion=${element.url}`}>
                  <span className={`hs icon-${element.url}`}></span>
                </Link>
              </li>
          )}
          </ul>
        </div>
    );
  }
}