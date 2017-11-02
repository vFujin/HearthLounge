import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';
import TextEditor from '../../../../../../../components/text-editor/text-editor';
import SectionBodyOptions from "./section-body-options";
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../../../../redux/deck/tools/types";
import * as types from "../../../../../../../redux/deck/active-deck-editing/types";

const SectionBody = (props) => {
  const {activeUser, activeDeck, deckEditView, activeDeckEditing, updateDeckDescription, toggleDeckEditView, decksNotEqual} = props;
  const {authorId, description, deckId} = activeDeck;
  const {editingDeckDescription} = activeDeckEditing;
  const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);

  const handleInputChange = (e) => {
    let value = e.target.value;
    updateDeckDescription(value);
  };

  const handleDeckEditingClick = () =>{
    toggleDeckEditView();

    if(deckEditView && deckDescriptionsNotEqual){
      updateDeckDescription("");
    }
  };

  const handleDeckUpdateClick = () =>{
    const dateNow = +new Date();
    props.updateDeck({deckId, description: editingDeckDescription, updated: dateNow});
  };

  return (
      <div className="section__body">
        <SectionBodyOptions activeUser={activeUser}
                            authorId={authorId}
                            deckEditView={deckEditView}
                            deckDescriptionsNotEqual={deckDescriptionsNotEqual}
                            decksNotEqual={decksNotEqual}
                            handleDeckUpdateClick={handleDeckUpdateClick}
                            handleDeckEditingClick={handleDeckEditingClick}/>
        {
          deckEditView
            ? <TextEditor handleInputChange={handleInputChange}
                          editorId="deck-description"
                          value={editingDeckDescription || description}
                          handleTagInsertion={null}/>
            : convertBBCode(description)
        }
      </div>
  )
};

const mapStateToProps = state =>{
  const {activeDeckEditing, tools} = state.deckView;
  const {deckEditView} = tools;
  return {activeDeckEditing, deckEditView};
};

const mapDispatchToProps = dispatch => {
  return {
    updateDeckDescription: payload => dispatch({
      type: types.UPDATE_DECK_DESCRIPTION, payload
    }),
    toggleDeckEditView: () => dispatch({type: TOGGLE_DECK_EDIT_VIEW}),
    updateDeck: payload => dispatch({type: types.UPDATE_ACTIVE_DECK_REQUEST, payload})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionBody);
SectionBody.propTypes = {
  description: PropTypes.string.isRequired
};