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
                <li onClick={this.props.onAdventureChange} key={index}>
                  <Link to={`/przygody/${element.url}`} className={`${element.en_url} ${this.props.isActive === element.en_url && 'icon-background-active'}`} data-api={element.en} data-url={element.url} data-adventure={element.en_url}>
                    <span data-api={element.en} data-url={element.url} data-adventure={element.en_url} className={`hs-icon icon-${element.en_url}`}></span>
                    <p data-api={element.en} data-url={element.url} data-adventure={element.en_url}>{element.pl}</p>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}