import React from 'react';
import InputFilter from '../../../../shared-assets/filters/input-filter';
const LeftContainer = ({query}) => {

  return (
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Filters</h3>
        <div className="sidebar__body">
          {/*<InputFilter attribute="name" filter="name" query={query} multiple={false}/>*/}
        </div>
      </div>
  );
};

export default LeftContainer;