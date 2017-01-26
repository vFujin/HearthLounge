import React, { Component } from 'react';
import { Link } from 'react-router'
import { navItems } from '../data/nav';

export class Navbar extends Component {
  constructor(props){
    super(props);

    this.state={
      loginPopup: 'display-none'
    }
  }

  handleNavigationLoginClick(i){
    let isActive = i === 10 ? 'display-block' : 'display-none';

    console.log(i);
    this.setState({
      loginPopup: isActive
    });
  }

  handleEscKeyPress(e){
    if(e.keyCode === 27){
      this.setState({
        loginPopup: 'display-none'
      })
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleEscKeyPress.bind(this))
  }

  dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {navItems[index].submenu.map( (item, id) =>
            <li data-adventure={item.submenu_url} className={sub[id].submenu_li_className} key={id}>
              <Link to={'/' + el.url + '/' + sub[id].submenu_url} activeClassName="submenu-active">
                <span className={`icon-${sub[id].submenu_li_className}`}></span>
                <div className="icon-label">{sub[id].submenu_li_title}</div>
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
                <li key={index} className={element.className} onClick={this.handleNavigationLoginClick.bind(this, index)}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this.dropdown(element, index)}
                  </Link>
                </li>
            )}
          </ul>
          <div className={`login-popup ${this.state.loginPopup}`}>
              <div className="login">
                <label htmlFor="login">
                  <input type="text" value="login"/>
                </label>

              </div>
          </div>
        </nav>

    );
  }
}