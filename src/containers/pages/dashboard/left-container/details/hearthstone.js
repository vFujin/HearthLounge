import React from 'react';

import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';
import SelectLabel from './assets/select-label';

const HearthstoneDetails = ({handleEditClick, isEditing, handleSaveClick, handleInputChange}) => {
  return(
      <li className="hearthstone">
        <DetailHeader title="hearthstone"
                      handleEditClick={handleEditClick}
                      isEditing={isEditing}
                      handleSaveClick={handleSaveClick}/>
        <div className="details-content">
          <IconLabel id="battlenet" title="battle tag" placeholder="blizzard#0000" disabled={isEditing} handleInputChange={handleInputChange}/>
          <SelectLabel id="classes" title="favourite class" placeholder="classes" disabled={isEditing}/>
          <SelectLabel id="region" title="region" placeholder="EU > NA" disabled={isEditing}/>
        </div>
      </li>
  )
};

export default HearthstoneDetails;