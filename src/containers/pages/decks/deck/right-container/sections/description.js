import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';

const DeckDescription = ({activeUser, activeDeck, decksNotEqual, descriptionsNotEqual}) =>{
  const {title} = activeDeck;

  return (
      <div className="container__details--section container__details--description v-rows-2">
        <SectionHeader title={title} />
        <SectionBody activeDeck={activeDeck}
                     activeUser={activeUser}
                     descriptionsNotEqual={descriptionsNotEqual}
                     decksNotEqual={decksNotEqual}/>
      </div>
  )
};

export default DeckDescription;

DeckDescription.propTypes = {
  currentDeck: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    uid: PropTypes.string
  })
};