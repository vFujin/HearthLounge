import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';
import {navItems} from '../../data/nav';
import EntryNode from './entry-node';
import Icon from "../../components/icon";
import LogoSVG from "../../components/logo";

const Navbar = ({handleSignOut, activeUser, playerClass}) => {

  const listSubmenu = (index, el, sub) =>{
    return (
      navItems[index].submenu.map((item, id) =>
          <li className={sub[id].url} key={id}>
            <Link to={`/${el.name}/${item.url}${el.url === "decks" ? '' : "/overview"}`}>
              <Icon name={sub[id].url} className="submenu__icon"/>
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

  const redirect = (name, playerClass) =>{
    switch(name){
      case 'home': return '';
      case 'create-deck': {
        if(playerClass) return `${name}/${playerClass}`;
        return name;
      }
      default: return name;
    }
  };

  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__list--item logo">
          <div className="logo-wrapper">
            <LogoSVG />
            <div className="text-wrapper">
              <p>Hearth</p>
              <p>Lounge</p>
            </div>
          </div>
        </li>
        {navItems.map((element, index) =>
            <li key={index} className={`nav__list--item ${element.name}`}>
              <Link className="nav__list--linkContainer"
                    to={`/${redirect(element.name, playerClass)}`} activeClassName={element.name !== 'home' && "active"}>
                <div className="nav__list--link">
                  <Icon name={element.icon} />
                  <div>{_.camelCase(element.name)}</div>
                  {dropdown(element, index)}
                </div>
              </Link>
            </li>
        )}
        <EntryNode handleSignOut={handleSignOut} activeUser={activeUser}/>
      </ul>
    </nav>
  );
};


Navbar.propTypes = {
  activeUser: PropTypes.object
};

export default Navbar;