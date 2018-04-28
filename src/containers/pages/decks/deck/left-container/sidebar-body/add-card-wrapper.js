import React from 'react';
import PropTypes from 'prop-types';
import CardDecklistSearch from "../../../../../../components/cards/assets/card-decklist-search";

const AddCardWrapper = ({activeDeckCopy}) => {
  return (
    <div className="addCard-wrapper">
      <CardDecklistSearch deck={activeDeckCopy}/>
      <span>+</span>
    </div>
  )
};

AddCardWrapper.propTypes = {
  activeDeckCopy: PropTypes.object
};

AddCardWrapper.defaultProps = {
  activeDeckCopy: {}
};

export default AddCardWrapper;