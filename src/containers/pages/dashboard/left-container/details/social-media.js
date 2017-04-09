import React from 'react';

const SocialMediaDetails = props => {
  return(
      <li className="social-media">
        <h3>Social Media</h3>
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