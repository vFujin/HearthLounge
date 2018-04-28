import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';
import Loader from "../../../../../../components/loaders/loader";

const DeckDescription = ({activeDeck, decksNotEqual, descriptionsNotEqual}) =>{

  return (
      <div className="container__details--section container__details--description v-rows-2">
        <SectionHeader />
        {activeDeck.loading
          ? <Loader/>
          : <SectionBody activeDeck={activeDeck}
                         descriptionsNotEqual={descriptionsNotEqual}
                         decksNotEqual={decksNotEqual}/>
        }
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