import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LogoItem from "./logo-item";
import ItemsList from "./items-list/items-list";
import EntryNode from '../entry-node';
import MobileMenuIcon from "./mobile-menu-icon/mobile-menu-icon";
import './styles/navbar-styles.css';
import './styles/navbar-mobile-styles.css';
import './styles/navbar-media-queries.css';
import {toggleMobileMenu} from "../../../redux/app/mobile-menu/actions";

class NavbarMobile extends Component {

  handleCloseMenuClick = () => {
    this.props.closeMobileMenu(false);
  };

  render() {
    const {handleSignOut, activeUser, playerClass, mobileMenuActive} = this.props;
    return (
      <nav className="nav__mobile">
        <ul className="nav__mobile--header">
          <LogoItem/>
          <MobileMenuIcon/>
        </ul>
        {mobileMenuActive && (
          <div onClick={this.handleCloseMenuClick}>
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
}

NavbarMobile.propTypes = {
  activeUser: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    closeMobileMenu: payload => dispatch(toggleMobileMenu(payload))
  }
};

export default connect(null, mapDispatchToProps)(NavbarMobile);