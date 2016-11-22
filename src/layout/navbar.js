import React, { Component } from 'react';
import { Link } from 'react-router'
import { navItems } from '../items/nav-elements';

export class Navbar extends Component {
  _dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {navItems[index].submenu.map( (item, id) =>
            <li key={id}>
              <Link  className={sub[id].submenu_li_className} to={'/' + el.url + '/' + sub[id].submenu_url} activeClassName="submenu-active">
                <div>{sub[id].submenu_li_title}</div>
              </Link>
            </li>
          )}
        </ul>
    )
  }
  render() {
    return (
        <nav>
          <div className="logo"></div>
          <ul>
            {navItems.map((element, index) =>
                <li key={index} className={element.className}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this._dropdown(element, index)}
                  </Link>
                </li>
            )}
          </ul>
        </nav>

    );
  }
}