import React from 'react';
import {InputFilter, SliderFilter, IconFilter} from '../../filters';
import {mapInputCards} from "../utils/map-cards";
import SidebarBody from "./sidebar-body";
import SidebarHeader from "./sidebar-header";

const Sidebar = ({cards, allCards, info, filters, inExtensions, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick}) => {


  return (
    <div className="container__page--inner  container__page--left">
      <SidebarHeader filters={filters}
                     handleFilterReset={handleFilterReset} />
      <SidebarBody filters={filters}
               info={info}
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