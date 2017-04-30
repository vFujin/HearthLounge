import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';
import Popover from 'antd/lib/popover';
import PopoverLink from './popover-link';

const MapFunctionfulIcons = ({set, handleOptionsClick}) => {

  const popoverContent = (obj) =>{
    switch(obj.icon){
      case 'link': return <PopoverLink icon={obj.title}/>;
      case 'copy': return (
          <div className="popover-content-wrapper">
            <button>Save as JPEG</button>
            <button>Cancel</button>
          </div>
      )
    }
  };

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} onClick={()=>handleOptionsClick(obj.icon)}>
          <Popover placement="bottomRight" title={_.startCase(obj.title)} content={popoverContent(obj)} trigger="click"  overlayClassName={obj.popover ? null : 'display-none'} arrowPointAtCenter>
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