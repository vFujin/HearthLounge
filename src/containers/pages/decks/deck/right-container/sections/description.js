import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';
import SectionFooter from './description-assets/section-footer';

const DeckDescription = ({currentDeck}) =>{
  const {title, description, author} = currentDeck;
  return (
      <div className="container__details--section container__details--description">
        <SectionHeader title={title} />
        <SectionBody description={description} />
        <SectionFooter author={author} />
      </div>
  )
};

export default DeckDescription;

DeckDescription.propTypes = {
  currentDeck: PropTypes.object
};