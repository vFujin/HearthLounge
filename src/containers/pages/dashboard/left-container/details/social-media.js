import React from 'react';
import DetailHeader from './detail-header';
const SocialMediaDetails = ({handleEditClick, isEditing}) => {
  return(
      <li className="social-media">
        <DetailHeader title="social media" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <label htmlFor="facebook">
            <span className="hs-icon icon-facebook"></span>
            <input id="facebook" type="text" placeholder="Placeholder"/>
          </label>
          <label htmlFor="twitter">
            <span className="hs-icon icon-twitter"></span>
            <input id="twitter" type="text" placeholder="Placeholder"/>
          </label>
          <label htmlFor="twitch">
            <span className="hs-icon icon-twitch"></span>
            <input id="twitch" type="text" placeholder="Placeholder"/>
          </label>
          <label htmlFor="youtube">
            <span className="hs-icon icon-youtube"></span>
            <input id="youtube" type="text" placeholder="Placeholder"/>
          </label>
        </div>
      </li>
  )
};


export default SocialMediaDetails;