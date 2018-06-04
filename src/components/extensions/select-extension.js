import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon";

const SelectExtension = ({extensionType}) => (
  <div className="select-extension hs-font">
    <Icon name="select" />
    <p>select {extensionType}</p>
  </div>
);

export default SelectExtension;

SelectExtension.propTypes = {
  extensionType: PropTypes.string.isRequired
};
