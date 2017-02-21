import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventures} from '../../../../data/filters';

export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Adventures</h3>
          <ul className="sidebar-icons">
            {adventures.map((adventure, index) =>
                <li key={index}>
                  <Link to={`/adventures/${adventure.url}`}
                        className={`${adventure.url} ${this.props.adventure === adventure.url && 'active'}`}>
                    <span className={`hs-icon icon-${adventure.url}`}></span>
                    <p>{adventure.name}</p>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}