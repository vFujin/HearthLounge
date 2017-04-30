import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';

const PopoverLink = ({icon}) =>{
  return (
      <div className="popover-link">
        <p>URL:</p>
        <input value="foo" disabled/>
        <Tooltip title={`${icon} to clipboard`} placement="bottom">
          <span className="hs-icon icon-copy"></span>
        </Tooltip>
      </div>
  )
};

PopoverLink.propTypes = {
  icon: PropTypes.string.isRequired
};

export default PopoverLink;