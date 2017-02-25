import React, { Component } from 'react';
import {expansions} from '../../../data/filters';
import {Link} from 'react-router';

export class ExpansionFilter extends Component {
  render() {
    return (
        <div>
          <h3>Expansions</h3>
          <ul className="sidebar-icons">
          {expansions.map((element, index) =>
              <li value={element.url} key={index}>
                <Link to={`${this.props.page}?expansion=${element.url}`}>
                  <span className={`hs icon-${element.url}`}></span>
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