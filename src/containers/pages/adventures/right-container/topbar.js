import React, { Component } from 'react';
import { Link } from 'react-router';
import { adventure_detail_tabs } from '../../../../data/adventure-details';
export class Topbar extends Component {

  render() {
    return (
        <div className='topbar'>
          <ul className="content-navigation">
            {adventure_detail_tabs.map( (element, index)=>
              <li key={index} className={`${this.props.adventure} ${this.props.details === element.url && 'active'}`}>
                <Link to={`/adventures/${this.props.adventure}/${element.url}`}>
                  {element.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
  }
}