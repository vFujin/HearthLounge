import React, { Component } from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../data/adventure-details';
export class Topbar extends Component {

  render() {
    return (
        <div className='topbar'>
          <ul className="adventure-content-navigation">
            {topbar_tabs.map( (element, index)=>
              <li onClick={this.props.onDetailsChange} key={index} className={this.props.isActive === element.url && 'active'}>
                <Link data-tab={element.url} to={`/przygody/${this.props.selectedAdventureUrl}/${element.url}`}>
                  {element.tab}
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
  }
}