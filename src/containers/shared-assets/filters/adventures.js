import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventures} from '../../../data/filters';

export class AdventureFilter extends Component {
  render() {
    return (
        <div>
          <h3>Adventures</h3>
          <ul className="sidebar-icons">
            {adventures.map((element, index) =>
                <li key={index}>
                  <Link to={`/${this.props.page}?adventure=${element.url}`}>
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