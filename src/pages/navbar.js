import React, { Component } from 'react';
import { Link } from 'react-router'
import { navItems } from '../items/nav-elements';

export class Navbar extends Component {
  render() {
    return (
        <nav>
          <ul>
            {navItems.map((element, index) =>
                <li key={index} className={element.className}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                  </Link>
                </li>
            )}
          </ul>
        </nav>
    );
  }
}