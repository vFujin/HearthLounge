import React from 'react';
import PropTypes from 'prop-types';

const selectType = (iconName, type) =>{
  const validateSet = iconName === "classic" ? "hs-logo" : iconName;
  const validateMode = iconName === "standard" ? "mammoth" : iconName;

  let icon = (name) => <span className={`hs-icon icon-${name}`}></span>;
  let manaIcon = (name) => <span className={`hs-icon icon-mana-${name}`}></span>;

  switch(type){
    case 'set': return icon(validateSet);
    case 'mode': return icon(validateMode);
    case 'mana': return manaIcon(iconName);
    default: return icon(iconName);
  }
};

const Icon = ({name, type}) => selectType(name, type || null);

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
  type: PropTypes.string
};