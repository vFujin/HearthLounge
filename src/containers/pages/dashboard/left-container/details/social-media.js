import React from 'react';
import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';

const SocialMediaDetails = ({handleEditClick, isEditing}) => {
  return(
      <li className="social-media">
        <DetailHeader title="social media" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <IconLabel id="facebook" title="facebook" placeholder="Hearth Lounge"/>
          <IconLabel id="twitter"  title="twitter"  placeholder="Hearth Lounge"/>
          <IconLabel id="twitch"   title="twitch"   placeholder="Hearth Lounge"/>
          <IconLabel id="youtube"  title="youtube"  placeholder="Hearth Lounge"/>
        </div>
      </li>
  )
};


export default SocialMediaDetails;