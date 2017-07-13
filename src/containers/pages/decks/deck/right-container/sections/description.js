import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';
import SectionFooter from './description-assets/section-footer';

const DeckDescription = ({activeUser, currentDeck, deckEditing, handleDeckEditingClick, editingDeckDescription, updateDeckDescription}) =>{
  const {title, description, author, authorId} = currentDeck;

  const handleInputChange = (e) => {
    let value = e.target.value;
    updateDeckDescription(value);
  };

  return (
      <div className="container__details--section container__details--description">
        <SectionHeader title={title} />
        <SectionBody description={description}
                     handleInputChange={handleInputChange}
                     editingDeckDescription={editingDeckDescription}
                     deckEditing={deckEditing}/>
        <SectionFooter author={author}
                       authorId={authorId}
                       activeUser={activeUser}
                       handleDeckEditingClick={handleDeckEditingClick}/>
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
    })
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