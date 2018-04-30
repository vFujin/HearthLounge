import React from 'react';
import { connect } from "react-redux";
import Topbar from "../right-container/topbar/topbar";
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";
import './styles/deck-left-container-styles.css';

const LeftContainer = ({windowWidth, deckEditView}) => (
  <div className={`container__page--inner container__page--left ${deckEditView ? 'edit-mode' : ''}`}>
    <SidebarHeader />
    {windowWidth <= 1365 && <Topbar/>}
    <SidebarBody />
  </div>
);

const mapStateToProps = state => {
  const { windowWidth } = state.app.windowSize;
  const { deckEditView } = state.deckView.tools;
  return { windowWidth, deckEditView };
};

export default connect(mapStateToProps)(LeftContainer);