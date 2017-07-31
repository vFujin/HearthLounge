import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import Tooltip from 'antd/lib/tooltip';

const selectType = (iconName, type = null, tooltip = true, tooltipPlacement = "bottom") =>{
  const validateSet = iconName === "classic" ? "hs-logo" : iconName;
  const validateMode = iconName === "standard" ? "mammoth" : iconName;

  const iconWrapper = (icon) => {
    return (
        <Tooltip title={startCase(iconName)}
                 placement={tooltipPlacement}
                 arrowPointAtCenter={true}>
          {icon}
        </Tooltip>
    )
  };

  let icon = (name) => {
    let icon = <span className={`hs-icon icon-${name}`}></span>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  let manaIcon = (name) => {
    let icon = <span className={`hs-icon icon-mana-${name}`}></span>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  switch(type){
    case 'set': return icon(validateSet);
    case 'mode': return icon(validateMode);
    case 'mana': return manaIcon(iconName);
    default: return icon(iconName);
  }
};

const Icon = ({name, type, tooltip, tooltipPlacement}) => selectType(name, type, tooltip, tooltipPlacement);

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
  type: PropTypes.string,
  tooltipPlacement: PropTypes.string
};