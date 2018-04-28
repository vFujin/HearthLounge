import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MobileTopbarTab = ({name, width, handleTabClick, activeMobileTab}) => {
  return (
    <div id={name}
         style={{width: width + "%"}}
         className={`topbarMobile__${name} ${name === activeMobileTab ? "active" : undefined}`}
         onClick={handleTabClick}>
      {_.startCase(name)}
    </div>
  )
};

MobileTopbarTab.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  activeMobileTab: PropTypes.string.isRequired
};

export default MobileTopbarTab;