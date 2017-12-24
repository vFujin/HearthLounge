import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../components/icon";

const SelectExtension = ({group}) => {
  return (
      <div className="select-extension hs-font">
        <Icon name="select" />
        <p>select {group}</p>
      </div>
  )
};

export default SelectExtension;

SelectExtension.propTypes = {
  group: PropTypes.string.isRequired
};