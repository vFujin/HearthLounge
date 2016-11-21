import React, { Component } from 'react';
import { Link } from 'react-router'
import {navItems} from '../../items/nav-elements';
export class Home extends Component {
  render() {
    return (
        <div className="pageContainer home">
          <ul>
          {navItems.map((element, index) =>
              <li key={index} className={`${element.className} block-width-${element.homepage_block_width}`}>
                <Link to={'/' + element.url}>
                  <span className={element.icon}></span>
                  <div>{element.name}</div>
                </Link>
              </li>
          )}
          </ul>
        </div>
    );
  }
}