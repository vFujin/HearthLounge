import React from 'react';
import PropTypes from 'prop-types';

const SectionFooter = ({author, authorPic}) => {
  return (
      <div className="section__footer">
        <div className="section_footer--wrapper">
          <div className="section__footer--header">
            <h4>About author</h4>
          </div>
          <div className="details">
            {authorPic ? <img src={authorPic} alt="profile pic" /> : <span className="hs-icon icon-login"></span>}
            <div className="general-info-wrapper">
              <p>{author}</p>
              <p>reputation</p>
            </div>
            <div className="game-details-wrapper">
              <span className="hs-icon icon-battletag"></span>
              <p>region</p>
              <p>favourite class</p>
            </div>
            <div className="social-media-wrapper">
              <span className="hs-icon icon-facebook"></span>
              <span className="hs-icon icon-twitter"></span>
              <span className="hs-icon icon-twitch"></span>
              <span className="hs-icon icon-youtube"></span>
            </div>
          </div>
        </div>
      </div>
  )
};

export default SectionFooter;

SectionFooter.propTypes = {
  author: PropTypes.string.isRequired
};