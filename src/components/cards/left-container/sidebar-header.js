import React from 'react';
import _ from 'lodash';
import Button from "../../buttons/button";

const SidebarHeader = ({filters, handleFilterReset}) =>{
  return (
    <h3 className="sidebar__header">
      Filters
      {!_.isEmpty(filters) && <Button handleClick={handleFilterReset} type="default--active" dataAttr="clearAll" text="Clear filters"/>}
    </h3>
  )
};

export default SidebarHeader;