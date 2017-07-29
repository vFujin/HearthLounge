import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from "../../../../../../../../components/buttons/delete";
import Button from "../../../../../../../../components/buttons/button";

const DeckCreatorOptions = ({deckEditing, descriptionsNotEqual, decksNotEqual, handleDeckEditingClick}) =>{
  const editingBtnText = deckEditing ? 'Cancel editing' : 'Edit deck';

  const deckUpdated = () =>{
    if(deckEditing && (descriptionsNotEqual || decksNotEqual)){
      return <Button text="Update deck" type="update" callback={null}/>
    }
  };

  return (
      <div>
        <Button text={editingBtnText} callback={handleDeckEditingClick}/>
        <DeleteButton element="deck"/>
        {deckUpdated()}
      </div>
  )
};

export default DeckCreatorOptions;

DeckCreatorOptions.propTypes = {
  deckEditing: PropTypes.bool.isRequired,
  decksNotEqual: PropTypes.bool.isRequired,
  handleDeckEditingClick: PropTypes.func.isRequired,
  descriptionsNotEqual: PropTypes.bool,
};