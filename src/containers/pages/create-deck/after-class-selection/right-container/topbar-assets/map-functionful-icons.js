import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CopyToClipboard from 'react-copy-to-clipboard';
import Popover from 'antd/lib/popover';
import {topbar_icons} from './icons';
import PopoverSaveImg from './popover-save-img';
import {success} from "../../../../../../utils/messages";
import DeckstringInput from "./import-deck";
import Icon from "../../../../../../components/icon";

const MapFunctionfulIcons = ({set, deckstring, importedDeckstring, handleOptionsClick, handleImgSaveClick, handleInputChange, handleDeckImport, imgReadyDecklist, importedDeckstringPopover}) => {
  const popoverVisibility = (obj) =>{
    switch(obj.icon){
      case 'save': return imgReadyDecklist;
      case 'import': return importedDeckstringPopover;
      default: return obj.popover;
    }
  };
  const allowCopy = (obj, copyItem) =>{
    if(obj.allowCopy){
      return copyItem
    }
  };

  const deckstringInputPopover = <DeckstringInput importedDeckstring={importedDeckstring}
                                           handleInputChange={handleInputChange}
                                           handleDeckImport={handleDeckImport} />;
  const saveImgPopover = <PopoverSaveImg handleImgSaveClick={handleImgSaveClick}/>;

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj=>
        <li key={obj.icon} id={obj.icon} onClick={(e)=>handleOptionsClick(e, obj.icon)}>
          <Popover placement="bottomRight"
                   overlayClassName={obj.icon} title={_.startCase(obj.title)}
                   visible={popoverVisibility(obj)}
                   content={obj.icon === "import" ? deckstringInputPopover : saveImgPopover}
                   trigger="click"
                   arrowPointAtCenter={true}>
            <CopyToClipboard text={allowCopy(obj, deckstring)} onCopy={allowCopy(obj, ()=>success('Successfully copied deckstring to clipboard!'))}>
                <Icon name={obj.icon}
                      title={obj.title}
                      tooltip={true}
                      tooltipPlacement={obj.icon === 'save' ? 'bottomRight' : 'bottom'}/>
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

MapFunctionfulIcons.propTypes = {
  set: PropTypes.string.isRequired,
  handleOptionsClick: PropTypes.func.isRequired
};

export default MapFunctionfulIcons;