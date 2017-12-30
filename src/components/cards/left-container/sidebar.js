import React from 'react';
import SidebarBody from "./sidebar-body";
import SidebarHeader from "./sidebar-header";

const Sidebar = ({cards, allCards, info, mode, filters, inExtensions, inDeckCreation, handleFilterViewToggle, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick}) => {


  return (
    <div className="container__page--inner  container__page--left">
      <SidebarHeader filters={filters}
                     inExtensions={inExtensions}
                     inDeckCreation={inDeckCreation}
                     handleFilterViewToggle={handleFilterViewToggle}
                     handleFilterReset={handleFilterReset} />
      <SidebarBody filters={filters}
                   info={info}
                   mode={mode}
                   cards={cards}
                   allCards={allCards}
                   inExtensions={inExtensions}
                   handleFilterReset={handleFilterReset}
                   handleInputChange={handleInputChange}
                   handleSliderClick={handleSliderClick}
                   handleIconClick={handleIconClick} />
    </div>
  );
};

export default Sidebar;