import React from 'react';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../shared-assets/editor/text-editor-functions';

const DeckDescription = ({currentDeck}) =>{
  const {title, description} = currentDeck;
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>{title}</h1>
        </div>
        <div className="section__body">
          <div className="section__body--background">{convertBBCode(description)}</div>
        </div>
        <div className="section__footer">
          <div className="section__footer--header">
            <h4>About author</h4>
          </div>
          <div className="details">
            <img src="http://lorempixel.com/45/45/cats/" alt="profile pic" />
            <div className="general-info-wrapper">
              <p>{currentDeck.author}</p>
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

export default DeckDescription;

DeckDescription.propTypes = {
  currentDeck: PropTypes.object
};