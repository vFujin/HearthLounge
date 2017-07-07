import React from 'react';
import PropTypes from 'prop-types';

const SelectExtension = ({group}) => {
  return (
      <div className="select-extension">
        LEFT ARROW select {group}
      </div>
  )
};

export default SelectExtension;

SelectExtension.propTypes = {
  group: PropTypes.string.isRequired
};