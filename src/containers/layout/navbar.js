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
            {navItems.map((element, index) =>
                <li key={index} className={element.url}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this.dropdown(element, index)}
                  </Link>
                </li>
            )}
            <li className="login">
              {console.log(this.props.url)}
              <Link to={`${this.props.url}/login`}>
                <span className="icon-login"></span>
                <div>Login</div>
              </Link>
            </li>
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