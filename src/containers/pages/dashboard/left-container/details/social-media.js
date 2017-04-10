import React from 'react';
import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';

const SocialMediaDetails = ({handleEditClick, isEditing}) => {
  return(
      <li className="social-media">
        <DetailHeader title="social media" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <IconLabel id="facebook" title="facebook" placeholder=""/>
          <IconLabel id="twitter"  title="twitter"  placeholder=""/>
          <IconLabel id="twitch"   title="twitch"   placeholder=""/>
          <IconLabel id="youtube"  title="youtube"  placeholder=""/>
        </div>
      </li>
  )
};


export default SocialMediaDetails;