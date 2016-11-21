import React, { Component } from 'react';
import { Link } from 'react-router'
import { navItems } from '../items/nav-elements';

export class Navbar extends Component {
  _dropdown(el){
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {navItems.map((items, id) =>
            <li key={id}>
              <div>{el.submenu[id].hs_class}</div>
            </li>
          )}
        </ul>
    )

  }
  render() {
    return (
        <nav>
          <ul>
            {navItems.map((element, index) =>
                <li key={index} className={element.className}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this._dropdown(element)}
                  </Link>
                </li>
            )}
          </ul>
        </nav>
    );
  }
}