import React, { Component } from 'react';
import {Link} from 'react-router';
import {expansions} from '../../../../data/filters';

export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Expansions</h3>
          <ul className="sidebar-icons">
            {expansions.map((expansion, index) =>
                <li key={index}>
                  <Link to={`/expansions/${expansion.url}/overview`}
                        className={`${expansion.url} ${this.props.expansion === expansion.url && 'active'}`}>
                    <span className={`hs-icon icon-${expansion.url}`}></span>
                    <p>{expansion.name}</p>
                  </Link>
                </li>
            )}
          </ul>
        </div>
    );
  }
}