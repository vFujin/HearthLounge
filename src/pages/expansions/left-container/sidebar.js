import React, { Component } from 'react';
import {Link} from 'react-router';
import {expansions} from '../../../data/card-filters';

export class Sidebar extends Component {

  render() {

    return (
        <div className="sidebar">
          <h3 className="filter-header">Dodatki</h3>
          <ul className="sidebar-icons">
            {expansions.map((element, index) =>
                <li key={index}>
                  <Link onClick={this.props.onExpansionChange} to={`/dodatki/${element.url}`}
                        className={`${element.en_url} ${this.props.isActive === element.url && 'active'}`}
                        data-api={element.en}
                        data-url={element.url}
                        data-expansion={element.en_url}>
                    <span data-api={element.en} data-url={element.url} data-expansion={element.en_url} className={`hs-icon icon-${element.en_url}`}></span>
                    <p data-api={element.en} data-url={element.url} data-expansion={element.en_url}>{element.pl}</p>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}