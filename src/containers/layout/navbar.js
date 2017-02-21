import React, { Component } from 'react';
import { Link } from 'react-router';
import {navItems} from '../../data/nav';
export class Navbar extends Component {
  constructor(props){
    super(props);

    this.state={
      navbar: navItems
    }
  }
  dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {this.state.navbar[index].submenu.map( (item, id) =>
            <li className={sub[id].url} key={id}>
              <Link to={`/${el.url}/${item.url}/overview`}>
                <span className={`icon-${sub[id].url}`}></span>
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
          <div className="logo"></div>
          <ul>
            {this.state.navbar.map((element, index) =>
                <li key={index} className={element.url}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this.dropdown(element, index)}
                  </Link>
                </li>
            )}
          </ul>
          {/*<div className={`login-popup ${this.state.loginPopup}`}>*/}
              {/*<div className="login">*/}
                {/*<label htmlFor="login">*/}
                  {/*<input type="text" value="login"/>*/}
                {/*</label>*/}

              {/*</div>*/}
          {/*</div>*/}
        </nav>

    );
  }
}