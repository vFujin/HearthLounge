import React from 'react';
import InputFilter from '../../../../shared-assets/filters/input-filter';
const LeftContainer = (props) => {

  return (
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Filters</h3>
        <div className="sidebar__body">
          <InputFilter attribute="Deck name" filter="deckname" multiple={false} handleSelect=""/>
        </div>
      </div>
  );
};

export default LeftContainer;