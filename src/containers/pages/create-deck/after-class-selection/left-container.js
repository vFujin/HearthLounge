import React from 'react';
import SidebarHeader from './left-container/sidebar/sidebar-header';
import DeckSidebar from './left-container/deck-sidebar';

const LeftContainer = ({playerClass}) => (
      <div className="container__page--inner container__page--left">
        <SidebarHeader />
        <DeckSidebar playerClass={playerClass}/>
      </div>
);

export default LeftContainer;