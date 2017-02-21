import React, { Component } from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../../data/adventure-details';
export class Topbar extends Component {

  render() {
    return (
        <div className='topbar'>
          <ul className="content-navigation">
            {topbar_tabs.map( (element, index)=>
              <li key={index} className={`${this.props.adventure} ${this.props.details === element.url && 'active'}`}>
                <Link data-tab={element.url} data-url={element.url} to={`/adventures/${this.props.adventure}/${element.url}`}>
                  {element.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
  }
}