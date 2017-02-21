import React, { Component } from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../../data/expansions';
export class Topbar extends Component {

  render() {

    return (
        <div className='topbar'>
          {topbar_tabs.map( (element, index) =>
              <ul className={`${this.props.expansion === element.expansion && 'active'}-view content-navigation`} key={index}>
                {element.expansion_topbar_tabs.map((element, index) =>
                    <li key={index}
                        className={`${this.props.isActive === element.url && 'active'}`}>
                      <Link to={`/expansions/${this.props.expansion}/${element.url}`}>
                        {element.name}
                      </Link>
                    </li>
                )}
              </ul>
          )}
        </div>
    );
  }
}