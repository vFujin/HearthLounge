import React from 'react';
import IconFilter from "../../../containers/shared-assets/filters/icon-filter";

const Topbar = ({filters, handleFilterClick}) => {
  return (
    <div className="topbar">
      <IconFilter header={false} filter="cost"        filters={filters} tooltip={false} wrapper_class="topbar-left" handleClick={handleFilterClick}/>
      <IconFilter header={false} filter="playerClass" filters={filters} tooltip={true}  wrapper_class="topbar-right" handleClick={handleFilterClick}/>
    </div>
  )
};

export default Topbar;