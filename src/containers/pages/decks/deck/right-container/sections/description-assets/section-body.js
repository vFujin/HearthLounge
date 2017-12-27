import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';
import TextEditor from '../../../../../../../components/text-editor/text-editor';
import SectionBodyOptions from "./section-body-options";
import {deleteDeckRequest} from "../../../../../../../redux/deck/delete-deck/actions";
import {toggleDeckEditView} from "../../../../../../../redux/deck/tools/actions";
import {
  updateActiveDeckRequest,
  updateDeckDescription
} from "../../../../../../../redux/deck/active-deck-editing/actions";
import {updateActiveDeckCopy} from "../../../../../../../redux/deck/active-deck-copy/actions";

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
  const {activeUser} = state.users;
  return {activeUser, activeDeckEditing, deckEditView, activeDeckCopy};
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeck: payload => dispatch(updateActiveDeckCopy(payload)),
    updateDeckDescription: payload => dispatch(updateDeckDescription(payload)),
    toggleDeckEditView: () => dispatch(toggleDeckEditView()),
    updateDeck: payload => dispatch(updateActiveDeckRequest(payload)),
    deleteDeck: payload => dispatch(deleteDeckRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionBody);