import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventures} from '../../data/cards.filters';

export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Przygody</h3>
          <ul className="sidebar-icons">
            {adventures.map((element, index) =>
                <li onClick={this.props.onChange} data-adventure={element.en} key={index}>
                  <Link to={`/przygody/${element.url}`}>
                    <span className={`hs-icon icon-${element.en}`}></span>
                    <p>{element.pl}</p>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}