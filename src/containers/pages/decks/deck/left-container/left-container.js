import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";
import './styles/deck-left-container-styles.css';

const LeftContainer = ({deckEditView}) => (
  <div className={`container__page--inner container__page--left ${deckEditView ? 'edit-mode' : ''}`}>
    <SidebarHeader />
    <SidebarBody />
  </div>
);

export default LeftContainer;

LeftContainer.propTypes = {
  deckEditView: PropTypes.bool
};

LeftContainer.defaultProps = {
  deckEditView: false
};