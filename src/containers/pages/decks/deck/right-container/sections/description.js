import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';
import SectionFooter from './description-assets/section-footer';
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../../../redux/deck/tools/types";

const DeckDescription = ({activeUser, activeDeck, deckEditView, editingDeckDescription, decksNotEqual, descriptionsNotEqual, updateDeckDescription, toggleDeckEditView}) =>{
  const {title, description, author, authorId} = activeDeck;

  const handleInputChange = (e) => {
    let value = e.target.value;
    updateDeckDescription(value);
  };

  const handleDeckEditingClick = () =>{
    toggleDeckEditView();
  };

  return (
      <div className="container__details--section container__details--description v-rows-2">
        <SectionHeader title={title} />
        <SectionBody description={description}
                     handleInputChange={handleInputChange}
                     editingDeckDescription={editingDeckDescription}
                     deckEditView={deckEditView}/>
        {/*<SectionFooter author={author}*/}
                       {/*authorId={authorId}*/}
                       {/*deckAuthor={deckAuthor}*/}
                       {/*deckEditView={deckEditView}*/}
                       {/*activeUser={activeUser}*/}
                       {/*descriptionsNotEqual={descriptionsNotEqual}*/}
                       {/*decksNotEqual={decksNotEqual}*/}
                       {/*handleDeckEditingClick={handleDeckEditingClick}/>*/}
      </div>
  )
};

const mapStateToProps = state =>{
  const {editingDeckDescription} = state.deckView;
  return {editingDeckDescription};
};

const mapDispatchToProps = dispatch => {
  return {
    updateDeckDescription: editingDeckDescription => dispatch({
      type: 'UPDATE_DECK_DESCRIPTION', editingDeckDescription
    }),
    toggleDeckEditView: () => dispatch({type: TOGGLE_DECK_EDIT_VIEW}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDescription);

DeckDescription.propTypes = {
  currentDeck: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    uid: PropTypes.string
  })
};