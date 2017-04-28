import React from 'react';
import PropTypes from 'prop-types';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';
import Popover from 'antd/lib/popover';

const MapFunctionfulIcons = ({set, handleOptionsClick}) => {

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} onClick={()=>handleOptionsClick(obj.icon)}>
          <Popover placement="bottomRight" title="foo" content="bar" trigger="click"  overlayClassName={obj.popover ? null : 'display-none'} arrowPointAtCenter>
            <Tooltip key={obj.title} title={obj.title} placement="bottom">
              <span className={`hs-icon icon-${obj.icon}`}></span>
            </Tooltip>
          </Popover>
        </li>)
  };

  return(
      <ul className="topbar__deckDetails--options">
        {generateSet()}
      </ul>
  )
};

React.propTypes = {
  set: PropTypes.string.isRequired,
  handleOptionsClick: PropTypes.func.isRequired
};

export default MapFunctionfulIcons;