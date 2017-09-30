import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from "../../../../../../../../components/buttons/delete";
import Button from "../../../../../../../../components/buttons/button";

const DeckCreatorOptions = ({deckEditView, descriptionsNotEqual, decksNotEqual, handleDeckEditingClick}) =>{
  const editingBtnText = deckEditView ? 'Cancel editing' : 'Edit deck';

  const deckUpdated = () =>{
    if(deckEditView && (descriptionsNotEqual || decksNotEqual)){
      return <Button text="Update deck" type="update" callback={null}/>
    }
  };

  return (
      <div>
        <Button text={editingBtnText} handleClick={handleDeckEditingClick}/>
        <DeleteButton element="deck"/>
        {deckUpdated()}
      </div>
  )
};

export default DeckCreatorOptions;

DeckCreatorOptions.propTypes = {
  deckEditView: PropTypes.bool.isRequired,
  decksNotEqual: PropTypes.bool.isRequired,
  handleDeckEditingClick: PropTypes.func.isRequired,
  descriptionsNotEqual: PropTypes.bool,
};