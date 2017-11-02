import React from 'react';
import DeleteButton from "../../../../../../../components/buttons/delete";
import Button from "../../../../../../../components/buttons/button";

const SectionBodyOptions = ({activeUser, authorId, handleDeckEditingClick, deckEditView, deckDescriptionsNotEqual, decksNotEqual, handleDeckUpdateClick}) =>{
  const editingBtnText = deckEditView ? 'Cancel editing' : 'Edit deck';

  const deckUpdated = () =>{
    if(deckEditView && (deckDescriptionsNotEqual || decksNotEqual)){
      return <Button text="Update deck" type="update" handleClick={handleDeckUpdateClick} darkBorder/>
    }
  };

  return (
      <div className="section__body--options">
        <div className="section__body--deckGuide">
          <Button text="Description" handleClick={null} darkBorder/>
        </div>
        {
          activeUser && authorId === activeUser.uid
              ? <div className="section__body--authorTools">
                  <Button text={editingBtnText} handleClick={handleDeckEditingClick} active={deckEditView} darkBorder/>
                  <DeleteButton element="deck" darkBorder/>
                  {deckUpdated()}
                </div>
              : null
        }
      </div>
  )
};

export default SectionBodyOptions;