import React from 'react';
import _ from 'lodash';
import Button from "../../buttons/button";

const SidebarHeader = ({filters, inExtensions, inDeckCreation, handleFilterViewToggle, handleFilterReset}) =>{
  return (
    <h3 className="sidebar__header">
      Filters
      <div>
        {!_.isEmpty(filters) &&<Button handleClick={handleFilterReset} type="default--active" dataAttr="clearAll" text="Clear filters"/>}
        {(inExtensions || inDeckCreation) && <Button handleClick={handleFilterViewToggle} type="default--active" text="Hide filters" />}
      </div>
    </h3>
  )
};

export default SidebarHeader;