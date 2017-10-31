import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';
import TextEditor from '../../../../../../../components/text-editor/text-editor';
import SectionBodyOptions from "./section-body-options";
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../../../../redux/deck/tools/types";

const SectionBody = (props) => {
  const {activeUser, activeDeck, deckEditView, editingDeckDescription, updateDeckDescription, toggleDeckEditView} = props;
  const {authorId, description} = activeDeck;
  const handleInputChange = (e) => {
    let value = e.target.value;
    updateDeckDescription(value);
  };

  const handleDeckEditingClick = () =>{
    toggleDeckEditView();
  };

  return (
      <div className="section__body">
        <SectionBodyOptions activeUser={activeUser}
                            authorId={authorId}
                            handleDeckEditingClick={handleDeckEditingClick}
                            // descriptionsNotEqual={descriptionsNotEqual}
                            // decksNotEqual={decksNotEqual}
        />
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
  const {editingDeckDescription, tools} = state.deckView;
  const {deckEditView} = tools;
  return {editingDeckDescription, deckEditView};
};

const mapDispatchToProps = dispatch => {
  return {
    updateDeckDescription: editingDeckDescription => dispatch({
      type: 'UPDATE_DECK_DESCRIPTION', editingDeckDescription
    }),
    toggleDeckEditView: () => dispatch({type: TOGGLE_DECK_EDIT_VIEW}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionBody);
SectionBody.propTypes = {
  description: PropTypes.string.isRequired
};