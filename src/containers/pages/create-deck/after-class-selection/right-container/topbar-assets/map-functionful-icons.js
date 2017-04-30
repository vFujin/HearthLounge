import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';
import Popover from 'antd/lib/popover';
import PopoverSaveImg from './popover-save-img';

const MapFunctionfulIcons = ({set, handleOptionsClick, handleImgSaveClick, imgReadyDecklist}) => {
  const popoverVisibility = (obj) =>{
    switch(obj.icon){
      case 'copy': return imgReadyDecklist;
      default: return obj.popover;
    }
  };

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} onClick={()=>handleOptionsClick(obj.icon)}>
          <Popover placement="bottomRight"
                   overlayClassName={obj.icon} title={_.startCase(obj.title)}
                   visible={popoverVisibility(obj)}
                   content={<PopoverSaveImg handleImgSaveClick={handleImgSaveClick}/>}
                   trigger="click"
                   arrowPointAtCenter>
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