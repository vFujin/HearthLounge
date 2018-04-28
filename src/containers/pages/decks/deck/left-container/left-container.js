import React from 'react';
import { connect } from "react-redux";
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";
import './styles/deck-left-container-styles.css';

const LeftContainer = ({deckEditView}) => (
  <div className={`container__page--inner container__page--left ${deckEditView ? 'edit-mode' : ''}`}>
    <SidebarHeader />
    <SidebarBody />
  </div>
);

const mapStateToProps = state => {
  const { deckEditView } = state.deckView;
  return { deckEditView };
};

export default connect(mapStateToProps)(LeftContainer);