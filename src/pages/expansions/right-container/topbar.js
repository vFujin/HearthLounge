import React, { Component } from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../data/expansion-details';
export class Topbar extends Component {

  render() {

    return (
        <div className='topbar'>
          {topbar_tabs.map( (element, index) =>
          <ul className={`${this.props.selectedExpansionClass === element.expansion && 'active'}-view content-navigation`} key={index}>
            {element.expansion_topbar_tabs.map((element, index) =>
                <li onClick={this.props.onTabChange}
                    key={index}
                    className={`${this.props.isActive === element.url && 'active'} ${this.props.selectedExpansionClass}`}>
                  <Link data-tab={element.url} data-url={element.en_url} to={`/dodatki/${this.props.sidebarActiveTab}/${element.url}`}>
                    {element.tab}
                  </Link>
                </li>
            )}
          </ul>
          )}
        </div>
    );
  }
}