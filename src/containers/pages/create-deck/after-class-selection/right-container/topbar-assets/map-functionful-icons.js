import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CopyToClipboard from 'react-copy-to-clipboard';
import Tooltip from 'antd/lib/tooltip';
import Popover from 'antd/lib/popover';
import {topbar_icons} from './icons';
import PopoverSaveImg from './popover-save-img';
import {success} from "../../../../../../utils/messages";

const MapFunctionfulIcons = ({set, deckstring, handleOptionsClick, handleImgSaveClick, imgReadyDecklist}) => {
  const popoverVisibility = (obj) =>{
    switch(obj.icon){
      case 'image': return imgReadyDecklist;
      default: return obj.popover;
    }
  };

  const allowCopy = (obj, copyItem) =>{
    if(obj.allowCopy){
      return copyItem
    }
  };

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} id={obj.icon} onClick={(e)=>handleOptionsClick(e, obj.icon)}>
          <Popover placement="bottomRight"
                   overlayClassName={obj.icon} title={_.startCase(obj.title)}
                   visible={popoverVisibility(obj)}
                   content={<PopoverSaveImg handleImgSaveClick={handleImgSaveClick}/>}
                   trigger="click"
                   arrowPointAtCenter>
            <CopyToClipboard text={allowCopy(obj, deckstring)} onCopy={allowCopy(obj, ()=>success('Successfully copied deckstring to clipboard!'))}>
              <Tooltip key={obj.title} title={_.startCase(obj.title)} placement={obj.icon === "download" ? 'bottomRight' : 'bottom'}>
                <span className={`hs-icon icon-${obj.icon}`}></span>
              </Tooltip>
            </CopyToClipboard>
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