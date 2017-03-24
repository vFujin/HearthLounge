import React, { Component } from 'react';
import { Link } from 'react-router';
import {navItems} from '../../data/nav';
export class Navbar extends Component {

  dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {navItems[index].submenu.map( (item, id) =>
            <li className={sub[id].url} key={id}>
              {console.log(item.url)}
              <Link to={`/${el.url}/${item.url}/overview`}>
                <span className={`submenu__icon hs-icon icon-${sub[id].url}`}></span>
                <div className="icon-label">{sub[id].name}</div>
              </Link>
            </li>
          )}
        </ul>
    )
  }


  render() {
    return (
        <nav>
          <ul className="nav__list">
            <li className="nav__list--item logo"></li>
            {navItems.map((element, index) =>
                <li key={index} className={`nav__list--item ${element.url}`}>
                  <Link className="nav__list--link" to={'/' + element.url} activeClassName="active">
                    <span className={`hs-icon ${element.icon}`}></span>
                    <div>{element.name}</div>
                    {this.dropdown(element, index)}
                  </Link>
                </li>
            )}
            <li className="nav__list--item login">
              <Link className="nav__list--link" to={`/sign-in`}>
                <span className="hs-icon icon-login"></span>
                <div>Login</div>
              </Link>
            </li>
          </ul>
        </nav>

    );
  }
}