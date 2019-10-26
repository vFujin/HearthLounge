import React from 'react';
import PropTypes from 'prop-types';
import LogoItem from './logo-item';
import ItemsList from './items-list/items-list';
import EntryNode from './entry-node';
import './styles/navbar-styles.css';
import './styles/navbar-media-queries.css';

const NavbarDesktop = ({ handleSignOut, activeUser, playerClass }) => {
  return (
    <nav>
      <ul className="nav__list">
        <LogoItem />
        <ItemsList playerClass={playerClass} />
        <EntryNode handleSignOut={handleSignOut} activeUser={activeUser} />
      </ul>
    </nav>
  );
};

NavbarDesktop.propTypes = {
  activeUser: PropTypes.object,
};

export default NavbarDesktop;
