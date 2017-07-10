import React from 'react';
import { Link } from 'react-router';
import {navItems} from '../../data/nav';
import EntryNode from './entry-node';

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
        <li className="nav__list--item logo">
          <div className="logo-wrapper">
            <span className="hs-icon icon-hl-logo"></span>
            <div className="text-wrapper">
              <p>Hearth</p>
              <p>Lounge</p>
            </div>
          </div>
        </li>
        {navItems.map((element, index) =>
            <li key={index} className={`nav__list--item ${element.url}`}>
              <Link className="nav__list--linkContainer" to={'/' + element.url} activeClassName="active">
                <div className="nav__list--link">
                  <span className={`hs-icon ${element.icon}`}></span>
                  <div>{element.name}</div>
                  {dropdown(element, index)}
                </div>
              </Link>
            </li>
        )}
        <EntryNode handleLogout={handleLogout} user={user}/>
      </ul>
    </nav>
  );
};


Navbar.propTypes = {
  user: React.PropTypes.object
};

export default Navbar;