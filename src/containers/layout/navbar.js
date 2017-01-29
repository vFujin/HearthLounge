import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'
import {bindActionCreators} from 'redux';
import {navbarSelectedClass} from '../../redux/actions/navbar/index';

class Navbar extends Component {
  constructor(props){
    super(props);


  }

  handleSubmenuClick(event){
     let activeSubmenuItem = event.target.dataset['submenuitem'];
     let x = this.props.navbarSelectedClass(activeSubmenuItem);
     console.log(x);
  }

  dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {this.props.navbar[index].submenu.map( (item, id) =>
            <li data-adventure={item.submenu_url}
                data-submenuitem={item.submenu_url}
                className={sub[id].submenu_li_className}
                key={id}>
              <Link to={'/' + el.url + '/' + item.submenu_url} activeClassName="submenu-active" data-submenuitem={item.submenu_url} onClick={this.handleSubmenuClick.bind(this)}>
                <span data-submenuitem={item.submenu_url} className={`icon-${sub[id].submenu_li_className}`}></span>
                <div data-submenuitem={item.submenu_url} className="icon-label">{sub[id].submenu_li_title}</div>
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
            {this.props.navbar.map((element, index) =>
                <li key={index} className={element.className}>
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

function mapStateToProps(state){
  return{
    navbar: state.navbar
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({navbarSelectedClass}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);