import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from '../../../../../../../shared-assets/editor/text-editor';
import InnerLeftContainer from './about-deck-inner-left-container';
import InnerRightContainer from './about-deck-inner-right-container';

const AboutDeck = ({activeClass, deckTitle, deckType, deckArchetype, deckAdventure, deckBoss, handleInputChange, handleSelectChange, handleSaveDeckSubmit, deckTextControlled, handleTagInsertion}) =>{
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>About deck</h1>
        </div>
        <div className="section__body">
          <form onSubmit={handleSaveDeckSubmit} className="inline section__body--background">
            <div className="section__body--upperContainer">
              <InnerLeftContainer activeClass={activeClass}
                                  deckTitle={deckTitle}
                                  deckType={deckType}
                                  deckArchetype={deckArchetype}
                                  deckAdventure={deckAdventure}
                                  deckBoss={deckBoss}
                                  handleInputChange={handleInputChange}
                                  handleSelectChange={handleSelectChange}/>
              <InnerRightContainer />
            </div>

            <TextEditor editorId="deckTextControlled"
                        previewId="deckText"
                        handleInputChange={handleInputChange}
                        value={deckTextControlled}
                        handleTagInsertion={handleTagInsertion}/>
          </form>
        </div>
      </div>
  )
};

AboutDeck.propTypes = {
  activeClass: PropTypes.string.isRequired,
  deckTitle: PropTypes.string,
  deckText: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleSaveDeckSubmit: PropTypes.func.isRequired
};

export default AboutDeck;