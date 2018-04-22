import React, { Component } from 'react';
import { connect } from 'react-redux';
import {toggleMobileMenu} from "../../../../redux/app/mobile-menu/actions";
import './mobile-menu-icon-styles.css';

class MobileMenuIcon extends Component {

  handleMobileMenuClick = () => {
    this.props.toggleMobileMenu(!this.props.mobileMenuActive);
  };

  render() {
    return (
      <div className={`mobileMenuIcon ${this.props.mobileMenuActive ? "active" : undefined}`} onClick={this.handleMobileMenuClick}>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { mobileMenuActive } = state.app.menu;
  return { mobileMenuActive };
};

const mapDispatchToProps = dispatch => {
  return {
      toggleMobileMenu: payload => dispatch(toggleMobileMenu(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuIcon);