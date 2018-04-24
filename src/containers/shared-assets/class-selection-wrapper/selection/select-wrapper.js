import React from 'react';
import SelectClass from './select-class';
import SelectMode from './select-mode';

const SelectWrapper = () => {
  return (
    <div className="container__page--inner container__selection container__selection--wrapper">
      <h3>Create deck from scratch</h3>
      <div>
        <div>
          <h4><span>1</span> Select Mode</h4>
          <SelectMode />
        </div>
        <div>
          <h4><span>2</span> Select Class</h4>
          <SelectClass />
        </div>
      </div>
    </div>
  )
};

export default SelectWrapper;