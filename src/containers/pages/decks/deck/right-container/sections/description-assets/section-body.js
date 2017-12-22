import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';
import TextEditor from '../../../../../../../components/text-editor/text-editor';
import SectionBodyOptions from "./section-body-options";
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../../../../redux/deck/tools/types";
import * as types from "../../../../../../../redux/deck/active-deck-editing/types";
import {UPDATE_ACTIVE_DECK_COPY} from "../../../../../../../redux/deck/active-deck-copy/types";
import {deleteDeckRequest} from "../../../../../../../redux/deck/delete-deck/actions";

const SectionBody = (props) => {
  const {activeUser, activeDeck, deckEditView, activeDeckEditing, updateDeckDescription, toggleDeckEditView, activeDeckCopy} = props;
  const {authorId, description, deckId} = activeDeck;
  const {editingDeckDescription} = activeDeckEditing;
  const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);
  const decksNotEqual = !_.isEqual(activeDeckCopy, activeDeck.deck);

  const handleInputChange = (e) => {
    let value = e.target.value;
    updateDeckDescription(value);
  };

  const handleTextEditorBBcodeClick = ({editingDeckDescription}) => {
    updateDeckDescription(editingDeckDescription);
  };

  const handleDeckEditingClick = () =>{
    toggleDeckEditView();

    if(deckEditView && deckDescriptionsNotEqual){
      updateDeckDescription("");
    }

    if(deckEditView && decksNotEqual){
      props.updateActiveDeck(activeDeck);
    }
  };

  const handleDeckUpdateClick = () =>{
    const now = +new Date();
    props.updateDeck({
      deckId,
      description: deckDescriptionsNotEqual ? editingDeckDescription : description,
      updated: now,
      deck: activeDeckCopy
    });
  };

  const handleDeckDeletion = () => {
    props.deleteDeck(deckId);
  };

  return (
      <div className="section__body">
        <SectionBodyOptions activeUser={activeUser}
                            authorId={authorId}
                            deckEditView={deckEditView}
                            deckDescriptionsNotEqual={deckDescriptionsNotEqual}
                            decksNotEqual={decksNotEqual}
                            handleDeckUpdateClick={handleDeckUpdateClick}
                            handleDeckEditingClick={handleDeckEditingClick}
                            handleDeckDeletion={handleDeckDeletion}/>
        {
          deckEditView
            ? <TextEditor handleInputChange={handleInputChange}
                          editorId="editingDeckDescription"
                          value={editingDeckDescription || description}
                          handleTagInsertion={handleTextEditorBBcodeClick}/>
            : convertBBCode(description)
        }
      </div>
  )
};

const mapStateToProps = state =>{
  const {activeDeckEditing, tools, activeDeckCopy} = state.deckView;
  const {deckEditView} = tools;
  return {activeDeckEditing, deckEditView, activeDeckCopy};
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeck: payload => dispatch({type: UPDATE_ACTIVE_DECK_COPY, payload}),
    updateDeckDescription: payload => dispatch({
      type: types.UPDATE_DECK_DESCRIPTION, payload
    }),
    toggleDeckEditView: () => dispatch({type: TOGGLE_DECK_EDIT_VIEW}),
    updateDeck: payload => dispatch({type: types.UPDATE_ACTIVE_DECK_REQUEST, payload}),
    deleteDeck: payload => dispatch(deleteDeckRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionBody);
SectionBody.propTypes = {
  description: PropTypes.string.isRequired
};