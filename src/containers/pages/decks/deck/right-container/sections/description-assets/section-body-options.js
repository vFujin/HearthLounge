import React from 'react';
import Icon from "../../../../../../../components/icon";

const SectionBodyOptions = ({activeUser, authorId, handleDeckEditingClick}) =>{
  return (
      <div className="section__body--options">
        <div className="section__body--deckGuide">
          <Icon name="text"/>
        </div>
        {
          activeUser && authorId === activeUser.uid
              ? <div className="section__body--authorTools">
                  <Icon handleClick={handleDeckEditingClick} name="edit-deck"/>
                  <Icon name="delete-deck"/>
                  <Icon name="save"/>
              </div>
              : null
        }
      </div>
  )
};

export default SectionBodyOptions;