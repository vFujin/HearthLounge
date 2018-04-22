import React from 'react';
import PropTypes from 'prop-types';
import LogoItem from "./logo-item";
import ItemsList from "./items-list/items-list";
import EntryNode from '../entry-node';
import MobileMenuIcon from "./mobile-menu-icon/mobile-menu-icon";
import './styles/navbar-styles.css';
import './styles/navbar-mobile-styles.css';
import './styles/navbar-media-queries.css';

const NavbarMobile = ({handleSignOut, activeUser, playerClass, mobileMenuActive}) => {
  return (
    <nav className="nav__mobile">
      <ul className="nav__mobile--header">
        <LogoItem />
        <MobileMenuIcon />
      </ul>
      {mobileMenuActive && (
        <div>
          <ul className="nav__mobile--pages">
            <EntryNode handleSignOut={handleSignOut} activeUser={activeUser}/>
            <li className="nav__mobile--scrollWrapper">
              <ul>
                <ItemsList playerClass={playerClass}/>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

NavbarMobile.propTypes = {
  activeUser: PropTypes.object
};

export default NavbarMobile;