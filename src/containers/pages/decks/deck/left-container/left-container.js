import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";

const LeftContainer = ({deckEditView}) => (
  <div className={`container__page--inner container__page--left ${deckEditView ? 'edit-mode' : ''}`}>
    <SidebarHeader />
    <SidebarBody/>
  </div>
);

export default LeftContainer;

LeftContainer.propTypes = {
  activeDeck: PropTypes.object
};