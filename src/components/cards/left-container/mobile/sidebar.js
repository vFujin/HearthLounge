import React from 'react';
import SidebarBody from "./sidebar-body";

const MobileSidebar = ({cards, allCards, info, mode, filters, inExtensions, inDeckCreation, handleFilterViewToggle, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick}) => {

  return (
    <div className="container__page--inner  container__page--left">
      <SidebarBody filters={filters}
                   info={info}
                   mode={mode}
                   cards={cards}
                   allCards={allCards}
                   inExtensions={inExtensions}
                   inDeckCreation={inDeckCreation}
                   handleFilterReset={handleFilterReset}
                   handleInputChange={handleInputChange}
                   handleSliderClick={handleSliderClick}
                   handleIconClick={handleIconClick} />
    </div>
  );
};

export default MobileSidebar;