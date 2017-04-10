import React from 'react';

import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';
import SelectLabel from './assets/select-label';

const HearthstoneDetails = ({handleEditClick, isEditing}) => {
  return(
      <li className="hearthstone">
        <DetailHeader title="hearthstone" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <IconLabel id="battlenet" placeholder="blizzard#0000"/>
          <SelectLabel id="favourite-class" title="Favourite Class" placeholder="classes"/>
          <SelectLabel id="region" title="Region" placeholder="EU > NA"/>
        </div>
      </li>
  )
};

export default HearthstoneDetails;