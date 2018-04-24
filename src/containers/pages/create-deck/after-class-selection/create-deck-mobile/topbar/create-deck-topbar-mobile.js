import React from 'react';
import PropTypes from 'prop-types';
import CreateDeckTopbarTabMobile from "./create-deck-topbar-tab-mobile";

const CreateDeckTopbarMobile = ({handleTabClick}) => {
  return (
    <div className="container__page--topbarMobile">
      <CreateDeckTopbarTabMobile name="deckList" handleTabClick={handleTabClick} />
      <CreateDeckTopbarTabMobile name="cards" handleTabClick={handleTabClick} />
      <CreateDeckTopbarTabMobile name="deckDetails" handleTabClick={handleTabClick} />
    </div>
  )
};

CreateDeckTopbarMobile.propTypes = {
  handleTabClick: PropTypes.func.isRequired
};

export default CreateDeckTopbarMobile;