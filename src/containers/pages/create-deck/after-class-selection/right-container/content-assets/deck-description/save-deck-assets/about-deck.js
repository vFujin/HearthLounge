import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TextEditor from '../../../../../../../../components/text-editor/text-editor';
import InnerLeftContainer from './about-deck-inner-left-container';
import InnerRightContainer from './about-deck-inner-right-container';
import { error } from '../../../../../../../../utils/messages';
import saveDeck from '../../../../../../../../firebase/decks/deck/create/deck';
import { updateDeckProperty } from '../../../../../../../../redux/create-deck/actions/deck-options.action';
import { previewCardProps } from '../../../../../../../../components/text-editor/utils/preview-card-props';

const updateDeckText = _.debounce((updateDeckProperty, value, cards) => {
  let deckText =
    (!cards.loading && previewCardProps(value, cards.allCards)) || value;
  updateDeckProperty({ deckText });
}, 300);

const AboutDeck = ({
  activeUser,
  patch,
  playerClass,
  deckDetails,
  deckCreation,
  cards,
  updateDeckProperty,
}) => {
  const handleSaveDeckSubmit = e => {
    e.preventDefault();
    const { authenticated } = activeUser;
    if (authenticated && activeUser) {
      const {
        deckMode,
        deckTitle,
        deckArchetype,
        deckText,
        deckAdventure,
        deckBoss,
        isPrivate,
      } = deckDetails;
      const { uid, username } = activeUser;
      const { simplifiedDeck, deckstring } = deckCreation;
      const kebabCasedAdventure = _.kebabCase(deckAdventure);
      const kebabCasedBoss = _.kebabCase(deckBoss);

      saveDeck(
        patch,
        playerClass,
        deckTitle,
        deckMode,
        deckArchetype,
        kebabCasedAdventure,
        kebabCasedBoss,
        simplifiedDeck,
        deckText,
        deckstring,
        uid,
        username,
        isPrivate
      );
    } else {
      error('You have to be logged in in order to save your deck.', 6);
    }
  };

  const handleInputChange = e => {
    let target = e.target.id;
    let value = e.target.value;
    if (target === 'deckTextControlled') {
      updateDeckProperty({ deckTextControlled: value });
      if (e.keyCode === 13) {
        value += '<br>\n';
      }
      updateDeckText(updateDeckProperty, value, cards);
    } else {
      updateDeckProperty({ [target]: value });
    }
  };

  return (
    <div className="container__details--section container__details--description v-rows-2">
      <div className="section__header">
        <div className="line"></div>
        <h1>Deck Details</h1>
      </div>
      <div className="section__body">
        <form
          onSubmit={e => handleSaveDeckSubmit(e)}
          className="inline section__body--background"
        >
          <div className="section__body--upperContainer">
            <InnerLeftContainer
              playerClass={playerClass}
              handleInputChange={e => handleInputChange(e)}
            />
            <InnerRightContainer />
          </div>

          <TextEditor
            editorId="deckTextControlled"
            previewId="deckText"
            handleInputChange={handleInputChange}
            value={deckDetails.deckTextControlled}
            handleTagInsertion={updateDeckProperty}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { users, deckDetails, deckCreation } = state;
  const { patch } = state.info;
  const { cards } = state.cards;
  const { activeUser } = users;
  return { activeUser, patch, deckDetails, deckCreation, cards };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDeckProperty: props => dispatch(updateDeckProperty(props)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutDeck);

AboutDeck.propTypes = {};
