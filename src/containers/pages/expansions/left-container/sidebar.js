import React, { Component } from 'react';
import {Link} from 'react-router';
import {expansions} from '../../../../data/filters';

export class Sidebar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="sidebar">
          {console.log(this.props.expansion)}
          <h3 className="filter-header">Expansions</h3>
          <ul className="sidebar-icons">
            {expansions.map((expansion, index) =>
                <li key={index}>
                  <Link onClick={this.props.onExpansionChange}
                        to={`/expansions/${expansion.url}`}
                        className={`${expansion.url} ${this.props.expansion === expansion.url && 'active'}`}
                        data-expansion={expansion.url}>
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