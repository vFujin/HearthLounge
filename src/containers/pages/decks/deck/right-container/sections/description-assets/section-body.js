import React, {Component} from 'react';
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

class SectionBody extends Component {
  // const {activeUser, activeDeck, deckEditView, activeDeckEditing, updateDeckDescription, toggleDeckEditView, activeDeckCopy} = props;
  // const {authorId, description, deckId} = activeDeck;
  // const {editingDeckDescription} = activeDeckEditing;
  // const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);
  // const decksNotEqual = !_.isEqual(activeDeckCopy, activeDeck.deck);

  handleInputChange = (e) => {
    const {updateDeckDescription} = this.props;
    let value = e.target.value;
    updateDeckDescription(value);
  };

  handleTextEditorBBcodeClick = ({editingDeckDescription}) => {
    const {updateDeckDescription} = this.props;
    updateDeckDescription(editingDeckDescription);
  };

  handleDeckEditingClick = () =>{
    const {toggleDeckEditView, deckEditView, activeDeck, activeDeckCopy, activeDeckEditing, updateDeckDescription, updateActiveDeck} = this.props;
    const {description} = activeDeck;
    const {editingDeckDescription} = activeDeckEditing;
    const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);
    const decksNotEqual = !_.isEqual(activeDeckCopy, activeDeck.deck);

    toggleDeckEditView();

    if(deckEditView && deckDescriptionsNotEqual){
      updateDeckDescription("");
    }

    if(deckEditView && decksNotEqual){
      updateActiveDeck(activeDeck);
    }
  };

  handleDeckUpdateClick = () =>{
    const {activeDeck, activeDeckCopy, activeDeckEditing, updateDeck} = this.props;
    const {description, deckId} = activeDeck;
    const {editingDeckDescription} = activeDeckEditing;
    const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);
    const now = +new Date();

    updateDeck({
      deckId,
      description: deckDescriptionsNotEqual ? editingDeckDescription : description,
      updated: now,
      deck: activeDeckCopy
    });
  };

  handleDeckDeletion = () => {
    const {activeDeck, deleteDeck} = this.props;
    const {deckId} = activeDeck;

    deleteDeck(deckId);
  };
  render() {
    const {activeUser, activeDeck, deckEditView, activeDeckEditing, activeDeckCopy} = this.props;
    const {authorId, description} = activeDeck;
    const {editingDeckDescription} = activeDeckEditing;
    const deckDescriptionsNotEqual = description !== editingDeckDescription && !_.isEmpty(editingDeckDescription);
    const decksNotEqual = !_.isEqual(activeDeckCopy, activeDeck.deck);

    return (
      <div className="section__body">
        <SectionBodyOptions activeUser={activeUser}
                            authorId={authorId}
                            deckEditView={deckEditView}
                            deckDescriptionsNotEqual={deckDescriptionsNotEqual}
                            decksNotEqual={decksNotEqual}
                            handleDeckUpdateClick={this.handleDeckUpdateClick}
                            handleDeckEditingClick={this.handleDeckEditingClick}
                            handleDeckDeletion={this.handleDeckDeletion}/>
        {
          deckEditView
            ? <TextEditor handleInputChange={this.handleInputChange}
                          editorId="editingDeckDescription"
                          value={editingDeckDescription || description}
                          handleTagInsertion={this.handleTextEditorBBcodeClick}/>
            : convertBBCode(description)
        }
      </div>
    )
  }
}

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