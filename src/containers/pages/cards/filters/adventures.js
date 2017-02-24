import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventures} from '../../../../data/filters';

export class AdventureFilter extends Component {
  render() {
    return (
        <div>
          <h3>Adventures</h3>
          <ul className="sidebar-icons">
            {adventures.map((element, index) =>
                <li key={index}>
                  <Link to={`cards?adventure=${element.url}`}>
                    <span className={`hs icon-${element.url}`}></span>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}