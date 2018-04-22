import React from 'react';
import PropTypes from 'prop-types';
import LogoItem from "./logo-item";
import ItemsList from "./items-list/items-list";
import EntryNode from '../entry-node';
import MobileMenuIcon from "./mobile-menu-icon/mobile-menu-icon";
import './styles/navbar-styles.css';
import './styles/navbar-mobile-styles.css';
import './styles/navbar-media-queries.css';

const NavbarMobile = ({handleSignOut, activeUser, playerClass}) => {
  return (
    <nav className="nav__mobile">
      <ul>
        <LogoItem />
        <MobileMenuIcon />
      </ul>
      <ul>
        <EntryNode handleSignOut={handleSignOut} activeUser={activeUser}/>
        <ItemsList playerClass={playerClass}/>
      </ul>
    </nav>
  );
};

NavbarMobile.propTypes = {
  activeUser: PropTypes.object
};

export default NavbarMobile;