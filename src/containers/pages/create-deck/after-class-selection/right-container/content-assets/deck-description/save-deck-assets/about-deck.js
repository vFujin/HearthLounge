import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from '../../../../../../../shared-assets/editor/text-editor';
import InnerLeftContainer from './about-deck-inner-left-container';
import InnerRightContainer from './about-deck-inner-right-container';

const AboutDeck = ({activeClass, deckTitle, handleInputChange, handleSelectChange, handleSaveDeckSubmit, handleBBCodeClick, deckText}) =>{
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>About deck</h1>
        </div>
        <div className="section__body">
          <form className="inline section__body--background">
            <div className="section__body--upperContainer">
              <InnerLeftContainer activeClass={activeClass}
                                  deckTitle={deckTitle}
                                  handleInputChange={handleInputChange}
                                  handleSelectChange={handleSelectChange}/>
              <InnerRightContainer handleSaveDeckSubmit={handleSaveDeckSubmit}/>
            </div>

            <TextEditor handleInputChange={handleInputChange}
                        handleBBCodeClick={handleBBCodeClick}
                        value={deckText} />
          </form>
        </div>
      </div>
  )
};

AboutDeck.propTypes = {
  activeClass: PropTypes.string.isRequired,
  deckTitle: PropTypes.string.isRequired,
  deckText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleSaveDeckSubmit: PropTypes.func.isRequired,
  handleBBCodeClick: PropTypes.func.isRequired
};

export default AboutDeck;