import React from 'react';
import { Link } from 'react-router';
import {navItems} from '../../data/nav';

const Navbar = ({handleLogout, user}) => {

  const listSubmenu = (index, el, sub) =>{
    return (
      navItems[index].submenu.map((item, id) =>
          <li className={sub[id].url} key={id}>
            <Link to={`/${el.url}/${item.url}/overview`}>
              <span className={`submenu__icon hs-icon icon-${sub[id].url}`}></span>
              <div className="icon-label">{sub[id].name}</div>
            </Link>
          </li>
      )
    )
  };

  const dropdown = (el, index) => {
    if (!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {listSubmenu(index, el, el.submenu)}
        </ul>
    )
  };

  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__list--item logo"></li>
        {navItems.map((element, index) =>
            <li key={index} className={`nav__list--item ${element.url}`}>
              <Link className="nav__list--link" to={'/' + element.url} activeClassName="active">
                <span className={`hs-icon ${element.icon}`}></span>
                <div>{element.name}</div>
                {dropdown(element, index)}
              </Link>
            </li>
        )}
        <li className="nav__list--item login">
          <Link className="nav__list--link" to={user ? '/dashboard' : '/sign-in'}>
            <span className="hs-icon icon-login"></span>
            <div onClick={(e) => handleLogout(e)}>{user ? user : "Login"}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: React.PropTypes.string
};

export default Navbar;