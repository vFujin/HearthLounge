import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../data/adventure-details';
import AdventureDetails from './details';
import NotFound from '../../../shared-assets/not-found';

const Content = ({cards, details, adventure}) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);

  return detailsPath
      ? <AdventureDetails cards={cards} details={details} adventure={adventure}/>
      : <NotFound page={_.startCase(details)} redirect="expansions"/>

};

export default Content;

Content.propTypes = {
  adventure: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired,
  details: PropTypes.string
};