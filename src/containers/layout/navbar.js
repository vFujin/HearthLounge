import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'
import {bindActionCreators} from 'redux';
import {navbarSelectedClass} from '../../redux/actions/navbar';

class Navbar extends Component {
  handleSubmenuClick(event){
     let activeSubmenuItem = event.currentTarget.dataset['submenu_item'];
     this.props.navbarSelectedClass(activeSubmenuItem);
  }

  dropdown(el, index){
    let sub = el.submenu;
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {this.props.navbar[index].submenu.map( (item, id) =>
            <li onClick={this.handleSubmenuClick.bind(this)}
                data-submenu_item={item.url}
                className={sub[id].url}
                key={id}>
              <Link to={`/${el.url}/${item.url}/overview`}>
                <span className={`icon-${sub[id].url}`}></span>
                <div className="icon-label">{sub[id].url}</div>
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

function mapStateToProps(state){
  return{
    navbar: state.navbar
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({navbarSelectedClass}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);