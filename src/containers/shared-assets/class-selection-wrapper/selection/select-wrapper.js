import React from 'react';
import SelectModeWrapper from './select-mode/select-mode-wrapper';
import SelectClassWrapper from './select-class/select-class-wrapper';
import Continue from './continue/continue';

const SelectWrapper = () => {
  return (
    <div className="container__page--inner container__selection container__selection--wrapper">
      <h3>Create deck from scratch</h3>
      <div>
        <SelectModeWrapper />
        <SelectClassWrapper />
        <Continue />
      </div>
    </div>
  );
};

export default SelectWrapper;
