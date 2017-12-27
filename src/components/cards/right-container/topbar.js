import React from 'react';
import IconFilter from "../../filters/icon-filter";

const Topbar = ({filters, handleIconClick}) => {
  return (
    <div className="topbar">
      <IconFilter header={false} filter="cost"        filters={filters} tooltip={false} wrapper_class="topbar-left" handleIconClick={handleIconClick}/>
      <IconFilter header={false} filter="playerClass" filters={filters} tooltip={true}  wrapper_class="topbar-right" handleIconClick={handleIconClick}/>
    </div>
  )
};

export default Topbar;